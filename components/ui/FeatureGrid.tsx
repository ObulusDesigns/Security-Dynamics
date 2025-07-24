import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface Feature {
  title: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FeatureGridProps {
  features: Feature[] | string[];
  columns?: 1 | 2 | 3 | 4;
  iconColor?: string;
  showCheckIcon?: boolean;
  className?: string;
}

export function FeatureGrid({ 
  features, 
  columns = 3,
  iconColor = 'text-red-600',
  showCheckIcon = true,
  className = ''
}: FeatureGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
      {features.map((feature, index) => {
        const isStringFeature = typeof feature === 'string';
        const title = isStringFeature ? feature : feature.title;
        const description = isStringFeature ? undefined : feature.description;
        const IconComponent = !isStringFeature && feature.icon ? feature.icon : CheckCircleIcon;
        const shouldShowIcon = !isStringFeature ? !!feature.icon : showCheckIcon;

        return (
          <div key={index} className="flex items-start">
            {shouldShowIcon && (
              <IconComponent className={`w-6 h-6 ${iconColor} mr-3 flex-shrink-0 mt-0.5`} />
            )}
            <div>
              <span className="text-lg text-gray-700 font-medium">{title}</span>
              {description && (
                <p className="text-gray-600 mt-1">{description}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}