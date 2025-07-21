import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { allLocations } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get Hopewell data
const hopewell = allLocations.find(loc => loc.slug === 'hopewell-nj')!;
const nearbyLocations = allLocations.filter(loc => 
  loc.county === 'Mercer County' && loc.slug !== 'hopewell-nj'
).slice(0, 4);

// Generate metadata
export const metadata: Metadata = {
  title: `${hopewell.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Professional security systems for Hopewell Township & Borough NJ. Farm security, small business protection, home alarms. Call (609) 394-8800!',
  keywords: hopewell.seoData.primaryKeyword + ', ' + hopewell.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${hopewell.seoData.primaryKeyword} | Farm & Business Security`,
    description: 'Protect your Hopewell Valley property with customized security solutions. Agricultural, small business, and residential systems. Free assessment!',
    url: `${SITE_CONFIG.url}/locations/hopewell-nj`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Systems in Hopewell NJ',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: hopewell.seoData.primaryKeyword,
    description: 'Trusted security provider for Hopewell Valley farms, businesses, and homes.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations/hopewell-nj`,
  },
};

// Schema markup
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}/locations/hopewell-nj#business`,
  name: 'Security Dynamics Inc. - Hopewell',
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
    addressLocality: 'Hopewell',
    addressRegion: 'NJ',
    postalCode: '08525',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: hopewell.coordinates.lat,
    longitude: hopewell.coordinates.lng
  },
  areaServed: {
    '@type': 'City',
    name: 'Hopewell Township',
    '@id': 'https://en.wikipedia.org/wiki/Hopewell_Township,_Mercer_County,_New_Jersey'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    }
  ],
  description: 'Professional security system installation and monitoring services in Hopewell Township and Borough, NJ. Specializing in agricultural property security, small business protection, and residential systems.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Security Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Farm Security Systems',
          description: 'Specialized security solutions for agricultural properties in Hopewell Valley'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Small Business Security',
          description: 'Affordable security systems for Hopewell small businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Residential Security',
          description: 'Home security systems for Hopewell Township and Borough residents'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '89'
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
      name: 'Hopewell',
      item: `${SITE_CONFIG.url}/locations/hopewell-nj`
    }
  ]
};

const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@type': 'ServiceArea',
  name: 'Hopewell Security Service Area',
  description: 'Security Dynamics provides comprehensive security solutions throughout Hopewell Township, Hopewell Borough, and the greater Hopewell Valley area including Pennington.',
  provider: {
    '@id': `${SITE_CONFIG.url}/locations/hopewell-nj#business`
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Hopewell Township',
      '@id': 'https://en.wikipedia.org/wiki/Hopewell_Township,_Mercer_County,_New_Jersey'
    },
    {
      '@type': 'City',
      name: 'Hopewell Borough',
      '@id': 'https://en.wikipedia.org/wiki/Hopewell,_New_Jersey'
    },
    {
      '@type': 'Place',
      name: 'Hopewell Valley'
    },
    {
      '@type': 'Place',
      name: 'Pennington area'
    }
  ],
  hasOfferCatalog: {
    '@id': `${SITE_CONFIG.url}/locations/hopewell-nj#business`
  }
};

export default function HopewellLocationPage() {
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

      <CityPageTemplate city={hopewell} nearbyLocations={nearbyLocations} />
    </>
  );
}