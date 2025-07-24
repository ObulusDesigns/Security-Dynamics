import { Metadata } from 'next';
import Script from 'next/script';
import BrandPageTemplate from '@/components/templates/BrandPageTemplate';
import { SITE_CONFIG } from '@/lib/utils/constants';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Honeywell Security Systems NJ & PA | Authorized Dealer | Security Dynamics',
  description: 'Trusted Honeywell security system installation in New Jersey & Pennsylvania. VISTA panels, Total Connect, smart home integration. Call (609) 394-8800.',
  keywords: 'Honeywell security systems, Honeywell dealer NJ, Honeywell installer PA, VISTA alarm panels, Total Connect, Honeywell Lyric, Honeywell ProSeries',
  openGraph: {
    title: 'Authorized Honeywell Security Systems Dealer | NJ & PA Installation',
    description: 'Professional Honeywell security installation and monitoring. VISTA panels, Total Connect remote access. Serving Mercer County NJ & Bucks County PA.',
    url: `${SITE_CONFIG.url}/brands/honeywell`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Honeywell Security Systems - Security Dynamics'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/brands/honeywell`}};

// Schema markup
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_CONFIG.url}/#organization`,
  name: 'Security Dynamics Inc.',
  url: SITE_CONFIG.url,
  telephone: '(609) 394-8800',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '520 Route 33',
    addressLocality: 'Millstone',
    addressRegion: 'NJ',
    postalCode: '08535',
    addressCountry: 'US'
  }
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Honeywell Security Systems',
  brand: {
    '@type': 'Brand',
    name: 'Honeywell'
  },
  description: 'Professional Honeywell security system installation including VISTA panels and Total Connect smart home integration',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    seller: {
      '@id': `${SITE_CONFIG.url}/#organization`
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'New Jersey',
        containsPlace: {
          '@type': 'AdministrativeArea',
          name: 'Mercer County'
        }
      },
      {
        '@type': 'State',
        name: 'Pennsylvania',
        containsPlace: {
          '@type': 'AdministrativeArea',
          name: 'Bucks County'
        }
      }
    ]
  }
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_CONFIG.url
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Brands',
      item: `${SITE_CONFIG.url}/brands`
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Honeywell',
      item: `${SITE_CONFIG.url}/brands/honeywell`
    }
  ]
};

const honeywellBrandData = {
  name: 'Honeywell',
  fullName: 'Honeywell Security Systems',
  tagline: 'Trusted security technology from a Fortune 100 leader with over a century of innovation',
  description: 'Honeywell has been protecting homes and businesses for over 100 years with industry-leading security technology. From the reliable VISTA series control panels to the innovative Total Connect platform, Honeywell systems offer proven performance, seamless smart home integration, and professional-grade features. As an authorized Honeywell dealer, Security Dynamics provides expert installation, service, and support for the complete Honeywell security portfolio.',
  features: [
    'VISTA series control panels - the industry standard for reliability',
    'Total Connect 2.0 remote services for complete control',
    'Professional-grade wireless technology with encrypted signals',
    'Smart home integration with Z-Wave automation',
    'Commercial-grade fire and life safety systems',
    'Extensive sensor portfolio for every application',
    'Legacy system compatibility and upgrade paths'
  ],
  benefits: {
    residential: [
      'Intuitive touchscreen keypads with voice annunciation',
      'Total Connect app for remote control and notifications',
      'Smart home automation for lights, locks, and thermostats',
      'Video integration with live streaming and recording',
      'Geo-fencing for automatic arming/disarming',
      'Family notification features for arrivals and departures',
      'Professional monitoring with rapid response'
    ],
    commercial: [
      'Scalable systems supporting up to 250 zones',
      'Advanced programming for complex applications',
      'Multiple partition support for multi-tenant buildings',
      'Integrated access control and video solutions',
      'Fire alarm and life safety integration',
      'Detailed event logging for compliance',
      'Remote management of multiple locations'
    ]
  },
  products: [
    {
      name: 'VISTA-21iP',
      description: 'Commercial-grade control panel with IP communication and extensive zone capacity for large installations.',
      ideal: 'Large commercial properties and multi-tenant buildings'
    },
    {
      name: 'VISTA-20P',
      description: 'Versatile control panel perfect for residential and small commercial applications with expandability.',
      ideal: 'Homes and small to medium businesses'
    },
    {
      name: 'Lyric Controller',
      description: 'All-in-one smart security system with built-in camera, Z-Wave hub, and intuitive touchscreen interface.',
      ideal: 'Modern homes seeking integrated smart security'
    },
    {
      name: 'ProSeries',
      description: 'Next-generation wireless security platform with advanced features and easy installation.',
      ideal: 'Quick deployments and wireless applications'
    }
  ],
  faqs: [
    {
      question: 'Why should I choose Honeywell over other security brands?',
      answer: 'Honeywell brings over 100 years of security innovation and the backing of a Fortune 100 company. Their systems are known for exceptional reliability, broad compatibility, and long-term support. With features like Total Connect remote services and extensive smart home integration, Honeywell offers a complete security ecosystem that protects and enhances your property.'
    },
    {
      question: 'Can I upgrade my existing Honeywell system to add smart features?',
      answer: 'Yes! Most Honeywell VISTA panels can be upgraded with Total Connect modules to add remote access, smart home control, and video integration. Our technicians can evaluate your current system and recommend the best upgrade path to modernize your security without replacing the entire system.'
    },
    {
      question: 'What is Total Connect and what can it do?',
      answer: 'Total Connect is Honeywell\'s remote services platform that lets you control your security system from anywhere using a smartphone, tablet, or computer. You can arm/disarm your system, receive alerts, view cameras, control smart devices, and even manage multiple properties from a single app. It also offers advanced features like geo-fencing and custom notifications.'
    },
    {
      question: 'How reliable are Honeywell security systems?',
      answer: 'Honeywell systems are renowned for their reliability. VISTA panels often run for 15-20+ years with minimal issues. They feature multiple communication paths, battery backup, and are tested to stringent commercial standards. This reliability is why Honeywell is trusted by banks, government facilities, and critical infrastructure worldwide.'
    },
    {
      question: 'What\'s the cost of a Honeywell security system installation?',
      answer: 'Honeywell system costs vary based on your property size and selected features. Basic residential packages start around $699, while comprehensive smart home security systems range from $1,500-$3,000. Commercial installations are custom-quoted. We provide Security assessments to determine the best solution for your budget.'
    },
    {
      question: 'Does Security Dynamics service existing Honeywell systems?',
      answer: 'Absolutely! As an authorized Honeywell dealer, we service all Honeywell security systems regardless of who installed them. We offer maintenance plans, repairs, upgrades, and monitoring takeovers. Our factory-trained technicians are experts in both legacy and current Honeywell products.'
    }
  ],
  certifications: [
    'Honeywell factory-trained technicians',
    'Total Connect certified installers',
    'VISTA programming specialists',
    'NJ Burglar & Fire Alarm Licensed',
    'PA Security System Contractor',
    'NICET certified technicians'
  ],
  warranty: 'Honeywell 2-year manufacturer warranty with lifetime technical support'
};

export default function HoneywellBrandPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)}}
      />
      <Script
        id="schema-product"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema)}}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)}}
      />

      <BrandPageTemplate brand={honeywellBrandData} />
    </>
  );
}