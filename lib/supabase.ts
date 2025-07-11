import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Client-side Supabase client (for frontend operations)
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as any

// Admin Supabase client (for server-side operations with full access)
export const supabaseAdmin = supabaseUrl && supabaseServiceRoleKey
  ? createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : null as any

// Database type definitions (you can expand these based on your schema)
export interface Customer {
  id: string
  email: string
  company_name?: string
  created_at: string
  updated_at: string
}

export interface AgentConfiguration {
  id: string
  customer_id: string
  agent_type: string
  configuration: Record<string, any>
  status: 'active' | 'inactive' | 'pending'
  created_at: string
  updated_at: string
}

export interface AgentUsage {
  id: string
  customer_id: string
  agent_id: string
  event_type: string
  event_count: number
  billing_period: string
  created_at: string
}
