import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'access-control-systems';
const locationSlug = 'bensalem-pa';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Security Systems`,
  description: `Advanced access control solutions to protect your business assets and manage employee entry. From key card systems to biometric scanners, we provide comprehensive access management. Ideal for Street Road retail, Neshaminy Mall area, and Parx Casino district businesses.`,
  keywords: [
    'access control systems Bensalem PA',
    'Bensalem access control systems',
    'access control systems Bensalem',
    'security systems Bensalem',
    'Bensalem security systems services',
    'access control systems near me Bensalem',
    'best access control systems Bensalem',
    'Bensalem access control systems cost',
    'access control systems installation Bensalem',
    'access control systems quotes Bensalem'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Card readers, keypads, biometric scanners, and mobile access control in Bensalem. Local installation & support.`,
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
      "name": "Street Road",
      "zip": "19020",
      "features": [
        "Retail Corridor",
        "Shopping Centers",
        "Restaurants"
      ]
    },
    {
      "name": "Neshaminy Mall Area",
      "zip": "19020",
      "features": [
        "Major Retail",
        "Commercial Properties",
        "Office Buildings"
      ]
    },
    {
      "name": "Parx Casino District",
      "zip": "19020",
      "features": [
        "Entertainment Complex",
        "Hotels",
        "Parking Facilities"
      ]
    }
  ];

const testimonials = [
  {
    "name": "Michael Chen",
    "business": "Bensalem Business Center",
    "content": "Professional access control systems installation. The team was efficient and minimized disruption to our operations.",
    "rating": 5
  },
  {
    "name": "Sarah Williams",
    "business": "Downtown Bensalem Retail",
    "content": "Excellent service and competitive pricing. Our access control systems has been reliable since day one.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function AccessControlSystemsBensalemPAPage() {
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