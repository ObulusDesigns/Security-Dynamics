import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { allLocations } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get Bensalem data
const bensalem = allLocations.find(loc => loc.slug === 'bensalem-pa')!;
const nearbyLocations = allLocations.filter(loc => 
  loc.county === 'Bucks County' && loc.slug !== 'bensalem-pa'
).slice(0, 4);

// Generate metadata
export const metadata: Metadata = {
  title: `${bensalem.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Commercial security systems for Bensalem PA businesses. Retail loss prevention, Neshaminy Mall area, Parx Casino vicinity. Call (609) 394-8800!',
  keywords: bensalem.seoData.primaryKeyword + ', ' + bensalem.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${bensalem.seoData.primaryKeyword} | Retail & Commercial Security`,
    description: 'Expert security solutions for Bensalem businesses. Loss prevention systems, video surveillance, access control. Serving Street Road commercial corridor.',
    url: `${SITE_CONFIG.url}/locations/bensalem-pa`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Business Security Systems in Bensalem PA'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations/bensalem-pa`}};

// Schema markup
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}/locations/bensalem-pa#business`,
  name: 'Security Dynamics Inc. - Bensalem',
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
    addressLocality: 'Bensalem',
    addressRegion: 'PA',
    postalCode: '19020',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: bensalem.coordinates.lat,
    longitude: bensalem.coordinates.lng
  },
  areaServed: {
    '@type': 'City',
    name: 'Bensalem',
    '@id': 'https://en.wikipedia.org/wiki/Bensalem_Township,_Pennsylvania'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    }
  ],
  description: 'Professional commercial security system installation and monitoring services in Bensalem, PA. Specializing in retail loss prevention, entertainment venue security, and business surveillance.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Security Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Retail Loss Prevention',
          description: 'Advanced security systems for Bensalem retail stores and shopping centers'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Entertainment Venue Security',
          description: 'Comprehensive security for high-traffic entertainment businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Surveillance',
          description: 'HD video surveillance systems for Bensalem businesses'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '156'
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
      name: 'Bensalem',
      item: `${SITE_CONFIG.url}/locations/bensalem-pa`
    }
  ]
};

const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@type': 'ServiceArea',
  name: 'Bensalem Security Service Area',
  description: 'Security Dynamics provides comprehensive commercial security solutions throughout Bensalem Township, including Neshaminy Mall area, Street Road corridor, and Parx Casino vicinity.',
  provider: {
    '@id': `${SITE_CONFIG.url}/locations/bensalem-pa#business`
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Bensalem Township',
      '@id': 'https://en.wikipedia.org/wiki/Bensalem_Township,_Pennsylvania'
    },
    {
      '@type': 'Place',
      name: 'Neshaminy Mall area'
    },
    {
      '@type': 'Place',
      name: 'Street Road'
    },
    {
      '@type': 'Place',
      name: 'Parx Casino vicinity'
    }
  ],
  hasOfferCatalog: {
    '@id': `${SITE_CONFIG.url}/locations/bensalem-pa#business`
  }
};

export default function BensalemLocationPage() {
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

      <CityPageTemplate city={bensalem} nearbyLocations={nearbyLocations} />
    </>
  );
}