import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils/helpers';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  variant?: 'default' | 'dark' | 'glass';
  href?: string;
  external?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'default', hover = false, children, href, external = false, ...props }, ref) => {
    // Use the card classes from globals.css
    const baseClasses = variant === 'dark' ? 'card-dark' :
                        variant === 'glass' ? 'glass-card' :
                        'card-white';
    
    const classes = cn(
      baseClasses,
      hover && 'cursor-pointer',
      className
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            className={`block ${classes}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }

      return (
        <Link href={href} className={`block ${classes}`}>
          {children}
        </Link>
      );
    }

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card subcomponents
export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
};

CardHeader.displayName = 'CardHeader';

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <h3 className={cn('text-xl font-bold text-secondary', className)}>
      {children}
    </h3>
  );
};

CardTitle.displayName = 'CardTitle';

export const CardDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <p className={cn('text-neutral-700 mt-2', className)}>
      {children}
    </p>
  );
};

CardDescription.displayName = 'CardDescription';

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={cn('text-neutral-700', className)}>
      {children}
    </div>
  );
};

CardContent.displayName = 'CardContent';

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={cn('mt-6 pt-6 border-t border-gray-200', className)}>
      {children}
    </div>
  );
};

CardFooter.displayName = 'CardFooter';