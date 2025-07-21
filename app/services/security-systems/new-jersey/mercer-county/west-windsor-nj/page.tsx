import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'security-systems';
const locationSlug = 'west-windsor-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Complete Solutions`,
  description: `Comprehensive security system integration combining access control, video surveillance, intrusion detection, and monitoring into one seamless solution. Advanced solutions for Princeton Junction tech companies and MarketFair businesses.`,
  keywords: [
    'integrated security systems West Windsor NJ',
    'West Windsor security systems',
    'security systems West Windsor',
    'complete solutions West Windsor',
    'West Windsor complete solutions services',
    'security systems near me West Windsor',
    'best integrated security systems West Windsor',
    'West Windsor security systems cost',
    'integrated security systems installation West Windsor',
    'security systems quotes West Windsor'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Complete integrated security solutions for businesses and homes in West Windsor. Local installation & support.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/${serviceSlug}-${locationSlug}.jpg',
        width: 1200,
        height: 630,
        alt: `${service.name} in ${location.name}, ${location.stateCode}`
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${service.name} ${location.name} | Security Dynamics`,
    description: `Complete integrated security solutions for businesses and homes in West Windsor. Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/${serviceSlug}-${locationSlug}.jpg'],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
  }
};

const nearbyAreas: ServiceArea[] = [
    {
      "name": "Princeton Junction",
      "zip": "08550",
      "features": [
        "Transit Hub",
        "Corporate Centers",
        "Professional Buildings"
      ]
    },
    {
      "name": "Windsor Green",
      "zip": "08550",
      "features": [
        "Shopping Center",
        "Restaurants",
        "Service Businesses"
      ]
    },
    {
      "name": "MarketFair",
      "zip": "08550",
      "features": [
        "Retail Complex",
        "Office Buildings",
        "Entertainment Venues"
      ]
    }
  ];

const testimonials = [
  {
    "name": "David Kim",
    "business": "West Windsor Tech Solutions",
    "content": "Advanced integrated security systems perfect for our tech company. Integration with existing systems was seamless.",
    "rating": 5
  },
  {
    "name": "Jennifer Lee",
    "business": "West Windsor Innovation Center",
    "content": "State-of-the-art integrated security systems. Exactly what we needed for our high-tech facility.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function IntegratedSecuritySystemsWestWindsorNJPage() {
  const schema = generateServiceLocationSchema(service, location, nearbyAreas);

  return (
    <>
      <Script id="schema-1" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceLocationTemplate 
        service={service}
        location={location}
        nearbyAreas={nearbyAreas}
        relatedServices={relatedServices}
        testimonials={testimonials}
      />
    </>
  );
}