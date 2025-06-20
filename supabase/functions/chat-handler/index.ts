import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { OpenAI } from 'https://deno.land/x/openai@v4.24.1/mod.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// CORS headers for handling browser requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Initialize the OpenAI client with your secret API key
const openai = new OpenAI({
  apiKey: Deno.env.get('OPENAI_API_KEY'),
})

// Initialize the Supabase client
const supabaseClient = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_ANON_KEY') ?? ''
)

serve(async (req) => {
  // Handle preflight CORS requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message } = await req.json()

    // 1. RETRIEVE: Generate an embedding for the user's message
    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: message,
    });
    const queryEmbedding = embeddingResponse.data[0].embedding;

    // Query your Supabase vector database for the most relevant documents
    const { data: documents, error } = await supabaseClient.rpc('match_documents', {
      query_embedding: queryEmbedding,
      match_threshold: 0.75, // Adjust this threshold for relevance (0.7 to 0.8 is a good range)
      match_count: 5,       // Get the top 5 most relevant documents
    })

    if (error) {
      throw new Error(`Error fetching documents: ${error.message}`);
    }

    // Combine the content of the retrieved documents into a single string
    const contextText = documents.map((doc: any) => doc.content).join('\n---\n');

    // 2. AUGMENT: Create the system prompt with the retrieved context
    const systemPrompt = `You are a helpful and friendly assistant for NovaGent. Use the following context to answer the user's question. If the context doesn't have the answer, say you don't have that information.\n\nContext:\n${contextText}`;

    // 3. GENERATE: Send the augmented prompt to OpenAI to get a response
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      temperature: 0.7,
    })

    const aiResponse = completion.choices[0].message.content

    // Return the AI's response
    return new Response(JSON.stringify({ reply: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
