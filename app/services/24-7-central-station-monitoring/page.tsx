import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { services } from '@/lib/data/services';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get the 24/7 monitoring service data
const monitoringService = services.find(s => s.slug === '24-7-central-station-monitoring')!;
const relatedServices = services.filter(s => s.slug !== '24-7-central-station-monitoring');

// Generate metadata
export const metadata: Metadata = {
  title: `${monitoringService.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: '24/7 central station monitoring for NJ & PA businesses. UL-Listed monitoring, verified alarm response, 15-second operator response. Never miss an alarm!',
  keywords: monitoringService.seoData.primaryKeyword + ', ' + monitoringService.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${monitoringService.seoData.primaryKeyword} | UL-Listed Station`,
    description: 'Professional 24/7 monitoring with verified alarm response. Live operators, police dispatch & 15-second response times in NJ & PA.',
    url: `${SITE_CONFIG.url}/services/24-7-central-station-monitoring`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: '24/7 Central Station Monitoring Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: monitoringService.seoData.primaryKeyword,
    description: '24/7 professional monitoring. UL-Listed station & rapid response.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/24-7-central-station-monitoring`,
  },
};

// Schema markup
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_CONFIG.url}/services/24-7-central-station-monitoring#service`,
  serviceType: '24/7 Security Monitoring Service',
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
    serviceUrl: `${SITE_CONFIG.url}/services/24-7-central-station-monitoring`,
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
      name: '24/7 Central Station Monitoring',
      item: `${SITE_CONFIG.url}/services/24-7-central-station-monitoring`
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
      name: 'What happens when an alarm is triggered at my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Within seconds of receiving an alarm, our operators verify the signal, check for video verification if available, and follow your custom response protocol. This typically includes calling your keyholders, dispatching police/fire/EMS, and sending mobile alerts. Average operator response time is 15 seconds.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is verified alarm response and why is it important?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Verified response means we confirm an actual emergency before dispatching police - through video verification, audio detection, or multiple sensor activation. This reduces false alarms by 90%, ensures faster police response, and avoids false alarm fines common in NJ and PA municipalities.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is your monitoring station truly 24/7/365?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our UL-Listed central station operates 24/7/365 with redundant facilities, backup power systems, and multiple communication paths. Even during storms, power outages, or holidays, your business is continuously protected by certified operators.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you monitor my existing security system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can monitor most existing security systems regardless of installer or manufacturer. Our technicians will add a cellular communicator to ensure reliable alarm transmission. We monitor burglar alarms, fire systems, access control, video, and environmental sensors.'
      }
    }
  ]
};

export default function CentralStationMonitoringPage() {
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
        service={monitoringService}
        relatedServices={relatedServices}
      />
    </>
  );
}