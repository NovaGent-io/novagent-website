-- =================================================================
-- FIX: Clean up duplicate RLS policies on sourced_leads table
-- =================================================================

-- First, disable RLS temporarily to avoid conflicts
ALTER TABLE public.sourced_leads DISABLE ROW LEVEL SECURITY;

-- Drop ALL existing policies on sourced_leads table
DO $$
DECLARE
    policy_record RECORD;
BEGIN
    FOR policy_record IN 
        SELECT schemaname, tablename, policyname 
        FROM pg_policies 
        WHERE schemaname = 'public' AND tablename = 'sourced_leads'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON %I.%I', 
                      policy_record.policyname, 
                      policy_record.schemaname, 
                      policy_record.tablename);
    END LOOP;
END $$;

-- Re-enable RLS
ALTER TABLE public.sourced_leads ENABLE ROW LEVEL SECURITY;

-- Create clean, optimized policies for sourced_leads table
-- Note: Adjusting based on actual table structure - may need user_id directly

-- Option 1: If sourced_leads has user_id column directly
CREATE POLICY "sourced_leads_select_policy" ON public.sourced_leads
    FOR SELECT USING (user_id = (SELECT auth.uid()));

CREATE POLICY "sourced_leads_insert_policy" ON public.sourced_leads
    FOR INSERT WITH CHECK (user_id = (SELECT auth.uid()));

CREATE POLICY "sourced_leads_update_policy" ON public.sourced_leads
    FOR UPDATE USING (user_id = (SELECT auth.uid()));

CREATE POLICY "sourced_leads_delete_policy" ON public.sourced_leads
    FOR DELETE USING (user_id = (SELECT auth.uid()));

-- Option 2: If sourced_leads links via client_id (uncomment if needed)
-- CREATE POLICY "sourced_leads_select_policy" ON public.sourced_leads
--     FOR SELECT USING (
--         client_id IN (
--             SELECT id FROM public.clients WHERE user_id = (SELECT auth.uid())
--         )
--     );

-- CREATE POLICY "sourced_leads_insert_policy" ON public.sourced_leads
--     FOR INSERT WITH CHECK (
--         client_id IN (
--             SELECT id FROM public.clients WHERE user_id = (SELECT auth.uid())
--         )
--     );

-- CREATE POLICY "sourced_leads_update_policy" ON public.sourced_leads
--     FOR UPDATE USING (
--         client_id IN (
--             SELECT id FROM public.clients WHERE user_id = (SELECT auth.uid())
--         )
--     );

-- CREATE POLICY "sourced_leads_delete_policy" ON public.sourced_leads
--     FOR DELETE USING (
--         client_id IN (
--             SELECT id FROM public.clients WHERE user_id = (SELECT auth.uid())
--         )
--     );

-- Add comment
COMMENT ON TABLE public.sourced_leads IS 'Cleaned up RLS policies - one policy per operation type to avoid Multiple Permissive Policies warning';
