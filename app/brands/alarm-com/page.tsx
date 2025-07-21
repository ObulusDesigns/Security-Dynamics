import { Metadata } from 'next';
import Script from 'next/script';
import BrandPageTemplate from '@/components/templates/BrandPageTemplate';
import { SITE_CONFIG } from '@/lib/utils/constants';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Alarm.com Smart Security Systems NJ & PA | Authorized Dealer | Security Dynamics',
  description: 'Professional Alarm.com installation in New Jersey & Pennsylvania. Smart home automation, video monitoring, energy management. Call (609) 394-8800.',
  keywords: 'Alarm.com dealer NJ, Alarm.com installer PA, smart home security, Alarm.com video monitoring, smart security systems, home automation NJ',
  openGraph: {
    title: 'Authorized Alarm.com Dealer | Smart Security Systems NJ & PA',
    description: 'Expert Alarm.com installation. Complete smart home control, video analytics, energy management. Serving Mercer County NJ & Bucks County PA.',
    url: `${SITE_CONFIG.url}/brands/alarm-com`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Alarm.com Smart Security - Security Dynamics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alarm.com Smart Security | Home Automation NJ & PA',
    description: 'Leading smart security platform. Video analytics, automation, energy savings. Expert installation.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/brands/alarm-com`,
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
  name: 'Alarm.com Smart Security Systems',
  brand: {
    '@type': 'Brand',
    name: 'Alarm.com'
  },
  description: 'Professional Alarm.com smart security installation with home automation and video analytics',
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
      name: 'Alarm.com',
      item: `${SITE_CONFIG.url}/brands/alarm-com`
    }
  ]
};

const alarmcomBrandData = {
  name: 'Alarm.com',
  fullName: 'Alarm.com Smart Security Platform',
  tagline: 'The leading platform for intelligently connected properties, protecting millions of homes and businesses',
  description: 'Alarm.com is the leading platform for the intelligently connected property. Their technology connects security systems, cameras, lights, locks, thermostats, and more into a single smart platform. With advanced AI-powered video analytics, energy management insights, and seamless integrations with popular smart home devices, Alarm.com transforms traditional security into comprehensive property intelligence.',
  features: [
    'Award-winning mobile app with intuitive controls',
    'AI-powered video analytics with person detection',
    'Smart home automation for lights, locks, thermostats',
    'Energy management insights saving up to 23% on bills',
    'Geo-fencing for automatic system responses',
    'Integration with Amazon Alexa and Google Assistant',
    'Professional monitoring with crash & smash protection'
  ],
  benefits: {
    residential: [
      'See and speak to visitors with doorbell cameras',
      'Create custom automation scenes for daily routines',
      'Get alerts for specific events like packages or people',
      'Control everything from one easy-to-use app',
      'Save energy with intelligent thermostat scheduling',
      'Know when family members arrive home safely',
      'Access video history and smart clips'
    ],
    commercial: [
      'Manage multiple properties from one dashboard',
      'Advanced video analytics for business insights',
      'Access control integration for employees',
      'Temperature monitoring for sensitive inventory',
      'Custom user permissions and access levels',
      'Detailed reports for operations and compliance',
      'Open/close reports for franchise management'
    ]
  },
  products: [
    {
      name: 'Smart Security System',
      description: 'Complete security with app control, professional monitoring, and crash & smash protection.',
      ideal: 'Homes and businesses wanting comprehensive protection'
    },
    {
      name: 'Video Analytics',
      description: 'AI-powered cameras that detect people, vehicles, animals, and packages with smart alerts.',
      ideal: 'Properties needing intelligent video monitoring'
    },
    {
      name: 'Smart Home Automation',
      description: 'Control lights, locks, thermostats, and garage doors with scenes and schedules.',
      ideal: 'Modern homes seeking convenience and energy savings'
    },
    {
      name: 'Business Solutions',
      description: 'Commercial-grade features including access control, video verification, and multi-site management.',
      ideal: 'Businesses of all sizes needing scalable solutions'
    }
  ],
  faqs: [
    {
      question: 'What makes Alarm.com better than other smart security platforms?',
      answer: 'Alarm.com stands out with its comprehensive ecosystem, advanced AI analytics, and reliability. Unlike DIY systems, Alarm.com requires professional installation ensuring proper setup. The platform\'s deep integrations, energy insights, and business-grade features make it the choice of over 7.6 million properties.'
    },
    {
      question: 'Can I use Alarm.com with my existing security system?',
      answer: 'Many existing security panels can be upgraded to work with Alarm.com by adding a cellular communicator. Compatible brands include DSC, Honeywell, 2GIG, and others. Our technicians can evaluate your current system and recommend the best upgrade path to add Alarm.com capabilities.'
    },
    {
      question: 'What smart home devices work with Alarm.com?',
      answer: 'Alarm.com integrates with hundreds of devices including smart locks (Yale, Kwikset, Schlage), thermostats (Honeywell, Trane), lights (Linear, Jasco), garage doors (LiftMaster, Chamberlain), and voice assistants (Alexa, Google). The platform acts as a hub coordinating all devices.'
    },
    {
      question: 'How do Alarm.com\'s video analytics work?',
      answer: 'Alarm.com uses advanced AI to analyze video in real-time, detecting and categorizing people, vehicles, animals, and packages. You can set up specific alerts, like "notify me when a person approaches the front door," reducing false alarms while ensuring you\'re informed of important events.'
    },
    {
      question: 'What does Alarm.com cost per month?',
      answer: 'Alarm.com services typically range from $30-60 per month depending on features. Basic interactive services start around $30, video recording adds $5-10, and advanced analytics or automation features may increase the cost. Unlike some platforms, there are no contracts required with many dealers.'
    },
    {
      question: 'Why choose Security Dynamics for Alarm.com installation?',
      answer: 'As an authorized Alarm.com dealer, we provide expert system design, professional installation, and ongoing support. We\'ll help you choose the right equipment, set up automations, and ensure you get maximum value from the platform. Our local presence means quick response for any service needs.'
    }
  ],
  certifications: [
    'Alarm.com authorized dealer',
    'Smart home integration certified',
    'Video analytics specialists',
    'Energy management certified',
    'NJ/PA licensed security contractor',
    'Professional monitoring provider'
  ],
  warranty: 'Equipment warranties vary by manufacturer, Alarm.com platform backed by 24/7 support'
};

export default function AlarmComBrandPage() {
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

      <BrandPageTemplate brand={alarmcomBrandData} />
    </>
  );
}