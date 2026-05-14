import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import type { NextAuthOptions } from 'next-auth'

// Password policy: 8+ chars, letters + numbers + at least one special character
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/',      // Redirect to home; login handled via modal
    error:  '/',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email:    { label: 'Email',    type: 'email'    },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        // ─── TODO for deployment expert ──────────────────────────────────
        // Replace this stub with a real user lookup against your database.
        // Recommended: use a Sanity "user" document or a separate DB.
        //
        // Example flow:
        //   1. Query Sanity for a user with matching email
        //   2. Compare hashed password (use bcrypt)
        //   3. Return user object or null
        //
        // Admin detection: check if email matches ADMIN_EMAIL env var.
        // ─────────────────────────────────────────────────────────────────

        const isAdmin = credentials.email === process.env.ADMIN_EMAIL

        // Stub: accept any valid-format credentials for dev testing
        // REMOVE this in production and implement real DB check
        return {
          id: '1',
          email: credentials.email,
          name: isAdmin ? 'Chief Engineer' : 'Community Member',
          role: isAdmin ? 'admin' : 'user',
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
