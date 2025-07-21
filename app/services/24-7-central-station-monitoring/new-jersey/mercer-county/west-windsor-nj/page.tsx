import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = '24-7-central-station-monitoring';
const locationSlug = 'west-windsor-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Monitoring Services`,
  description: `Professional central station monitoring with redundant facilities and trained operators. We verify alarms, reduce false dispatches, and ensure rapid emergency response. Advanced solutions for Princeton Junction tech companies and MarketFair businesses.`,
  keywords: [
    '24/7 central station monitoring West Windsor NJ',
    'West Windsor 24 7 central station monitoring',
    '24 7 central station monitoring West Windsor',
    'monitoring services West Windsor',
    'West Windsor monitoring services services',
    '24 7 central station monitoring near me West Windsor',
    'best 24/7 central station monitoring West Windsor',
    'West Windsor 24 7 central station monitoring cost',
    '24/7 central station monitoring installation West Windsor',
    '24 7 central station monitoring quotes West Windsor'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `UL-Listed central station with redundant monitoring and trained operators in West Windsor. Local installation & support.`,
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
    description: `UL-Listed central station with redundant monitoring and trained operators in West Windsor. Call ${COMPANY_INFO.phone}.`,
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
    "content": "Advanced 24/7 central station monitoring perfect for our tech company. Integration with existing systems was seamless.",
    "rating": 5
  },
  {
    "name": "Jennifer Lee",
    "business": "West Windsor Innovation Center",
    "content": "State-of-the-art 24/7 central station monitoring. Exactly what we needed for our high-tech facility.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function CentralStationMonitoring24x7WestWindsorNJPage() {
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