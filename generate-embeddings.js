// generate-embeddings.js
const { createClient } = require('@supabase/supabase-js'); // <-- This is the only line that has changed

// Your Supabase URL and Key have been added here
const SUPABASE_URL = 'https://hrtzhohxayjjjbutttga.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhydHpob2h4YXlqampidXR0dGdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1OTk3OTQsImV4cCI6MjA2NTE3NTc5NH0.Dm9IPgwBQ-NqW-AnrnmV9gA_BQRjynPFgMkgkJNXefQ';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function processDocuments() {
  console.log('Fetching documents with missing embeddings...');
  
  // Get all documents where the embedding is NULL
  const { data: documents, error } = await supabase
    .from('documents')
    .select('id')
    .is('embedding', null);

  if (error) {
    console.error('Error fetching documents:', error);
    return;
  }

  if (!documents || documents.length === 0) {
    console.log('No documents to process. All embeddings are already generated.');
    return;
  }

  console.log(`Found ${documents.length} documents to process.`);

  // Loop through each document and call the vectorize function
  for (const doc of documents) {
    console.log(`Invoking 'vectorize-document' for document ID: ${doc.id}...`);
    const { data, error: invokeError } = await supabase.functions.invoke(
      'vectorize-document',
      { body: { document_id: doc.id } }
    );

    if (invokeError) {
      console.error(`Failed to process document ${doc.id}:`, invokeError.message);
    } else {
      console.log(`Successfully triggered vectorization for document ${doc.id}.`);
    }
  }

  console.log('All documents processed.');
}

processDocuments();