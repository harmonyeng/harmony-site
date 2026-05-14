import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'
import { createClient } from '@sanity/client'

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  token:     process.env.SANITY_API_TOKEN,
  useCdn:    false,
})

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Authentication required.' }, { status: 401 })
  }

  const body = await req.json()
  const questionText: string = body?.body?.trim()

  if (!questionText || questionText.length < 10) {
    return NextResponse.json({ error: 'Question is too short.' }, { status: 400 })
  }

  if (questionText.length > 1000) {
    return NextResponse.json({ error: 'Question is too long (max 1000 characters).' }, { status: 400 })
  }

  try {
    await writeClient.create({
      _type: 'question',
      authorName:  session.user.name ?? 'Community Member',
      authorEmail: session.user.email,
      body:        questionText,
      status:      'pending',
      createdAt:   new Date().toISOString(),
    })

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('Failed to write question to Sanity:', err)
    return NextResponse.json({ error: 'Failed to submit question.' }, { status: 500 })
  }
}
