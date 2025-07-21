import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { allLocations } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get East Windsor data
const eastWindsor = allLocations.find(loc => loc.slug === 'east-windsor-nj')!;
const nearbyLocations = allLocations.filter(loc => 
  loc.county === 'Mercer County' && loc.slug !== 'east-windsor-nj'
).slice(0, 4);

// Generate metadata
export const metadata: Metadata = {
  title: `${eastWindsor.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Expert security systems for East Windsor NJ businesses & homes. Twin Rivers, Hightstown area coverage. Commercial & residential security. Free consultation!',
  keywords: eastWindsor.seoData.primaryKeyword + ', ' + eastWindsor.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${eastWindsor.seoData.primaryKeyword} | Commercial & Residential Security`,
    description: 'Comprehensive security solutions for East Windsor Township. Retail, commercial, and residential systems. Professional installation and 24/7 monitoring.',
    url: `${SITE_CONFIG.url}/locations/east-windsor-nj`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Systems in East Windsor NJ',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: eastWindsor.seoData.primaryKeyword,
    description: 'Leading security provider for East Windsor businesses and Twin Rivers community.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations/east-windsor-nj`,
  },
};

// Schema markup
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}/locations/east-windsor-nj#business`,
  name: 'Security Dynamics Inc. - East Windsor',
  image: SITE_CONFIG.ogImage,
  '@sameAs': [
    COMPANY_INFO.socialMedia?.facebook || '',
    COMPANY_INFO.socialMedia?.twitter || '',
    COMPANY_INFO.socialMedia?.linkedin || ''
  ].filter(Boolean),
  telephone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'East Windsor',
    addressRegion: 'NJ',
    postalCode: '08520',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: eastWindsor.coordinates.lat,
    longitude: eastWindsor.coordinates.lng
  },
  areaServed: {
    '@type': 'City',
    name: 'East Windsor Township',
    '@id': 'https://en.wikipedia.org/wiki/East_Windsor_Township,_New_Jersey'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    }
  ],
  description: 'Professional security system installation and monitoring services in East Windsor Township, NJ. Serving retail centers, commercial properties, and residential communities including Twin Rivers.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Security Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Retail Security Systems',
          description: 'Loss prevention and security solutions for East Windsor retail businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Security',
          description: 'Comprehensive security for offices and industrial properties'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Residential Security',
          description: 'Home security systems for Twin Rivers and East Windsor communities'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '108'
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
      name: 'East Windsor',
      item: `${SITE_CONFIG.url}/locations/east-windsor-nj`
    }
  ]
};

const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@type': 'ServiceArea',
  name: 'East Windsor Security Service Area',
  description: 'Security Dynamics provides comprehensive security solutions throughout East Windsor Township, including Twin Rivers, Hightstown area, and Route 130 corridor.',
  provider: {
    '@id': `${SITE_CONFIG.url}/locations/east-windsor-nj#business`
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'East Windsor Township',
      '@id': 'https://en.wikipedia.org/wiki/East_Windsor_Township,_New_Jersey'
    },
    {
      '@type': 'Place',
      name: 'Twin Rivers'
    },
    {
      '@type': 'Place',
      name: 'Hightstown'
    },
    {
      '@type': 'Place',
      name: 'Route 130 Corridor'
    }
  ],
  hasOfferCatalog: {
    '@id': `${SITE_CONFIG.url}/locations/east-windsor-nj#business`
  }
};

export default function EastWindsorLocationPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script
        id="schema-local-business"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
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
      <Script
        id="schema-service-area"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceAreaSchema),
        }}
      />

      <CityPageTemplate city={eastWindsor} nearbyLocations={nearbyLocations} />
    </>
  );
}