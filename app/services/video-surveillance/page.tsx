import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { services } from '@/lib/data/services';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

// Get the video surveillance service data
const videoSurveillanceService = services.find(s => s.slug === 'video-surveillance')!;
const relatedServices = services.filter(s => s.slug !== 'video-surveillance');

// Generate metadata
export const metadata: Metadata = {
  title: `${videoSurveillanceService.seoData.primaryKeyword} | Security Dynamics Inc.`,
  description: 'HD/4K video surveillance systems for NJ & PA businesses. AI-powered analytics, cloud storage, facial recognition & remote monitoring. Get free consultation!',
  keywords: videoSurveillanceService.seoData.primaryKeyword + ', ' + videoSurveillanceService.seoData.secondaryKeywords.join(', '),
  openGraph: {
    title: `${videoSurveillanceService.seoData.primaryKeyword} | AI-Powered Analytics`,
    description: 'Protect your business with HD/4K cameras and AI analytics. Cloud storage, remote viewing & facial recognition for NJ & PA businesses.',
    url: `${SITE_CONFIG.url}/services/video-surveillance`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Video Surveillance Systems for Business Security',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: videoSurveillanceService.seoData.primaryKeyword,
    description: 'HD/4K video surveillance with AI analytics. Cloud storage & remote monitoring.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/video-surveillance`,
  },
};

// Schema markup
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_CONFIG.url}/services/video-surveillance#service`,
  serviceType: 'Video Surveillance System Installation',
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
    serviceUrl: `${SITE_CONFIG.url}/services/video-surveillance`,
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
      name: 'Video Surveillance',
      item: `${SITE_CONFIG.url}/services/video-surveillance`
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
      name: 'What video quality options are available for surveillance cameras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer cameras ranging from 1080p HD to 4K Ultra HD resolution. Most businesses choose 4MP (2K) cameras for the optimal balance of clarity and storage. We also provide specialized cameras including low-light, thermal imaging, and PTZ (pan-tilt-zoom) options.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long is video footage stored and can I access it remotely?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard cloud storage includes 30 days of continuous recording, with options for 60-90 days. You can access live and recorded footage from anywhere using our secure mobile app or web portal. Local NVR storage options are also available for longer retention periods.'
      }
    },
    {
      '@type': 'Question',
      name: 'What AI features are available in modern video surveillance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our AI-powered analytics include facial recognition, people counting, vehicle detection, line crossing alerts, loitering detection, and object removal alerts. The system can distinguish between people, vehicles, and animals to reduce false alarms.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are the video surveillance systems compliant with privacy laws?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our systems are fully compliant with NJ and PA surveillance laws. We ensure proper signage, avoid audio recording where prohibited, and implement privacy masking for sensitive areas. We also provide guidance on employee notification requirements.'
      }
    }
  ]
};

export default function VideoSurveillancePage() {
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
        service={videoSurveillanceService}
        relatedServices={relatedServices}
      />
    </>
  );
}