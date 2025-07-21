import { Metadata } from 'next';
import Script from 'next/script';
import BrandPageTemplate from '@/components/templates/BrandPageTemplate';
import { SITE_CONFIG } from '@/lib/utils/constants';

// SEO Metadata
export const metadata: Metadata = {
  title: '2GIG Security Systems NJ & PA | Authorized 2GIG Dealer | Security Dynamics',
  description: 'Expert 2GIG security system installation in New Jersey & Pennsylvania. GC3 panels, eSeries sensors, Alarm.com integration. Call (609) 394-8800.',
  keywords: '2GIG security systems, 2GIG dealer NJ, 2GIG installer PA, GC3 panel, 2GIG eSeries, wireless security systems, Go Control',
  openGraph: {
    title: 'Authorized 2GIG Security Dealer | Wireless Systems NJ & PA',
    description: 'Professional 2GIG installation. GC3 touchscreen panels, encrypted sensors, smart home ready. Serving Mercer County NJ & Bucks County PA.',
    url: `${SITE_CONFIG.url}/brands/2gig`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: '2GIG Security Systems - Security Dynamics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '2GIG Security Systems | Smart Wireless Security NJ & PA',
    description: 'Advanced 2GIG wireless security. Touchscreen control, encryption, home automation. Free quote.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/brands/2gig`,
  },
};

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
  name: '2GIG Security Systems',
  brand: {
    '@type': 'Brand',
    name: '2GIG'
  },
  description: 'Professional 2GIG security system installation featuring GC3 panels and encrypted wireless technology',
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
      name: '2GIG',
      item: `${SITE_CONFIG.url}/brands/2gig`
    }
  ]
};

const twoGigBrandData = {
  name: '2GIG',
  fullName: '2GIG Security Systems',
  tagline: 'Innovative wireless security designed for modern smart homes and businesses',
  description: '2GIG revolutionized home security with the first fully wireless, self-contained security system. Their award-winning touchscreen panels combine security, home automation, and energy management in one elegant solution. With built-in Alarm.com services, encrypted sensors, and extensive smart home compatibility, 2GIG systems deliver professional-grade security with consumer-friendly operation.',
  features: [
    'GC3 touchscreen panel with built-in camera',
    'eSeries encrypted sensors preventing hacking',
    'Native Alarm.com integration for smart features',
    'Z-Wave Plus controller for home automation',
    'Voice annunciation and two-way voice',
    '100% wireless installation preserving walls',
    'Automatic software updates for latest features'
  ],
  benefits: {
    residential: [
      '7" full-color touchscreen with intuitive interface',
      'Built-in camera for visual verification',
      'Control lights, locks, and thermostats',
      'Smartphone control from anywhere',
      'Easy DIY sensor additions',
      'Weather alerts and emergency notifications',
      'Multiple user codes with custom permissions'
    ],
    commercial: [
      'Quick installation minimizing business disruption',
      'Scalable to 100 wireless zones',
      'Commercial fire and CO detection',
      'Remote management reducing service calls',
      'Email/text alerts for business events',
      'Integration with IP cameras',
      'Partition support for multi-tenant'
    ]
  },
  products: [
    {
      name: 'GC3 Panel',
      description: 'Advanced 7" touchscreen control panel with built-in camera, Z-Wave Plus, and dual-path communication.',
      ideal: 'Modern homes wanting all-in-one control'
    },
    {
      name: 'GC2 Panel',
      description: 'Reliable touchscreen panel with essential features and proven performance at an affordable price.',
      ideal: 'Budget-conscious homes and small businesses'
    },
    {
      name: 'eSeries Sensors',
      description: 'Encrypted wireless sensors including motion, door/window, glass break, and environmental detectors.',
      ideal: 'Maximum security against hacking attempts'
    },
    {
      name: 'Edge Panel',
      description: 'Compact, cost-effective panel designed for apartments and small commercial spaces.',
      ideal: 'Rental properties and basic security needs'
    }
  ],
  faqs: [
    {
      question: 'What makes 2GIG systems special compared to other wireless security?',
      answer: '2GIG pioneered the all-in-one wireless security panel and continues to innovate with features like built-in cameras, encrypted sensors, and seamless smart home integration. Their systems are designed for quick installation while providing professional-grade security. The native Alarm.com integration means advanced features work right out of the box.'
    },
    {
      question: 'Are 2GIG wireless sensors secure from hacking?',
      answer: 'Yes! 2GIG eSeries sensors use military-grade encryption to prevent hacking or jamming. Each sensor has a unique encryption key, and all communications are protected. This is especially important as wireless security becomes more common - 2GIG ensures your system can\'t be compromised by tech-savvy intruders.'
    },
    {
      question: 'Can I add sensors to my 2GIG system myself?',
      answer: '2GIG systems are designed for easy expansion. The touchscreen panel walks you through adding sensors with simple prompts. However, we recommend professional installation for optimal placement and to ensure all features are properly configured. We\'re always available to add sensors as your needs change.'
    },
    {
      question: 'Does 2GIG require a contract for monitoring?',
      answer: 'The equipment doesn\'t require a contract, but professional monitoring services typically do. We offer flexible monitoring options including month-to-month plans. The Alarm.com features that make 2GIG special do require active monitoring, but you\'ll find our rates competitive and transparent.'
    },
    {
      question: 'How much does a typical 2GIG system cost?',
      answer: '2GIG systems start around $599 for basic packages including the panel and essential sensors. Most homes need $800-1,500 in equipment for comprehensive coverage. The GC3 panel with advanced features runs about $400-500. We provide free assessments to determine exactly what you need.'
    },
    {
      question: 'Why should I choose Security Dynamics for 2GIG installation?',
      answer: 'We\'ve been installing 2GIG systems since their introduction and know how to maximize their capabilities. Our technicians are certified in 2GIG installation and Alarm.com integration. We provide local support, professional monitoring, and can expand or service your system as needs change. Plus, we\'re just a phone call away.'
    }
  ],
  certifications: [
    '2GIG certified installers',
    'eSeries encryption specialists',
    'Alarm.com integration experts',
    'Z-Wave automation certified',
    'NJ Burglar Alarm Licensed',
    'PA Security Contractor'
  ],
  warranty: '2GIG 2-year manufacturer warranty with extended options available'
};

export default function TwoGigBrandPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="schema-product"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <BrandPageTemplate brand={twoGigBrandData} />
    </>
  );
}