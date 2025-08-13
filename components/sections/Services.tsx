'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  VideoCameraIcon,
  BellAlertIcon,
  FireIcon,
  CloudIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { serviceCard, staggerContainer, fadeInUp, scaleIn, viewportSettings } from '@/lib/animations/variants';

const services = [
  {
    name: 'Access Control Systems',
    description: 'Advanced door security with keycards, biometrics, and mobile credentials',
    icon: ShieldCheckIcon,
    href: '/services/access-control-systems',
    features: ['Biometric Scanners', 'Mobile Access', 'Cloud Management'],
    color: 'from-primary-500 to-primary-600'
  },
  {
    name: 'Video Surveillance',
    description: 'HD/4K cameras with AI-powered analytics and cloud storage',
    icon: VideoCameraIcon,
    href: '/services/video-surveillance',
    features: ['4K Resolution', 'AI Analytics', '30-Day Storage'],
    color: 'from-primary-500 to-primary-600'
  },
  {
    name: 'Intrusion Detection',
    description: 'Smart sensors and alarms to protect your perimeter 24/7',
    icon: BellAlertIcon,
    href: '/services/intrusion-detection',
    features: ['Motion Sensors', 'Glass Break', 'Smart Alerts'],
    color: 'from-primary-500 to-primary-600'
  },
  {
    name: 'Fire Alarm Monitoring',
    description: 'UL-Listed monitoring for rapid fire department response',
    icon: FireIcon,
    href: '/services/fire-alarm-monitoring',
    features: ['UL-Listed Station', 'Code Compliant', 'Fast Response'],
    color: 'from-accent-500 to-accent-600'
  },
  {
    name: 'Environmental Monitoring',
    description: 'Protect server rooms with temperature and water leak sensors',
    icon: CloudIcon,
    href: '/services/environmental-monitoring',
    features: ['Temperature', 'Humidity', 'Water Detection'],
    color: 'from-primary-500 to-primary-600'
  },
  {
    name: '24/7 Central Monitoring',
    description: 'Professional monitoring with verified alarm response',
    icon: ClockIcon,
    href: '/services/24-7-central-station-monitoring',
    features: ['Live Operators', 'Alarm Verification', '15-Sec Response'],
    color: 'from-accent-500 to-accent-600'
  }
];

interface ServicesProps {
  title?: string;
  subtitle?: string;
  showAllServices?: boolean;
}

export function Services({ 
  title = "Comprehensive Security Solutions",
  subtitle = "Advanced technology combined with local expertise to protect what matters most"
}: ServicesProps) {
  return (
    <section className="py-32 lg:py-40 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-200 to-pink-200 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl" />
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 tracking-wider leading-[1.1] uppercase">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal tracking-wide">
            {subtitle}
          </p>
        </motion.div>

        {/* Modern Bento Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={serviceCard}
              whileHover="hover"
              className="will-change-transform"
            >
              <Link
                href={service.href}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100/50 block h-full overflow-hidden"
              >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-orange-50/0 group-hover:from-red-50/50 group-hover:to-orange-50/50 transition-all duration-500 pointer-events-none" />
              {/* Modern Icon with Glass Effect */}
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Modern Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-red-600 transition-colors duration-300 tracking-wider uppercase">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm tracking-wide">
                  {service.description}
                </p>

                {/* Modern Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <CheckCircleIcon className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="font-medium tracking-wide">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Modern CTA */}
                <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-all duration-300 tracking-wider uppercase">
                  <span className="text-base">Learn More</span>
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Supplier Logos */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="mt-20 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-8 tracking-wider uppercase">
            Certified & Trusted Partners
          </h3>
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {[
              '/supplier-logos/badge3.webp',
              '/supplier-logos/badge6.webp',
              '/supplier-logos/badge7.webp',
              '/supplier-logos/badge8.webp',
              '/supplier-logos/badge9.webp'
            ].map((logo, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="relative w-32 h-20 transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={logo}
                  alt="Security partner certification"
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}