import { Metadata } from 'next';
import Script from 'next/script';
import BrandPageTemplate from '@/components/templates/BrandPageTemplate';
import { SITE_CONFIG } from '@/lib/utils/constants';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Axis Communications Network Cameras NJ & PA | Authorized Partner | Security Dynamics',
  description: 'Expert Axis network camera installation in New Jersey & Pennsylvania. IP surveillance, thermal imaging, analytics. Call (609) 394-8800 for consultation.',
  keywords: 'Axis Communications, Axis cameras NJ, Axis network cameras PA, IP surveillance, thermal cameras, video analytics, network video',
  openGraph: {
    title: 'Authorized Axis Communications Partner | Network Video Solutions NJ & PA',
    description: 'Professional Axis IP camera installation. Advanced analytics, thermal imaging, cybersecurity. Serving Mercer County NJ & Bucks County PA.',
    url: `${SITE_CONFIG.url}/brands/axis`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Axis Communications - Security Dynamics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axis Network Cameras | IP Video Surveillance NJ & PA',
    description: 'Leading IP camera technology. Thermal imaging, edge analytics, cybersecurity. Expert installation.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/brands/axis`,
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
  name: 'Axis Communications Network Cameras',
  brand: {
    '@type': 'Brand',
    name: 'Axis Communications'
  },
  description: 'Professional Axis network camera installation including thermal imaging, analytics, and enterprise video management',
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
      name: 'Axis',
      item: `${SITE_CONFIG.url}/brands/axis`
    }
  ]
};

const axisBrandData = {
  name: 'Axis',
  fullName: 'Axis Communications',
  tagline: 'The inventor of network video pioneering intelligent surveillance solutions for a smarter, safer world',
  description: 'Axis Communications invented the network camera in 1996 and has led the shift from analog to digital video surveillance. Today, Axis offers the industry\'s broadest portfolio of network video solutions, from robust outdoor cameras to intelligent analytics and access control. With a focus on open standards, cybersecurity, and sustainability, Axis delivers innovative solutions that help protect people, property, and business operations.',
  features: [
    'World\'s largest portfolio of network cameras',
    'ARTPEC chips for superior image quality and analytics',
    'Lightfinder and Forensic WDR for challenging conditions',
    'Thermal imaging for perimeter protection',
    'Edge-based analytics reducing bandwidth and storage',
    'Zipstream technology for efficient video compression',
    'Open platform supporting third-party applications'
  ],
  benefits: {
    residential: [
      'Crystal-clear 4K resolution for detailed coverage',
      'Color video in near darkness with Lightfinder',
      'Smart home integration capabilities',
      'Vandal-resistant designs for outdoor protection',
      'Two-way audio for visitor communication',
      'Motion detection with customizable zones',
      'Secure remote viewing from anywhere'
    ],
    commercial: [
      'Scalable solutions from small shops to enterprises',
      'Advanced analytics for business intelligence',
      'Integration with access control and audio systems',
      'Radar detection for accurate perimeter security',
      'License plate recognition capabilities',
      'Crowd management and heat mapping',
      'Centralized management with AXIS Camera Station'
    ]
  },
  products: [
    {
      name: 'AXIS Q-line Cameras',
      description: 'Thermal network cameras for reliable detection in darkness and challenging weather conditions.',
      ideal: 'Perimeter protection and critical infrastructure'
    },
    {
      name: 'AXIS P-line Cameras',
      description: 'Professional fixed and PTZ cameras with superior image quality and built-in analytics.',
      ideal: 'General surveillance for all environments'
    },
    {
      name: 'AXIS Camera Station',
      description: 'Video management software designed for easy installation and intuitive operation.',
      ideal: 'Small to medium-sized installations'
    },
    {
      name: 'AXIS Radar Solutions',
      description: 'Radar detectors for accurate motion detection with minimal false alarms.',
      ideal: 'Large area surveillance and perimeter security'
    }
  ],
  faqs: [
    {
      question: 'Why choose Axis cameras over other IP camera brands?',
      answer: 'Axis invented the network camera and continues to lead with superior image quality, advanced analytics, and unmatched reliability. Their ARTPEC chips deliver exceptional performance, while features like Lightfinder and Forensic WDR ensure clear video in any conditions. Plus, Axis\'s commitment to cybersecurity and open standards protects your investment.'
    },
    {
      question: 'What makes Axis thermal cameras special?',
      answer: 'Axis thermal cameras detect heat signatures, providing reliable detection in complete darkness, fog, or camouflaged scenarios. They\'re ideal for perimeter protection, offering detection ranges up to several hundred meters with intelligent analytics to distinguish between people, vehicles, and animals.'
    },
    {
      question: 'Can Axis cameras work with my existing video management system?',
      answer: 'Yes! Axis cameras support ONVIF standards and integrate with most major VMS platforms including Milestone, Genetec, and others. They also offer their own AXIS Camera Station VMS for those preferring a complete Axis solution. Our team can ensure seamless integration with your existing system.'
    },
    {
      question: 'What analytics capabilities do Axis cameras provide?',
      answer: 'Axis cameras offer extensive edge-based analytics including object classification, line crossing, loitering detection, removed object detection, and more. Advanced applications include people counting, queue management, license plate recognition, and audio detection. Many analytics run directly on the camera, reducing server load.'
    },
    {
      question: 'How much do Axis camera systems typically cost?',
      answer: 'Axis camera systems are priced based on your specific needs. Basic installations with a few cameras start around $3,000, while comprehensive systems with analytics and integration can range from $10,000 to $50,000+. We provide free site assessments to determine the optimal solution for your budget.'
    },
    {
      question: 'What support does Security Dynamics provide for Axis systems?',
      answer: 'As an Axis partner, we provide complete lifecycle support including system design, professional installation, configuration, training, and ongoing maintenance. We offer 24/7 technical support, firmware updates, and can expand or modify your system as needs change. Our technicians are Axis-certified for expert service.'
    }
  ],
  certifications: [
    'Axis Certified Professionals',
    'Network Video Installation certified',
    'Thermal imaging specialists',
    'VMS integration experts',
    'Cybersecurity trained',
    'NJ/PA licensed installers'
  ],
  warranty: 'Axis 3-5 year warranty depending on product line, with extended options'
};

export default function AxisBrandPage() {
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

      <BrandPageTemplate brand={axisBrandData} />
    </>
  );
}