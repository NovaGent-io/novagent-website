import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { OpenAI } from 'https://deno.land/x/openai@v4.24.1/mod.ts'

// Initialize the OpenAI client with your secret API key
const openai = new OpenAI({
  apiKey: Deno.env.get('OPENAI_API_KEY'),
})

serve(async (req) => {
  try {
    const { id } = await req.json(); // Get the ID of the new document

    // Create a Supabase admin client to safely perform database operations
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // 1. Get the content of the new document from the database
    const { data: document, error: fetchError } = await supabaseAdmin
      .from('documents')
      .select('content')
      .eq('id', id)
      .single();

    if (fetchError) throw fetchError;

    // 2. Generate the embedding using OpenAI
    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: document.content,
    });
    const newEmbedding = embeddingResponse.data[0].embedding;

    // 3. Update the document row with the new embedding
    await supabaseAdmin
      .from('documents')
      .update({ embedding: newEmbedding })
      .eq('id', id);

    return new Response('ok');

  } catch (error) {
    console.error(error);
    return new Response(String(error?.message ?? error), { status: 500 });
  }
});