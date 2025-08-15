'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bars3Icon as Menu, 
  XMarkIcon as X,
  ChevronDownIcon,
  PhoneIcon as Phone,
  EnvelopeIcon as Mail,
  ClockIcon as Clock
} from '@heroicons/react/24/outline';
import { COMPANY_INFO } from '@/lib/utils/constants';

const navigation = {
  services: [
    { name: 'Access Control', href: '/services/access-control-systems' },
    { name: 'Intrusion Detection', href: '/services/intrusion-detection' },
    { name: 'Video Surveillance', href: '/services/video-surveillance' },
    { name: 'Fire Alarm Monitoring', href: '/services/fire-alarm-monitoring' },
    { name: 'Environmental Monitoring', href: '/services/environmental-monitoring' },
    { name: '24/7 Monitoring', href: '/services/24-7-central-station-monitoring' },
    { name: 'All Services', href: '/services' }
  ],
  brands: [
    { name: 'Honeywell', href: '/brands/honeywell' },
    { name: 'Alarm.com', href: '/brands/alarm-com' },
    { name: 'Qolsys', href: '/brands/qolsys' },
    { name: 'Hikvision', href: '/brands/hikvision' },
    { name: 'OpenEye', href: '/brands/openeye' },
    { name: 'Keri Systems', href: '/brands/keri-systems' },
    { name: 'Turing AI', href: '/brands/turing-ai' },
    { name: 'Bosch', href: '/brands/bosch' },
    { name: 'Fire-Lite', href: '/brands/firelite' },
    { name: 'Silent Knight', href: '/brands/silent-knight' },
    { name: 'Potter', href: '/brands/potter' },
    { name: 'NAPCO', href: '/brands/napco' },
    { name: 'DSC', href: '/brands/dsc' }
  ],
  locations: [
    { name: 'Mercer County, NJ', href: '/service-areas/mercer-county-nj' },
    { name: 'Bucks County, PA', href: '/service-areas/bucks-county-pa' },
    { name: 'Princeton, NJ', href: '/locations/princeton-nj' },
    { name: 'Doylestown, PA', href: '/locations/doylestown-pa' },
    { name: 'All Locations', href: '/locations' }
  ],
  resources: [
    { name: 'Security Cost Guide', href: '/guides/business-security-system-cost' },
    { name: 'Security Guides', href: '/guides' },
    { name: 'All Resources', href: '/resources' }
  ],
  learningCenter: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' }
  ]
};

