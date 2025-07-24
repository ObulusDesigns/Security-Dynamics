import { Metadata } from 'next';
import Script from 'next/script';
import BrandPageTemplate from '@/components/templates/BrandPageTemplate';
import { SITE_CONFIG } from '@/lib/utils/constants';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Hikvision Security Systems NJ & PA | Authorized Dealer | Security Dynamics',
  description: 'Professional Hikvision security camera installation in New Jersey & Pennsylvania. 4K surveillance, AI analytics, remote monitoring. Call (609) 394-8800.',
  keywords: 'Hikvision security cameras, Hikvision dealer NJ, Hikvision installer PA, 4K surveillance, AI video analytics, ColorVu technology, AcuSense',
  openGraph: {
    title: 'Authorized Hikvision Security Systems Dealer | NJ & PA Installation',
    description: 'Advanced Hikvision surveillance installation. 4K cameras, AI-powered analytics, ColorVu night vision. Serving Mercer County NJ & Bucks County PA.',
    url: `${SITE_CONFIG.url}/brands/hikvision`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Hikvision Security Systems - Security Dynamics'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/brands/hikvision`}};

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
  name: 'Hikvision Security Systems',
  brand: {
    '@type': 'Brand',
    name: 'Hikvision'
  },
  description: 'Professional Hikvision security camera installation including 4K surveillance systems and AI-powered video analytics',
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
      name: 'Hikvision',
      item: `${SITE_CONFIG.url}/brands/hikvision`
    }
  ]
};

const hikvisionBrandData = {
  name: 'Hikvision',
  fullName: 'Hikvision Digital Technology',
  tagline: 'World-leading video surveillance manufacturer with cutting-edge AI and imaging technology',
  description: 'Hikvision is the world\'s largest supplier of video surveillance products and solutions. With industry-leading R&D capabilities, Hikvision manufactures a full suite of comprehensive products ranging from entry-level to high-end for diverse vertical markets. Their innovative technologies include ColorVu for 24/7 color imaging, AcuSense for accurate human and vehicle detection, and deep learning algorithms that revolutionize video analytics. As an authorized Hikvision dealer, Security Dynamics provides expert design, installation, and support for complete surveillance solutions.',
  features: [
    '4K Ultra HD resolution for crystal-clear video quality',
    'ColorVu technology for 24/7 full-color imaging',
    'AcuSense AI-powered human and vehicle detection',
    'H.265+ compression for efficient storage',
    'Wide range of cameras including dome, bullet, and PTZ',
    'HikCentral unified management platform',
    'Deep learning video analytics and facial recognition'
  ],
  benefits: {
    residential: [
      'ColorVu cameras provide color video even in complete darkness',
      'Two-way audio for communication through cameras',
      'Motion detection 2.0 reduces false alarms by 90%',
      'Hik-Connect app for easy remote viewing',
      'Smart playback for quick event searching',
      'Weather-resistant cameras for outdoor protection',
      'Integration with smart home systems'
    ],
    commercial: [
      'Enterprise-grade video management software',
      'Facial recognition and people counting analytics',
      'Heat mapping for retail traffic analysis',
      'License plate recognition systems',
      'Thermal cameras for perimeter protection',
      'Fisheye cameras for 360-degree coverage',
      'Scalable storage solutions up to petabytes'
    ]
  },
  products: [
    {
      name: 'ColorVu Series',
      description: 'Revolutionary cameras that capture vivid, full-color video 24/7 using advanced lenses and sensors.',
      ideal: 'Properties requiring detailed color information at all times'
    },
    {
      name: 'AcuSense Series',
      description: 'AI-powered cameras that accurately detect and classify humans and vehicles, reducing false alarms.',
      ideal: 'High-security applications requiring intelligent detection'
    },
    {
      name: 'DeepinView Series',
      description: 'Deep learning cameras with advanced analytics including facial recognition and behavior analysis.',
      ideal: 'Enterprise and government applications'
    },
    {
      name: 'TurboHD Series',
      description: 'HD-over-coax cameras that upgrade analog systems to HD without rewiring.',
      ideal: 'Upgrading existing analog installations'
    }
  ],
  faqs: [
    {
      question: 'What makes Hikvision cameras superior to other brands?',
      answer: 'Hikvision leads the industry in video surveillance innovation with technologies like ColorVu for 24/7 color imaging, AcuSense for intelligent detection, and superior low-light performance. Their massive R&D investment results in better image quality, smarter analytics, and more reliable products. With the industry\'s widest product range, Hikvision offers solutions for every application and budget.'
    },
    {
      question: 'Can Hikvision cameras work with my existing security system?',
      answer: 'Yes! Hikvision cameras support multiple protocols including ONVIF, making them compatible with many existing systems. Their TurboHD line specifically allows HD upgrades over existing coax cable. Our technicians can assess your current system and recommend the best integration approach, whether it\'s a partial upgrade or complete replacement.'
    },
    {
      question: 'What is ColorVu technology and why is it important?',
      answer: 'ColorVu is Hikvision\'s breakthrough technology that provides full-color video 24/7, even in complete darkness. Using advanced lenses with F1.0 aperture and high-sensitivity sensors, ColorVu cameras capture details that would be invisible with traditional infrared cameras. This means better evidence quality, easier identification, and enhanced situational awareness.'
    },
    {
      question: 'How secure are Hikvision cameras from cyber threats?',
      answer: 'Hikvision takes cybersecurity seriously with features like secure boot, signed firmware, and encrypted communications. All devices include strong password requirements and support for the latest encryption standards. We follow best practices during installation including network segmentation, regular firmware updates, and secure configuration to ensure your system remains protected.'
    },
    {
      question: 'What\'s the typical cost for a Hikvision camera system?',
      answer: 'Hikvision systems range from basic 4-camera packages starting around $1,200 to advanced enterprise solutions. Residential installations typically cost $2,000-$5,000 for comprehensive coverage with ColorVu or AcuSense cameras. Commercial projects are custom-quoted based on camera count, analytics needs, and storage requirements. We provide detailed proposals after assessing your specific needs.'
    },
    {
      question: 'Does Security Dynamics provide ongoing support for Hikvision systems?',
      answer: 'Absolutely! As an authorized Hikvision dealer, we provide comprehensive support including warranty service, firmware updates, and technical assistance. We offer maintenance agreements that include regular system health checks, cleaning, and priority support. Our team stays current with Hikvision\'s latest technologies through ongoing factory training.'
    }
  ],
  certifications: [
    'Hikvision authorized dealer',
    'Factory-trained installation team',
    'HikCentral certified integrators',
    'NDAA compliant installation expertise',
    'Video analytics specialists',
    'Cybersecurity best practices certified'
  ],
  warranty: 'Hikvision 3-year manufacturer warranty with extended options available'
};

export default function HikvisionBrandPage() {
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

      <BrandPageTemplate brand={hikvisionBrandData} />
    </>
  );
}