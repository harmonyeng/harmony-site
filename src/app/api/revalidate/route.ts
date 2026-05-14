import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

// Sanity webhook calls this endpoint whenever content is published.
// Set this URL in your Sanity project under Settings → API → Webhooks.
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret.' }, { status: 401 })
  }

  // Revalidate the home page and SOP archive on any content change
  revalidatePath('/')
  revalidatePath('/sops')
  revalidatePath('/boutique')

  return NextResponse.json({ revalidated: true, at: new Date().toISOString() })
}
