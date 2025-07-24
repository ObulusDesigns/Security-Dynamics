import { Metadata } from 'next';
import Script from 'next/script';
import BrandPageTemplate from '@/components/templates/BrandPageTemplate';
import { SITE_CONFIG } from '@/lib/utils/constants';

// SEO Metadata
export const metadata: Metadata = {
  title: 'OpenEye Web Services NJ & PA | Cloud Video Surveillance | Security Dynamics',
  description: 'OpenEye cloud-based video surveillance solutions in New Jersey & Pennsylvania. Web Services platform, hybrid cloud recording, advanced analytics. Call (609) 394-8800.',
  keywords: 'OpenEye Web Services, OpenEye dealer NJ, cloud video surveillance PA, hybrid cloud recording, video analytics, remote monitoring, OpenEye Apex',
  openGraph: {
    title: 'OpenEye Cloud Video Surveillance | Authorized Dealer NJ & PA',
    description: 'Professional OpenEye Web Services installation. Cloud-based surveillance, hybrid recording, advanced analytics. Serving Mercer County NJ & Bucks County PA.',
    url: `${SITE_CONFIG.url}/brands/openeye`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'OpenEye Video Surveillance - Security Dynamics'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/brands/openeye`}};

// Schema markup
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_CONFIG.url}/#organization`,
  name: 'Security Dynamics Inc.',
  url: SITE_CONFIG.url,
  telephone: '(609) 394-8800',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '520 Route 33',
    addressLocality: 'Millstone',
    addressRegion: 'NJ',
    postalCode: '08535',
    addressCountry: 'US'
  }
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'OpenEye Video Surveillance Systems',
  brand: {
    '@type': 'Brand',
    name: 'OpenEye'
  },
  description: 'Professional OpenEye cloud-based video surveillance installation with Web Services platform and advanced analytics',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    seller: {
      '@id': `${SITE_CONFIG.url}/#organization`
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'New Jersey',
        containsPlace: {
          '@type': 'AdministrativeArea',
          name: 'Mercer County'
        }
      },
      {
        '@type': 'State',
        name: 'Pennsylvania',
        containsPlace: {
          '@type': 'AdministrativeArea',
          name: 'Bucks County'
        }
      }
    ]
  }
};

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
      name: 'Brands',
      item: `${SITE_CONFIG.url}/brands`
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'OpenEye',
      item: `${SITE_CONFIG.url}/brands/openeye`
    }
  ]
};

