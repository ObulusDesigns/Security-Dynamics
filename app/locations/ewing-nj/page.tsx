import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { allLocations } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get Ewing data
const ewing = allLocations.find(loc => loc.slug === 'ewing-nj')!;
const nearbyLocations = allLocations.filter(loc => 
  loc.county === 'Mercer County' && loc.slug !== 'ewing-nj'
).slice(0, 4);

// Generate metadata
export const metadata: Metadata = {
  title: `${ewing.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Professional security systems for Ewing Township NJ businesses & homes. TCNJ area security, alarm monitoring, access control. Call (609) 394-8800 today!',
  keywords: ewing.seoData.primaryKeyword + ', ' + ewing.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${ewing.seoData.primaryKeyword} | Business & Home Security`,
    description: 'Protect your Ewing Township property with professional security systems. Expert installation near TCNJ, West Trenton areas. Professional security assessment!',
    url: `${SITE_CONFIG.url}/locations/ewing-nj`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Systems in Ewing NJ'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations/ewing-nj`}};

// Schema markup
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}/locations/ewing-nj#business`,
  name: 'Security Dynamics Inc. - Ewing',
  image: SITE_CONFIG.ogImage,
  '@sameAs': [
    COMPANY_INFO.socialMedia?.facebook || '',
    COMPANY_INFO.socialMedia?.linkedin || ''
  ].filter(Boolean),
  telephone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ewing',
    addressRegion: 'NJ',
    postalCode: '08618',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: ewing.coordinates.lat,
    longitude: ewing.coordinates.lng
  },
  areaServed: {
    '@type': 'City',
    name: 'Ewing Township',
    '@id': 'https://en.wikipedia.org/wiki/Ewing_Township,_New_Jersey'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    }
  ],
  description: 'Professional security system installation and monitoring services in Ewing Township, NJ. Serving educational institutions, healthcare facilities, and residential communities.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Security Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Educational Facility Security',
          description: 'Comprehensive security solutions for schools and colleges in Ewing Township'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Healthcare Security Systems',
          description: 'Medical facility security with access control and monitoring'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Residential Security',
          description: '24/7 monitored home security systems for Ewing residents'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '123'
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
      name: 'Locations',
      item: `${SITE_CONFIG.url}/locations`
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'New Jersey',
      item: `${SITE_CONFIG.url}/locations#new-jersey`
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Ewing',
      item: `${SITE_CONFIG.url}/locations/ewing-nj`
    }
  ]
};

const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@type': 'ServiceArea',
  name: 'Ewing Township Security Service Area',
  description: 'Security Dynamics provides comprehensive security solutions throughout Ewing Township, including West Trenton and TCNJ area.',
  provider: {
    '@id': `${SITE_CONFIG.url}/locations/ewing-nj#business`
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Ewing Township',
      '@id': 'https://en.wikipedia.org/wiki/Ewing_Township,_New_Jersey'
    },
    {
      '@type': 'Place',
      name: 'West Trenton'
    },
    {
      '@type': 'Place',
      name: 'TCNJ Campus Area'
    }
  ],
  hasOfferCatalog: {
    '@id': `${SITE_CONFIG.url}/locations/ewing-nj#business`
  }
};

export default function EwingLocationPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script
        id="schema-local-business"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)}}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)}}
      />
      <Script
        id="schema-service-area"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceAreaSchema)}}
      />

      <CityPageTemplate city={ewing} nearbyLocations={nearbyLocations} />
    </>
  );
}