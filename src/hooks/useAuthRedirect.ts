'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthSession } from '@/context/auth';
import { Session } from 'next-auth';

/**
 * A hook that redirects to the sign-in page if the user is not authenticated
 * @param redirectPath Optional path to redirect to if not authenticated (defaults to '/auth/signin')
 */
export function useAuthRedirect(redirectPath: string = '/auth/signin'): {
  session: Session | null;
} {
  const router = useRouter();
  const { session } = useAuthSession();

  useEffect(() => {
    if (!session) {
      router.push(redirectPath);
    }
  }, [session, router, redirectPath]);

  return { session };
}
