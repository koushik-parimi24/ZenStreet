import { NextResponse } from 'next/server'

// Simulated database of collaborative changes
let collaborativeChanges = {
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
}

export async function GET() {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Randomly update one field to simulate real-time changes
  const sections = ['personalInfo', 'addressDetails', 'preferences']
  const randomSection = sections[Math.floor(Math.random() * sections.length)]
  const fields = Object.keys(collaborativeChanges[randomSection])
  const randomField = fields[Math.floor(Math.random() * fields.length)]

  if (typeof collaborativeChanges[randomSection][randomField] === 'string') {
    collaborativeChanges[randomSection][randomField] += ' (updated)'
  } else if (typeof collaborativeChanges[randomSection][randomField] === 'boolean') {
    collaborativeChanges[randomSection][randomField] = !collaborativeChanges[randomSection][randomField]
  }

  return NextResponse.json(collaborativeChanges)
}

