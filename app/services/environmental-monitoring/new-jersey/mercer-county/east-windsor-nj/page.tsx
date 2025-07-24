import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'environmental-monitoring';
const locationSlug = 'east-windsor-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Specialty Monitoring`,
  description: `Critical environmental monitoring for server rooms, data centers, and sensitive areas. Monitor temperature, humidity, water leaks, and power failures to prevent costly damage. Serving Twin Rivers, Hightstown, and Route 130 business corridor.`,
  keywords: [
    'environmental monitoring East Windsor NJ',
    'East Windsor environmental monitoring',
    'environmental monitoring East Windsor',
    'specialty monitoring East Windsor',
    'East Windsor specialty monitoring services',
    'environmental monitoring near me East Windsor',
    'best environmental monitoring East Windsor',
    'East Windsor environmental monitoring cost',
    'environmental monitoring installation East Windsor',
    'environmental monitoring quotes East Windsor'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Temperature, humidity, water leak, and power monitoring for critical areas in East Windsor. Local installation & support.`,
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
    "content": "Great environmental monitoring for our home. Feel much safer with Security Dynamics protecting our family.",
    "rating": 5
  },
  {
    "name": "Lisa Martinez",
    "business": "East Windsor Resident",
    "content": "Quick response time and professional installation. Highly recommend their environmental monitoring.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function EnvironmentalMonitoringEastWindsorNJPage() {
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