import { Metadata } from 'next';
import Script from 'next/script';
import BrandPageTemplate from '@/components/templates/BrandPageTemplate';
import { SITE_CONFIG } from '@/lib/utils/constants';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Silent Knight Fire Alarm Systems NJ & PA | Authorized Dealer | Security Dynamics',
  description: 'Professional Silent Knight fire alarm installation in New Jersey & Pennsylvania. IntelliKnight panels, wireless fire systems, emergency communications. Call (609) 394-8800.',
  keywords: 'Silent Knight fire alarms, Silent Knight dealer NJ, IntelliKnight fire panels PA, wireless fire alarms, emergency voice communication, Farenhyt series',
  openGraph: {
    title: 'Silent Knight Fire Alarm Systems | Authorized Dealer NJ & PA',
    description: 'Expert Silent Knight installation. IntelliKnight addressable panels, wireless systems, voice evacuation. Serving Mercer County NJ & Bucks County PA.',
    url: `${SITE_CONFIG.url}/brands/silent-knight`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Silent Knight Fire Alarm Systems - Security Dynamics'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/brands/silent-knight`}};

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
  name: 'Silent Knight Fire Alarm Systems',
  brand: {
    '@type': 'Brand',
    name: 'Silent Knight'
  },
  description: 'Professional Silent Knight fire alarm installation including IntelliKnight addressable panels and emergency communication systems',
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
      name: 'Silent Knight',
      item: `${SITE_CONFIG.url}/brands/silent-knight`
    }
  ]
};

const silentKnightBrandData = {
  name: 'Silent Knight',
  fullName: 'Silent Knight by Honeywell',
  tagline: 'Advanced fire protection and emergency communication from a trusted industry leader',
  description: 'Silent Knight, a Honeywell brand, delivers innovative fire alarm and emergency communication solutions that protect millions of people worldwide. Known for their powerful IntelliKnight series and flexible Farenhyt panels, Silent Knight systems offer exceptional scalability and integration capabilities. Their commitment to open protocols and backward compatibility ensures your investment is protected as technology evolves. From standalone fire panels to integrated life safety networks, Silent Knight provides code-compliant solutions that are intuitive to use and maintain. Security Dynamics\' certified technicians leverage Silent Knight\'s advanced features to create customized life safety systems.',
  features: [
    'IntelliKnight addressable fire alarm control panels',
    'Integrated voice evacuation and mass notification',
    'Wireless fire detection for challenging installations',
    'Built-in Ethernet for remote programming and monitoring',
    'BACnet integration for building automation',
    'Peer-to-peer networking for campus applications',
    'Color touchscreen displays with intuitive interfaces'
  ],
  benefits: {
    residential: [
      'Wireless options perfect for historic buildings',
      'Combination smoke/heat/CO detection',
      'Voice messages in multiple languages',
      'Minimal disruption during installation',
      'Self-testing reduces maintenance visits',
      'Integration with apartment entry systems',
      'Clear, actionable emergency instructions'
    ],
    commercial: [
      'Scalable from 50 to 50,000 devices',
      'Campus-wide networking capabilities',
      'Advanced smoke detection algorithms',
      'Flexible emergency messaging options',
      'Integration with access control and video',
      'Detailed reporting for compliance audits',
      'Remote diagnostics reduce service costs'
    ]
  },
  products: [
    {
      name: 'IntelliKnight 5820XL',
      description: 'Large-scale addressable panel supporting up to 3,180 devices across 10 loops with voice capability.',
      ideal: 'High-rise buildings, hospitals, and campuses'
    },
    {
      name: 'IntelliKnight 5808',
      description: 'Mid-range addressable panel for up to 1,270 devices with built-in digital communicator.',
      ideal: 'Schools, hotels, and office buildings'
    },
    {
      name: 'Farenhyt Series',
      description: 'Versatile panels from 1 to 10 loops with unique programming flexibility and wireless options.',
      ideal: 'Retrofits and buildings needing custom solutions'
    },
    {
      name: 'FlexNet Wireless',
      description: 'Mesh wireless fire detection system eliminating the need for wire runs between devices.',
      ideal: 'Historic buildings and open-area applications'
    }
  ],
  faqs: [
    {
      question: 'What advantages does Silent Knight offer over other fire alarm brands?',
      answer: 'Silent Knight excels in flexibility and scalability. Their IntelliKnight series offers more programming options and integration capabilities than most competitors. The Farenhyt line provides unique flexibility for challenging applications. With Honeywell\'s backing, you get enterprise-grade reliability with excellent technical support and long-term parts availability. Their open protocol approach means easier integration with other building systems.'
    },
    {
      question: 'Can Silent Knight systems integrate with my building automation system?',
      answer: 'Yes! Silent Knight panels feature built-in BACnet communication, allowing seamless integration with most building automation systems. This enables centralized monitoring, coordinated HVAC shutdown during alarms, and simplified facility management. The integration can also provide valuable data for optimizing building operations and energy efficiency while maintaining life safety.'
    },
    {
      question: 'What is FlexNet wireless fire detection?',
      answer: 'FlexNet is Silent Knight\'s mesh wireless fire detection system that eliminates the need for wires between devices. Each device acts as a repeater, creating a self-healing mesh network. This is ideal for historic buildings where running wires would damage architecture, or for protecting large open areas like warehouses. The system is fully supervised and meets all fire codes for wireless systems.'
    },
    {
      question: 'How do Silent Knight\'s voice evacuation systems work?',
      answer: 'Silent Knight\'s integrated voice evacuation delivers clear, calm instructions during emergencies. Pre-recorded messages can be customized for your facility and delivered in multiple languages. Live paging allows real-time instructions. The system can deliver different messages to different building areas, essential for phased evacuation in high-rise buildings. Audio quality exceeds code requirements for intelligibility.'
    },
    {
      question: 'What\'s the investment range for Silent Knight systems?',
      answer: 'Silent Knight offers solutions for every budget. Basic Farenhyt systems start around $3,000 installed for small buildings. Mid-range IntelliKnight systems typically cost $8,000-$20,000 for average commercial buildings. Large-scale systems with voice evacuation and integration are custom-designed and quoted. We provide detailed proposals showing exactly what\'s included and optional features available.'
    },
    {
      question: 'How reliable are Silent Knight fire alarm systems?',
      answer: 'Silent Knight systems are engineered for maximum reliability with redundant processors, supervised circuits, and extensive self-diagnostics. Many systems operate trouble-free for 20+ years with proper maintenance. Their robust design handles power fluctuations and environmental challenges. With Honeywell\'s resources behind them, Silent Knight maintains one of the industry\'s lowest failure rates.'
    }
  ],
  certifications: [
    'Silent Knight factory certified',
    'IntelliKnight programming specialists',
    'NICET certified technicians',
    'Emergency voice/alarm certified',
    'Wireless fire alarm specialists',
    'BACnet integration certified'
  ],
  warranty: 'Silent Knight 3-year manufacturer warranty with lifetime technical support'
};

export default function SilentKnightBrandPage() {
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

      <BrandPageTemplate brand={silentKnightBrandData} />
    </>
  );
}