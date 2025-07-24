import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'environmental-monitoring';
const locationSlug = 'bristol-pa';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Specialty Monitoring`,
  description: `Critical environmental monitoring for server rooms, data centers, and sensitive areas. Monitor temperature, humidity, water leaks, and power failures to prevent costly damage. Industrial-strength security for Bristol waterfront and Route 13 businesses.`,
  keywords: [
    'environmental monitoring Bristol PA',
    'Bristol environmental monitoring',
    'environmental monitoring Bristol',
    'specialty monitoring Bristol',
    'Bristol specialty monitoring services',
    'environmental monitoring near me Bristol',
    'best environmental monitoring Bristol',
    'Bristol environmental monitoring cost',
    'environmental monitoring installation Bristol',
    'environmental monitoring quotes Bristol'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Temperature, humidity, water leak, and power monitoring for critical areas in Bristol. Local installation & support.`,
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
      "name": "Bristol Borough",
      "zip": "19007",
      "features": [
        "Downtown Business",
        "Industrial Properties",
        "Waterfront Areas"
      ]
    },
    {
      "name": "Bristol Township",
      "zip": "19007",
      "features": [
        "Commercial Centers",
        "Residential Areas",
        "Community Facilities"
      ]
    },
    {
      "name": "Route 13 Corridor",
      "zip": "19007",
      "features": [
        "Business District",
        "Auto Services",
        "Retail Shops"
      ]
    }
  ];

const testimonials = [
  {
    "name": "Robert Johnson",
    "business": "Bristol Homeowner",
    "content": "Great environmental monitoring for our home. Feel much safer with Security Dynamics protecting our family.",
    "rating": 5
  },
  {
    "name": "Lisa Martinez",
    "business": "Bristol Resident",
    "content": "Quick response time and professional installation. Highly recommend their environmental monitoring.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function EnvironmentalMonitoringBristolPAPage() {
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