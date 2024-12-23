import { NextResponse } from 'next/server'

export async function GET() {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Return mock data
  return NextResponse.json({
    personalInfo: {
      name: 'John Doe',
      email: 'john@example.com',
    },
    addressDetails: {
      street: '123 Main St',
      city: 'Anytown',
      zipCode: '12345',
    },
    preferences: {
      newsletter: true,
      terms: true,
    },
  })
}

