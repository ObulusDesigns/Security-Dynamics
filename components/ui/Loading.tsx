import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const spinnerVariants = cva(
  'animate-spin',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',
      },
      color: {
        primary: 'text-primary',
        accent: 'text-accent',
        white: 'text-white',
        gray: 'text-gray-500',
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'primary',
    },
  }
);

export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ size, color, className = '' }) => {
  const classes = spinnerVariants({ size, color, className });

  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

Spinner.displayName = 'Spinner';

// Loading Overlay Component
export interface LoadingOverlayProps {
  isLoading: boolean;
  children: React.ReactNode;
  text?: string;
  fullScreen?: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  children,
  text,
  fullScreen = false,
}) => {
  if (!isLoading) return <>{children}</>;

  return (
    <div className={`relative ${fullScreen ? 'min-h-screen' : ''}`}>
      {children}
      <div className={`absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50 ${fullScreen ? 'fixed' : ''}`}>
        <div className="text-center">
          <Spinner size="lg" />
          {text && (
            <p className="mt-4 text-gray-700 font-medium">{text}</p>
          )}
        </div>
      </div>
    </div>
  );
};

LoadingOverlay.displayName = 'LoadingOverlay';

// Skeleton Loader Component
const skeletonVariants = cva(
  'animate-pulse bg-gray-200 rounded',
  {
    variants: {
      variant: {
        text: 'h-4',
        title: 'h-8',
        rectangle: '',
        circle: 'rounded-full',
      },
      width: {
        full: 'w-full',
        '3/4': 'w-3/4',
        '1/2': 'w-1/2',
        '1/3': 'w-1/3',
        '1/4': 'w-1/4',
      },
    },
    defaultVariants: {
      variant: 'text',
      width: 'full',
    },
  }
);

export interface SkeletonProps extends VariantProps<typeof skeletonVariants> {
  className?: string;
  height?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  variant, 
  width, 
  height,
  className = '' 
}) => {
  const classes = skeletonVariants({ variant, width, className });
  const style = height ? { height } : {};

  return <div className={classes} style={style} />;
};

Skeleton.displayName = 'Skeleton';

// Page Loading Component
export interface PageLoadingProps {
  text?: string;
}

export const PageLoading: React.FC<PageLoadingProps> = ({ text = 'Loading...' }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <Spinner size="xl" />
        <p className="mt-4 text-lg text-gray-700">{text}</p>
      </div>
    </div>
  );
};

PageLoading.displayName = 'PageLoading';

// Loading Dots Component
export const LoadingDots: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <span className={`inline-flex space-x-1 ${className}`}>
      <span className="animate-bounce animation-delay-0 inline-block w-2 h-2 bg-current rounded-full" />
      <span className="animate-bounce animation-delay-150 inline-block w-2 h-2 bg-current rounded-full" />
      <span className="animate-bounce animation-delay-300 inline-block w-2 h-2 bg-current rounded-full" />
    </span>
  );
};

LoadingDots.displayName = 'LoadingDots';