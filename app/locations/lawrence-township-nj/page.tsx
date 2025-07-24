import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { allLocations } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get Lawrence Township data
const city = allLocations.find(loc => loc.slug === 'lawrence-township-nj')!;
const nearbyLocations = allLocations.filter(loc => 
  loc.county === 'Mercer County' && loc.slug !== 'lawrence-township-nj'
).slice(0, 4);

// Generate metadata
export const metadata: Metadata = {
  title: `${city.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: city.seoData.secondaryKeywords[0] + '. ' + city.seoData.localModifiers[0] + '. Get Security assessment!',
  keywords: city.seoData.primaryKeyword + ', ' + city.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${city.seoData.primaryKeyword} | 24/7 Protection`,
    description: 'Protect your Lawrence Township business with advanced security solutions. Local team, rapid response, specialized expertise.',
    url: `${SITE_CONFIG.url}/locations/lawrence-township-nj`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Systems in Lawrence Township NJ'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations/lawrence-township-nj`}};

// Schema markup
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}/locations/lawrence-township-nj#business`,
  name: 'Security Dynamics Inc. - Lawrence Township',
  image: `${SITE_CONFIG.url}/logo-1.webp`,
  telephone: COMPANY_INFO.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_INFO.address.street,
    addressLocality: 'Lawrence Township',
    addressRegion: 'NJ',
    postalCode: '08648',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '40.2973',
    longitude: '-74.7293'
  },
  areaServed: {
    '@type': 'City',
    name: 'Lawrence Township',
    containedIn: {
      '@type': 'AdministrativeArea',
      name: 'Mercer County'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '41'
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
      name: 'Lawrence Township',
      item: `${SITE_CONFIG.url}/locations/lawrence-township-nj`
    }
  ]
};

// FAQPage schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      "@type": "Question",
      "name": "What security solutions do you offer for Lawrence Township medical facilities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide HIPAA-compliant security for Lawrence Township's healthcare facilities including patient area monitoring, pharmacy access control, infant protection systems, and visitor management. Our solutions meet Joint Commission requirements and integrate with existing hospital systems."
      }
    },
    {
      "@type": "Question",
      "name": "Do you secure professional office buildings in Lawrence Township?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in multi-tenant office building security with individual suite access control, shared area monitoring, after-hours building access, and visitor management systems. Many Lawrence Township corporate parks trust us for comprehensive security solutions."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you respond to emergencies in Lawrence Township?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our average emergency response time in Lawrence Township is 15 minutes. We have technicians familiar with the Route 1 corridor, Lawrenceville, and all major business districts, ensuring rapid response to security alerts anywhere in the township."
      }
    },
    {
      "@type": "Question",
      "name": "What areas of Lawrence Township does Security Dynamics serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve all of Lawrence Township including Lawrenceville, the Route 1 business corridor, Princeton Pike area, Business Route 206, Quaker Bridge Mall area, and surrounding office parks. Our coverage extends to all commercial and professional districts."
      }
    }
  ]
};

export default function LawrenceTownshipNJPage() {
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
        city={city}
        nearbyLocations={nearbyLocations}
      />
    </>
  );
}