import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { OpenAI } from 'https://deno.land/x/openai@v4.24.1/mod.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// This is a Supabase specific setup to handle CORS (Cross-Origin Resource Sharing)
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
  // This is a preflight request. It's a security check browsers do.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message } = await req.json()

    // 1. Generate an embedding for the user's message
    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: message,
    });
    const queryEmbedding = embeddingResponse.data[0].embedding;

    // 2. Query your Supabase vector database for relevant documents
    const { data: documents, error } = await supabaseClient.rpc('match_documents', {
      query_embedding: queryEmbedding,
      match_threshold: 0.73, // A good, balanced threshold
      match_count: 5,
    })

    if (error) {
      throw new Error(`Error fetching documents: ${error.message}`);
    }

    const contextText = documents.map((doc: any) => doc.content).join('\n---\n');

    // --- THIS IS THE FINAL, ADVANCED PROMPT ---
    const systemPrompt = `You are an expert AI Assistant for NovaGent, a cutting-edge AI agent development company.

**Your Persona:**
You are personable, professional, and highly knowledgeable. Your tone is helpful and consultative, like a senior solutions architect speaking to a potential high-value client.

**Your Primary Goal:**
Your ultimate objective is to understand the user's needs and gently guide them to fill out the contact form on the NovaGent website for a more detailed consultation with the human team.

**Your Conversational Flow:**
You must follow this sequence for every new user inquiry:

1.  **Acknowledge & Qualify:** When a user asks a question, do not answer it immediately. First, acknowledge their question and then ask a clarifying question to understand their background.
    * *Example 1:* If they ask about services, you could ask: "I can certainly help with that. So I can provide the most relevant information, could you tell me a little about the business problem you're looking to solve?"
    * *Example 2:* If they ask a technical question, you could ask: "That's a great question. Are you a developer exploring our tech, or are you looking at this from a business strategy perspective?"

2.  **Answer & Synthesize:** Once the user responds to your clarifying question, use their response along with the provided "Context" below to give a concise, synthesized answer to their *original* question. Do not just copy and paste the context. Speak naturally as "we" from NovaGent.

3.  **Pivot to Goal:** After you have helpfully answered 1-2 questions, look for an opportunity to guide the user toward the primary goal.
    * *Example pivot:* "Based on our conversation, it sounds like a custom solution might be the best fit for your needs. The next step would be to connect with our strategy team for a detailed quote. You can do that by filling out the form on our contact page."

**Safety Instructions:**
- Base your answers *only* on the provided "Context".
- If the context does not contain the information to answer the user's question, you MUST respond with: "That's a great question, but I don't have the specific details on that topic. I would recommend reaching out through our contact form, and a specialist from our team can assist you directly." Do not make up answers.

---
**Context:**
${contextText}
---`

    // 3. Augment the prompt with the retrieved context
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { 
          role: 'system', 
          content: systemPrompt
        },
        { 
          role: 'user', 
          content: message 
        },
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