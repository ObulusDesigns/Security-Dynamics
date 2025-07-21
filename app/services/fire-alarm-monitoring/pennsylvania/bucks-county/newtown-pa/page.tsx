import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'fire-alarm-monitoring';
const locationSlug = 'newtown-pa';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Life Safety`,
  description: `UL-Listed central station fire alarm monitoring services. We integrate with your existing fire alarm panels and sprinkler systems for rapid, code-compliant emergency response. Discrete solutions for historic Newtown Borough and Council Rock area businesses.`,
  keywords: [
    'fire alarm monitoring Newtown PA',
    'Newtown fire alarm monitoring',
    'fire alarm monitoring Newtown',
    'life safety Newtown',
    'Newtown life safety services',
    'fire alarm monitoring near me Newtown',
    'best fire alarm monitoring Newtown',
    'Newtown fire alarm monitoring cost',
    'fire alarm monitoring installation Newtown',
    'fire alarm monitoring quotes Newtown'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Professional monitoring for existing fire alarm and sprinkler systems in Newtown. Local installation & support.`,
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
    description: `Professional monitoring for existing fire alarm and sprinkler systems in Newtown. Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/${serviceSlug}-${locationSlug}.jpg'],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
  }
};

const nearbyAreas: ServiceArea[] = [
    {
      "name": "Newtown Borough",
      "zip": "18940",
      "features": [
        "Historic Downtown",
        "Boutique Shops",
        "Professional Offices"
      ]
    },
    {
      "name": "Council Rock Area",
      "zip": "18940",
      "features": [
        "School District",
        "Community Buildings",
        "Sports Facilities"
      ]
    },
    {
      "name": "Richboro",
      "zip": "18954",
      "features": [
        "Business Centers",
        "Medical Offices",
        "Retail Shops"
      ]
    }
  ];

const testimonials = [
  {
    "name": "Michael Chen",
    "business": "Newtown Business Center",
    "content": "Professional fire alarm monitoring installation. The team was efficient and minimized disruption to our operations.",
    "rating": 5
  },
  {
    "name": "Sarah Williams",
    "business": "Downtown Newtown Retail",
    "content": "Excellent service and competitive pricing. Our fire alarm monitoring has been reliable since day one.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function FireAlarmMonitoringNewtownPAPage() {
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