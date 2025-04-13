'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Session } from 'next-auth';

type AuthContextType = {
  session: Session | null;
  setSessionValue: (value: Session | null) => void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthContextProviderProps) => {
  const [session, setSession] = useState<Session | null>(null); // Default theme is 'light'
  const setSessionValue = (value: Session | null) => {
    setSession(value);
  };
  const memoizedContextValues = React.useMemo(() => ({ session, setSessionValue }), [session]);
  return <AuthContext.Provider value={memoizedContextValues}>{children}</AuthContext.Provider>;
};

export const useAuthSession = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthSession must be used within a AuthProvider');
  }
  return context;
};
