import React from 'react';
import { cn } from '@/lib/utils/helpers';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'white-bg' | 'dark-bg' | 'primary';
  className?: string;
}

export function Badge({ 
  children, 
  variant = 'white-bg',
  className 
}: BadgeProps) {
  const variantClasses = {
    'white-bg': 'badge-white-bg',
    'dark-bg': 'badge-dark-bg',
    'primary': 'badge-primary',
  };

  return (
    <span className={cn(variantClasses[variant], className)}>
      {children}
    </span>
  );
}

export default Badge;