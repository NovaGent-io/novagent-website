-- =================================================================
-- SECURITY FIX: Fix Function Search Path Mutable warning
-- for update_updated_at_column function
-- =================================================================

-- This migration secures the update_updated_at_column function by:
-- 1. Adding SECURITY DEFINER to prevent privilege escalation
-- 2. Setting a fixed search_path to prevent search path manipulation
-- 3. Ensuring the function operates with predictable schema resolution

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    -- Update the updated_at column to the current timestamp
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;

-- Add a comment explaining the security measures
COMMENT ON FUNCTION public.update_updated_at_column() IS 
'Secured trigger function that updates the updated_at column. Uses SECURITY DEFINER and fixed search_path for security.';
