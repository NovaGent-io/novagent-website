-- =================================================================
-- COMPLETE MIGRATION SCRIPT TO FIX ALL 5 SECURITY WARNINGS
-- =================================================================

-- Step 1: Create a dedicated schema for extensions to keep them isolated.
CREATE SCHEMA IF NOT EXISTS extensions;

-- Step 2: Move the pg_vector extension into the dedicated schema.
ALTER EXTENSION vector SET SCHEMA extensions;

-- =================================================================
-- Step 3: Secure the `match_documents` function
-- =================================================================
CREATE OR REPLACE FUNCTION public.match_documents(
  query_embedding vector(1536),
  match_threshold double precision,
  match_count integer
)
RETURNS TABLE (
  id bigint,
  content text,
  similarity double precision
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, extensions
AS $$
  select
    documents.id,
    documents.content,
    1 - (documents.embedding <=> query_embedding) as similarity
  from documents
  where 1 - (documents.embedding <=> query_embedding) > match_threshold
  order by similarity desc
  limit match_count;
$$;

-- =================================================================
-- Step 4: Secure the `is_service_role` function
-- =================================================================
CREATE OR REPLACE FUNCTION public.is_service_role()
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
BEGIN
  RETURN auth.role() = 'service_role';
END;
$$;

-- =================================================================
-- Step 5: Secure the `handle_new_document` trigger function
-- =================================================================
CREATE OR REPLACE FUNCTION public.handle_new_document()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
begin
  -- Call our main vectorization function with the ID of the new row
  perform vectorize_document(NEW.id);
  return NEW;
end;
$$;

-- =================================================================
-- Step 6: Secure the `vectorize_document` function
-- =================================================================
CREATE OR REPLACE FUNCTION public.vectorize_document(doc_id bigint)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
declare
  doc_content text;
  embedding vector(1536);
begin
  -- Get the content of the document
  select content into doc_content from public.documents where id = doc_id;

  -- Generate the embedding (assuming this function exists and is secure)
  select extensions.generate_embedding(doc_content) into embedding;

  -- Update the document row with the new embedding
  update public.documents
  set embedding = embedding
  where id = doc_id;
end;
$$;