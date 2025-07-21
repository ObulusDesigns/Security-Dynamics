'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { COMPANY_INFO } from '@/lib/utils/constants';

interface CTAProps {
  title?: string;
  subtitle?: string;
  showFeatures?: boolean;
}

const features = [
  'Free Security Assessment',
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
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            {subtitle}
          </p>

          {/* Features */}
          {showFeatures && (
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {features.slice(0, 4).map((feature) => (
                <div key={feature} className="flex items-center text-gray-700">
                  <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="btn-secondary text-lg px-8 py-4 group"
            >
              Call Now: {COMPANY_INFO.phone}
            </a>
            
            <Link
              href="/contact"
              className="btn-primary text-lg px-8 py-4 animate-pulse"
            >
              Get Free Quote
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Emergency Notice */}
          <div className="mt-8 flex items-center justify-center text-gray-600 text-sm">
            <ClockIcon className="w-4 h-4 mr-2" />
            <span>24/7 Emergency Service Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}