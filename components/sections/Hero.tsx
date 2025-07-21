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
    <section className={cn('relative min-h-[90vh] bg-slate-900 flex items-center overflow-hidden', className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-red-500/10 rounded-full blur-2xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding py-20 lg:py-0">
        <div className="flex flex-col items-center text-center">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {/* Badges */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20">
                <Shield className="h-4 w-4 mr-2 text-red-400" />
                Family Owned & Operated Since 1985
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20">
                <MapPin className="h-4 w-4 mr-2" />
                Serving Mercer County NJ & Bucks County PA
              </div>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              {title.includes('&') ? (
                <>
                  {title.split('&')[0]}
                  <span className="text-red-500 block mt-2">{title.split('&')[1]}</span>
                </>
              ) : (
                title
              )}
            </h1>
            
            {/* Description */}
            {description && (
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {description}
              </p>
            )}
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              {primaryCta && (
                <Link 
                  href={primaryCta.href}
                  className="btn-primary text-lg px-8 py-4"
                >
                  {primaryCta.text}
                </Link>
              )}
              
              {secondaryCta && (
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  {COMPANY_INFO.phone}
                </a>
              )}
            </div>
            
            {/* Features */}
            {features && features.length > 0 && (
              <div className="flex flex-wrap justify-center gap-6 pt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-2 text-white/90"
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

        </div>

      </div>
      
    </section>
  );
}