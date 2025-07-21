import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = '24-7-central-station-monitoring';
const locationSlug = 'langhorne-pa';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Monitoring Services`,
  description: `Professional central station monitoring with redundant facilities and trained operators. We verify alarms, reduce false dispatches, and ensure rapid emergency response. Protecting Sesame Place area hotels and Oxford Valley commercial properties.`,
  keywords: [
    '24/7 central station monitoring Langhorne PA',
    'Langhorne 24 7 central station monitoring',
    '24 7 central station monitoring Langhorne',
    'monitoring services Langhorne',
    'Langhorne monitoring services services',
    '24 7 central station monitoring near me Langhorne',
    'best 24/7 central station monitoring Langhorne',
    'Langhorne 24 7 central station monitoring cost',
    '24/7 central station monitoring installation Langhorne',
    '24 7 central station monitoring quotes Langhorne'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `UL-Listed central station with redundant monitoring and trained operators in Langhorne. Local installation & support.`,
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
    description: `UL-Listed central station with redundant monitoring and trained operators in Langhorne. Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/${serviceSlug}-${locationSlug}.jpg'],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
  }
};

const nearbyAreas: ServiceArea[] = [
    {
      "name": "Langhorne Borough",
      "zip": "19047",
      "features": [
        "Historic Downtown",
        "Small Business",
        "Professional Offices"
      ]
    },
    {
      "name": "Sesame Place Area",
      "zip": "19047",
      "features": [
        "Theme Park",
        "Hotels",
        "Tourist Services"
      ]
    },
    {
      "name": "Oxford Valley",
      "zip": "19053",
      "features": [
        "Shopping Mall",
        "Commercial Centers",
        "Business Parks"
      ]
    }
  ];

const testimonials = [
  {
    "name": "Robert Johnson",
    "business": "Langhorne Homeowner",
    "content": "Great 24/7 central station monitoring for our home. Feel much safer with Security Dynamics protecting our family.",
    "rating": 5
  },
  {
    "name": "Lisa Martinez",
    "business": "Langhorne Resident",
    "content": "Quick response time and professional installation. Highly recommend their 24/7 central station monitoring.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function CentralStationMonitoring24x7LanghornePAPage() {
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