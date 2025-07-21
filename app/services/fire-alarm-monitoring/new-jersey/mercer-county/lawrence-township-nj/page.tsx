import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'fire-alarm-monitoring';
const locationSlug = 'lawrence-township-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Life Safety`,
  description: `UL-Listed central station fire alarm monitoring services. We integrate with your existing fire alarm panels and sprinkler systems for rapid, code-compliant emergency response. Perfect for Route 1 corridor businesses and Lawrenceville corporate parks.`,
  keywords: [
    'fire alarm monitoring Lawrence Township NJ',
    'Lawrence Township fire alarm monitoring',
    'fire alarm monitoring Lawrence Township',
    'life safety Lawrence Township',
    'Lawrence Township life safety services',
    'fire alarm monitoring near me Lawrence Township',
    'best fire alarm monitoring Lawrence Township',
    'Lawrence Township fire alarm monitoring cost',
    'fire alarm monitoring installation Lawrence Township',
    'fire alarm monitoring quotes Lawrence Township'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Professional monitoring for existing fire alarm and sprinkler systems in Lawrence Township. Local installation & support.`,
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
    description: `Professional monitoring for existing fire alarm and sprinkler systems in Lawrence Township. Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/${serviceSlug}-${locationSlug}.jpg'],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
  }
};

const nearbyAreas: ServiceArea[] = [
    {
      "name": "Lawrenceville",
      "zip": "08648",
      "features": [
        "Corporate Parks",
        "Professional Services",
        "Medical Centers"
      ]
    },
    {
      "name": "Route 1 Corridor",
      "zip": "08648",
      "features": [
        "Office Buildings",
        "Retail Centers",
        "Tech Companies"
      ]
    },
    {
      "name": "Quaker Bridge",
      "zip": "08648",
      "features": [
        "Shopping Mall",
        "Commercial District",
        "Business Centers"
      ]
    }
  ];

const testimonials = [
  {
    "name": "Robert Johnson",
    "business": "Lawrence Township Homeowner",
    "content": "Great fire alarm monitoring for our home. Feel much safer with Security Dynamics protecting our family.",
    "rating": 5
  },
  {
    "name": "Lisa Martinez",
    "business": "Lawrence Township Resident",
    "content": "Quick response time and professional installation. Highly recommend their fire alarm monitoring.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function FireAlarmMonitoringLawrenceTownshipNJPage() {
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