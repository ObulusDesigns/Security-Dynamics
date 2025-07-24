import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { allLocations } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get Doylestown data
const city = allLocations.find(loc => loc.slug === 'doylestown-pa')!;
const nearbyLocations = allLocations.filter(loc => 
  loc.county === 'Bucks County' && loc.slug !== 'doylestown-pa'
).slice(0, 4);

// Generate metadata
export const metadata: Metadata = {
  title: `${city.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: city.seoData.secondaryKeywords[0] + '. ' + city.seoData.localModifiers[0] + '. Get Security assessment!',
  keywords: city.seoData.primaryKeyword + ', ' + city.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${city.seoData.primaryKeyword} | Historic Downtown Security`,
    description: 'Protect your Doylestown business with discrete security solutions. Specialized for historic buildings, boutique retail & county offices.',
    url: `${SITE_CONFIG.url}/locations/doylestown-pa`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Systems in Doylestown PA'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations/doylestown-pa`}};

// Schema markup
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}/locations/doylestown-pa#business`,
  name: 'Security Dynamics Inc. - Doylestown',
  image: `${SITE_CONFIG.url}/logo-1.webp`,
  telephone: COMPANY_INFO.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_INFO.address.street,
    addressLocality: 'Doylestown',
    addressRegion: 'PA',
    postalCode: '18901',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '40.3134',
    longitude: '-75.1299'
  },
  areaServed: {
    '@type': 'City',
    name: 'Doylestown',
    containedIn: {
      '@type': 'AdministrativeArea',
      name: 'Bucks County'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47'
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
      name: 'Pennsylvania',
      item: `${SITE_CONFIG.url}/service-areas/bucks-county-pa`
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Doylestown',
      item: `${SITE_CONFIG.url}/locations/doylestown-pa`
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
      "name": "How do you secure historic buildings in Doylestown without damaging them?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialize in wireless security solutions that preserve Doylestown's historic architecture. Our systems use discrete wireless sensors, hidden cameras that blend with period details, and surface-mount wiring that doesn't require drilling into historic materials. We work closely with preservation guidelines."
      }
    },
    {
      "@type": "Question",
      "name": "What security do you offer for Doylestown boutique retail shops?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our boutique retail solutions include discrete HD cameras, electronic article surveillance (EAS), point-of-sale integration, and after-hours motion detection. We understand the balance between security and maintaining the welcoming atmosphere essential to Doylestown's shopping experience."
      }
    },
    {
      "@type": "Question",
      "name": "Can you secure Bucks County government offices in Doylestown?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive security for county facilities including visitor screening, employee access control, secure area monitoring, and integration with county-wide security protocols. Our systems meet all government security requirements while remaining user-friendly for public access areas."
      }
    },
    {
      "@type": "Question",
      "name": "What areas of Doylestown does Security Dynamics serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve all of Doylestown including the Historic District, State Street shops, County offices, Doylestown Township, New Britain area, and surrounding business districts. Our familiarity with Doylestown's unique layout ensures discrete, effective security solutions."
      }
    }
  ]
};

export default function DoylestownPAPage() {
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