import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'security-systems';
const locationSlug = 'lawrence-township-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Complete Solutions`,
  description: `Comprehensive security system integration combining access control, video surveillance, intrusion detection, and monitoring into one seamless solution. Perfect for Route 1 corridor businesses and Lawrenceville corporate parks.`,
  keywords: [
    'integrated security systems Lawrence Township NJ',
    'Lawrence Township security systems',
    'security systems Lawrence Township',
    'complete solutions Lawrence Township',
    'Lawrence Township complete solutions services',
    'security systems near me Lawrence Township',
    'best integrated security systems Lawrence Township',
    'Lawrence Township security systems cost',
    'integrated security systems installation Lawrence Township',
    'security systems quotes Lawrence Township'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Complete integrated security solutions for businesses and homes in Lawrence Township. Local installation & support.`,
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
      "name": "Lawrenceville",
      "zip": "08648",
      "features": [
        "Corporate Parks",
        "Professional Services",
        "Medical Centers"
      ]
    },
    {
      "name": "Route 1 Corridor",
      "zip": "08648",
      "features": [
        "Office Buildings",
        "Retail Centers",
        "Tech Companies"
      ]
    },
    {
      "name": "Quaker Bridge",
      "zip": "08648",
      "features": [
        "Shopping Mall",
        "Commercial District",
        "Business Centers"
      ]
    }
  ];

const testimonials = [
  {
    "name": "Robert Johnson",
    "business": "Lawrence Township Homeowner",
    "content": "Great integrated security systems for our home. Feel much safer with Security Dynamics protecting our family.",
    "rating": 5
  },
  {
    "name": "Lisa Martinez",
    "business": "Lawrence Township Resident",
    "content": "Quick response time and professional installation. Highly recommend their integrated security systems.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function IntegratedSecuritySystemsLawrenceTownshipNJPage() {
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