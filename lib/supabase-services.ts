import { supabase, supabaseAdmin, Customer, AgentConfiguration, AgentUsage } from './supabase'

// Customer Management Functions
export const customerService = {
  // Get all customers
  async getAllCustomers(): Promise<Customer[]> {
    const { data, error } = await supabaseAdmin
      .from('customers')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  // Get customer by ID
  async getCustomer(id: string): Promise<Customer | null> {
    const { data, error } = await supabaseAdmin
      .from('customers')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  },

  // Create new customer
  async createCustomer(customer: Omit<Customer, 'id' | 'created_at' | 'updated_at'>): Promise<Customer> {
    const { data, error } = await supabaseAdmin
      .from('customers')
      .insert(customer)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // Update customer
  async updateCustomer(id: string, updates: Partial<Customer>): Promise<Customer> {
    const { data, error } = await supabaseAdmin
      .from('customers')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  }
}

// Agent Configuration Functions
export const agentService = {
  // Get all agent configurations for a customer
  async getCustomerAgents(customerId: string): Promise<AgentConfiguration[]> {
    const { data, error } = await supabaseAdmin
      .from('agent_configurations')
      .select('*')
      .eq('customer_id', customerId)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  // Create new agent configuration
  async createAgentConfig(config: Omit<AgentConfiguration, 'id' | 'created_at' | 'updated_at'>): Promise<AgentConfiguration> {
    const { data, error } = await supabaseAdmin
      .from('agent_configurations')
      .insert(config)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // Update agent configuration
  async updateAgentConfig(id: string, updates: Partial<AgentConfiguration>): Promise<AgentConfiguration> {
    const { data, error } = await supabaseAdmin
      .from('agent_configurations')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  }
}

// Analytics and Usage Functions
export const analyticsService = {
  // Get usage statistics for a customer
  async getCustomerUsage(customerId: string, billingPeriod?: string): Promise<AgentUsage[]> {
    let query = supabaseAdmin
      .from('agent_usage')
      .select('*')
      .eq('customer_id', customerId)
    
    if (billingPeriod) {
      query = query.eq('billing_period', billingPeriod)
    }
    
    const { data, error } = await query.order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  // Record agent usage event
  async recordUsage(usage: Omit<AgentUsage, 'id' | 'created_at'>): Promise<AgentUsage> {
    const { data, error } = await supabaseAdmin
      .from('agent_usage')
      .insert(usage)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // Get overall platform statistics
  async getPlatformStats() {
    const [customerCount, agentCount, totalUsage] = await Promise.all([
      supabaseAdmin.from('customers').select('id', { count: 'exact', head: true }),
      supabaseAdmin.from('agent_configurations').select('id', { count: 'exact', head: true }),
      supabaseAdmin.from('agent_usage').select('event_count').then(({ data }) => 
        data?.reduce((sum, record) => sum + record.event_count, 0) || 0
      )
    ])

    return {
      totalCustomers: customerCount.count || 0,
      totalAgents: agentCount.count || 0,
      totalEvents: totalUsage
    }
  }
}

// Authentication helpers
export const authService = {
  // Get current user session
  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  },

  // Sign in with email/password
  async signIn(email: string, password: string) {
    return await supabase.auth.signInWithPassword({ email, password })
  },

  // Sign up new user
  async signUp(email: string, password: string) {
    return await supabase.auth.signUp({ email, password })
  },

  // Sign out
  async signOut() {
    return await supabase.auth.signOut()
  }
}
