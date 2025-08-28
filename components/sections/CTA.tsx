'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { fadeInUp, staggerContainer, staggerItem, viewportSettings } from '@/lib/animations/variants';

interface CTAProps {
  title?: string;
  subtitle?: string;
  showFeatures?: boolean;
}

const features = [
  'Security Assessment',
  'No Obligation Quote',
  'Same-Day Service Available',
  'Licensed & Insured',
  '24/7 Emergency Support',
  'Local Team'
];

export function CTA({ 
  title = "Ready to Secure Your Business?",
  subtitle = "Join 500+ businesses that trust Security Dynamics for their protection",
  showFeatures = true
}: CTAProps) {
  return (
    <section className="py-32 lg:py-40 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Modern Background Design */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-200 via-pink-200 to-orange-200 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div 
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {/* Modern Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 tracking-wider leading-[1.1] uppercase">
            {title}
          </h2>

          {/* Modern Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto font-normal leading-relaxed tracking-wide">
            {subtitle}
          </p>

          {/* Features */}
          {showFeatures && (
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              {features.slice(0, 4).map((feature) => (
                <motion.div 
                  key={feature} 
                  variants={staggerItem}
                  className="inline-flex items-center px-5 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(220, 38, 38, 0.05)' }}
                >
                  <CheckCircleIcon className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-800 tracking-wide">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Modern CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <motion.a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-base font-semibold text-slate-900 bg-white/90 backdrop-blur-xl border-2 border-gray-200 rounded-2xl shadow-2xl hover:shadow-3xl hover:border-red-200 transition-all duration-300 tracking-wider"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now: {COMPANY_INFO.phone}
            </motion.a>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://ocyrus.app.n8n.cloud/form/a96519af-6dc7-438a-a754-3d3eb830bdf7"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-base font-semibold text-white bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-2xl shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 overflow-hidden tracking-wider uppercase"
              >
                <span className="relative z-10 flex items-center">
                  Get Custom Quote
                  <ArrowRightIcon className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Modern Emergency Badge */}
          <motion.div 
            className="mt-12 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-full border border-red-200 shadow-xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-3" />
            <ClockIcon className="w-5 h-5 mr-2 text-red-600" />
            <span className="font-semibold text-red-900 tracking-wider uppercase">24/7 Emergency Service Available</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}