import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { allLocations } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get New Hope data
const newHope = allLocations.find(loc => loc.slug === 'new-hope-pa')!;
const nearbyLocations = allLocations.filter(loc => 
  loc.county === 'Bucks County' && loc.slug !== 'new-hope-pa'
).slice(0, 4);

// Generate metadata
export const metadata: Metadata = {
  title: `${newHope.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Business security systems for New Hope PA. Main Street shops, restaurants, art galleries. Tourism business protection. Call (609) 394-8800!',
  keywords: newHope.seoData.primaryKeyword + ', ' + newHope.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${newHope.seoData.primaryKeyword} | Tourism & Boutique Business Security`,
    description: 'Specialized security for New Hope\'s Main Street businesses. Art gallery protection, restaurant security, boutique retail systems.',
    url: `${SITE_CONFIG.url}/locations/new-hope-pa`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Business Security Systems in New Hope PA'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations/new-hope-pa`}};

// Schema markup
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}/locations/new-hope-pa#business`,
  name: 'Security Dynamics Inc. - New Hope',
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
    addressLocality: 'New Hope',
    addressRegion: 'PA',
    postalCode: '18938',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: newHope.coordinates.lat,
    longitude: newHope.coordinates.lng
  },
  areaServed: {
    '@type': 'City',
    name: 'New Hope',
    '@id': 'https://en.wikipedia.org/wiki/New_Hope,_Pennsylvania'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    }
  ],
  description: 'Professional security system installation and monitoring services in New Hope, PA. Specializing in tourism business security, art gallery protection, and restaurant security systems.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Security Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tourism Business Security',
          description: 'Security solutions for high-traffic tourism businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Art Gallery Security',
          description: 'Specialized protection for galleries and valuable artwork'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Restaurant Security',
          description: 'Comprehensive security for dining establishments'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '78'
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
      name: 'New Hope',
      item: `${SITE_CONFIG.url}/locations/new-hope-pa`
    }
  ]
};

const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@type': 'ServiceArea',
  name: 'New Hope Security Service Area',
  description: 'Security Dynamics provides comprehensive security solutions throughout New Hope, including Main Street, Delaware Canal area, and Bucks County Playhouse vicinity.',
  provider: {
    '@id': `${SITE_CONFIG.url}/locations/new-hope-pa#business`
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'New Hope',
      '@id': 'https://en.wikipedia.org/wiki/New_Hope,_Pennsylvania'
    },
    {
      '@type': 'Place',
      name: 'Main Street'
    },
    {
      '@type': 'Place',
      name: 'Delaware Canal area'
    },
    {
      '@type': 'Place',
      name: 'Bucks County Playhouse'
    },
    {
      '@type': 'Place',
      name: 'Lambertville-New Hope area'
    }
  ],
  hasOfferCatalog: {
    '@id': `${SITE_CONFIG.url}/locations/new-hope-pa#business`
  }
};

export default function NewHopeLocationPage() {
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

      <CityPageTemplate city={newHope} nearbyLocations={nearbyLocations} />
    </>
  );
}