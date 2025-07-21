import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { services } from '@/lib/data/services';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get the access control service data
const accessControlService = services.find(s => s.slug === 'access-control-systems')!;
const relatedServices = services.filter(s => s.slug !== 'access-control-systems');

// Generate metadata
export const metadata: Metadata = {
  title: `${accessControlService.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Advanced access control systems for NJ & PA businesses. Biometric scanners, key cards, mobile credentials & cloud management. Get free consultation!',
  keywords: accessControlService.seoData.primaryKeyword + ', ' + accessControlService.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${accessControlService.seoData.primaryKeyword} | 24/7 Support`,
    description: 'Control who enters your facility with advanced access control. Biometric, keycard & mobile solutions for businesses in NJ & PA.',
    url: `${SITE_CONFIG.url}/services/access-control-systems`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Access Control Systems for Business Security',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: accessControlService.seoData.primaryKeyword,
    description: 'Advanced access control systems for businesses. Biometric, keycard & mobile solutions.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/access-control-systems`,
  },
};

// Schema markup
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_CONFIG.url}/services/access-control-systems#service`,
  serviceType: 'Access Control System Installation',
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
    serviceUrl: `${SITE_CONFIG.url}/services/access-control-systems`,
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
      name: 'Access Control Systems',
      item: `${SITE_CONFIG.url}/services/access-control-systems`
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
      name: 'What types of access control systems does Security Dynamics offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer a comprehensive range of access control solutions including biometric fingerprint/facial recognition scanners, proximity card readers, smart card systems, mobile credential systems, and PIN-based keypads. All systems can be managed through cloud-based platforms for remote access management.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can access control systems integrate with other security systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our access control systems seamlessly integrate with video surveillance, intrusion detection, and visitor management systems. This integration allows for automated responses like recording video when doors are accessed or triggering alarms for unauthorized entry attempts.'
      }
    },
    {
      '@type': 'Question',
      name: 'How quickly can an access control system be installed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Installation time varies based on the number of doors and complexity, but most small to medium business installations are completed within 1-3 days. We offer same-day service for urgent needs and work around your business hours to minimize disruption.'
      }
    },
    {
      '@type': 'Question',
      name: 'What happens if we lose power? Will doors remain secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All our access control systems include battery backup that maintains security for 4-8 hours during power outages. You can configure fail-secure (doors remain locked) or fail-safe (doors unlock for emergency egress) modes based on your security requirements and local fire codes.'
      }
    }
  ]
};

export default function AccessControlSystemsPage() {
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
        service={accessControlService}
        relatedServices={relatedServices}
      />
    </>
  );
}