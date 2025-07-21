import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'fire-alarm-monitoring';
const locationSlug = 'east-windsor-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Life Safety`,
  description: `UL-Listed central station fire alarm monitoring services. We integrate with your existing fire alarm panels and sprinkler systems for rapid, code-compliant emergency response. Serving Twin Rivers, Hightstown, and Route 130 business corridor.`,
  keywords: [
    'fire alarm monitoring East Windsor NJ',
    'East Windsor fire alarm monitoring',
    'fire alarm monitoring East Windsor',
    'life safety East Windsor',
    'East Windsor life safety services',
    'fire alarm monitoring near me East Windsor',
    'best fire alarm monitoring East Windsor',
    'East Windsor fire alarm monitoring cost',
    'fire alarm monitoring installation East Windsor',
    'fire alarm monitoring quotes East Windsor'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Professional monitoring for existing fire alarm and sprinkler systems in East Windsor. Local installation & support.`,
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
    description: `Professional monitoring for existing fire alarm and sprinkler systems in East Windsor. Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/${serviceSlug}-${locationSlug}.jpg'],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
  }
};

const nearbyAreas: ServiceArea[] = [
    {
      "name": "Hightstown",
      "zip": "08520",
      "features": [
        "Downtown Business",
        "Historic Properties",
        "Small Retail"
      ]
    },
    {
      "name": "Twin Rivers",
      "zip": "08520",
      "features": [
        "Residential Community",
        "Shopping Centers",
        "Community Buildings"
      ]
    },
    {
      "name": "Route 130 Business",
      "zip": "08520",
      "features": [
        "Commercial Corridor",
        "Auto Dealers",
        "Service Centers"
      ]
    }
  ];

const testimonials = [
  {
    "name": "Robert Johnson",
    "business": "East Windsor Homeowner",
    "content": "Great fire alarm monitoring for our home. Feel much safer with Security Dynamics protecting our family.",
    "rating": 5
  },
  {
    "name": "Lisa Martinez",
    "business": "East Windsor Resident",
    "content": "Quick response time and professional installation. Highly recommend their fire alarm monitoring.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function FireAlarmMonitoringEastWindsorNJPage() {
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