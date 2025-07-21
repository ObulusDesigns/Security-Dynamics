import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { allLocations } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get West Windsor data
const westWindsor = allLocations.find(loc => loc.slug === 'west-windsor-nj')!;
const nearbyLocations = allLocations.filter(loc => 
  loc.county === 'Mercer County' && loc.slug !== 'west-windsor-nj'
).slice(0, 4);

// Generate metadata
export const metadata: Metadata = {
  title: `${westWindsor.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Premium security systems for West Windsor NJ businesses & luxury homes. Smart home integration, corporate security, 24/7 monitoring. Get free consultation!',
  keywords: westWindsor.seoData.primaryKeyword + ', ' + westWindsor.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${westWindsor.seoData.primaryKeyword} | Corporate & Smart Home Security`,
    description: 'Protect your West Windsor property with advanced security technology. Specialized solutions for corporate offices, tech companies & luxury residences.',
    url: `${SITE_CONFIG.url}/locations/west-windsor-nj`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Systems in West Windsor NJ',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: westWindsor.seoData.primaryKeyword,
    description: 'Leading security provider for West Windsor tech companies & luxury homes.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations/west-windsor-nj`,
  },
};

// Schema markup
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}/locations/west-windsor-nj#business`,
  name: 'Security Dynamics Inc. - West Windsor',
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
    addressLocality: 'West Windsor',
    addressRegion: 'NJ',
    postalCode: '08550',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: westWindsor.coordinates.lat,
    longitude: westWindsor.coordinates.lng
  },
  areaServed: {
    '@type': 'City',
    name: 'West Windsor',
    '@id': 'https://en.wikipedia.org/wiki/West_Windsor,_New_Jersey'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    }
  ],
  description: 'Professional security system installation and monitoring services in West Windsor, NJ. Specializing in corporate security, smart home integration, and luxury residential protection.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Security Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Corporate Security Systems',
          description: 'Advanced security solutions for West Windsor tech companies and corporate offices'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Smart Home Security',
          description: 'Integrated smart security systems for luxury homes in West Windsor'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '24/7 Professional Monitoring',
          description: 'Round-the-clock security monitoring for West Windsor properties'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '147'
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
      name: 'West Windsor',
      item: `${SITE_CONFIG.url}/locations/west-windsor-nj`
    }
  ]
};

const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@type': 'ServiceArea',
  name: 'West Windsor Security Service Area',
  description: 'Security Dynamics provides comprehensive security solutions throughout West Windsor Township, including Princeton Junction and surrounding areas.',
  provider: {
    '@id': `${SITE_CONFIG.url}/locations/west-windsor-nj#business`
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'West Windsor',
      '@id': 'https://en.wikipedia.org/wiki/West_Windsor,_New_Jersey'
    },
    {
      '@type': 'Place',
      name: 'Princeton Junction'
    }
  ],
  hasOfferCatalog: {
    '@id': `${SITE_CONFIG.url}/locations/west-windsor-nj#business`
  }
};

export default function WestWindsorLocationPage() {
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

      <CityPageTemplate city={westWindsor} nearbyLocations={nearbyLocations} />
    </>
  );
}