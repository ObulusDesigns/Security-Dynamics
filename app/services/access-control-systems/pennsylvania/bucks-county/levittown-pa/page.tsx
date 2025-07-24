import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'access-control-systems';
const locationSlug = 'levittown-pa';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Security Systems`,
  description: `Advanced access control solutions to protect your business assets and manage employee entry. From key card systems to biometric scanners, we provide comprehensive access management. Protecting Fairless Hills businesses and Levittown residential communities.`,
  keywords: [
    'access control systems Levittown PA',
    'Levittown access control systems',
    'access control systems Levittown',
    'security systems Levittown',
    'Levittown security systems services',
    'access control systems near me Levittown',
    'best access control systems Levittown',
    'Levittown access control systems cost',
    'access control systems installation Levittown',
    'access control systems quotes Levittown'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Card readers, keypads, biometric scanners, and mobile access control in Levittown. Local installation & support.`,
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
      "name": "Fairless Hills",
      "zip": "19030",
      "features": [
        "Shopping Centers",
        "Medical Facilities",
        "Business Parks"
      ]
    },
    {
      "name": "Tullytown",
      "zip": "19007",
      "features": [
        "Small Business",
        "Industrial Areas",
        "Commercial Properties"
      ]
    },
    {
      "name": "Vermillion Hills",
      "zip": "19054",
      "features": [
        "Residential Areas",
        "Local Business",
        "Community Centers"
      ]
    }
  ];

const testimonials = [
  {
    "name": "Robert Johnson",
    "business": "Levittown Homeowner",
    "content": "Great access control systems for our home. Feel much safer with Security Dynamics protecting our family.",
    "rating": 5
  },
  {
    "name": "Lisa Martinez",
    "business": "Levittown Resident",
    "content": "Quick response time and professional installation. Highly recommend their access control systems.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function AccessControlSystemsLevittownPAPage() {
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