import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { OpenAI } from 'https://deno.land/x/openai@v4.24.1/mod.ts'

// This is a Supabase specific setup to handle CORS (Cross-Origin Resource Sharing)
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Initialize the OpenAI client with your secret API key from the environment
const openai = new OpenAI({
  apiKey: Deno.env.get('OPENAI_API_KEY'),
})

serve(async (req) => {
  // Handle preflight requests for CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Extract the user's message from the request body
    const { message } = await req.json()

    // Make the API call to OpenAI's powerful and cost-effective chat model
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful and friendly assistant for NovaGent, a company that builds AI agents for businesses.' },
        { role: 'user', content: message },
      ],
      temperature: 0.7, // Adds a touch of creativity
    })

    const aiResponse = completion.choices[0].message.content

    // Return the AI's response successfully
    return new Response(JSON.stringify({ reply: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    // Handle any errors from the OpenAI API
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})