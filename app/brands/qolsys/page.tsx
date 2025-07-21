import { Metadata } from 'next';
import Script from 'next/script';
import BrandPageTemplate from '@/components/templates/BrandPageTemplate';
import { SITE_CONFIG } from '@/lib/utils/constants';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Qolsys Security Systems NJ & PA | IQ Panel Dealer | Security Dynamics',
  description: 'Professional Qolsys IQ Panel installation in New Jersey & Pennsylvania. PowerG technology, built-in camera, smart home integration. Call (609) 394-8800.',
  keywords: 'Qolsys security systems, Qolsys dealer NJ, IQ Panel 4, PowerG sensors, Qolsys installer PA, smart security panels, wireless alarm systems',
  openGraph: {
    title: 'Authorized Qolsys Dealer | IQ Panel Security Systems NJ & PA',
    description: 'Expert Qolsys installation. IQ Panel 4 with PowerG, video, automation. Android-powered security. Serving Mercer County NJ & Bucks County PA.',
    url: `${SITE_CONFIG.url}/brands/qolsys`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Qolsys IQ Panel Security - Security Dynamics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qolsys IQ Panel | Advanced Smart Security NJ & PA',
    description: 'Next-gen Qolsys security. Android-powered, PowerG range, built-in camera. Expert installation.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/brands/qolsys`,
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
  name: 'Qolsys IQ Panel Security Systems',
  brand: {
    '@type': 'Brand',
    name: 'Qolsys'
  },
  description: 'Professional Qolsys IQ Panel installation featuring PowerG technology and Android-powered interface',
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
      name: 'Qolsys',
      item: `${SITE_CONFIG.url}/brands/qolsys`
    }
  ]
};

const qolsysBrandData = {
  name: 'Qolsys',
  fullName: 'Qolsys IQ Panel Security Systems',
  tagline: 'The most innovative security panel ever created, powered by Android for unlimited possibilities',
  description: 'Qolsys has redefined security with the IQ Panel - the first Android-powered security system. Featuring a stunning 7" HD touchscreen, built-in camera, and multiple wireless technologies including PowerG, the IQ Panel 4 represents the future of home security. With native support for Alarm.com, Z-Wave Plus, and even legacy sensors, Qolsys delivers unmatched functionality in an elegant, user-friendly package.',
  features: [
    'Android-powered platform with regular updates',
    'PowerG technology with 4x the range of traditional wireless',
    '7" HD touchscreen with photo frame mode',
    'Built-in 8MP camera with disarm photos',
    'Multiple wireless radios supporting 319.5MHz, 345MHz, and PowerG',
    'Bluetooth disarming and voice control',
    'Built-in glass break detector and motion sensor'
  ],
  benefits: {
    residential: [
      'Stunning HD touchscreen enhances home décor',
      'Photo frame mode displays family photos when idle',
      'Bluetooth automatically disarms when you arrive',
      'Built-in camera captures who disarms system',
      'Control entire smart home from one panel',
      'Live answer video doorbell calls on panel',
      'Partitions for guest houses or rentals'
    ],
    commercial: [
      'Android platform enables custom business apps',
      'Support for up to 128 zones',
      'Multiple partitions for different areas',
      'User management with photo verification',
      'Integrated access control capabilities',
      'Panel-to-panel communication options',
      'Remote software updates and management'
    ]
  },
  products: [
    {
      name: 'IQ Panel 4',
      description: 'Latest generation with 7" HD touchscreen, Android 9, PowerG, and built-in camera with multiple wireless frequencies.',
      ideal: 'Premium installations wanting cutting-edge technology'
    },
    {
      name: 'IQ Remote',
      description: 'Secondary touchscreen keypad providing full system control from multiple locations.',
      ideal: 'Large homes needing control from multiple areas'
    },
    {
      name: 'PowerG Sensors',
      description: 'Military-grade encrypted sensors with 2-mile range and 8-year battery life.',
      ideal: 'Large properties and maximum security'
    },
    {
      name: 'IQ Hub',
      description: 'Compact panel designed for apartments and smaller installations with essential features.',
      ideal: 'Apartments and budget-conscious installations'
    }
  ],
  faqs: [
    {
      question: 'What makes the Qolsys IQ Panel different from other security panels?',
      answer: 'The IQ Panel is the only Android-powered security panel, giving it smartphone-like capabilities and regular feature updates. It combines multiple wireless technologies in one panel, has a built-in camera for disarm photos, and features like Bluetooth disarming that no other panel offers. The stunning interface makes it a showpiece, not something to hide.'
    },
    {
      question: 'What is PowerG and why is it important?',
      answer: 'PowerG is advanced wireless technology offering 4x the range of traditional sensors (up to 2 miles line-of-sight), military-grade encryption, and 8-year battery life. This means fewer repeaters needed, better reliability in large homes, and protection against hacking. PowerG sensors also provide superior interference immunity.'
    },
    {
      question: 'Can the IQ Panel work with my existing sensors?',
      answer: 'Yes! The IQ Panel 4 supports multiple wireless frequencies (319.5MHz, 345MHz, and PowerG), making it compatible with most existing wireless sensors from brands like Honeywell, 2GIG, and DSC. This allows you to upgrade your panel while keeping your existing sensors, saving money.'
    },
    {
      question: 'What smart home devices work with Qolsys?',
      answer: 'Qolsys includes Z-Wave Plus and Zigbee radios, supporting thousands of devices including lights, locks, thermostats, and garage doors. With Alarm.com integration, you also get advanced features like video doorbells, energy management, and scenes. The Android platform allows for future integrations as technology evolves.'
    },
    {
      question: 'How much does a Qolsys IQ Panel system cost?',
      answer: 'IQ Panel 4 systems typically start around $800 for basic packages. The panel itself runs $600-700, with sensors adding to the total. Most comprehensive residential installations range from $1,200-2,500. The advanced features and future-proof technology make it an excellent long-term investment.'
    },
    {
      question: 'Why choose Security Dynamics for Qolsys installation?',
      answer: 'We\'re certified Qolsys installers who understand how to maximize the IQ Panel\'s advanced features. From PowerG placement to smart home integration, we ensure your system performs flawlessly. Our local presence means quick support, and we can expand your system as technology evolves. We make the advanced simple.'
    }
  ],
  certifications: [
    'Qolsys certified installers',
    'PowerG technology specialists',
    'Android platform certified',
    'Smart home integration experts',
    'Alarm.com certified',
    'NJ/PA licensed contractor'
  ],
  warranty: 'Qolsys 3-year limited warranty with lifetime software updates'
};

export default function QolsysBrandPage() {
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

      <BrandPageTemplate brand={qolsysBrandData} />
    </>
  );
}