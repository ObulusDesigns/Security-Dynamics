'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPinIcon as MapPin,
  CheckCircleIcon as CheckCircle,
  ShieldCheckIcon as Shield
} from '@heroicons/react/24/outline';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { cn } from '@/lib/utils/helpers';
import { heroContent, staggerContainer, staggerItem } from '@/lib/animations/variants';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  features?: string[];
  className?: string;
  location?: string;
  showEmergencyBadge?: boolean;
}

export function Hero({
  title,
  subtitle: _subtitle,
  description,
  primaryCta,
  secondaryCta,
  features,
  className
}: HeroProps) {
  return (
    <section className={cn('relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center overflow-hidden', className)}>
      {/* Modern Gradient Mesh Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 gradient-mesh" />
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M0 40h80M40 0v80' /%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 lg:py-0">
        <div className="flex flex-col items-center text-center">
          {/* Main content */}
          <motion.div
            variants={heroContent}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto space-y-8"
          >
            {/* Modern Glass Badges */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <motion.div 
                className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-xl rounded-2xl text-sm font-medium text-white border border-white/10 shadow-2xl tracking-wider uppercase"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <Shield className="h-5 w-5 mr-3 text-red-400" />
                Family Owned & Operated Since 1985
              </motion.div>
              <motion.div 
                className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-xl rounded-2xl text-sm font-medium text-white border border-white/10 shadow-2xl tracking-wider"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                Serving Mercer County NJ & Bucks County PA
              </motion.div>
            </div>
            
            {/* Modern Bold Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white tracking-wider uppercase">
              {title.includes('&') ? (
                <>
                  {title.split('&')[0]}
                  <span className="bg-gradient-to-r from-red-400 via-red-500 to-orange-500 bg-clip-text text-transparent block mt-4">
                    {title.split('&')[1]}
                  </span>
                </>
              ) : (
                title
              )}
            </h1>
            
            {/* Modern Description */}
            {description && (
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-normal tracking-wide opacity-90">
                {description}
              </p>
            )}
            
            {/* Modern CTAs with Enhanced Styling */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              {primaryCta && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href={primaryCta.href}
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-base font-semibold text-white bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-2xl shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 overflow-hidden tracking-wider uppercase"
                  >
                    <span className="relative z-10">{primaryCta.text}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </motion.div>
              )}
              
              {secondaryCta && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a 
                    href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-base font-semibold text-white bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hover:bg-white/20 transition-all duration-300 tracking-wider"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </motion.div>
              )}
            </div>
            
            {/* Features */}
            {features && features.length > 0 && (
              <motion.div 
                className="flex flex-wrap justify-center gap-6 pt-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {features.map((feature) => (
                  <motion.div
                    key={feature}
                    variants={staggerItem}
                    className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10"
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)', x: 5 }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-white/90 tracking-wide">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

        </div>

      </div>
      
    </section>
  );
}