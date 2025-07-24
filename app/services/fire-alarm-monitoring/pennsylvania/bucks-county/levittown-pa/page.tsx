import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'fire-alarm-monitoring';
const locationSlug = 'levittown-pa';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Life Safety`,
  description: `UL-Listed central station fire alarm monitoring services. We integrate with your existing fire alarm panels and sprinkler systems for rapid, code-compliant emergency response. Protecting Fairless Hills businesses and Levittown residential communities.`,
  keywords: [
    'fire alarm monitoring Levittown PA',
    'Levittown fire alarm monitoring',
    'fire alarm monitoring Levittown',
    'life safety Levittown',
    'Levittown life safety services',
    'fire alarm monitoring near me Levittown',
    'best fire alarm monitoring Levittown',
    'Levittown fire alarm monitoring cost',
    'fire alarm monitoring installation Levittown',
    'fire alarm monitoring quotes Levittown'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Professional monitoring for existing fire alarm and sprinkler systems in Levittown. Local installation & support.`,
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
    type: 'website'},
  alternates: {
    canonical: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`}
};

const nearbyAreas: ServiceArea[] = [
    {
      "name": "Fairless Hills",
      "zip": "19030",
      "features": [
        "Shopping Centers",
        "Medical Facilities",
        "Business Parks"
      ]
    },
    {
      "name": "Tullytown",
      "zip": "19007",
      "features": [
        "Small Business",
        "Industrial Areas",
        "Commercial Properties"
      ]
    },
    {
      "name": "Vermillion Hills",
      "zip": "19054",
      "features": [
        "Residential Areas",
        "Local Business",
        "Community Centers"
      ]
    }
  ];

const testimonials = [
  {
    "name": "Robert Johnson",
    "business": "Levittown Homeowner",
    "content": "Great fire alarm monitoring for our home. Feel much safer with Security Dynamics protecting our family.",
    "rating": 5
  },
  {
    "name": "Lisa Martinez",
    "business": "Levittown Resident",
    "content": "Quick response time and professional installation. Highly recommend their fire alarm monitoring.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function FireAlarmMonitoringLevittownPAPage() {
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