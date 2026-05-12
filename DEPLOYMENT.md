# Harmony Engineering — Deployment Guide
## For the Deployment Expert

This document covers everything needed to take the codebase from this folder to a live production site.

---

## Tech Stack
- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS (custom Steel Silk design tokens)
- **CMS**: Sanity v3 (hosted, no-code Studio at `/studio`)
- **Auth**: NextAuth.js v4 (credentials-based)
- **Deployment**: Vercel (recommended)

---

## Step 1 — Sanity Project Setup

1. Go to [sanity.io](https://sanity.io) and create a free account
2. Create a new project: name it `harmony-engineering`, dataset: `production`
3. Note your **Project ID** (visible in the URL or project settings)
4. Go to **Settings → API → Tokens** → create a token with **Editor** role
5. Go to **Settings → API → CORS Origins** → add:
   - `http://localhost:3000` (development)
   - `https://yourdomain.com` (production)

---

## Step 2 — Environment Variables

Copy `.env.local.template` to `.env.local` and fill in:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=     # From step 1
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=                  # Editor token from step 1
SANITY_REVALIDATE_SECRET=          # Run: openssl rand -hex 32
NEXTAUTH_SECRET=                   # Run: openssl rand -base64 32
NEXTAUTH_URL=https://yourdomain.com
ADMIN_EMAIL=                       # The business email from CEO
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Step 3 — Install & Run Locally

```bash
npm install
npm run dev
# Open http://localhost:3000
```

The Sanity Studio will be accessible at: `http://localhost:3000/studio`

---

## Step 4 — Authentication (IMPORTANT)

The current `authorize` function in `src/app/api/auth/[...nextauth]/route.ts` is a **development stub** that accepts any credentials.

Before going live, replace it with real user persistence. Options:
- **Simplest**: Use Sanity itself — store hashed passwords in a `user` document type
- **Recommended**: Add a `users` table in a Postgres DB via Vercel Postgres + bcrypt

Password policy is already enforced on the frontend:
> Minimum 8 characters · must include letters, numbers & one special character (!@#$…)

The admin role is triggered when the login email matches `process.env.ADMIN_EMAIL`.

---

## Step 5 — Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect via Vercel dashboard → Import Git Repository.

Add all environment variables from Step 2 to Vercel's Environment Variables panel.

---

## Step 6 — Sanity Webhook (Content Revalidation)

So the live site updates automatically when you publish in Sanity:

1. In Sanity Manage → **API → Webhooks** → Add webhook:
   - URL: `https://yourdomain.com/api/revalidate?secret=YOUR_REVALIDATE_SECRET`
   - Trigger on: Create, Update, Delete
   - Dataset: `production`

---

## Step 7 — DNS & Domain

Point your domain's A record or CNAME to Vercel per [Vercel docs](https://vercel.com/docs/custom-domains).

---

## Content Management (for the CEO)

Once deployed, Lital manages all content at:
**`https://yourdomain.com/studio`**

### What she can manage without touching code:
| Section | Sanity Document Type | Notes |
|---|---|---|
| SOPs (Articles) | `sop` | Rich text, publish date, category |
| Products (Boutique) | `product` | Image, snippet, Amazon link, featured toggle |
| Ops Center questions | `question` | Read incoming questions, write answers |
| The Story bio | `siteSettings` | storyBody field |
| Splash headline | `siteSettings` | siteTagline field |
| Brave Man page | `siteSettings` | braveManContent field |

### To feature a product on the homepage:
Open the product in Sanity Studio → toggle **"Show on Homepage"** to ON.

### To highlight a reply as Chief Engineer:
Answer goes in the `answer` field of the `question` document.
It automatically renders with a **★** star in the Ops Center.

---

## Folder Structure

```
harmony-engineering/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage (server component)
│   │   ├── layout.tsx            # Root layout
│   │   ├── sops/
│   │   │   ├── page.tsx          # SOP archive
│   │   │   └── [slug]/page.tsx   # Single SOP (2/3 + 1/3 sidebar)
│   │   ├── think-tank/page.tsx   # Read-only Q&A archive
│   │   ├── studio/               # Embedded Sanity Studio
│   │   └── api/
│   │       ├── auth/             # NextAuth
│   │       ├── questions/        # Submit question endpoint
│   │       └── revalidate/       # Sanity webhook handler
│   ├── components/
│   │   ├── layout/               # Navbar, Providers
│   │   ├── sections/             # SopSection, OpsCenter, StoryCard, etc.
│   │   └── ui/                   # BrandStamp, CommandButton, LoginModal
│   ├── lib/types.ts              # Shared TypeScript types
│   └── styles/globals.css        # Steel Silk base styles
├── sanity/
│   ├── schemas/                  # sop, product, question, author, siteSettings
│   └── lib/
│       ├── client.ts             # Sanity client + image URL builder
│       └── queries.ts            # All GROQ queries
├── sanity.config.ts              # Studio configuration
├── tailwind.config.ts            # Steel Silk design tokens
├── next.config.ts
├── .env.local.template           # ← Copy to .env.local and fill in
└── DEPLOYMENT.md                 # ← You are here
```

---

## Notes

- The brand color `#1A4FAD` (Cobalt) is extracted from the book cover and locked throughout
- The stamp SVG is a component (`BrandStamp`) — reused on splash screen and sidebar
- All content is SEO-crawlable: hidden `sr-only` div renders full text for search engines even before splash interaction
- ISR revalidation is set to 60 seconds; adjust in each `page.tsx` via `export const revalidate`
