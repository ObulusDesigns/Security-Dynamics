import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { services } from '@/lib/data/services';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get the environmental monitoring service data
const environmentalService = services.find(s => s.slug === 'environmental-monitoring')!;
const relatedServices = services.filter(s => s.slug !== 'environmental-monitoring');

// Generate metadata
export const metadata: Metadata = {
  title: `${environmentalService.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Environmental monitoring systems for NJ & PA server rooms & facilities. Temperature, humidity, water leak detection & power monitoring. Prevent costly downtime!',
  keywords: environmentalService.seoData.primaryKeyword + ', ' + environmentalService.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${environmentalService.seoData.primaryKeyword} | Protect Critical Assets`,
    description: 'Monitor temperature, humidity, water leaks & power in server rooms. Real-time alerts prevent equipment damage & downtime in NJ & PA.',
    url: `${SITE_CONFIG.url}/services/environmental-monitoring`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Environmental Monitoring for Data Centers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: environmentalService.seoData.primaryKeyword,
    description: 'Protect server rooms with environmental monitoring. Temperature, humidity & water detection.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/environmental-monitoring`,
  },
};

// Schema markup
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_CONFIG.url}/services/environmental-monitoring#service`,
  serviceType: 'Environmental Monitoring System Installation',
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
    serviceUrl: `${SITE_CONFIG.url}/services/environmental-monitoring`,
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
      name: 'Environmental Monitoring',
      item: `${SITE_CONFIG.url}/services/environmental-monitoring`
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
      name: 'What environmental conditions can be monitored?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our systems monitor temperature, humidity, water/flood detection, airflow, smoke/fire, power failure, UPS status, and cabinet door access. Sensors can be placed throughout server rooms, data centers, laboratories, and storage facilities to provide comprehensive coverage.'
      }
    },
    {
      '@type': 'Question',
      name: 'How are alerts delivered when thresholds are exceeded?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alerts are sent instantly via multiple channels: SMS text, email, phone calls, and mobile app notifications. You can set escalation procedures, customize thresholds for each sensor, and designate different contacts for different types of alerts. All events are logged for compliance.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can environmental monitoring integrate with existing building systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our environmental monitoring integrates with HVAC controls, building management systems (BMS), access control, and power management systems. This allows automated responses like increasing cooling when temperatures rise or shutting systems down during water leaks.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the ROI of environmental monitoring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Environmental monitoring typically pays for itself by preventing just one incident. Server downtime costs average $5,600 per minute. Our monitoring prevents equipment damage from overheating, water leaks, and power issues - protecting both hardware investments and business continuity.'
      }
    }
  ]
};

export default function EnvironmentalMonitoringPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script id="schema-1" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
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
      <ServicePageTemplate 
        service={environmentalService}
        relatedServices={relatedServices}
      />
    </>
  );
}