import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'intrusion-detection';
const locationSlug = 'langhorne-pa';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Security Systems`,
  description: `State-of-the-art intrusion detection systems that protect your property 24/7. Our systems use both signature-based and anomaly-based detection methods to identify threats. Protecting Sesame Place area hotels and Oxford Valley commercial properties.`,
  keywords: [
    'intrusion detection systems Langhorne PA',
    'Langhorne intrusion detection',
    'intrusion detection Langhorne',
    'security systems Langhorne',
    'Langhorne security systems services',
    'intrusion detection near me Langhorne',
    'best intrusion detection systems Langhorne',
    'Langhorne intrusion detection cost',
    'intrusion detection systems installation Langhorne',
    'intrusion detection quotes Langhorne'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Advanced intrusion detection with NIDS and HIDS technology in Langhorne. Local installation & support.`,
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
    description: `Advanced intrusion detection with NIDS and HIDS technology in Langhorne. Call ${COMPANY_INFO.phone}.`,
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
    "content": "Great intrusion detection systems for our home. Feel much safer with Security Dynamics protecting our family.",
    "rating": 5
  },
  {
    "name": "Lisa Martinez",
    "business": "Langhorne Resident",
    "content": "Quick response time and professional installation. Highly recommend their intrusion detection systems.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function IntrusionDetectionSystemsLanghornePAPage() {
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