'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  BuildingOfficeIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { fadeInUp, statsItem, staggerContainer, viewportSettings } from '@/lib/animations/variants';

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

// Animated counter component with reduced motion support
function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion.current) {
      setCount(end);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smoother animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      if (progress < 1) {
        setCount(Math.floor(end * easedProgress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <div ref={ref} className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text mb-3 will-change-auto tracking-wider uppercase">
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
    <section className="py-32 lg:py-40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Modern Animated Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 gradient-mesh" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Modern Section Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 tracking-wider leading-[1.1] uppercase">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-normal tracking-wide">
            {subtitle}
          </p>
        </motion.div>

        {/* Modern Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={statsItem}
              className="text-center group"
            >
              {/* Modern Glass Icon */}
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-xl rounded-3xl flex items-center justify-center border border-white/10 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <stat.icon className="w-10 h-10 text-red-400" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              </div>
              
              {/* Value */}
              {stat.isNumeric ? (
                <AnimatedCounter 
                  end={stat.numericValue!} 
                  suffix={stat.suffix}
                  duration={2000}
                />
              ) : (
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text mb-3 tracking-wider uppercase">
                  {stat.value}
                </div>
              )}
              
              {/* Modern Label & Description */}
              <h3 className="text-lg font-semibold text-white mb-2 tracking-wider uppercase">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-400 font-normal tracking-wide">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}