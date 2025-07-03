// supabase/functions/vectorize-document/index.ts

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { OpenAI } from 'https://esm.sh/openai@4.17.0'

Deno.serve(async (req) => {
  try {
    console.log("--- New invocation received ---");
    const requestBody = await req.json();
    console.log("Received request body:", requestBody);

    const { document_id } = requestBody;
    console.log(`Extracted document_id: ${document_id}, Type: ${typeof document_id}`);

    if (!document_id || typeof document_id !== 'number') {
      throw new Error('Valid document_id (number) not found in request body.');
    }

    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    if (!OPENAI_API_KEY) {
      throw new Error('Missing environment variable OPENAI_API_KEY');
    }

    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { data: document, error: selectError } = await supabaseAdmin
      .from('documents')
      .select('content')
      .eq('id', document_id)
      .single();

    if (selectError) {
      console.error(`Error fetching document ${document_id}:`, selectError);
      throw selectError;
    }

    const textContent = document.content;
    console.log(`Successfully fetched content for document ${document_id}.`);

    const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: textContent,
    });

    const embedding = embeddingResponse.data[0].embedding;

    const { error: updateError } = await supabaseAdmin
      .from('documents')
      .update({ embedding })
      .eq('id', document_id);

    if (updateError) {
      console.error(`Error updating document ${document_id}:`, updateError);
      throw updateError;
    }

    console.log(`Successfully created and saved embedding for document ${document_id}`);

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('An error occurred in the Edge Function:', e);
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
})