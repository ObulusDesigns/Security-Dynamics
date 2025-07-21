import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { allLocations } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get Langhorne data
const langhorne = allLocations.find(loc => loc.slug === 'langhorne-pa')!;
const nearbyLocations = allLocations.filter(loc => 
  loc.county === 'Bucks County' && loc.slug !== 'langhorne-pa'
).slice(0, 4);

// Generate metadata
export const metadata: Metadata = {
  title: `${langhorne.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Professional security systems for Langhorne PA businesses. Medical offices, retail stores, Route 1 corridor. Sesame Place area coverage!',
  keywords: langhorne.seoData.primaryKeyword + ', ' + langhorne.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${langhorne.seoData.primaryKeyword} | Healthcare & Retail Security`,
    description: 'Expert security solutions for Langhorne medical facilities and businesses. Professional installation, 24/7 monitoring. Free assessment!',
    url: `${SITE_CONFIG.url}/locations/langhorne-pa`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Systems in Langhorne PA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: langhorne.seoData.primaryKeyword,
    description: 'Leading security provider for Langhorne healthcare facilities and businesses.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations/langhorne-pa`,
  },
};

// Schema markup
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}/locations/langhorne-pa#business`,
  name: 'Security Dynamics Inc. - Langhorne',
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
    addressLocality: 'Langhorne',
    addressRegion: 'PA',
    postalCode: '19047',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: langhorne.coordinates.lat,
    longitude: langhorne.coordinates.lng
  },
  areaServed: {
    '@type': 'City',
    name: 'Langhorne',
    '@id': 'https://en.wikipedia.org/wiki/Langhorne,_Pennsylvania'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    }
  ],
  description: 'Professional security system installation and monitoring services in Langhorne, PA. Specializing in medical office security, retail protection, and professional building security systems.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Security Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Medical Office Security',
          description: 'HIPAA-compliant security systems for Langhorne healthcare facilities'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Retail Security Systems',
          description: 'Loss prevention and surveillance for Route 1 retailers'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Professional Building Security',
          description: 'Access control and monitoring for office buildings'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '83'
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
      name: 'Langhorne',
      item: `${SITE_CONFIG.url}/locations/langhorne-pa`
    }
  ]
};

const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@type': 'ServiceArea',
  name: 'Langhorne Security Service Area',
  description: 'Security Dynamics provides comprehensive security solutions throughout Langhorne, including Route 1 corridor, medical office complexes, and Sesame Place area.',
  provider: {
    '@id': `${SITE_CONFIG.url}/locations/langhorne-pa#business`
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Langhorne',
      '@id': 'https://en.wikipedia.org/wiki/Langhorne,_Pennsylvania'
    },
    {
      '@type': 'Place',
      name: 'Route 1 corridor'
    },
    {
      '@type': 'Place',
      name: 'Sesame Place area'
    }
  ],
  hasOfferCatalog: {
    '@id': `${SITE_CONFIG.url}/locations/langhorne-pa#business`
  }
};

export default function LanghorneLocationPage() {
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

      <CityPageTemplate city={langhorne} nearbyLocations={nearbyLocations} />
    </>
  );
}