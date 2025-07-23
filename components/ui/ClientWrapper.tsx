'use client';

import { useEffect, useState } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

interface ClientWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function ClientWrapper({ children, fallback }: ClientWrapperProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return fallback || null;
  }

  return (
    <ErrorBoundary fallback={fallback}>
      {children}
    </ErrorBoundary>
  );
}