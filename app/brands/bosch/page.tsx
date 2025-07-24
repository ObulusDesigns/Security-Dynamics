import { Metadata } from 'next';
import Script from 'next/script';
import BrandPageTemplate from '@/components/templates/BrandPageTemplate';
import { SITE_CONFIG } from '@/lib/utils/constants';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Bosch Security Systems NJ & PA | Authorized Dealer | Security Dynamics',
  description: 'Professional Bosch security system installation in New Jersey & Pennsylvania. B Series panels, IP cameras, enterprise solutions. Call (609) 394-8800.',
  keywords: 'Bosch security systems, Bosch dealer NJ, Bosch installer PA, B Series control panels, Bosch IP cameras, Bosch fire alarm systems, Bosch access control',
  openGraph: {
    title: 'Authorized Bosch Security Systems Dealer | NJ & PA Installation',
    description: 'Enterprise-grade Bosch security installation. IP video surveillance, access control, fire detection. Serving Mercer County NJ & Bucks County PA.',
    url: `${SITE_CONFIG.url}/brands/bosch`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Bosch Security Systems - Security Dynamics'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/brands/bosch`}};

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
  name: 'Bosch Security Systems',
  brand: {
    '@type': 'Brand',
    name: 'Bosch'
  },
  description: 'Enterprise-grade Bosch security system installation including B Series panels, IP cameras, and integrated solutions',
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
      name: 'Bosch',
      item: `${SITE_CONFIG.url}/brands/bosch`
    }
  ]
};

const boschBrandData = {
  name: 'Bosch',
  fullName: 'Bosch Security Systems',
  tagline: 'Engineering excellence and innovation for comprehensive commercial security solutions',
  description: 'Bosch brings over 130 years of engineering expertise to security technology. Renowned for their reliability and innovation, Bosch security systems are the choice of enterprises, government facilities, and critical infrastructure worldwide. From advanced IP video surveillance to integrated building management systems, Bosch delivers scalable, future-proof solutions that protect what matters most.',
  features: [
    'B Series intrusion panels with advanced networking capabilities',
    'BVMS video management for enterprise surveillance',
    'AI-powered video analytics for proactive security',
    'Integrated access control and building management',
    'EN-54 certified fire detection systems',
    'Cloud-based remote services and management',
    'Cybersecurity-hardened products and systems'
  ],
  benefits: {
    residential: [
      'Smart home integration with major platforms',
      'Crystal-clear HD cameras with intelligent alerts',
      'User-friendly mobile app for system control',
      'Professional-grade security at residential scale',
      'Energy-efficient designs reducing operating costs',
      'Expandable systems that grow with your needs',
      'German engineering quality and reliability'
    ],
    commercial: [
      'Enterprise-scale video management systems',
      'AI analytics for perimeter protection and crowd detection',
      'Integration with existing IT infrastructure',
      'Centralized management of multiple sites',
      'Compliance with industry regulations and standards',
      'Redundant systems for mission-critical applications',
      'Comprehensive cybersecurity features'
    ]
  },
  products: [
    {
      name: 'B Series Control Panels',
      description: 'Advanced intrusion detection panels with IP connectivity, smartphone integration, and scalable zone capacity.',
      ideal: 'Commercial buildings and high-security applications'
    },
    {
      name: 'AUTODOME IP Cameras',
      description: 'PTZ cameras with intelligent tracking, starlight technology, and built-in analytics for comprehensive coverage.',
      ideal: 'Large facilities, parking areas, and perimeter security'
    },
    {
      name: 'BVMS',
      description: 'Bosch Video Management System for enterprise-wide surveillance with advanced features and scalability.',
      ideal: 'Multi-site organizations and large campuses'
    },
    {
      name: 'PRAESENSA',
      description: 'IP-based public address and voice alarm system with superior audio quality and reliability.',
      ideal: 'Commercial buildings requiring emergency communications'
    }
  ],
  faqs: [
    {
      question: 'What makes Bosch security systems ideal for commercial applications?',
      answer: 'Bosch specializes in enterprise-grade security with unmatched scalability, reliability, and integration capabilities. Their systems are designed for 24/7 operation in demanding environments, featuring advanced analytics, cybersecurity protection, and seamless integration with building management systems. This makes them perfect for businesses requiring professional-grade security.'
    },
    {
      question: 'Can Bosch systems integrate with my existing security infrastructure?',
      answer: 'Yes, Bosch systems are designed with open standards and extensive integration capabilities. They support ONVIF for cameras, various access control protocols, and can integrate with most existing security equipment. Our technicians specialize in creating unified security solutions that leverage your existing investments.'
    },
    {
      question: 'What video analytics capabilities do Bosch cameras offer?',
      answer: 'Bosch cameras feature advanced AI-powered analytics including intelligent motion detection, perimeter protection, crowd detection, object classification, forensic search, and facial recognition capabilities. These analytics run on-camera, reducing bandwidth and providing real-time alerts for enhanced security.'
    },
    {
      question: 'How does Bosch ensure cybersecurity for their systems?',
      answer: 'Bosch takes cybersecurity seriously with features like secure boot, signed firmware, encrypted communications, certificate-based authentication, and regular security updates. All products undergo rigorous security testing and comply with industry standards for data protection and privacy.'
    },
    {
      question: 'What\'s the typical cost for a Bosch commercial security system?',
      answer: 'Bosch commercial systems are custom-designed for each application. Small business solutions typically start around $2,500, while enterprise deployments vary based on size and requirements. We provide detailed proposals after assessing your specific security needs and existing infrastructure.'
    },
    {
      question: 'Does Security Dynamics provide ongoing support for Bosch systems?',
      answer: 'Absolutely! As an authorized Bosch dealer, we provide comprehensive support including 24/7 monitoring, preventive maintenance, software updates, system expansions, and emergency repairs. Our technicians receive regular Bosch factory training to ensure expert service.'
    }
  ],
  certifications: [
    'Bosch factory-certified technicians',
    'BVMS certified integrators',
    'Video analytics specialists',
    'IP networking certified',
    'NJ Burglar & Fire Alarm Licensed',
    'PA Security System Contractor',
    'NICET Level III certified'
  ],
  warranty: 'Bosch 3-year manufacturer warranty with extended service agreements available'
};

export default function BoschBrandPage() {
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

      <BrandPageTemplate brand={boschBrandData} />
    </>
  );
}