const openeyeBrandData = {
  name: 'OpenEye',
  fullName: 'OpenEye Web Services',
  tagline: 'Cloud-managed video surveillance that\'s simple, scalable, and secure',
  description: 'OpenEye pioneered cloud-managed video surveillance with their Web Services platform, delivering enterprise-grade security that\'s remarkably easy to use. Their innovative approach combines the reliability of on-premise recording with the flexibility of cloud management, offering true hybrid solutions. OpenEye\'s platform provides powerful analytics, intuitive interfaces, and seamless scalability from single locations to global enterprises. As an OpenEye partner, Security Dynamics delivers professionally installed systems that maximize the platform\'s capabilities while ensuring reliable, secure operation.',
  features: [
    'True cloud and on-premise hybrid architecture',
    'Automatic camera discovery and configuration',
    'Advanced video analytics with real-time alerts',
    'Bandwidth-efficient cloud recording options',
    'Centralized management for multiple locations',
    'Open platform supporting third-party cameras',
    'Encrypted, cybersecure video transmission'
  ],
  benefits: {
    residential: [
      'Access cameras from anywhere via web or mobile app',
      'Instant alerts for motion, people, or vehicle detection',
      'Secure cloud backup prevents footage loss',
      'Easy sharing of video clips with authorities',
      'No software to maintain or update',
      'Intuitive timeline navigation for quick searches',
      'Works with existing IP cameras'
    ],
    commercial: [
      'Manage hundreds of locations from one platform',
      'Role-based access control for staff',
      'Advanced analytics for business intelligence',
      'Automatic health monitoring and alerts',
      'Seamless integration with access control',
      'Detailed audit trails for compliance',
      'Flexible storage options to meet retention needs'
    ]
  },
  products: [
    {
      name: 'OpenEye Web Services',
      description: 'Cloud-managed platform providing remote access, alerts, and analytics for any size deployment.',
      ideal: 'Businesses wanting cloud benefits with local recording'
    },
    {
      name: 'Apex Series Recorders',
      description: 'High-performance NVRs with built-in Web Services, supporting up to 128 cameras per unit.',
      ideal: 'Large installations requiring extensive storage'
    },
    {
      name: 'Cloud Storage Plans',
      description: 'Flexible cloud recording options from continuous to event-based, with retention up to 365 days.',
      ideal: 'Critical footage requiring off-site backup'
    },
    {
      name: 'Analytics Suite',
      description: 'AI-powered video analytics including people counting, heat mapping, and custom alerts.',
      ideal: 'Businesses seeking actionable insights from video'
    }
  ],
  faqs: [
    {
      question: 'What makes OpenEye different from other video surveillance brands?',
      answer: 'OpenEye\'s true hybrid architecture sets them apart - you get the reliability of local recording with the convenience of cloud management. Their platform is hardware-agnostic, working with most IP cameras, and requires no software installation. The automatic configuration and intuitive interface make it exceptionally easy to use while still offering enterprise-grade features and security.'
    },
    {
      question: 'Do I need to store all my video in the cloud with OpenEye?',
      answer: 'No! OpenEye offers flexible storage options. Most customers use local recording for continuous video and selective cloud storage for important events. You can choose continuous cloud recording, motion-triggered uploads, or manual clip selection. This hybrid approach optimizes costs while ensuring critical footage is protected off-site.'
    },
    {
      question: 'Can OpenEye work with my existing cameras?',
      answer: 'Yes! OpenEye\'s open platform supports thousands of camera models from major manufacturers. Their ONVIF compliance means most modern IP cameras will work seamlessly. During consultation, we\'ll verify compatibility and may recommend specific cameras to maximize analytics capabilities, but wholesale replacement is rarely necessary.'
    },
    {
      question: 'How secure is OpenEye\'s cloud platform?',
      answer: 'OpenEye prioritizes security with end-to-end encryption, secure authentication, and SOC 2 Type II compliance. Video streams are encrypted in transit and at rest. The platform includes automatic security updates, strong password enforcement, and detailed audit logs. Their data centers feature redundancy and meet strict security standards.'
    },
    {
      question: 'What\'s the cost structure for OpenEye systems?',
      answer: 'OpenEye systems include hardware costs (recorders and cameras if needed) plus monthly Web Services fees starting at $9.95 per camera. Cloud storage is additional based on retention needs. Total costs typically range from $2,500-$5,000 for small businesses to custom pricing for enterprises. We provide detailed ROI analysis during consultation.'
    },
    {
      question: 'Can OpenEye integrate with other security systems?',
      answer: 'Yes! OpenEye integrates with major access control systems, allowing synchronized video and access events. Their open API enables custom integrations with business systems. Common integrations include POS systems for retail, access control for offices, and alarm systems for verified response. Our team handles complete integration during installation.'
    }
  ],
  certifications: [
    'OpenEye certified installation partner',
    'Web Services platform specialists',
    'Cloud architecture certified',
    'Video analytics configuration experts',
    'Cybersecurity best practices',
    'Integration specialists'
  ],
  warranty: 'OpenEye 5-year hardware warranty with advance replacement options'
};

export default function OpenEyeBrandPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)}}
      />
      <Script
        id="schema-product"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema)}}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)}}
      />

      <BrandPageTemplate brand={openeyeBrandData} />
    </>
  );
}