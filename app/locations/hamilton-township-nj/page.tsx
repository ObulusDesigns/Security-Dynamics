import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { allLocations } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get Hamilton Township data
const hamilton = allLocations.find(loc => loc.slug === 'hamilton-township-nj')!;
const nearbyLocations = allLocations.filter(loc => 
  loc.county === 'Mercer County' && loc.slug !== 'hamilton-township-nj'
).slice(0, 4);

// Generate metadata
export const metadata: Metadata = {
  title: `${hamilton.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Warehouse & industrial security systems in Hamilton Township NJ. Protect distribution centers, manufacturing facilities & logistics operations. Get free quote!',
  keywords: hamilton.seoData.primaryKeyword + ', ' + hamilton.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${hamilton.seoData.primaryKeyword} | Warehouse Security`,
    description: 'Specialized security for Hamilton Township warehouses & industrial facilities. Perimeter protection, access control & 24/7 monitoring.',
    url: `${SITE_CONFIG.url}/locations/hamilton-township-nj`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Systems in Hamilton Township NJ',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: hamilton.seoData.primaryKeyword,
    description: 'Leading warehouse security provider in Hamilton Township NJ.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations/hamilton-township-nj`,
  },
};

// Schema markup
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}/locations/hamilton-township-nj#business`,
  name: 'Security Dynamics Inc. - Hamilton Township',
  image: `${SITE_CONFIG.url}/logo-1.webp`,
  telephone: COMPANY_INFO.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_INFO.address.street,
    addressLocality: 'Hamilton Township',
    addressRegion: 'NJ',
    postalCode: '08619',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '40.2054',
    longitude: '-74.6928'
  },
  areaServed: {
    '@type': 'City',
    name: 'Hamilton Township',
    containedIn: {
      '@type': 'AdministrativeArea',
      name: 'Mercer County'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '38'
  },
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00'
  }
};

// BreadcrumbList schema
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
      item: `${SITE_CONFIG.url}/service-areas/mercer-county-nj`
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Hamilton Township',
      item: `${SITE_CONFIG.url}/locations/hamilton-township-nj`
    }
  ]
};

// FAQPage schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What security solutions do you offer for Hamilton Township warehouses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We specialize in warehouse security including perimeter fence detection, loading dock cameras with LPR, employee access control with time restrictions, inventory cage protection, and 24/7 monitoring. Our systems scale from small distribution centers to massive logistics facilities.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do you secure industrial facilities in Hamilton Township?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our industrial security solutions include explosion-proof cameras for hazardous areas, thermal imaging for equipment monitoring, restricted area access control, visitor management systems, and integration with safety systems. We understand OSHA requirements and industrial compliance needs.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you monitor multiple Hamilton Township locations from one system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our enterprise platforms allow you to monitor multiple warehouses, distribution centers, or industrial sites from a single interface. This is ideal for businesses with multiple Hamilton Township facilities or regional operations throughout the I-295 corridor.'
      }
    },
    {
      '@type': 'Question',
      name: 'What areas of Hamilton Township does Security Dynamics serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve all of Hamilton Township including the Route 130 industrial corridor, Yardville, Mercerville, Hamilton Square, White Horse, and the numerous warehouse districts near I-295 and Route 206. Our rapid response covers all commercial and industrial areas.'
      }
    }
  ]
};

export default function HamiltonTownshipNJPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script id="schema-1" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script id="schema-2" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script id="schema-3" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Page Content */}
      <CityPageTemplate 
        city={hamilton}
        nearbyLocations={nearbyLocations}
      />
    </>
  );
}