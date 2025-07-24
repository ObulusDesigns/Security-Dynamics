import { Metadata } from 'next';
import CountyPageTemplate from '@/components/templates/CountyPageTemplate';
import { mercerCounty, mercerCities } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Generate metadata for Mercer County page
export const metadata: Metadata = {
  title: `${mercerCounty.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Leading provider of commercial security systems in Mercer County NJ. Serving Trenton, Princeton, Hamilton & more with 24/7 monitoring, access control & video surveillance.',
  keywords: mercerCounty.seoData.primaryKeyword + ', ' + mercerCounty.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${mercerCounty.seoData.primaryKeyword} | 24/7 Monitoring`,
    description: 'Protect your Mercer County business with advanced security solutions. Local teams, rapid response, and cutting-edge technology.',
    url: `${SITE_CONFIG.url}/service-areas/mercer-county-nj`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Systems in Mercer County NJ'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/service-areas/mercer-county-nj`}};

// Schema markup for Mercer County
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}/service-areas/mercer-county-nj#business`,
  name: 'Security Dynamics Inc. - Mercer County',
  image: `${SITE_CONFIG.url}/logo-1.webp`,
  telephone: COMPANY_INFO.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_INFO.address.street,
    addressLocality: COMPANY_INFO.address.city,
    addressRegion: COMPANY_INFO.address.stateCode,
    postalCode: COMPANY_INFO.address.zip,
    addressCountry: 'US'
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Mercer County',
    containedIn: {
      '@type': 'State',
      name: 'New Jersey'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127'
  },
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59'
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
      name: 'Service Areas',
      item: `${SITE_CONFIG.url}/locations`
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Mercer County, NJ',
      item: `${SITE_CONFIG.url}/service-areas/mercer-county-nj`
    }
  ]
};

// FAQPage schema with Mercer County specific questions
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What areas in Mercer County does Security Dynamics serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Security Dynamics provides commercial security services throughout Mercer County, including Trenton, Princeton, Hamilton Township, Lawrence Township, Ewing, West Windsor, Hopewell, Pennington, Hightstown, and Robbinsville.'
      }
    },
    {
      '@type': 'Question', 
      name: 'How quickly can Security Dynamics respond to emergencies in Mercer County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our average emergency response time in Mercer County is 15 minutes. With local teams stationed throughout the county and 24/7 monitoring from our UL-Listed central station, we ensure rapid response to all security alerts.'
      }
    },
    {
      '@type': 'Question',
      name: 'What types of businesses in Mercer County use Security Dynamics?',
      acceptedAnswer: {
        '@type': 'Answer', 
        text: 'We protect a wide range of Mercer County businesses including government facilities in Trenton, tech companies in Princeton, warehouses in Hamilton, medical facilities in Lawrence, and retail stores throughout the county.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does Security Dynamics offer same-day service in Mercer County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer same-day service for emergency security needs throughout Mercer County. Our local technicians are available 24/7 for urgent installations and repairs.'
      }
    }
  ]
};

export default function MercerCountyPage() {
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
      <CountyPageTemplate 
        county={mercerCounty}
        cities={mercerCities}
      />
    </>
  );
}