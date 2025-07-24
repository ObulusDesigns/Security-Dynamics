import { Metadata } from 'next';
import Script from 'next/script';
import BrandPageTemplate from '@/components/templates/BrandPageTemplate';
import { SITE_CONFIG } from '@/lib/utils/constants';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Potter Fire & Security Systems NJ & PA | Authorized Dealer | Security Dynamics',
  description: 'Professional Potter fire alarm and security installation in New Jersey & Pennsylvania. PFC series panels, nitrogen generation, sprinkler monitoring. Call (609) 394-8800.',
  keywords: 'Potter fire alarms, Potter dealer NJ, Potter security PA, PFC fire panels, nitrogen generation systems, sprinkler monitoring, corrosion solutions',
  openGraph: {
    title: 'Potter Fire & Security Systems | Authorized Dealer NJ & PA',
    description: 'Expert Potter system installation. Fire alarms, sprinkler monitoring, nitrogen generation. Serving Mercer County NJ & Bucks County PA.',
    url: `${SITE_CONFIG.url}/brands/potter`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Potter Fire & Security Systems - Security Dynamics'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/brands/potter`}};

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
  name: 'Potter Fire & Security Systems',
  brand: {
    '@type': 'Brand',
    name: 'Potter Electric Signal Company'
  },
  description: 'Professional Potter fire alarm and security system installation including PFC panels and nitrogen generation systems',
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
      name: 'Potter',
      item: `${SITE_CONFIG.url}/brands/potter`
    }
  ]
};

const potterBrandData = {
  name: 'Potter',
  fullName: 'Potter Electric Signal Company',
  tagline: 'Innovative fire and security solutions from America\'s premier signal company since 1898',
  description: 'Potter Electric Signal Company has been protecting lives and property for over 120 years with innovative fire alarm, security, and sprinkler monitoring solutions. Beyond traditional fire panels, Potter pioneered nitrogen generation technology that prevents corrosion in sprinkler systems, dramatically extending their life. Their comprehensive product line includes everything from basic fire panels to sophisticated networked systems with integrated security capabilities. Known for reliability, innovation, and exceptional support, Potter products are manufactured in the USA and backed by one of the industry\'s most responsive technical teams. Security Dynamics brings Potter\'s innovative solutions to businesses throughout New Jersey and Pennsylvania.',
  features: [
    'PFC series addressable and conventional fire panels',
    'Integrated fire alarm and security systems',
    'Nitrogen generation for sprinkler corrosion prevention',
    'Comprehensive sprinkler system monitoring',
    'IP-based communication and monitoring',
    'Made in USA with robust construction',
    'Industry-leading 5-year warranty'
  ],
  benefits: {
    residential: [
      'Combined fire and security in one system',
      'Wireless options for easy installation',
      'Sprinkler monitoring prevents water damage',
      'Nitrogen systems extend sprinkler life 5-10x',
      'User-friendly keypads and controls',
      'Remote access via smartphone apps',
      'Lower insurance premiums with monitored systems'
    ],
    commercial: [
      'Reduce sprinkler replacement costs by 80%',
      'Network multiple buildings on one system',
      'Advanced detection algorithms reduce false alarms',
      'Integrated security saves equipment costs',
      'Detailed reporting for insurance compliance',
      'American-made quality and support',
      'Scalable from small shops to large facilities'
    ]
  },
  products: [
    {
      name: 'PFC-6000 Series',
      description: 'Addressable fire alarm panels with up to 6 loops, supporting 1,134 devices with optional voice.',
      ideal: 'Medium to large commercial facilities'
    },
    {
      name: 'PFC-4410 Series',
      description: 'Combination fire/security panels providing integrated protection in a single system.',
      ideal: 'Businesses wanting consolidated life safety'
    },
    {
      name: 'PSN Series',
      description: 'Nitrogen generation systems preventing corrosion in dry and preaction sprinkler systems.',
      ideal: 'Any facility with dry-pipe sprinklers'
    },
    {
      name: 'VSR-S Series',
      description: 'Vane-type waterflow switches and sprinkler monitoring devices with enhanced reliability.',
      ideal: 'Sprinkler system monitoring applications'
    }
  ],
  faqs: [
    {
      question: 'What makes Potter different from other fire alarm manufacturers?',
      answer: 'Potter stands out through innovation and integration. They\'re the only major fire alarm manufacturer offering nitrogen generation for sprinkler systems, potentially saving hundreds of thousands in pipe replacement costs. Their combined fire/security panels reduce equipment needs. With 120+ years of experience and USA manufacturing, Potter delivers exceptional reliability backed by responsive technical support that\'s unmatched in the industry.'
    },
    {
      question: 'What is nitrogen generation and why is it important for sprinklers?',
      answer: 'Potter\'s nitrogen generation systems replace oxygen in dry-pipe sprinkler systems with nitrogen gas, preventing corrosion that causes pinhole leaks and pipe failure. Without nitrogen, dry systems typically need replacement every 12-15 years. With Potter\'s nitrogen systems, pipes can last 50+ years. This technology can save facilities hundreds of thousands of dollars while preventing catastrophic water damage from pipe failures.'
    },
    {
      question: 'Can Potter systems combine fire alarm and security functions?',
      answer: 'Yes! Potter\'s PFC-4410 series uniquely combines fire alarm and security in one panel. This integration reduces equipment costs, simplifies operation, and provides unified monitoring. One keypad controls both systems, and events are logged together for better incident investigation. This approach is perfect for businesses wanting comprehensive protection without the complexity of separate systems.'
    },
    {
      question: 'How does Potter\'s warranty compare to other brands?',
      answer: 'Potter offers one of the industry\'s best warranties - 5 years on most products compared to the typical 1-2 years. This reflects their confidence in product quality and USA manufacturing standards. The warranty includes technical support, and Potter maintains parts availability for decades. Many Potter systems installed in the 1990s are still operating reliably with full support available.'
    },
    {
      question: 'What\'s the cost range for Potter fire and security systems?',
      answer: 'Potter systems offer excellent value. Basic fire panels start around $2,000 installed. Combined fire/security systems range from $4,000-$12,000 for most commercial applications. Nitrogen generation systems cost $8,000-$20,000 but often pay for themselves by preventing one pipe replacement. We provide ROI analysis showing long-term savings, especially for facilities with dry-pipe sprinklers.'
    },
    {
      question: 'Is Potter suitable for facilities with existing sprinkler systems?',
      answer: 'Absolutely! Potter specializes in sprinkler monitoring and protection. Their devices work with any manufacturer\'s sprinkler system. For facilities with dry-pipe systems, adding Potter nitrogen generation can extend system life dramatically. Their waterflow switches and tamper devices are considered the industry\'s most reliable. We often upgrade just the monitoring components to Potter while keeping existing sprinkler piping.'
    }
  ],
  certifications: [
    'Potter factory trained and certified',
    'Nitrogen system specialist certification',
    'Combined fire/security certified',
    'Sprinkler monitoring specialist',
    'NICET fire alarm certified',
    'Corrosion prevention certified'
  ],
  warranty: 'Potter 5-year manufacturer warranty - industry\'s best protection'
};

export default function PotterBrandPage() {
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

      <BrandPageTemplate brand={potterBrandData} />
    </>
  );
}