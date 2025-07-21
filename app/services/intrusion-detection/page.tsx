import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { services } from '@/lib/data/services';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get the intrusion detection service data
const intrusionDetectionService = services.find(s => s.slug === 'intrusion-detection')!;
const relatedServices = services.filter(s => s.slug !== 'intrusion-detection');

// Generate metadata
export const metadata: Metadata = {
  title: `${intrusionDetectionService.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Advanced intrusion detection systems for NJ & PA businesses. Motion sensors, glass break detectors, perimeter protection & 24/7 monitoring. Get free assessment!',
  keywords: intrusionDetectionService.seoData.primaryKeyword + ', ' + intrusionDetectionService.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${intrusionDetectionService.seoData.primaryKeyword} | 24/7 Monitoring`,
    description: 'Protect your business with advanced intrusion detection. Smart sensors, instant alerts & rapid response in NJ & PA.',
    url: `${SITE_CONFIG.url}/services/intrusion-detection`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Intrusion Detection Systems for Business Security',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: intrusionDetectionService.seoData.primaryKeyword,
    description: 'Advanced intrusion detection systems. Smart sensors & 24/7 monitoring.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/intrusion-detection`,
  },
};

// Schema markup
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_CONFIG.url}/services/intrusion-detection#service`,
  serviceType: 'Intrusion Detection System Installation',
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
    serviceUrl: `${SITE_CONFIG.url}/services/intrusion-detection`,
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
      name: 'Intrusion Detection',
      item: `${SITE_CONFIG.url}/services/intrusion-detection`
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
      name: 'What types of intrusion detection sensors are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer a comprehensive range including PIR motion detectors, dual-technology sensors, glass break detectors, door/window contacts, vibration sensors, and beam-break perimeter sensors. Each sensor type is selected based on your specific security needs and facility layout.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I prevent false alarms with intrusion detection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our systems use advanced algorithms and dual-technology sensors to minimize false alarms. We also provide proper training, pet-immune sensors, and environmental adjustments. Our 24/7 monitoring center verifies alarms before dispatching authorities.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can intrusion detection work with my existing security system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our intrusion detection systems are designed to integrate with most existing security infrastructure. We can upgrade older systems or seamlessly connect with your current access control and video surveillance systems for comprehensive protection.'
      }
    },
    {
      '@type': 'Question',
      name: 'What happens when an intrusion is detected?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When sensors detect an intrusion, our UL-Listed monitoring center is instantly notified. Operators verify the alarm through video or audio, contact your designated personnel, and dispatch law enforcement if needed - all within seconds of detection.'
      }
    }
  ]
};

export default function IntrusionDetectionPage() {
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
        service={intrusionDetectionService}
        relatedServices={relatedServices}
      />
    </>
  );
}