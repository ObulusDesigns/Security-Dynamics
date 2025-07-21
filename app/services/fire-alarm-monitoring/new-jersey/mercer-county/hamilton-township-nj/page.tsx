import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'fire-alarm-monitoring';
const locationSlug = 'hamilton-township-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Life Safety`,
  description: `UL-Listed central station fire alarm monitoring services. We integrate with your existing fire alarm panels and sprinkler systems for rapid, code-compliant emergency response. Serving Hamilton Square, Mercerville, and all Hamilton Township businesses.`,
  keywords: [
    'fire alarm monitoring Hamilton Township NJ',
    'Hamilton Township fire alarm monitoring',
    'fire alarm monitoring Hamilton Township',
    'life safety Hamilton Township',
    'Hamilton Township life safety services',
    'fire alarm monitoring near me Hamilton Township',
    'best fire alarm monitoring Hamilton Township',
    'Hamilton Township fire alarm monitoring cost',
    'fire alarm monitoring installation Hamilton Township',
    'fire alarm monitoring quotes Hamilton Township'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Professional monitoring for existing fire alarm and sprinkler systems in Hamilton Township. Local installation & support.`,
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
    description: `Professional monitoring for existing fire alarm and sprinkler systems in Hamilton Township. Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/${serviceSlug}-${locationSlug}.jpg'],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
  }
};

const nearbyAreas: ServiceArea[] = [
    {
      "name": "Hamilton Square",
      "zip": "08690",
      "features": [
        "Shopping Centers",
        "Medical Offices",
        "Professional Buildings"
      ]
    },
    {
      "name": "Mercerville",
      "zip": "08619",
      "features": [
        "Retail Districts",
        "Small Businesses",
        "Residential Areas"
      ]
    },
    {
      "name": "Nottingham",
      "zip": "08620",
      "features": [
        "Industrial Parks",
        "Commercial Properties",
        "Office Complexes"
      ]
    }
  ];

const testimonials = [
  {
    "name": "Robert Johnson",
    "business": "Hamilton Township Homeowner",
    "content": "Great fire alarm monitoring for our home. Feel much safer with Security Dynamics protecting our family.",
    "rating": 5
  },
  {
    "name": "Lisa Martinez",
    "business": "Hamilton Township Resident",
    "content": "Quick response time and professional installation. Highly recommend their fire alarm monitoring.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function FireAlarmMonitoringHamiltonTownshipNJPage() {
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