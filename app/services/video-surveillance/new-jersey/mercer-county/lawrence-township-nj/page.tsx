import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'video-surveillance';
const locationSlug = 'lawrence-township-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Security Systems`,
  description: `Professional video surveillance solutions featuring the latest IP camera technology. From discreet dome cameras to advanced PTZ systems, we design custom surveillance solutions. Perfect for Route 1 corridor businesses and Lawrenceville corporate parks.`,
  keywords: [
    'video surveillance systems Lawrence Township NJ',
    'Lawrence Township video surveillance',
    'video surveillance Lawrence Township',
    'security systems Lawrence Township',
    'Lawrence Township security systems services',
    'video surveillance near me Lawrence Township',
    'best video surveillance systems Lawrence Township',
    'Lawrence Township video surveillance cost',
    'video surveillance systems installation Lawrence Township',
    'video surveillance quotes Lawrence Township'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `IP cameras, CCTV, cloud storage, and AI-powered video analytics in Lawrence Township. Local installation & support.`,
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
    "content": "Great video surveillance systems for our home. Feel much safer with Security Dynamics protecting our family.",
    "rating": 5
  },
  {
    "name": "Lisa Martinez",
    "business": "Lawrence Township Resident",
    "content": "Quick response time and professional installation. Highly recommend their video surveillance systems.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function VideoSurveillanceSystemsLawrenceTownshipNJPage() {
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