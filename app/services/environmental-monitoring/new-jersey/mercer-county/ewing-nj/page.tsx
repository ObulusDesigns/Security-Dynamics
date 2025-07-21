import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'environmental-monitoring';
const locationSlug = 'ewing-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Specialty Monitoring`,
  description: `Critical environmental monitoring for server rooms, data centers, and sensitive areas. Monitor temperature, humidity, water leaks, and power failures to prevent costly damage. Protecting TCNJ area businesses and West Trenton professional offices.`,
  keywords: [
    'environmental monitoring Ewing NJ',
    'Ewing environmental monitoring',
    'environmental monitoring Ewing',
    'specialty monitoring Ewing',
    'Ewing specialty monitoring services',
    'environmental monitoring near me Ewing',
    'best environmental monitoring Ewing',
    'Ewing environmental monitoring cost',
    'environmental monitoring installation Ewing',
    'environmental monitoring quotes Ewing'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Temperature, humidity, water leak, and power monitoring for critical areas in Ewing. Local installation & support.`,
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
    description: `Temperature, humidity, water leak, and power monitoring for critical areas in Ewing. Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/${serviceSlug}-${locationSlug}.jpg'],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
  }
};

const nearbyAreas: ServiceArea[] = [
    {
      "name": "West Trenton",
      "zip": "08628",
      "features": [
        "Government Buildings",
        "Professional Offices",
        "Small Business"
      ]
    },
    {
      "name": "TCNJ Area",
      "zip": "08618",
      "features": [
        "College Campus",
        "Student Housing",
        "Academic Buildings"
      ]
    },
    {
      "name": "Olden Avenue",
      "zip": "08638",
      "features": [
        "Retail Corridor",
        "Commercial Properties",
        "Service Businesses"
      ]
    }
  ];

const testimonials = [
  {
    "name": "Robert Johnson",
    "business": "Ewing Homeowner",
    "content": "Great environmental monitoring for our home. Feel much safer with Security Dynamics protecting our family.",
    "rating": 5
  },
  {
    "name": "Lisa Martinez",
    "business": "Ewing Resident",
    "content": "Quick response time and professional installation. Highly recommend their environmental monitoring.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function EnvironmentalMonitoringEwingNJPage() {
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