import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'intrusion-detection';
const locationSlug = 'hamilton-township-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Security Systems`,
  description: `State-of-the-art intrusion detection systems that protect your property 24/7. Our systems use both signature-based and anomaly-based detection methods to identify threats. Serving Hamilton Square, Mercerville, and all Hamilton Township businesses.`,
  keywords: [
    'intrusion detection systems Hamilton Township NJ',
    'Hamilton Township intrusion detection',
    'intrusion detection Hamilton Township',
    'security systems Hamilton Township',
    'Hamilton Township security systems services',
    'intrusion detection near me Hamilton Township',
    'best intrusion detection systems Hamilton Township',
    'Hamilton Township intrusion detection cost',
    'intrusion detection systems installation Hamilton Township',
    'intrusion detection quotes Hamilton Township'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Advanced intrusion detection with NIDS and HIDS technology in Hamilton Township. Local installation & support.`,
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
      "name": "Hamilton Square",
      "zip": "08690",
      "features": [
        "Shopping Centers",
        "Medical Offices",
        "Professional Buildings"
      ]
    },
    {
      "name": "Mercerville",
      "zip": "08619",
      "features": [
        "Retail Districts",
        "Small Businesses",
        "Residential Areas"
      ]
    },
    {
      "name": "Nottingham",
      "zip": "08620",
      "features": [
        "Industrial Parks",
        "Commercial Properties",
        "Office Complexes"
      ]
    }
  ];

const testimonials = [
  {
    "name": "Robert Johnson",
    "business": "Hamilton Township Homeowner",
    "content": "Great intrusion detection systems for our home. Feel much safer with Security Dynamics protecting our family.",
    "rating": 5
  },
  {
    "name": "Lisa Martinez",
    "business": "Hamilton Township Resident",
    "content": "Quick response time and professional installation. Highly recommend their intrusion detection systems.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function IntrusionDetectionSystemsHamiltonTownshipNJPage() {
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