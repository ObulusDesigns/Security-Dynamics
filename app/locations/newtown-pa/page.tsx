import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { allLocations } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get Newtown data
const newtown = allLocations.find(loc => loc.slug === 'newtown-pa')!;
const nearbyLocations = allLocations.filter(loc => 
  loc.county === 'Bucks County' && loc.slug !== 'newtown-pa'
).slice(0, 4);

// Generate metadata
export const metadata: Metadata = {
  title: `${newtown.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Premium security systems for Newtown PA businesses & luxury homes. Historic property protection, professional offices, State Street area. Call today!',
  keywords: newtown.seoData.primaryKeyword + ', ' + newtown.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${newtown.seoData.primaryKeyword} | Historic & Luxury Property Security`,
    description: 'Discrete security solutions for historic Newtown properties. Professional office security, boutique retail protection. Expert installation.',
    url: `${SITE_CONFIG.url}/locations/newtown-pa`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Systems in Newtown PA'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations/newtown-pa`}};

// Schema markup
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}/locations/newtown-pa#business`,
  name: 'Security Dynamics Inc. - Newtown',
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
    addressLocality: 'Newtown',
    addressRegion: 'PA',
    postalCode: '18940',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: newtown.coordinates.lat,
    longitude: newtown.coordinates.lng
  },
  areaServed: {
    '@type': 'City',
    name: 'Newtown',
    '@id': 'https://en.wikipedia.org/wiki/Newtown,_Bucks_County,_Pennsylvania'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    }
  ],
  description: 'Professional security system installation and monitoring services in Newtown, PA. Specializing in historic property protection, professional office security, and luxury residential systems.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Security Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Historic Property Security',
          description: 'Discrete security systems preserving architectural integrity'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Professional Office Security',
          description: 'Advanced security for Newtown professional buildings'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Luxury Home Security',
          description: 'Premium security systems for high-value residences'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '112'
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
      name: 'Newtown',
      item: `${SITE_CONFIG.url}/locations/newtown-pa`
    }
  ]
};

const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@type': 'ServiceArea',
  name: 'Newtown Security Service Area',
  description: 'Security Dynamics provides comprehensive security solutions throughout Newtown Borough and Township, including State Street historic district and Council Rock area.',
  provider: {
    '@id': `${SITE_CONFIG.url}/locations/newtown-pa#business`
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Newtown Borough',
      '@id': 'https://en.wikipedia.org/wiki/Newtown,_Bucks_County,_Pennsylvania'
    },
    {
      '@type': 'City',
      name: 'Newtown Township'
    },
    {
      '@type': 'Place',
      name: 'State Street'
    },
    {
      '@type': 'Place',
      name: 'Historic Newtown'
    },
    {
      '@type': 'Place',
      name: 'Council Rock area'
    }
  ],
  hasOfferCatalog: {
    '@id': `${SITE_CONFIG.url}/locations/newtown-pa#business`
  }
};

export default function NewtownLocationPage() {
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

      <CityPageTemplate city={newtown} nearbyLocations={nearbyLocations} />
    </>
  );
}