const formatPhoneForTel = (phone: string) => {
  return `tel:${phone.replace(/\D/g, '')}`;
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navLinks = [
    {
      name: 'Services',
      href: '#',
      hasDropdown: true,
      dropdownItems: navigation.services
    },
    { name: 'Industries', href: '/industries' },
    {
      name: 'Service Areas',
      href: '#',
      hasDropdown: true,
      dropdownItems: navigation.locations
    },
    {
      name: 'Brands',
      href: '#',
      hasDropdown: true,
      dropdownItems: navigation.brands
    },
    {
      name: 'Learning Center',
      href: '#',
      hasDropdown: true,
      dropdownItems: navigation.learningCenter
    }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0">
            <div className="hidden sm:flex items-center space-x-4 lg:space-x-6">
              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="hidden lg:flex items-center space-x-2 hover:text-red-500 transition"
              >
                <Mail className="h-4 w-4" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <a 
                href={formatPhoneForTel(COMPANY_INFO.phone)}
                className="flex items-center space-x-2 hover:text-red-500 transition"
              >
                <Phone className="h-4 w-4" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>
            <div className="flex items-center space-x-4 lg:space-x-6">
              <Link
                href="/pay-monitoring-bill"
                className="text-xs sm:text-sm hover:text-red-500 transition font-medium"
              >
                Pay Monitoring Bill
              </Link>
              <div className="h-4 w-px bg-gray-400"></div>
              <Link
                href="/pay-service-bill"
                className="text-xs sm:text-sm hover:text-red-500 transition font-medium"
              >
                Pay Service Bill
              </Link>
              <div className="hidden sm:flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-3 lg:py-4">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 hover:text-red-600 order-1"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Logo */}
            <div className="flex items-center order-2 lg:order-1">
              <Link href="/">
                <Image
                  src="/logo-1.webp"
                  alt="Security Dynamics Inc."
                  width={180}
                  height={60}
                  priority
                  className="h-12 sm:h-14 lg:h-16 w-auto"
                />
              </Link>
            </div>

            {/* Mobile Phone Button */}
            <a 
              href={formatPhoneForTel(COMPANY_INFO.phone)}
              className="lg:hidden bg-red-600 hover:bg-red-700 text-white p-3 rounded order-3"
            >
              <Phone className="h-5 w-5" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 order-2">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className="relative group"
                      onMouseEnter={() => setActiveDropdown(link.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="text-gray-700 hover:text-red-600 font-medium transition flex items-center">
                        <span>{link.name}</span>
                        <ChevronDownIcon className="ml-1 h-3 w-3" />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                          >
                            <div className="p-4">
                              {link.dropdownItems?.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded transition"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-gray-700 hover:text-red-600 font-medium transition ${
                        isActive(link.href) ? 'text-red-600' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            
            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center space-x-4 order-3">
              <div className="text-right hidden xl:block">
                <div className="text-sm text-gray-600">24/7 Emergency</div>
                <div className="text-lg font-bold text-gray-800">{COMPANY_INFO.phone}</div>
              </div>
              <a 
                href="https://ocyrus.app.n8n.cloud/form/a96519af-6dc7-438a-a754-3d3eb830bdf7" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get Assessment
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 lg:hidden"
            >
              {/* Background overlay */}
              <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
              
              {/* Menu content */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
                className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                  <Image
                    src="/logo-1.webp"
                    alt="Security Dynamics Inc."
                    width={140}
                    height={40}
                    className="h-10 w-auto"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                {/* Navigation Links - Scrollable */}
                <div className="h-[calc(100vh-180px)] overflow-y-auto px-6 py-6">
                  <nav className="space-y-1">
                    {navLinks.map((link) => (
                      <div key={link.name}>
                        {link.hasDropdown ? (
                          <div>
                            <button
                              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-gray-900 hover:bg-gray-50 font-medium transition-colors"
                              onClick={() => {
                                setActiveDropdown(activeDropdown === link.name ? null : link.name);
                              }}
                            >
                              <span>{link.name}</span>
                              <ChevronDownIcon
                                className={`h-5 w-5 text-gray-500 transition-transform ${
                                  activeDropdown === link.name ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                            <AnimatePresence>
                              {activeDropdown === link.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                                    {link.dropdownItems?.map((item) => (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={link.href}
                            className={`block rounded-lg px-4 py-3 font-medium transition-colors ${
                              isActive(link.href)
                                ? 'bg-red-50 text-red-600'
                                : 'text-gray-900 hover:bg-gray-50'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                  
                  {/* Contact Info */}
                  <div className="mt-8 space-y-4 border-t border-gray-200 pt-6">
                    <a
                      href={formatPhoneForTel(COMPANY_INFO.phone)}
                      className="flex items-center space-x-3 text-gray-700 hover:text-red-600 transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <div>
                        <div className="text-sm text-gray-500">24/7 Emergency</div>
                        <div className="font-semibold">{COMPANY_INFO.phone}</div>
                      </div>
                    </a>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="flex items-center space-x-3 text-gray-700 hover:text-red-600 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="text-sm">{COMPANY_INFO.email}</span>
                    </a>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Clock className="h-5 w-5" />
                      <span className="text-sm">Mon-Fri: 8:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
                
                {/* Fixed Bottom CTA */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4">
                  <a
                    href="https://ocyrus.app.n8n.cloud/form/a96519af-6dc7-438a-a754-3d3eb830bdf7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-lg bg-red-600 px-6 py-3 text-center font-semibold text-white shadow-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-[1.02]"
                    onClick={() => setIsOpen(false)}
                  >
                    Request a Quote
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Fixed Request a Quote Button - Mobile Only */}
      <a
        href="https://ocyrus.app.n8n.cloud/form/a96519af-6dc7-438a-a754-3d3eb830bdf7"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-red-600 hover:bg-red-700 text-white py-4 text-center font-semibold text-lg transition-colors"
      >
        Request A Quote
      </a>
    </>
  );
}