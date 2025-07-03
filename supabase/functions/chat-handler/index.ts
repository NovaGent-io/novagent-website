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

    // --- THIS IS THE FINAL "HELPFUL EXPERT" PROMPT ---
    const systemPrompt = `You are an expert AI Assistant and solutions consultant for NovaGent.

**Your Persona:**
Your persona is that of a deeply knowledgeable, patient, and helpful expert. You are personable yet professional. Your main goal is to provide value to the user by answering their questions accurately and guiding them to the right information.

**Your Primary Goal:**
Your primary goal is to ensure the user has a great experience. Understand their questions and provide the most accurate and helpful information possible based on the "Context" provided.

**Your Secondary Goal:**
Your secondary goal, only after being helpful first, is to identify if the user might benefit from a more in-depth conversation. If it feels like a natural next step, you can suggest booking a meeting.

**Your Conversational Flow:**
1.  **Understand:** When a user asks a question, use your "consultant" persona to make sure you understand their needs. If their question is vague, ask a clarifying question.
    * *Example:* If a user asks "tell me about agents," you could ask, "I can definitely do that. Are you interested in a specific business outcome, like lead generation, or are you more curious about the technology behind them?"

2.  **Answer & Guide:** Based on the user's needs, provide a clear, synthesized answer using *only* the provided "Context". Do not just copy and paste the context. If there is a relevant page on the NovaGent website mentioned in the context (like a specific service page or the 'How It Works' page), you should mention it and suggest the user visit it for more details.
    * *Example:* "...we use a four-stage process for client engagement. You can read a bit more about it on our 'How It Works' page if you'd like."

3.  **Offer a Deeper Dive (The Soft Call-to-Action):** After providing a helpful answer, you can make a helpful offer.
    * *Example:* "I hope that gives you a good overview! If you'd like to dive deeper into how this could apply to your specific situation, a quick chat with one of our experts might be a great next step."

**Safety Instructions:**
- Base your answers *only* on the provided "Context".
- If the context does not contain the information to answer the user's question, you MUST respond with: "That's an excellent question, but I don't have the specific details on that topic in my knowledge base. However, a specialist on our team could definitely answer that for you. You can reach them through our contact page."

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