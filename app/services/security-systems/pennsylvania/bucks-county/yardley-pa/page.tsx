import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'security-systems';
const locationSlug = 'yardley-pa';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Complete Solutions`,
  description: `Comprehensive security system integration combining access control, video surveillance, intrusion detection, and monitoring into one seamless solution. Premium security for Delaware River properties and Yardley Borough businesses.`,
  keywords: [
    'integrated security systems Yardley PA',
    'Yardley security systems',
    'security systems Yardley',
    'complete solutions Yardley',
    'Yardley complete solutions services',
    'security systems near me Yardley',
    'best integrated security systems Yardley',
    'Yardley security systems cost',
    'integrated security systems installation Yardley',
    'security systems quotes Yardley'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Complete integrated security solutions for businesses and homes in Yardley. Local installation & support.`,
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
      "name": "Yardley Borough",
      "zip": "19067",
      "features": [
        "Historic District",
        "Small Business",
        "Professional Services"
      ]
    },
    {
      "name": "Lower Makefield",
      "zip": "19067",
      "features": [
        "Corporate Centers",
        "Shopping Areas",
        "Community Buildings"
      ]
    },
    {
      "name": "Delaware River Area",
      "zip": "19067",
      "features": [
        "Waterfront Properties",
        "Recreational Areas",
        "Local Business"
      ]
    }
  ];

const testimonials = [
  {
    "name": "Michael Chen",
    "business": "Yardley Business Center",
    "content": "Professional integrated security systems installation. The team was efficient and minimized disruption to our operations.",
    "rating": 5
  },
  {
    "name": "Sarah Williams",
    "business": "Downtown Yardley Retail",
    "content": "Excellent service and competitive pricing. Our integrated security systems has been reliable since day one.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function IntegratedSecuritySystemsYardleyPAPage() {
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