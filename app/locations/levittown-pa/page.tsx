import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { allLocations } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get Levittown data
const levittown = allLocations.find(loc => loc.slug === 'levittown-pa')!;
const nearbyLocations = allLocations.filter(loc => 
  loc.county === 'Bucks County' && loc.slug !== 'levittown-pa'
).slice(0, 4);

// Generate metadata
export const metadata: Metadata = {
  title: `${levittown.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Professional security systems for Levittown PA homes & businesses. Fairless Hills area coverage. Alarm monitoring, video surveillance. Custom quote!',
  keywords: levittown.seoData.primaryKeyword + ', ' + levittown.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${levittown.seoData.primaryKeyword} | Home & Business Security`,
    description: 'Comprehensive security solutions for Levittown sections. Residential alarm systems and small business security. Expert local installation.',
    url: `${SITE_CONFIG.url}/locations/levittown-pa`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Systems in Levittown PA'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations/levittown-pa`}};

// Schema markup
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}/locations/levittown-pa#business`,
  name: 'Security Dynamics Inc. - Levittown',
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
    addressLocality: 'Levittown',
    addressRegion: 'PA',
    postalCode: '19056',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: levittown.coordinates.lat,
    longitude: levittown.coordinates.lng
  },
  areaServed: {
    '@type': 'City',
    name: 'Levittown',
    '@id': 'https://en.wikipedia.org/wiki/Levittown,_Pennsylvania'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    }
  ],
  description: 'Professional security system installation and monitoring services in Levittown, PA. Serving all Levittown sections with residential security, small business protection, and 24/7 monitoring.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Security Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Residential Security Systems',
          description: 'Home security solutions for all Levittown sections'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Small Business Security',
          description: 'Affordable security systems for Levittown small businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '24/7 Monitoring',
          description: 'Professional alarm monitoring for Levittown properties'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '201'
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
      name: 'Levittown',
      item: `${SITE_CONFIG.url}/locations/levittown-pa`
    }
  ]
};

const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@type': 'ServiceArea',
  name: 'Levittown Security Service Area',
  description: 'Security Dynamics provides comprehensive security solutions throughout all Levittown sections, including Fairless Hills and surrounding communities.',
  provider: {
    '@id': `${SITE_CONFIG.url}/locations/levittown-pa#business`
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Levittown',
      '@id': 'https://en.wikipedia.org/wiki/Levittown,_Pennsylvania'
    },
    {
      '@type': 'Place',
      name: 'Fairless Hills'
    },
    {
      '@type': 'Place',
      name: 'All Levittown Sections'
    }
  ],
  hasOfferCatalog: {
    '@id': `${SITE_CONFIG.url}/locations/levittown-pa#business`
  }
};

export default function LevittownLocationPage() {
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

      <CityPageTemplate city={levittown} nearbyLocations={nearbyLocations} />
    </>
  );
}