import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'security-systems';
const locationSlug = 'east-windsor-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `${service.name} ${location.name}, ${location.stateCode} | Professional Complete Solutions`,
  description: `Comprehensive security system integration combining access control, video surveillance, intrusion detection, and monitoring into one seamless solution. Serving Twin Rivers, Hightstown, and Route 130 business corridor.`,
  keywords: [
    'integrated security systems East Windsor NJ',
    'East Windsor security systems',
    'security systems East Windsor',
    'complete solutions East Windsor',
    'East Windsor complete solutions services',
    'security systems near me East Windsor',
    'best integrated security systems East Windsor',
    'East Windsor security systems cost',
    'integrated security systems installation East Windsor',
    'security systems quotes East Windsor'
  ],
  openGraph: {
    title: `${service.name} ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Complete integrated security solutions for businesses and homes in East Windsor. Local installation & support.`,
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
    description: `Complete integrated security solutions for businesses and homes in East Windsor. Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/${serviceSlug}-${locationSlug}.jpg'],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
  }
};

const nearbyAreas: ServiceArea[] = [
    {
      "name": "Hightstown",
      "zip": "08520",
      "features": [
        "Downtown Business",
        "Historic Properties",
        "Small Retail"
      ]
    },
    {
      "name": "Twin Rivers",
      "zip": "08520",
      "features": [
        "Residential Community",
        "Shopping Centers",
        "Community Buildings"
      ]
    },
    {
      "name": "Route 130 Business",
      "zip": "08520",
      "features": [
        "Commercial Corridor",
        "Auto Dealers",
        "Service Centers"
      ]
    }
  ];

const testimonials = [
  {
    "name": "Robert Johnson",
    "business": "East Windsor Homeowner",
    "content": "Great integrated security systems for our home. Feel much safer with Security Dynamics protecting our family.",
    "rating": 5
  },
  {
    "name": "Lisa Martinez",
    "business": "East Windsor Resident",
    "content": "Quick response time and professional installation. Highly recommend their integrated security systems.",
    "rating": 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function IntegratedSecuritySystemsEastWindsorNJPage() {
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