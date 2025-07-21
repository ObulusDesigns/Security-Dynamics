import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = '24-7-central-station-monitoring';
const locationSlug = 'newtown-pa';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Monitoring Services`,
  description: `Professional central station monitoring with redundant facilities and trained operators. We verify alarms, reduce false dispatches, and ensure rapid emergency response. Discrete solutions for historic Newtown Borough and Council Rock area businesses.`,
  keywords: [
    '24/7 central station monitoring Newtown PA',
    'Newtown 24 7 central station monitoring',
    '24 7 central station monitoring Newtown',
    'monitoring services Newtown',
    'Newtown monitoring services services',
    '24 7 central station monitoring near me Newtown',
    'best 24/7 central station monitoring Newtown',
    'Newtown 24 7 central station monitoring cost',
    '24/7 central station monitoring installation Newtown',
    '24 7 central station monitoring quotes Newtown'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `UL-Listed central station with redundant monitoring and trained operators in Newtown. Local installation & support.`,
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
    description: `UL-Listed central station with redundant monitoring and trained operators in Newtown. Call ${COMPANY_INFO.phone}.`,
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
    "content": "Professional 24/7 central station monitoring installation. The team was efficient and minimized disruption to our operations.",
    "rating": 5
  },
  {
    "name": "Sarah Williams",
    "business": "Downtown Newtown Retail",
    "content": "Excellent service and competitive pricing. Our 24/7 central station monitoring has been reliable since day one.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function CentralStationMonitoring24x7NewtownPAPage() {
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