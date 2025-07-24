import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { allLocations } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get Yardley data
const yardley = allLocations.find(loc => loc.slug === 'yardley-pa')!;
const nearbyLocations = allLocations.filter(loc => 
  loc.county === 'Bucks County' && loc.slug !== 'yardley-pa'
).slice(0, 4);

// Generate metadata
export const metadata: Metadata = {
  title: `${yardley.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Luxury security systems for Yardley PA homes & businesses. Delaware River properties, historic Yardley Borough. Premium security solutions.',
  keywords: yardley.seoData.primaryKeyword + ', ' + yardley.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${yardley.seoData.primaryKeyword} | Luxury & Riverfront Security`,
    description: 'Premium security solutions for Yardley\'s riverfront properties and historic homes. Discrete installation, advanced technology.',
    url: `${SITE_CONFIG.url}/locations/yardley-pa`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Systems in Yardley PA'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations/yardley-pa`}};

// Schema markup
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}/locations/yardley-pa#business`,
  name: 'Security Dynamics Inc. - Yardley',
  image: SITE_CONFIG.ogImage,
  '@sameAs': [
    COMPANY_INFO.socialMedia?.facebook || '',
    COMPANY_INFO.socialMedia?.linkedin || ''
  ].filter(Boolean),
  telephone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Yardley',
    addressRegion: 'PA',
    postalCode: '19067',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: yardley.coordinates.lat,
    longitude: yardley.coordinates.lng
  },
  areaServed: {
    '@type': 'City',
    name: 'Yardley',
    '@id': 'https://en.wikipedia.org/wiki/Yardley,_Pennsylvania'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    }
  ],
  description: 'Professional security system installation and monitoring services in Yardley, PA. Specializing in luxury home security, riverfront property protection, and boutique business systems.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Security Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Riverfront Property Security',
          description: 'Specialized security for Delaware River properties'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Historic Home Security',
          description: 'Discrete systems for historic Yardley homes'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Boutique Business Security',
          description: 'Premium security for Yardley Borough businesses'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '67'
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
      name: 'Yardley',
      item: `${SITE_CONFIG.url}/locations/yardley-pa`
    }
  ]
};

const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@type': 'ServiceArea',
  name: 'Yardley Security Service Area',
  description: 'Security Dynamics provides comprehensive security solutions throughout Yardley Borough, including Delaware River properties and historic Yardley areas.',
  provider: {
    '@id': `${SITE_CONFIG.url}/locations/yardley-pa#business`
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Yardley Borough',
      '@id': 'https://en.wikipedia.org/wiki/Yardley,_Pennsylvania'
    },
    {
      '@type': 'Place',
      name: 'Delaware River area'
    },
    {
      '@type': 'Place',
      name: 'Historic Yardley'
    }
  ],
  hasOfferCatalog: {
    '@id': `${SITE_CONFIG.url}/locations/yardley-pa#business`
  }
};

export default function YardleyLocationPage() {
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

      <CityPageTemplate city={yardley} nearbyLocations={nearbyLocations} />
    </>
  );
}