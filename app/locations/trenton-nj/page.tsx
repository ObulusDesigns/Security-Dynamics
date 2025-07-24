import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { allLocations } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get Trenton data
const trenton = allLocations.find(loc => loc.slug === 'trenton-nj')!;
const nearbyLocations = allLocations.filter(loc => 
  loc.county === 'Mercer County' && loc.slug !== 'trenton-nj'
).slice(0, 4);

// Generate metadata
export const metadata: Metadata = {
  title: `${trenton.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Leading provider of security systems in Trenton NJ. Serving state capital businesses, government facilities & downtown with 24/7 monitoring & rapid response.',
  keywords: trenton.seoData.primaryKeyword + ', ' + trenton.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${trenton.seoData.primaryKeyword} | 24/7 Protection`,
    description: 'Protect your Trenton business with advanced security solutions. Local team, rapid response, state capital expertise.',
    url: `${SITE_CONFIG.url}/locations/trenton-nj`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Systems in Trenton NJ'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations/trenton-nj`}};

// Schema markup
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}/locations/trenton-nj#business`,
  name: 'Security Dynamics Inc. - Trenton',
  image: `${SITE_CONFIG.url}/logo-1.webp`,
  telephone: COMPANY_INFO.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_INFO.address.street,
    addressLocality: 'Trenton',
    addressRegion: 'NJ',
    postalCode: '08608',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '40.2206',
    longitude: '-74.7597'
  },
  areaServed: {
    '@type': 'City',
    name: 'Trenton',
    containedIn: {
      '@type': 'AdministrativeArea',
      name: 'Mercer County'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '45'
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
      name: 'Trenton',
      item: `${SITE_CONFIG.url}/locations/trenton-nj`
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
      name: 'What areas of Trenton does Security Dynamics serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve all of Trenton including Downtown, North Trenton, South Trenton, West Trenton, East Trenton, Chambersburg, Mill Hill, and the State House District. Our local team provides rapid response throughout the capital city.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide security for government buildings in Trenton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we specialize in high-security solutions for government facilities, state offices, and municipal buildings in Trenton. Our systems meet all state and federal security requirements with features like anti-passback, visitor management, and secure area access control.'
      }
    },
    {
      '@type': 'Question',
      name: 'How quickly can you respond to emergencies in Trenton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our average emergency response time in Trenton is 15 minutes. With technicians based locally and 24/7 monitoring, we ensure rapid response to all security alerts throughout the capital city, including priority response for government and critical infrastructure.'
      }
    },
    {
      '@type': 'Question',
      name: 'What security challenges are unique to Trenton businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trenton businesses face unique challenges including higher crime rates in certain areas, securing government contractor facilities, protecting against civil unrest during protests, and meeting strict compliance requirements for state vendors. We address these with enhanced surveillance, access control, and verified alarm response.'
      }
    }
  ]
};

export default function TrentonNJPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script id="schema-1" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)}}
      />
      <Script id="schema-2" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)}}
      />
      <Script id="schema-3" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)}}
      />

      {/* Page Content */}
      <CityPageTemplate 
        city={trenton}
        nearbyLocations={nearbyLocations}
      />
    </>
  );
}