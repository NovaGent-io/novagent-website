-- =================================================================
-- PERFORMANCE FIX: Optimize Auth RLS Initialization Plan
-- Fixes 5 warnings related to unnecessary re-evaluation of auth functions
-- =================================================================

-- This migration optimizes RLS policies by:
-- 1. Using subqueries to evaluate auth functions once per query instead of per row
-- 2. Replacing direct auth function calls with cached results
-- 3. Improving query performance at scale

-- =================================================================
-- Fix for public.clients table RLS policies
-- =================================================================

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view own client profile" ON public.clients;
DROP POLICY IF EXISTS "Users can update own client profile" ON public.clients;
DROP POLICY IF EXISTS "Users can insert own client profile" ON public.clients;
DROP POLICY IF EXISTS "Users can delete own client profile" ON public.clients;

-- Create optimized policies for clients table
CREATE POLICY "Users can view own client profile" ON public.clients
    FOR SELECT USING (user_id = (SELECT auth.uid()));

CREATE POLICY "Users can update own client profile" ON public.clients
    FOR UPDATE USING (user_id = (SELECT auth.uid()));

CREATE POLICY "Users can insert own client profile" ON public.clients
    FOR INSERT WITH CHECK (user_id = (SELECT auth.uid()));

CREATE POLICY "Users can delete own client profile" ON public.clients
    FOR DELETE USING (user_id = (SELECT auth.uid()));

-- =================================================================
-- Fix for public.client_subscriptions table RLS policies
-- =================================================================

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view own subscriptions" ON public.client_subscriptions;
DROP POLICY IF EXISTS "Users can update own subscriptions" ON public.client_subscriptions;
DROP POLICY IF EXISTS "Users can insert own subscriptions" ON public.client_subscriptions;
DROP POLICY IF EXISTS "Users can delete own subscriptions" ON public.client_subscriptions;

-- Create optimized policies for client_subscriptions table
-- Assuming this table links to clients via client_id
CREATE POLICY "Users can view own subscriptions" ON public.client_subscriptions
    FOR SELECT USING (
        client_id IN (
            SELECT id FROM public.clients WHERE user_id = (SELECT auth.uid())
        )
    );

CREATE POLICY "Users can update own subscriptions" ON public.client_subscriptions
    FOR UPDATE USING (
        client_id IN (
            SELECT id FROM public.clients WHERE user_id = (SELECT auth.uid())
        )
    );

CREATE POLICY "Users can insert own subscriptions" ON public.client_subscriptions
    FOR INSERT WITH CHECK (
        client_id IN (
            SELECT id FROM public.clients WHERE user_id = (SELECT auth.uid())
        )
    );

CREATE POLICY "Users can delete own subscriptions" ON public.client_subscriptions
    FOR DELETE USING (
        client_id IN (
            SELECT id FROM public.clients WHERE user_id = (SELECT auth.uid())
        )
    );

-- =================================================================
-- Fix for public.sourced_leads table RLS policies
-- =================================================================

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view own sourced leads" ON public.sourced_leads;
DROP POLICY IF EXISTS "Users can update own sourced leads" ON public.sourced_leads;
DROP POLICY IF EXISTS "Users can insert own sourced leads" ON public.sourced_leads;
DROP POLICY IF EXISTS "Users can delete own sourced leads" ON public.sourced_leads;

-- Create optimized policies for sourced_leads table
-- Assuming this table links to clients via client_id
CREATE POLICY "Users can view own sourced leads" ON public.sourced_leads
    FOR SELECT USING (
        client_id IN (
            SELECT id FROM public.clients WHERE user_id = (SELECT auth.uid())
        )
    );

CREATE POLICY "Users can update own sourced leads" ON public.sourced_leads
    FOR UPDATE USING (
        client_id IN (
            SELECT id FROM public.clients WHERE user_id = (SELECT auth.uid())
        )
    );

CREATE POLICY "Users can insert own sourced leads" ON public.sourced_leads
    FOR INSERT WITH CHECK (
        client_id IN (
            SELECT id FROM public.clients WHERE user_id = (SELECT auth.uid())
        )
    );

CREATE POLICY "Users can delete own sourced leads" ON public.sourced_leads
    FOR DELETE USING (
        client_id IN (
            SELECT id FROM public.clients WHERE user_id = (SELECT auth.uid())
        )
    );

-- =================================================================
-- Alternative optimization: Create a security function for better performance
-- =================================================================

-- Create a function that caches the current user ID
CREATE OR REPLACE FUNCTION public.current_user_id()
RETURNS uuid
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
    SELECT auth.uid();
$$;

-- Comment explaining the optimization
COMMENT ON FUNCTION public.current_user_id() IS 
'Cached function for auth.uid() to improve RLS policy performance by reducing function re-evaluation.';

-- =================================================================
-- Performance notes:
-- =================================================================
-- The key optimizations made:
-- 1. Wrapped auth.uid() in SELECT subqueries to prevent re-evaluation per row
-- 2. Used EXISTS or IN clauses for related table access
-- 3. Created a stable function wrapper for auth.uid() as an alternative approach
-- 4. All policies now evaluate auth functions once per query, not per row
