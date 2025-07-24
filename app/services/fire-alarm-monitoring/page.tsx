import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { services } from '@/lib/data/services';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get the fire alarm monitoring service data
const fireAlarmService = services.find(s => s.slug === 'fire-alarm-monitoring')!;
const relatedServices = services.filter(s => s.slug !== 'fire-alarm-monitoring');

// Generate metadata
export const metadata: Metadata = {
  title: `${fireAlarmService.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'UL-Listed fire alarm monitoring for NJ & PA businesses. 24/7 central station monitoring, code compliance, rapid response & fire department dispatch. Get quote!',
  keywords: fireAlarmService.seoData.primaryKeyword + ', ' + fireAlarmService.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${fireAlarmService.seoData.primaryKeyword} | UL-Listed Station`,
    description: 'Protect your business with UL-Listed fire alarm monitoring. 24/7 monitoring, code compliance & rapid fire department dispatch in NJ & PA.',
    url: `${SITE_CONFIG.url}/services/fire-alarm-monitoring`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Fire Alarm Monitoring for Business Safety'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/fire-alarm-monitoring`}};

// Schema markup
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_CONFIG.url}/services/fire-alarm-monitoring#service`,
  serviceType: 'Fire Alarm Monitoring Service',
  provider: {
    '@type': 'Organization',
    name: 'Security Dynamics Inc.',
    telephone: COMPANY_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.stateCode,
      postalCode: COMPANY_INFO.address.zip,
      addressCountry: 'US'
    }
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'New Jersey'
    },
    {
      '@type': 'State',
      name: 'Pennsylvania'
    }
  ],
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: `${SITE_CONFIG.url}/services/fire-alarm-monitoring`,
    servicePhone: COMPANY_INFO.phone,
    availableLanguage: 'English'
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
      name: 'Services',
      item: `${SITE_CONFIG.url}/services`
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Fire Alarm Monitoring',
      item: `${SITE_CONFIG.url}/services/fire-alarm-monitoring`
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
      name: 'What makes your fire alarm monitoring UL-Listed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our central monitoring station meets strict Underwriters Laboratories standards for fire alarm monitoring. This includes redundant systems, backup power, certified operators, and regular audits. UL-Listed monitoring is often required by insurance companies and local fire codes.'
      }
    },
    {
      '@type': 'Question',
      name: 'How quickly does the fire department get dispatched?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our average dispatch time is under 60 seconds from alarm receipt. Our operators immediately verify the alarm signal, contact your designated personnel if requested, and dispatch the fire department. All communications are recorded and time-stamped for compliance.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you monitor existing fire alarm systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can monitor most existing fire alarm systems regardless of manufacturer. Our technicians will install a communicator that connects your panel to our monitoring station. We work with Honeywell, Notifier, Simplex, Edwards, and other major brands.'
      }
    },
    {
      '@type': 'Question',
      name: 'What fire codes do you help businesses comply with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We ensure compliance with NFPA 72 (National Fire Alarm Code), local NJ and PA fire codes, and specific municipal requirements. We handle annual inspections, maintain required documentation, and coordinate with local fire marshals for system acceptance.'
      }
    }
  ]
};

export default function FireAlarmMonitoringPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script id="schema-1" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)}}
      />
      <Script id="schema-2" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)}}
      />
      <Script id="schema-3" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)}}
      />

      {/* Page Content */}
      <ServicePageTemplate 
        service={fireAlarmService}
        relatedServices={relatedServices}
      />
    </>
  );
}