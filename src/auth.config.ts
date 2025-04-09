import GitHub from 'next-auth/providers/github';
import type { NextAuthConfig } from 'next-auth';

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [GitHub],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub as string; // Add user id to session
      return session;
    },
  },
} satisfies NextAuthConfig;
