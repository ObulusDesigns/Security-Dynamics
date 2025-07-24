import { Metadata } from 'next';
import Script from 'next/script';
import BrandPageTemplate from '@/components/templates/BrandPageTemplate';
import { SITE_CONFIG } from '@/lib/utils/constants';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Keri Systems Access Control NJ & PA | Authorized Dealer | Security Dynamics',
  description: 'Professional Keri Systems access control installation in New Jersey & Pennsylvania. Doors.NET software, wireless locks, telephone entry. Call (609) 394-8800.',
  keywords: 'Keri Systems access control, Keri dealer NJ, Doors.NET software PA, wireless access control, telephone entry systems, PXL tiger controllers, NXT door controllers',
  openGraph: {
    title: 'Keri Systems Access Control | Authorized Dealer NJ & PA',
    description: 'Expert Keri Systems installation. Doors.NET software, wireless locks, scalable access control. Serving Mercer County NJ & Bucks County PA.',
    url: `${SITE_CONFIG.url}/brands/keri-systems`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Keri Systems Access Control - Security Dynamics'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/brands/keri-systems`}};

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
  name: 'Keri Systems Access Control',
  brand: {
    '@type': 'Brand',
    name: 'Keri Systems'
  },
  description: 'Professional Keri Systems access control installation including Doors.NET software and wireless lock integration',
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
      name: 'Keri Systems',
      item: `${SITE_CONFIG.url}/brands/keri-systems`
    }
  ]
};

const keriBrandData = {
  name: 'Keri Systems',
  fullName: 'Keri Systems Access Control',
  tagline: 'Powerful, affordable access control solutions that scale with your business',
  description: 'Keri Systems has been a leader in access control for over 30 years, delivering reliable, cost-effective solutions that don\'t compromise on features. Their Doors.NET software platform provides enterprise-level functionality at a fraction of the cost of competing systems. From single-door applications to multi-site enterprises, Keri\'s scalable architecture grows with your needs. Their commitment to open standards, backward compatibility, and lifetime technical support makes Keri an excellent long-term investment. Security Dynamics leverages our deep Keri expertise to design and install systems that maximize security while minimizing complexity.',
  features: [
    'Doors.NET software with unlimited doors and users',
    'No annual licensing fees or hidden costs',
    'Wireless lock integration for retrofit applications',
    'Powerful telephone entry and intercom systems',
    'Mobile credentials and smartphone access',
    'Elevator control and floor-by-floor access',
    'Time and attendance tracking capabilities'
  ],
  benefits: {
    residential: [
      'Keyless entry with cards, fobs, or smartphones',
      'Visitor management with temporary credentials',
      'Gate and garage door control integration',
      'Video intercom for visual verification',
      'Remote door release from anywhere',
      'Detailed entry logs for security',
      'Easy management of multiple properties'
    ],
    commercial: [
      'Centralized control of unlimited doors',
      'Advanced scheduling and holiday management',
      'Anti-passback and dual custody options',
      'Integration with video and intrusion systems',
      'Compliance reporting for audits',
      'Multi-site management from one location',
      'Cost-effective expansion as you grow'
    ]
  },
  products: [
    {
      name: 'Doors.NET Software',
      description: 'Comprehensive access control software with no door or user limits, including advanced features.',
      ideal: 'Any size business wanting professional access control'
    },
    {
      name: 'PXL Tiger Controllers',
      description: 'Network-based controllers supporting up to 512 doors per unit with built-in web interface.',
      ideal: 'Large facilities and multi-building campuses'
    },
    {
      name: 'NXT Door Controllers',
      description: 'Compact controllers for 2-4 doors, perfect for smaller installations with full features.',
      ideal: 'Small businesses and single locations'
    },
    {
      name: 'Telephone Entry Systems',
      description: 'Vandal-resistant entry systems with directory, video, and cellular connectivity options.',
      ideal: 'Apartment buildings and gated communities'
    }
  ],
  faqs: [
    {
      question: 'How does Keri Systems compare to other access control brands?',
      answer: 'Keri Systems offers enterprise-level features without the enterprise price tag. Unlike many competitors, Keri has no licensing fees, no user limits, and no door limits. Their Doors.NET software includes features that cost extra elsewhere, like graphical maps, video integration, and advanced reporting. The hardware is reliable, made in the USA, and backed by exceptional support.'
    },
    {
      question: 'Can Keri Systems work with my existing card system?',
      answer: 'Yes! Keri readers support multiple card technologies including proximity, smart cards, and mobile credentials. If you have existing cards from another system, we can often configure Keri to read them, avoiding the cost and hassle of reissuing credentials. Their open architecture also allows integration with many third-party systems.'
    },
    {
      question: 'What is Doors.NET and what makes it special?',
      answer: 'Doors.NET is Keri\'s flagship access control software that manages everything from card holders to door schedules. What makes it special is its combination of powerful features and ease of use. You get unlimited doors, users, and workstations without additional licensing. The software includes advanced features like anti-passback, elevator control, and time/attendance without extra modules.'
    },
    {
      question: 'How reliable are Keri Systems products?',
      answer: 'Keri Systems is known for exceptional reliability. Their controllers include battery backup and continue operating even if the software PC fails. With a mean time between failures measured in decades and products still supported after 20+ years, Keri provides long-term value. Their US-based manufacturing and testing ensure consistent quality.'
    },
    {
      question: 'What\'s the typical cost for a Keri access control system?',
      answer: 'Keri Systems are very cost-effective. Basic single-door systems start around $1,500 installed. Small business systems (4-8 doors) typically range from $5,000-$10,000. Larger installations are custom-quoted but generally cost 30-40% less than comparable systems due to no licensing fees. We provide detailed proposals with transparent pricing.'
    },
    {
      question: 'Can I manage Keri Systems remotely?',
      answer: 'Absolutely! Doors.NET includes remote management capabilities, allowing you to control your system from anywhere. Add/delete users, change schedules, unlock doors, and view reports from any PC. The optional mobile app provides basic functions from your smartphone. For multi-site businesses, you can manage all locations from one interface.'
    }
  ],
  certifications: [
    'Keri Systems certified installer',
    'Doors.NET advanced training',
    'Telephone entry specialist certification',
    'Integration professional',
    'Technical support authorization',
    'Lifetime support certified'
  ],
  warranty: 'Keri Systems 2-year warranty with lifetime technical support'
};

export default function KeriSystemsBrandPage() {
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

      <BrandPageTemplate brand={keriBrandData} />
    </>
  );
}