import { Metadata } from 'next';
import CountyPageTemplate from '@/components/templates/CountyPageTemplate';
import { bucksCounty, bucksCities } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Generate metadata for Bucks County page
export const metadata: Metadata = {
  title: `${bucksCounty.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Leading provider of commercial security systems in Bucks County PA. Serving Doylestown, Bensalem, Levittown & more with 24/7 monitoring, access control & video surveillance.',
  keywords: bucksCounty.seoData.primaryKeyword + ', ' + bucksCounty.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${bucksCounty.seoData.primaryKeyword} | 24/7 Monitoring`,
    description: 'Protect your Bucks County business with advanced security solutions. Local teams, rapid response, and cutting-edge technology.',
    url: `${SITE_CONFIG.url}/service-areas/bucks-county-pa`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Systems in Bucks County PA'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/service-areas/bucks-county-pa`}};

// Schema markup for Bucks County
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}/service-areas/bucks-county-pa#business`,
  name: 'Security Dynamics Inc. - Bucks County',
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
    name: 'Bucks County',
    containedIn: {
      '@type': 'State',
      name: 'Pennsylvania'
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
      name: 'Bucks County, PA',
      item: `${SITE_CONFIG.url}/service-areas/bucks-county-pa`
    }
  ]
};

// FAQPage schema with Bucks County specific questions
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What areas in Bucks County does Security Dynamics serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Security Dynamics provides commercial security services throughout Bucks County, including Doylestown, Bensalem, Levittown, Newtown, Yardley, Langhorne, Warminster, Morrisville, Bristol, New Hope, and all surrounding areas.'
      }
    },
    {
      '@type': 'Question', 
      name: 'How quickly can Security Dynamics respond to emergencies in Bucks County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our average emergency response time in Bucks County is 15 minutes. With local teams stationed throughout the county and 24/7 monitoring from our UL-Listed central station, we ensure rapid response to all security alerts.'
      }
    },
    {
      '@type': 'Question',
      name: 'What types of businesses in Bucks County use Security Dynamics?',
      acceptedAnswer: {
        '@type': 'Answer', 
        text: 'We protect a wide range of Bucks County businesses including historic properties in Doylestown, industrial facilities in Bensalem, retail centers in Levittown, corporate offices in Newtown, and healthcare facilities throughout the county.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does Security Dynamics comply with Pennsylvania security regulations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Security Dynamics is fully licensed and insured in Pennsylvania. We comply with all state and local regulations, including PA video surveillance laws and alarm ordinances specific to Bucks County municipalities.'
      }
    }
  ]
};

export default function BucksCountyPage() {
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
        county={bucksCounty}
        cities={bucksCities}
      />
    </>
  );
}