import { Metadata } from 'next';
import Script from 'next/script';
import BrandPageTemplate from '@/components/templates/BrandPageTemplate';
import { SITE_CONFIG } from '@/lib/utils/constants';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Fire-Lite Fire Alarm Systems NJ & PA | Authorized Dealer | Security Dynamics',
  description: 'Professional Fire-Lite fire alarm installation in New Jersey & Pennsylvania. Addressable panels, voice evacuation, NFPA compliant. Call (609) 394-8800.',
  keywords: 'Fire-Lite fire alarms, Fire-Lite dealer NJ, fire alarm systems PA, addressable fire panels, MS-9600UDLS, voice evacuation, NFPA 72 compliant',
  openGraph: {
    title: 'Fire-Lite Fire Alarm Systems | Authorized Dealer NJ & PA',
    description: 'Expert Fire-Lite fire alarm installation. Addressable systems, voice evacuation, code compliant. Serving Mercer County NJ & Bucks County PA.',
    url: `${SITE_CONFIG.url}/brands/firelite`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Fire-Lite Fire Alarm Systems - Security Dynamics'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/brands/firelite`}};

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
  name: 'Fire-Lite Fire Alarm Systems',
  brand: {
    '@type': 'Brand',
    name: 'Fire-Lite'
  },
  description: 'Professional Fire-Lite fire alarm system installation including addressable panels and voice evacuation systems',
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
      name: 'Fire-Lite',
      item: `${SITE_CONFIG.url}/brands/firelite`
    }
  ]
};

const fireliteBrandData = {
  name: 'Fire-Lite',
  fullName: 'Fire-Lite Alarms by Honeywell',
  tagline: 'Cost-effective fire protection that doesn\'t compromise on safety or reliability',
  description: 'Fire-Lite Alarms, a Honeywell company, has been protecting lives and property for over 70 years with innovative, cost-effective fire alarm solutions. Their systems combine the reliability of Honeywell engineering with pricing that makes professional fire protection accessible to businesses of all sizes. From conventional panels for small applications to sophisticated addressable systems with voice evacuation, Fire-Lite offers code-compliant solutions that are easy to install, maintain, and expand. As a certified Fire-Lite dealer, Security Dynamics ensures your fire alarm system meets all codes while providing reliable, life-saving protection.',
  features: [
    'Full line from conventional to addressable systems',
    'Voice evacuation and emergency communication',
    'Built-in digital communicators for central monitoring',
    'Easy programming with upload/download software',
    'Extensive device compatibility and options',
    'UL Listed and NFPA 72 compliant',
    'Backward compatible for easy upgrades'
  ],
  benefits: {
    residential: [
      'Code-compliant fire protection for multi-family buildings',
      'Combination smoke/CO detection available',
      'Voice evacuation for clear emergency instructions',
      'Minimal aesthetic impact with discrete devices',
      'Low maintenance with self-testing features',
      'Integration with security systems',
      'Affordable monitoring options'
    ],
    commercial: [
      'Scalable from small offices to large complexes',
      'Addressable technology pinpoints alarm location',
      'Mass notification capabilities',
      'Elevator recall and HVAC shutdown',
      'Detailed event history for compliance',
      'Network multiple panels across buildings',
      'Cost-effective code compliance'
    ]
  },
  products: [
    {
      name: 'MS-9600UDLS Series',
      description: 'Intelligent addressable fire alarm control panels supporting up to 636 devices per panel.',
      ideal: 'Medium to large commercial buildings'
    },
    {
      name: 'ES Series',
      description: 'Affordable addressable panels perfect for small to medium applications up to 200 devices.',
      ideal: 'Small offices, retail stores, and schools'
    },
    {
      name: 'MS-5UD Series',
      description: 'Conventional fire alarm panels with 5 to 10 zones for basic applications.',
      ideal: 'Small buildings and retrofit projects'
    },
    {
      name: 'ECC Series',
      description: 'Emergency command centers with voice evacuation and firefighter telephone systems.',
      ideal: 'High-rise buildings and large complexes'
    }
  ],
  faqs: [
    {
      question: 'Why choose Fire-Lite over other fire alarm brands?',
      answer: 'Fire-Lite offers the perfect balance of reliability, features, and affordability. As part of Honeywell, they provide proven technology backed by extensive R&D and support. Their systems are easier to install and program than many competitors, reducing installation costs. With broad device compatibility and a full product range, Fire-Lite can protect any size building while maintaining code compliance.'
    },
    {
      question: 'Are Fire-Lite systems suitable for my building type?',
      answer: 'Yes! Fire-Lite manufactures systems for every application - from small offices needing basic protection to high-rise buildings requiring voice evacuation and complex integration. Their product line includes conventional, addressable, and wireless options. Our team will assess your building\'s specific requirements, local codes, and budget to recommend the ideal Fire-Lite solution.'
    },
    {
      question: 'How do addressable fire alarm systems benefit my building?',
      answer: 'Addressable systems like Fire-Lite\'s MS-9600UDLS provide exact location information when a device activates, allowing faster response and reduced property damage. They also offer advanced features like drift compensation, individual device testing, and detailed event logs. While slightly more expensive initially, addressable systems typically provide lower total cost through easier maintenance and fewer false alarms.'
    },
    {
      question: 'What codes and standards do Fire-Lite systems meet?',
      answer: 'All Fire-Lite systems are UL/ULC Listed and meet NFPA 72 National Fire Alarm Code requirements. They also comply with local codes including New Jersey\'s fire code and Pennsylvania\'s adopted standards. Our certified technicians ensure every installation meets or exceeds all applicable codes, and we handle permit applications and inspections as part of our service.'
    },
    {
      question: 'What\'s the typical cost for a Fire-Lite fire alarm system?',
      answer: 'Fire-Lite systems are competitively priced. Basic conventional systems for small buildings start around $2,500 installed. Addressable systems for medium buildings typically range from $5,000-$15,000. Large systems with voice evacuation are custom-quoted. Costs depend on building size, device count, and features required. We provide detailed proposals with transparent pricing after a site survey.'
    },
    {
      question: 'How often do Fire-Lite systems need testing and maintenance?',
      answer: 'NFPA 72 requires annual testing and inspection of all fire alarm systems. Fire-Lite systems include self-diagnostic features that simplify maintenance. We offer comprehensive service agreements that include all required testing, 24/7 monitoring, and priority emergency service. Regular maintenance ensures reliability, code compliance, and can extend system life well beyond 20 years.'
    }
  ],
  certifications: [
    'Fire-Lite factory certified',
    'NICET Level III technicians',
    'NJ Fire Alarm License P00747',
    'PA fire alarm contractor',
    'NFPA 72 code specialists',
    'UL Listed installation company'
  ],
  warranty: 'Fire-Lite 3-year manufacturer warranty with extended service agreements available'
};

export default function FireLiteBrandPage() {
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

      <BrandPageTemplate brand={fireliteBrandData} />
    </>
  );
}