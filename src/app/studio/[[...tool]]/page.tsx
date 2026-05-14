'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

// The Sanity Studio is embedded at /studio
// Access: https://yourdomain.com/studio
// Protect this route with auth in production (Vercel password protection or middleware)
export default function StudioPage() {
  return <NextStudio config={config} />
}
