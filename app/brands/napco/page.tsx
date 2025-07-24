import { Metadata } from 'next';
import Script from 'next/script';
import BrandPageTemplate from '@/components/templates/BrandPageTemplate';
import { SITE_CONFIG } from '@/lib/utils/constants';

// SEO Metadata
export const metadata: Metadata = {
  title: 'NAPCO Security Systems NJ & PA | Authorized Dealer | Security Dynamics',
  description: 'Professional NAPCO security system installation in New Jersey & Pennsylvania. StarLink communicators, access control, wireless security. Call (609) 394-8800.',
  keywords: 'NAPCO security systems, NAPCO dealer NJ, NAPCO installer PA, StarLink communicators, Gemini security panels, commercial fire alarms, wireless security',
  openGraph: {
    title: 'NAPCO Security Systems | Authorized Dealer NJ & PA',
    description: 'Expert NAPCO installation. StarLink communications, Gemini panels, access control. Serving Mercer County NJ & Bucks County PA.',
    url: `${SITE_CONFIG.url}/brands/napco`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'NAPCO Security Systems - Security Dynamics'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/brands/napco`}};

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
  name: 'NAPCO Security Systems',
  brand: {
    '@type': 'Brand',
    name: 'NAPCO Security Technologies'
  },
  description: 'Professional NAPCO security system installation including StarLink communicators and Gemini control panels',
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
      name: 'NAPCO',
      item: `${SITE_CONFIG.url}/brands/napco`
    }
  ]
};

const napcoBrandData = {
  name: 'NAPCO',
  fullName: 'NAPCO Security Technologies',
  tagline: 'Innovative American-made security solutions powering professional installations since 1969',
  description: 'NAPCO Security Technologies has been at the forefront of security innovation for over 50 years, manufacturing professional-grade systems that installers trust and end-users love. Their groundbreaking StarLink communication technology revolutionized alarm communications with built-in cellular and network connectivity. From the versatile Gemini control panels to sophisticated access control and fire systems, NAPCO products deliver reliability, flexibility, and ease of use. With everything designed and manufactured in New York, NAPCO provides rapid delivery, exceptional support, and products that stand the test of time. Security Dynamics relies on NAPCO\'s innovative solutions to deliver superior protection for our clients.',
  features: [
    'StarLink universal alarm communicators with cellular/IP',
    'Gemini series control panels for any size application',
    'Commercial fire alarm systems with voice evacuation',
    'Scalable access control from 2 to thousands of doors',
    'Advanced wireless security sensors and devices',
    'Made in USA with rapid shipping and support',
    'Prima by NAPCO DIY professional monitoring'
  ],
  benefits: {
    residential: [
      'All-in-one panels reduce installation time and cost',
      'StarLink eliminates phone line vulnerabilities',
      'Wireless sensors preserve home aesthetics',
      'iBridge app for complete smartphone control',
      'Professional features at affordable prices',
      'False alarm prevention technology',
      'Lifetime warranty on many components'
    ],
    commercial: [
      'Modular systems grow with your business',
      'Multi-path communications ensure reliability',
      'Integration with access control and video',
      'Advanced user management and partitioning',
      'Detailed audit trails for compliance',
      'Remote diagnostics reduce service calls',
      'Commercial fire systems meet all codes'
    ]
  },
  products: [
    {
      name: 'StarLink Communicators',
      description: 'Universal cellular/IP communicators compatible with any alarm panel, providing secure dual-path communication.',
      ideal: 'Upgrading existing systems to cellular monitoring'
    },
    {
      name: 'Gemini Series Panels',
      description: 'Versatile control panels from 8 to 255 zones with built-in communications and home automation.',
      ideal: 'New installations requiring flexibility and features'
    },
    {
      name: 'FireLink FACP',
      description: 'Addressable commercial fire alarm panels with integrated voice evacuation and mass notification.',
      ideal: 'Commercial buildings requiring code-compliant fire systems'
    },
    {
      name: 'Continental Access',
      description: 'Enterprise access control supporting unlimited doors and cardholders with advanced integration.',
      ideal: 'Large facilities and multi-site organizations'
    }
  ],
  faqs: [
    {
      question: 'What makes NAPCO\'s StarLink communicators special?',
      answer: 'StarLink revolutionized alarm communications by providing universal compatibility with virtually any alarm panel, not just NAPCO. They offer dual-path communication (cellular + IP) for redundancy, eliminate phone line costs, and provide faster alarm transmission than traditional dialers. With built-in encryption and jamming detection, StarLink ensures your alarm signals always get through. They\'re perfect for upgrading older systems to modern communications.'
    },
    {
      question: 'How do NAPCO systems compare to other major brands?',
      answer: 'NAPCO offers professional-grade features at competitive prices. Their Gemini panels include capabilities that cost extra with other brands - like built-in communications, wireless zones, and home automation. Being manufactured in New York means faster delivery and better support than imported products. NAPCO\'s 50+ year reputation and installer-friendly design make them a preferred choice for security professionals.'
    },
    {
      question: 'Can NAPCO systems integrate with smart home devices?',
      answer: 'Yes! NAPCO was an early innovator in home automation integration. Their panels work with Z-Wave devices for lighting, locks, thermostats, and more. The iBridge app provides complete control from smartphones, including arming/disarming, video viewing, and automation control. NAPCO also integrates with Alexa and Google Assistant for voice control of your security system.'
    },
    {
      question: 'What is Prima by NAPCO?',
      answer: 'Prima by NAPCO is their innovative DIY professional monitoring service. It allows professional installation with user-managed monitoring, reducing monthly costs while maintaining professional response. Users can switch between self-monitoring and professional monitoring instantly through the app. This flexibility is perfect for cost-conscious customers who still want professional-grade equipment.'
    },
    {
      question: 'What\'s the typical investment for NAPCO security systems?',
      answer: 'NAPCO systems offer excellent value across all price points. Basic residential systems start around $800 installed. Advanced residential or small commercial systems range from $1,500-$3,500. Large commercial installations with access control and fire are custom-quoted. The modular design means you can start basic and expand over time. We provide transparent pricing with no hidden costs.'
    },
    {
      question: 'How long do NAPCO systems typically last?',
      answer: 'NAPCO systems are built for longevity. Many panels installed in the 1990s are still operating reliably. With proper maintenance, expect 15-20+ years of service. NAPCO\'s commitment to backward compatibility means older systems can often be upgraded rather than replaced. They maintain parts availability for discontinued products longer than most manufacturers, protecting your investment.'
    }
  ],
  certifications: [
    'NAPCO certified installer',
    'StarLink specialist certification',
    'Gemini advanced programming',
    'Commercial fire certified',
    'Access control specialist',
    'Prima by NAPCO authorized'
  ],
  warranty: 'NAPCO limited lifetime warranty on many products, 2-year standard on others'
};

export default function NapcoBrandPage() {
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

      <BrandPageTemplate brand={napcoBrandData} />
    </>
  );
}