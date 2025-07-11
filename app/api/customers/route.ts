import { NextRequest, NextResponse } from 'next/server'
import { customerService } from '@/lib/supabase-services'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET() {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Database service not configured' },
        { status: 503 }
      )
    }
    const customers = await customerService.getAllCustomers()
    return NextResponse.json({ customers })
  } catch (error) {
    console.error('Error fetching customers:', error)
    return NextResponse.json(
      { error: 'Failed to fetch customers' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Database service not configured' },
        { status: 503 }
      )
    }
    const body = await request.json()
    const customer = await customerService.createCustomer(body)
    return NextResponse.json({ customer }, { status: 201 })
  } catch (error) {
    console.error('Error creating customer:', error)
    return NextResponse.json(
      { error: 'Failed to create customer' },
      { status: 500 }
    )
  }
}
