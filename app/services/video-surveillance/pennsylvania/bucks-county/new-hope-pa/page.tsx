import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'video-surveillance';
const locationSlug = 'new-hope-pa';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Security Systems`,
  description: `Professional video surveillance solutions featuring the latest IP camera technology. From discreet dome cameras to advanced PTZ systems, we design custom surveillance solutions. Specialized security for Main Street shops, restaurants, and tourist businesses.`,
  keywords: [
    'video surveillance systems New Hope PA',
    'New Hope video surveillance',
    'video surveillance New Hope',
    'security systems New Hope',
    'New Hope security systems services',
    'video surveillance near me New Hope',
    'best video surveillance systems New Hope',
    'New Hope video surveillance cost',
    'video surveillance systems installation New Hope',
    'video surveillance quotes New Hope'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `IP cameras, CCTV, cloud storage, and AI-powered video analytics in New Hope. Local installation & support.`,
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
      "name": "Main Street District",
      "zip": "18938",
      "features": [
        "Tourist Shops",
        "Restaurants",
        "Art Galleries"
      ]
    },
    {
      "name": "Solebury Township",
      "zip": "18938",
      "features": [
        "Rural Business",
        "Farms",
        "Residential Properties"
      ]
    },
    {
      "name": "Lambertville Bridge Area",
      "zip": "18938",
      "features": [
        "Cross-River Business",
        "Historic Sites",
        "Boutique Hotels"
      ]
    }
  ];

const testimonials = [
  {
    "name": "Michael Chen",
    "business": "New Hope Business Center",
    "content": "Professional video surveillance systems installation. The team was efficient and minimized disruption to our operations.",
    "rating": 5
  },
  {
    "name": "Sarah Williams",
    "business": "Downtown New Hope Retail",
    "content": "Excellent service and competitive pricing. Our video surveillance systems has been reliable since day one.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function VideoSurveillanceSystemsNewHopePAPage() {
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