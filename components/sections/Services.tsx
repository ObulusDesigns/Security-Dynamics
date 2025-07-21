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
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 block h-full hover:scale-[1.02]"
              >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300 shadow-md">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center text-red-600 font-medium group-hover:text-red-700 transition-colors">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Supplier Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Certified & Trusted Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              '/supplier-logos/badge3.webp',
              '/supplier-logos/badge6.webp',
              '/supplier-logos/badge7.webp',
              '/supplier-logos/badge8.webp',
              '/supplier-logos/badge9.webp'
            ].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="relative w-32 h-20 transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={logo}
                  alt="Security partner certification"
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}