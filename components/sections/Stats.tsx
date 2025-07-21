'use client';

import React, { useEffect, useState, useRef } from 'react';
import { 
  BuildingOfficeIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const stats = [
  {
    value: '500+',
    numericValue: 500,
    label: 'Businesses Protected',
    description: 'Across NJ & PA',
    icon: BuildingOfficeIcon,
    isNumeric: true,
    suffix: '+'
  },
  {
    value: '24/7',
    label: 'Always On Guard',
    description: 'Round-the-clock monitoring',
    icon: ClockIcon,
    isNumeric: false
  },
  {
    value: '15 min',
    numericValue: 15,
    label: 'Average Response',
    description: 'Emergency dispatch time',
    icon: ShieldCheckIcon,
    isNumeric: true,
    suffix: ' min'
  },
  {
    value: '35+',
    numericValue: 35,
    label: 'Years Experience',
    description: 'Protecting local businesses',
    icon: UserGroupIcon,
    isNumeric: true,
    suffix: '+'
  }
];

// Animated counter component
function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <div ref={ref} className="text-4xl font-bold text-white mb-2">
      {count}{suffix}
    </div>
  );
}

interface StatsProps {
  title?: string;
  subtitle?: string;
}

export function Stats({ 
  title = "Security You Can Count On",
  subtitle = "Our numbers speak for themselves - protecting businesses across Mercer and Bucks Counties"
}: StatsProps) {
  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 backdrop-blur-sm border border-red-600/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-red-400" />
              </div>
              
              {/* Value */}
              {stat.isNumeric ? (
                <AnimatedCounter 
                  end={stat.numericValue!} 
                  suffix={stat.suffix}
                  duration={2000}
                />
              ) : (
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
              )}
              
              {/* Label */}
              <h3 className="text-lg font-semibold text-white mb-1">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}