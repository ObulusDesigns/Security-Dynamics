import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'access-control-systems';
const locationSlug = 'west-windsor-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Security Systems`,
  description: `Advanced access control solutions to protect your business assets and manage employee entry. From key card systems to biometric scanners, we provide comprehensive access management. Advanced solutions for Princeton Junction tech companies and MarketFair businesses.`,
  keywords: [
    'access control systems West Windsor NJ',
    'West Windsor access control systems',
    'access control systems West Windsor',
    'security systems West Windsor',
    'West Windsor security systems services',
    'access control systems near me West Windsor',
    'best access control systems West Windsor',
    'West Windsor access control systems cost',
    'access control systems installation West Windsor',
    'access control systems quotes West Windsor'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Card readers, keypads, biometric scanners, and mobile access control in West Windsor. Local installation & support.`,
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
      "name": "Princeton Junction",
      "zip": "08550",
      "features": [
        "Transit Hub",
        "Corporate Centers",
        "Professional Buildings"
      ]
    },
    {
      "name": "Windsor Green",
      "zip": "08550",
      "features": [
        "Shopping Center",
        "Restaurants",
        "Service Businesses"
      ]
    },
    {
      "name": "MarketFair",
      "zip": "08550",
      "features": [
        "Retail Complex",
        "Office Buildings",
        "Entertainment Venues"
      ]
    }
  ];

const testimonials = [
  {
    "name": "David Kim",
    "business": "West Windsor Tech Solutions",
    "content": "Advanced access control systems perfect for our tech company. Integration with existing systems was seamless.",
    "rating": 5
  },
  {
    "name": "Jennifer Lee",
    "business": "West Windsor Innovation Center",
    "content": "State-of-the-art access control systems. Exactly what we needed for our high-tech facility.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function AccessControlSystemsWestWindsorNJPage() {
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