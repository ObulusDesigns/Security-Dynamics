import { Metadata } from 'next';
import Script from 'next/script';
import BrandPageTemplate from '@/components/templates/BrandPageTemplate';
import { SITE_CONFIG } from '@/lib/utils/constants';

// SEO Metadata
export const metadata: Metadata = {
  title: 'DMP Security Systems NJ & PA | Digital Monitoring Products Dealer | Security Dynamics',
  description: 'Professional DMP security system installation in New Jersey & Pennsylvania. XR Series panels, Virtual Keypad app, SecureCom wireless. Call (609) 394-8800.',
  keywords: 'DMP security systems, Digital Monitoring Products NJ, DMP dealer PA, XR Series panels, Virtual Keypad, DMP SecureCom, DMP alarm systems',
  openGraph: {
    title: 'Authorized DMP Security Dealer | Digital Monitoring Products NJ & PA',
    description: 'Expert DMP installation and monitoring. XR Series panels, app control, wireless security. Serving Mercer County NJ & Bucks County PA.',
    url: `${SITE_CONFIG.url}/brands/dmp`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'DMP Security Systems - Security Dynamics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMP Security Systems | Made in USA Security NJ & PA',
    description: 'American-made DMP security. XR panels, app control, cellular monitoring. Expert installation.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/brands/dmp`,
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
  name: 'DMP Security Systems',
  brand: {
    '@type': 'Brand',
    name: 'DMP (Digital Monitoring Products)'
  },
  description: 'Professional DMP security system installation featuring XR Series panels and Virtual Keypad technology',
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
      name: 'DMP',
      item: `${SITE_CONFIG.url}/brands/dmp`
    }
  ]
};

const dmpBrandData = {
  name: 'DMP',
  fullName: 'DMP (Digital Monitoring Products)',
  tagline: 'American-made security systems designed and manufactured with pride for over 45 years',
  description: 'DMP designs, engineers, and manufactures all their security products in Springfield, Missouri, ensuring exceptional quality and reliability. Known for innovative features like the Virtual Keypad app and industry-leading wireless range, DMP systems offer user-friendly operation with professional-grade security. Their commitment to backward compatibility and lifetime technical support makes DMP the smart choice for long-term security investments.',
  features: [
    'XR Series panels made in the USA with lifetime support',
    'Virtual Keypad app for complete system control',
    'SecureCom wireless with 2-mile range capability',
    'Built-in cellular communication for reliability',
    'Intrusion, fire, and access control in one platform',
    'No monthly fees for app access or features',
    'Backward compatible protecting your investment'
  ],
  benefits: {
    residential: [
      'Easy-to-use Virtual Keypad app at no extra cost',
      'Favorite button for one-touch arming',
      'Z-Wave Plus home automation built-in',
      'Graphic touchscreen keypads with intuitive icons',
      'Wireless sensors preserve home aesthetics',
      'Email and text notifications for system events',
      'Garage door control and status monitoring'
    ],
    commercial: [
      'Scalable from small business to enterprise',
      'Built-in access control for up to 2,000 users',
      'Areas feature for multi-tenant management',
      'Detailed audit trails and reporting',
      'Integration with video surveillance',
      'Multiple communication paths for redundancy',
      'Remote programming saves service calls'
    ]
  },
  products: [
    {
      name: 'XR550 Series',
      description: 'Advanced hybrid panel supporting 100 zones with built-in cellular, Wi-Fi, and Z-Wave Plus capabilities.',
      ideal: 'Larger homes and commercial properties'
    },
    {
      name: 'XR150 Series',
      description: 'Versatile all-in-one panel perfect for residential and small commercial applications.',
      ideal: 'Homes and small businesses'
    },
    {
      name: 'XT Series',
      description: 'Wireless-only panels with powerful features in a compact design for quick installations.',
      ideal: 'Apartments and retrofit applications'
    },
    {
      name: 'SecureCom Wireless',
      description: 'Long-range encrypted wireless technology with up to 2-mile open-air range.',
      ideal: 'Large properties and challenging installations'
    }
  ],
  faqs: [
    {
      question: 'What makes DMP different from other security brands?',
      answer: 'DMP stands out with their 100% American manufacturing, lifetime technical support, and innovative Virtual Keypad app that\'s free with no monthly fees. Their panels are designed for easy use while providing professional-grade features. Plus, DMP\'s commitment to backward compatibility means your system won\'t become obsolete.'
    },
    {
      question: 'What is the Virtual Keypad app and how does it work?',
      answer: 'Virtual Keypad is DMP\'s free smartphone app that gives you complete control of your security system from anywhere. You can arm/disarm, check status, control Z-Wave devices, view history, and receive push notifications. Unlike competitors, there are no monthly fees or subscriptions - it\'s included with your DMP system.'
    },
    {
      question: 'Can DMP systems integrate with smart home devices?',
      answer: 'Yes! DMP panels include built-in Z-Wave Plus controllers supporting lights, locks, thermostats, and more. The system integrates with over 2,000 Z-Wave devices, and you can control everything through the Virtual Keypad app or touchscreen keypads. Automation rules let you create custom scenes and schedules.'
    },
    {
      question: 'How reliable is DMP\'s wireless technology?',
      answer: 'DMP\'s SecureCom wireless is exceptionally reliable with up to 2-mile range in open air. It uses frequency-hopping spread spectrum technology to avoid interference and provides encrypted, supervised communication. The long range means fewer repeaters needed, reducing installation costs.'
    },
    {
      question: 'What does a typical DMP system installation cost?',
      answer: 'DMP systems start around $799 for basic packages and range up to $2,500 for advanced systems with home automation. Commercial systems are custom-quoted based on size and features. The lack of monthly app fees and long product life make DMP very cost-effective over time.'
    },
    {
      question: 'Why should I choose Security Dynamics for my DMP system?',
      answer: 'As an authorized DMP dealer, our technicians are factory-trained on all DMP products. We provide expert installation, 24/7 monitoring, and local support. With over 35 years serving NJ and PA, we understand local requirements and can design the perfect DMP solution for your needs.'
    }
  ],
  certifications: [
    'DMP factory-trained technicians',
    'Virtual Keypad certified',
    'Z-Wave integration specialists',
    'SecureCom wireless certified',
    'NJ Burglar & Fire Alarm Licensed',
    'PA Security System Contractor'
  ],
  warranty: 'DMP 3-year limited warranty with lifetime technical support'
};

export default function DMPBrandPage() {
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

      <BrandPageTemplate brand={dmpBrandData} />
    </>
  );
}