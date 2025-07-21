import { Metadata } from 'next';
import Script from 'next/script';
import BrandPageTemplate from '@/components/templates/BrandPageTemplate';
import { SITE_CONFIG } from '@/lib/utils/constants';

// SEO Metadata
export const metadata: Metadata = {
  title: 'DSC Security Systems NJ & PA | Authorized DSC Dealer | Security Dynamics',
  description: 'Expert DSC security system installation in New Jersey & Pennsylvania. PowerSeries Neo, iotega wireless systems. Factory-trained technicians. Call (609) 394-8800.',
  keywords: 'DSC security systems, DSC dealer NJ, DSC installer PA, PowerSeries Neo, DSC iotega, DSC alarm systems, Digital Security Controls',
  openGraph: {
    title: 'Authorized DSC Security Systems Dealer | NJ & PA Installation',
    description: 'Professional DSC security system installation and monitoring. PowerSeries Neo & iotega wireless systems. Serving Mercer County NJ & Bucks County PA.',
    url: `${SITE_CONFIG.url}/brands/dsc`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'DSC Security Systems - Security Dynamics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DSC Security Systems | Authorized Dealer NJ & PA',
    description: 'Expert DSC installation. PowerSeries Neo, iotega wireless. 24/7 monitoring. Free consultation.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/brands/dsc`,
  },
};

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
  name: 'DSC Security Systems',
  brand: {
    '@type': 'Brand',
    name: 'DSC (Digital Security Controls)'
  },
  description: 'Professional DSC security system installation including PowerSeries Neo and iotega wireless systems',
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
      name: 'DSC',
      item: `${SITE_CONFIG.url}/brands/dsc`
    }
  ]
};

const dscBrandData = {
  name: 'DSC',
  fullName: 'DSC (Digital Security Controls)',
  tagline: 'Industry-leading security technology with proven reliability and advanced features for complete protection',
  description: 'DSC (Digital Security Controls) has been a global leader in electronic security for over 40 years. Known for their innovative PowerSeries and iotega product lines, DSC systems offer unmatched reliability, scalability, and integration capabilities. As an authorized DSC dealer, Security Dynamics provides expert installation and support for the full range of DSC security solutions.',
  features: [
    'PowerSeries Neo hybrid panels supporting up to 128 zones',
    'iotega wireless systems with PowerG technology for extended range',
    'Integration with Alarm.com for remote monitoring and control',
    'False alarm prevention technology reducing costly dispatches',
    'Encrypted wireless communication for maximum security',
    'Expandable systems that grow with your needs',
    'UL/ULC listed for commercial applications'
  ],
  benefits: {
    residential: [
      'Easy-to-use touchscreen keypads with intuitive interface',
      'Smart home integration with lights, locks, and thermostats',
      'Mobile app control from anywhere in the world',
      'Pet-immune motion detectors reducing false alarms',
      'Wireless sensors preserve home aesthetics',
      'Battery backup ensures protection during power outages',
      'Professional monitoring with rapid emergency response'
    ],
    commercial: [
      'Scalable systems supporting large commercial installations',
      'Advanced access control integration capabilities',
      'Multi-partition support for tenant management',
      'Detailed audit trails for compliance requirements',
      'Integration with video surveillance systems',
      'Remote management for multiple locations',
      'Commercial fire alarm integration options'
    ]
  },
  products: [
    {
      name: 'PowerSeries Neo',
      description: 'Hybrid security platform combining hardwired reliability with wireless flexibility. Supports up to 128 zones with advanced features.',
      ideal: 'Medium to large commercial properties and high-end residential'
    },
    {
      name: 'iotega',
      description: 'All-in-one wireless security system with PowerG technology providing exceptional range and battery life.',
      ideal: 'Residential homes and small businesses'
    },
    {
      name: 'PowerSeries Pro',
      description: 'Commercial-grade security platform with advanced integration capabilities and enterprise features.',
      ideal: 'Large commercial and industrial facilities'
    }
  ],
  faqs: [
    {
      question: 'What makes DSC security systems different from other brands?',
      answer: 'DSC systems are known for their exceptional reliability, advanced PowerG wireless technology, and seamless integration capabilities. With over 40 years of innovation, DSC offers proven security solutions that scale from residential to large commercial applications while maintaining ease of use and professional-grade features.'
    },
    {
      question: 'Can DSC systems integrate with my existing security equipment?',
      answer: 'Yes, DSC systems are designed with compatibility in mind. PowerSeries Neo hybrid panels can work with both hardwired and wireless devices, and many existing sensors can be integrated. Our technicians will assess your current setup and recommend the best integration approach.'
    },
    {
      question: 'What is PowerG technology in DSC systems?',
      answer: 'PowerG is DSC\'s revolutionary wireless technology that provides unprecedented range (up to 2km line-of-sight), extended battery life (up to 8 years), and military-grade encryption. It ensures reliable communication between devices while being immune to interference.'
    },
    {
      question: 'How much does a DSC security system cost?',
      answer: 'DSC system costs vary based on property size, number of devices, and features selected. Basic residential systems start around $599, while comprehensive commercial solutions are custom-quoted. We offer free on-site assessments to provide accurate pricing for your specific needs.'
    },
    {
      question: 'Does Security Dynamics provide warranty and support for DSC systems?',
      answer: 'Yes, we provide comprehensive warranties on all DSC equipment and our installation work. As an authorized dealer, we offer factory-backed warranties, 24/7 technical support, and maintenance plans to keep your system running optimally.'
    },
    {
      question: 'Can I monitor and control my DSC system remotely?',
      answer: 'Absolutely! DSC systems integrate with Alarm.com, providing full remote access via smartphone app or web browser. You can arm/disarm your system, receive alerts, view cameras, control smart devices, and manage user codes from anywhere.'
    }
  ],
  certifications: [
    'Factory-trained DSC technicians',
    'PowerG certified installers',
    'Alarm.com authorized dealer',
    'NJ Burglar & Fire Alarm Licensed',
    'PA Security System Contractor'
  ],
  warranty: '2-year manufacturer warranty with extended options available'
};

export default function DSCBrandPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="schema-product"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <BrandPageTemplate brand={dscBrandData} />
    </>
  );
}