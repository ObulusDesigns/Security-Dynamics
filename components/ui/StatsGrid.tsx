import React from 'react';

interface Stat {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

interface StatsGridProps {
  stats: Stat[];
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'large' | 'compact';
  className?: string;
}

export function StatsGrid({ 
  stats, 
  columns = 4,
  variant = 'default',
  className = ''
}: StatsGridProps) {
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4'
  };

  const sizeClasses = {
    default: {
      value: 'text-5xl md:text-6xl',
      label: 'text-base'
    },
    large: {
      value: 'text-6xl md:text-7xl',
      label: 'text-lg'
    },
    compact: {
      value: 'text-3xl md:text-4xl',
      label: 'text-sm'
    }
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className={`${sizeClasses[variant].value} font-extrabold text-red-600 mb-2`}>
            {stat.prefix}{stat.value}{stat.suffix}
          </div>
          <p className={`${sizeClasses[variant].label} text-gray-700 font-medium`}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}