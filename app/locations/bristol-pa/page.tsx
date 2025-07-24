import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { allLocations } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get Bristol data
const bristol = allLocations.find(loc => loc.slug === 'bristol-pa')!;
const nearbyLocations = allLocations.filter(loc => 
  loc.county === 'Bucks County' && loc.slug !== 'bristol-pa'
).slice(0, 4);

// Generate metadata
export const metadata: Metadata = {
  title: `${bristol.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Industrial & business security systems for Bristol PA. Bristol Borough, waterfront businesses, Route 13 corridor. Professional installation!',
  keywords: bristol.seoData.primaryKeyword + ', ' + bristol.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${bristol.seoData.primaryKeyword} | Industrial & Commercial Security`,
    description: 'Comprehensive security solutions for Bristol\'s industrial facilities and businesses. Waterfront security, healthcare facility protection.',
    url: `${SITE_CONFIG.url}/locations/bristol-pa`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Systems in Bristol PA'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations/bristol-pa`}};

// Schema markup
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}/locations/bristol-pa#business`,
  name: 'Security Dynamics Inc. - Bristol',
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
    addressLocality: 'Bristol',
    addressRegion: 'PA',
    postalCode: '19007',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: bristol.coordinates.lat,
    longitude: bristol.coordinates.lng
  },
  areaServed: {
    '@type': 'City',
    name: 'Bristol',
    '@id': 'https://en.wikipedia.org/wiki/Bristol,_Pennsylvania'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    }
  ],
  description: 'Professional security system installation and monitoring services in Bristol, PA. Specializing in industrial facility security, healthcare protection, and commercial surveillance.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Security Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Industrial Facility Security',
          description: 'Comprehensive security for Bristol industrial properties'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Healthcare Security',
          description: 'Medical facility security systems and access control'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Waterfront Business Security',
          description: 'Security solutions for Bristol waterfront businesses'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '94'
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
      name: 'Pennsylvania',
      item: `${SITE_CONFIG.url}/locations#pennsylvania`
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Bristol',
      item: `${SITE_CONFIG.url}/locations/bristol-pa`
    }
  ]
};

const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@type': 'ServiceArea',
  name: 'Bristol Security Service Area',
  description: 'Security Dynamics provides comprehensive security solutions throughout Bristol Borough and Township, including Route 13 corridor and waterfront areas.',
  provider: {
    '@id': `${SITE_CONFIG.url}/locations/bristol-pa#business`
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Bristol Borough',
      '@id': 'https://en.wikipedia.org/wiki/Bristol,_Pennsylvania'
    },
    {
      '@type': 'City',
      name: 'Bristol Township'
    },
    {
      '@type': 'Place',
      name: 'Route 13 corridor'
    },
    {
      '@type': 'Place',
      name: 'Bristol waterfront'
    }
  ],
  hasOfferCatalog: {
    '@id': `${SITE_CONFIG.url}/locations/bristol-pa#business`
  }
};

export default function BristolLocationPage() {
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

      <CityPageTemplate city={bristol} nearbyLocations={nearbyLocations} />
    </>
  );
}