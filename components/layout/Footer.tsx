'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  PhoneIcon as Phone, 
  EnvelopeIcon as Mail, 
  MapPinIcon as MapPin,
  ClockIcon as Clock,
  StarIcon as Award
} from '@heroicons/react/24/outline';
import { COMPANY_INFO } from '@/lib/utils/constants';

const formatPhoneForTel = (phone: string) => {
  return `tel:${phone.replace(/\D/g, '')}`;
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const services = [
  { id: 'access-control', name: 'Access Control Systems', slug: 'access-control-systems' },
  { id: 'intrusion', name: 'Intrusion Detection', slug: 'intrusion-detection' },
  { id: 'video', name: 'Video Surveillance', slug: 'video-surveillance' },
  { id: 'fire', name: 'Fire Alarm Monitoring', slug: 'fire-alarm-monitoring' },
  { id: 'environmental', name: 'Environmental Monitoring', slug: 'environmental-monitoring' },
  { id: '24-7', name: '24/7 Central Station', slug: '24-7-central-station-monitoring' }
];

const serviceAreas = {
  mercerCounty: [
    'Trenton', 'Princeton', 'Hamilton Township', 
    'Lawrence Township', 'West Windsor', 'Ewing Township'
  ],
  bucksCounty: [
    'Doylestown', 'Newtown', 'Yardley', 
    'Bristol', 'Warminster', 'Levittown'
  ]
};

export function Footer() {
  const currentYear = getCurrentYear();

  return (
    <footer className="section-dark text-white">
      {/* Red Line at Top */}
      <div className="w-full h-1 bg-red-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/logo-2.webp"
                alt="Security Dynamics Inc."
                width={180}
                height={80}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your premier fire protection and security systems provider since 1985. 
              Comprehensive solutions for commercial, industrial, and residential properties across Mercer County NJ and Bucks County PA.
            </p>
            
            {/* License Information */}
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-semibold text-yellow-400">Licensed & Certified</span>
              </div>
              <div className="space-y-1 text-xs text-gray-300">
                <div>NJ Fire Protection License: P00747</div>
                <div>NJ Burglar Alarm License: 34BA00089500</div>
                <div>PA License: #123456</div>
                <div>Serving NJ & Eastern Pennsylvania</div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {COMPANY_INFO.socialMedia?.facebook && (
                <a href={COMPANY_INFO.socialMedia.facebook} className="text-gray-400 hover:text-red-400 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              )}
              {COMPANY_INFO.socialMedia?.youtube && (
                <a href={COMPANY_INFO.socialMedia.youtube} className="text-gray-400 hover:text-red-400 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              )}
              {COMPANY_INFO.socialMedia?.linkedin && (
                <a href={COMPANY_INFO.socialMedia.linkedin} className="text-gray-400 hover:text-red-400 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link 
                href="/services"
                className="text-red-400 hover:text-red-300 transition-colors text-sm font-medium"
              >
                View All Services →
              </Link>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/locations/princeton-nj"
                  className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  Princeton, NJ
                </Link>
              </li>
              <li>
                <Link 
                  href="/locations/doylestown-pa"
                  className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  Doylestown, PA
                </Link>
              </li>
              {serviceAreas.mercerCounty.slice(0, 2).map((area) => (
                <li key={area}>
                  <span className="text-gray-300 text-sm">{area}</span>
                </li>
              ))}
              {serviceAreas.bucksCounty.slice(0, 2).map((area) => (
                <li key={area}>
                  <span className="text-gray-300 text-sm">{area}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-2">
              <Link 
                href="/service-areas/mercer-county-nj"
                className="text-red-400 hover:text-red-300 transition-colors text-sm font-medium block"
              >
                All Mercer County →
              </Link>
              <Link 
                href="/service-areas/bucks-county-pa"
                className="text-red-400 hover:text-red-300 transition-colors text-sm font-medium block"
              >
                All Bucks County →
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div>Serving Mercer County, NJ</div>
                  <div>& Bucks County, PA</div>
                  <div>Central New Jersey Region</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
                <a 
                  href={formatPhoneForTel(COMPANY_INFO.phone)}
                  className="text-sm text-gray-300 hover:text-red-400 transition-colors font-medium"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm text-gray-300 hover:text-red-400 transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div className="font-medium">Business Hours:</div>
                  <div>Monday - Friday: 8:00 AM - 5:00 PM</div>
                  <div className="text-xs text-gray-400 mt-1">24/7 Emergency Response Available</div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Link href="/contact" className="btn-primary text-sm w-full text-center block">
                Security Assessment
              </Link>
              <div className="text-center">
                <Link href="/pay-monitoring-bill" className="text-xs text-gray-400 hover:text-red-400 transition-colors">
                  Pay Monitoring Bill
                </Link>
                <span className="text-gray-500 mx-2">|</span>
                <Link href="/pay-service-bill" className="text-xs text-gray-400 hover:text-red-400 transition-colors">
                  Pay Service Bill
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Security Dynamics Inc. All rights reserved. | Designed & Developed by{' '}
              <a 
                href="https://www.obulusdesigns.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                OBULUS DESIGNS
              </a>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-red-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-red-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-red-400 transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}