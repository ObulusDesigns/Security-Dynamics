import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { services } from '@/lib/data/services';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get the integrated systems service data
const integratedService = services.find(s => s.slug === 'security-systems')!;
const relatedServices = services.filter(s => s.slug !== 'security-systems');

// Generate metadata
export const metadata: Metadata = {
  title: `${integratedService.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'Integrated security systems unifying access control, video, alarms & monitoring in one platform. Streamline security management for NJ & PA businesses.',
  keywords: integratedService.seoData.primaryKeyword + ', ' + integratedService.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${integratedService.seoData.primaryKeyword} | Unified Platform`,
    description: 'Unify all security systems in one powerful platform. Access control, video, alarms & monitoring integrated for NJ & PA businesses.',
    url: `${SITE_CONFIG.url}/services/security-systems`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Integrated Security Systems Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: integratedService.seoData.primaryKeyword,
    description: 'Unified security platform. Integrate access, video, alarms & monitoring.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/security-systems`,
  },
};

// Schema markup
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_CONFIG.url}/services/security-systems#service`,
  serviceType: 'Integrated Security System Installation',
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
    serviceUrl: `${SITE_CONFIG.url}/services/security-systems`,
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
      name: 'Integrated Security Systems',
      item: `${SITE_CONFIG.url}/services/security-systems`
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
      name: 'What security systems can be integrated into one platform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our integrated platform unifies access control, video surveillance, intrusion detection, fire alarms, visitor management, and environmental monitoring. All systems are managed through a single interface with unified reporting, eliminating the need to switch between multiple applications.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does integration improve security response times?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Integration enables automatic coordinated responses. When a door is forced, cameras instantly record, alarms trigger, and operators receive live video. Access denied attempts can lock down areas and alert security. This automation reduces response time from minutes to seconds.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can integrated systems work with existing equipment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our open-architecture platforms integrate with most existing security equipment through standard protocols like ONVIF, Wiegand, and Contact ID. We can create a unified system while preserving your existing hardware investments, upgrading only what\'s necessary.'
      }
    },
    {
      '@type': 'Question',
      name: 'What are the benefits of a single security platform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Benefits include simplified training (one system to learn), unified reporting for compliance, reduced false alarms through intelligent verification, lower maintenance costs, scalability without complexity, and powerful automation rules that work across all systems.'
      }
    }
  ]
};

export default function SecuritySystemsPage() {
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
        service={integratedService}
        relatedServices={relatedServices}
      />
    </>
  );
}