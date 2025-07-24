import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'video-surveillance';
const locationSlug = 'hopewell-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Security Systems`,
  description: `Expert video surveillance systems services in Hopewell, NJ. Professional video surveillance solutions featuring the latest IP camera technology. From discreet dome cameras to advanced PTZ systems, we design custom surveillance solutions. Call ${COMPANY_INFO.phone}.`,
  keywords: [
    'video surveillance systems Hopewell NJ',
    'Hopewell video surveillance',
    'video surveillance Hopewell',
    'security systems Hopewell',
    'Hopewell security systems services',
    'video surveillance near me Hopewell',
    'best video surveillance systems Hopewell',
    'Hopewell video surveillance cost',
    'video surveillance systems installation Hopewell',
    'video surveillance quotes Hopewell'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `IP cameras, CCTV, cloud storage, and AI-powered video analytics in Hopewell. Local installation & support.`,
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
      "name": "Downtown Hopewell",
      "zip": "08525",
      "features": [
        "Business District",
        "Retail Shops",
        "Professional Services"
      ]
    },
    {
      "name": "Hopewell Commercial Area",
      "zip": "08534",
      "features": [
        "Shopping Centers",
        "Office Buildings",
        "Medical Facilities"
      ]
    },
    {
      "name": "Hopewell Business Park",
      "zip": "00000",
      "features": [
        "Corporate Offices",
        "Industrial Properties",
        "Service Centers"
      ]
    }
  ];

const testimonials = [
  {
    "name": "Robert Johnson",
    "business": "Hopewell Homeowner",
    "content": "Great video surveillance systems for our home. Feel much safer with Security Dynamics protecting our family.",
    "rating": 5
  },
  {
    "name": "Lisa Martinez",
    "business": "Hopewell Resident",
    "content": "Quick response time and professional installation. Highly recommend their video surveillance systems.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function VideoSurveillanceSystemsHopewellNJPage() {
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