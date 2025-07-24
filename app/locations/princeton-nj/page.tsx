import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { allLocations } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get Princeton data
const princeton = allLocations.find(loc => loc.slug === 'princeton-nj')!;
const nearbyLocations = allLocations.filter(loc => 
  loc.county === 'Mercer County' && loc.slug !== 'princeton-nj'
).slice(0, 4);

// Generate metadata
export const metadata: Metadata = {
  title: `${princeton.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Advanced security systems for Princeton NJ businesses, tech companies & university facilities. Access control, video surveillance & 24/7 monitoring. Get Security assessment!',
  keywords: princeton.seoData.primaryKeyword + ', ' + princeton.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${princeton.seoData.primaryKeyword} | Tech & University Security`,
    description: 'Protect your Princeton business with cutting-edge security. Specialized solutions for tech companies, research facilities & educational institutions.',
    url: `${SITE_CONFIG.url}/locations/princeton-nj`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Systems in Princeton NJ'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations/princeton-nj`}};

// Schema markup
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}/locations/princeton-nj#business`,
  name: 'Security Dynamics Inc. - Princeton',
  image: `${SITE_CONFIG.url}/logo-1.webp`,
  telephone: COMPANY_INFO.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_INFO.address.street,
    addressLocality: 'Princeton',
    addressRegion: 'NJ',
    postalCode: '08540',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '40.3573',
    longitude: '-74.6672'
  },
  areaServed: {
    '@type': 'City',
    name: 'Princeton',
    containedIn: {
      '@type': 'AdministrativeArea',
      name: 'Mercer County'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '52'
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
      name: 'Princeton',
      item: `${SITE_CONFIG.url}/locations/princeton-nj`
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
      name: 'What security solutions do you offer for Princeton tech companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide specialized security for Princeton\'s tech sector including biometric access control for labs, IP video surveillance with AI analytics, server room environmental monitoring, and integrated systems that protect intellectual property. Our solutions scale from startups to enterprise tech campuses.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you secure Princeton University facilities and research labs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we have extensive experience securing educational and research facilities in Princeton. Our systems include controlled access to labs, chemical storage monitoring, after-hours building security, and integration with campus-wide security protocols. We understand the unique needs of academic institutions.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do you handle security for Princeton\'s historic downtown businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide discrete security solutions that preserve the aesthetic of Princeton\'s historic Nassau Street and Palmer Square. This includes hidden cameras, wireless sensors that don\'t damage historic structures, and smart analytics that distinguish between customers and threats.'
      }
    },
    {
      '@type': 'Question',
      name: 'What areas of Princeton does Security Dynamics serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve all of Princeton including Princeton University campus, Nassau Street, Palmer Square, Princeton Junction, Carnegie Center, Forrestal Village, and surrounding research parks. Our technicians are familiar with Princeton\'s unique layout and can respond quickly anywhere in town.'
      }
    }
  ]
};

export default function PrincetonNJPage() {
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
        city={princeton}
        nearbyLocations={nearbyLocations}
      />
    </>
  );
}