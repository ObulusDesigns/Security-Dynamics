import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'intrusion-detection';
const locationSlug = 'yardley-pa';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Security Systems`,
  description: `State-of-the-art intrusion detection systems that protect your property 24/7. Our systems use both signature-based and anomaly-based detection methods to identify threats. Premium security for Delaware River properties and Yardley Borough businesses.`,
  keywords: [
    'intrusion detection systems Yardley PA',
    'Yardley intrusion detection',
    'intrusion detection Yardley',
    'security systems Yardley',
    'Yardley security systems services',
    'intrusion detection near me Yardley',
    'best intrusion detection systems Yardley',
    'Yardley intrusion detection cost',
    'intrusion detection systems installation Yardley',
    'intrusion detection quotes Yardley'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Advanced intrusion detection with NIDS and HIDS technology in Yardley. Local installation & support.`,
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
    "content": "Professional intrusion detection systems installation. The team was efficient and minimized disruption to our operations.",
    "rating": 5
  },
  {
    "name": "Sarah Williams",
    "business": "Downtown Yardley Retail",
    "content": "Excellent service and competitive pricing. Our intrusion detection systems has been reliable since day one.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function IntrusionDetectionSystemsYardleyPAPage() {
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