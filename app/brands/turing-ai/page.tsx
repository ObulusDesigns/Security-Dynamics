import { Metadata } from 'next';
import Script from 'next/script';
import BrandPageTemplate from '@/components/templates/BrandPageTemplate';
import { SITE_CONFIG } from '@/lib/utils/constants';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Turing AI Video Analytics NJ & PA | Smart Security Solutions | Security Dynamics',
  description: 'Advanced Turing AI video analytics installation in New Jersey & Pennsylvania. Person detection, vehicle analytics, cloud-native platform. Call (609) 394-8800.',
  keywords: 'Turing AI video analytics, AI security cameras NJ, smart video surveillance PA, person detection, vehicle analytics, cloud security, AI-powered alerts',
  openGraph: {
    title: 'Turing AI Video Analytics | Authorized Partner NJ & PA',
    description: 'Next-generation AI video analytics by Turing. Real-time alerts, person & vehicle detection, cloud platform. Serving Mercer County NJ & Bucks County PA.',
    url: `${SITE_CONFIG.url}/brands/turing-ai`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Turing AI Video Analytics - Security Dynamics'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/brands/turing-ai`}};

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
  name: 'Turing AI Video Analytics',
  brand: {
    '@type': 'Brand',
    name: 'Turing AI'
  },
  description: 'Professional installation of Turing AI video analytics platform with advanced person and vehicle detection capabilities',
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
      name: 'Turing AI',
      item: `${SITE_CONFIG.url}/brands/turing-ai`
    }
  ]
};

const turingBrandData = {
  name: 'Turing AI',
  fullName: 'Turing AI Video Analytics',
  tagline: 'Transform traditional cameras into intelligent security systems with advanced AI',
  description: 'Turing AI revolutionizes video security by bringing advanced artificial intelligence to any camera system. Their cloud-native platform transforms existing cameras into smart detectors that understand what they see - distinguishing between people, vehicles, and animals while ignoring irrelevant motion. With over 60 real-time alerts and searches, Turing AI helps security teams focus on what matters. The system learns and improves over time, dramatically reducing false alarms while ensuring critical events are never missed. As a Turing AI partner, Security Dynamics helps businesses leverage this powerful technology to enhance security and operational efficiency.',
  features: [
    'Works with existing cameras - no hardware replacement needed',
    'Over 60 AI-powered alerts including person, vehicle, and animal detection',
    'License plate recognition and vehicle attribute search',
    'Instant clip sharing and cloud storage',
    'Cross-camera search to track people or vehicles',
    'Natural language search - "show me all red trucks yesterday"',
    'Continuous AI improvements via cloud updates'
  ],
  benefits: {
    residential: [
      'Transform existing cameras into smart detectors',
      'Eliminate false alarms from shadows, rain, or animals',
      'Instant alerts when people approach your property',
      'Package detection and delivery notifications',
      'Visitor recognition and familiar face alerts',
      'Search events using simple descriptions',
      'Share video evidence instantly with police'
    ],
    commercial: [
      'Convert any camera system to intelligent analytics',
      'Real-time alerts for specific events and behaviors',
      'Search across all cameras simultaneously',
      'Detailed analytics on foot traffic and dwell time',
      'License plate recognition for access control',
      'Proactive alerts for loitering or unusual activity',
      'ROI through operational insights and loss prevention'
    ]
  },
  products: [
    {
      name: 'Turing Vision',
      description: 'Core AI platform that connects to existing cameras and provides intelligent alerts and search.',
      ideal: 'Any business with existing cameras wanting AI capabilities'
    },
    {
      name: 'Vehicle Analytics',
      description: 'Advanced vehicle detection including make, model, color, and license plate recognition.',
      ideal: 'Parking lots, dealerships, and access control'
    },
    {
      name: 'Retail Analytics',
      description: 'Customer behavior analysis including people counting, dwell time, and queue management.',
      ideal: 'Retail stores and customer service locations'
    },
    {
      name: 'Perimeter Protection',
      description: 'Smart fence line monitoring with person vs animal discrimination and intrusion alerts.',
      ideal: 'Warehouses, critical infrastructure, and large properties'
    }
  ],
  faqs: [
    {
      question: 'How does Turing AI work with my existing cameras?',
      answer: 'Turing AI connects to your existing camera system through your network, analyzing the video feeds in real-time. There\'s no need to replace cameras - Turing AI works with most IP cameras and even analog systems with encoders. The AI processing happens in the cloud, so your cameras instantly become intelligent without any hardware upgrades. Setup is typically complete within hours, not days.'
    },
    {
      question: 'What makes Turing AI different from built-in camera analytics?',
      answer: 'While many cameras offer basic motion detection, Turing AI provides true artificial intelligence that understands what it sees. The system can differentiate between people, vehicles, animals, and objects - not just detect motion. With over 60 types of alerts and natural language search, Turing AI offers capabilities that far exceed basic camera analytics. Plus, the AI continuously improves through cloud updates.'
    },
    {
      question: 'How accurate is Turing AI at reducing false alarms?',
      answer: 'Turing AI typically reduces false alarms by 95% or more compared to traditional motion detection. The AI ignores common triggers like shadows, headlights, rain, and small animals. When configured properly, you\'ll only receive alerts for events that matter. The system also learns from feedback, becoming more accurate over time for your specific environment.'
    },
    {
      question: 'Is my video data secure with Turing AI?',
      answer: 'Yes, Turing AI employs bank-level security for all video data. Video streams are encrypted end-to-end, and the platform is SOC 2 certified. You maintain complete control over data retention and access permissions. Video can be stored locally, in the cloud, or both. Turing AI\'s infrastructure includes redundancy and meets enterprise security requirements.'
    },
    {
      question: 'What\'s the cost of adding Turing AI to my cameras?',
      answer: 'Turing AI is priced per camera per month, typically ranging from $10-20 depending on features and volume. There\'s no expensive hardware to buy - just a monthly subscription for the cameras you want to make smart. Most customers see ROI within 3-6 months through reduced false alarms, prevented incidents, and operational insights. We provide custom quotes based on your specific needs.'
    },
    {
      question: 'Can Turing AI help with more than just security?',
      answer: 'Absolutely! While security is the primary use case, Turing AI provides valuable business intelligence. Retailers use it for customer counting and heat mapping. Warehouses track vehicle flow and loading dock efficiency. Property managers monitor parking utilization. The same cameras protecting your business can also help you understand and optimize operations.'
    }
  ],
  certifications: [
    'Turing AI certified partner',
    'AI analytics configuration specialist',
    'Video system integration expert',
    'Cloud security certified',
    'Analytics optimization trained',
    'ROI assessment qualified'
  ],
  warranty: 'Turing AI platform backed by 99.9% uptime SLA and continuous updates'
};

export default function TuringAIBrandPage() {
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

      <BrandPageTemplate brand={turingBrandData} />
    </>
  );
}