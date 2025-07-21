import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'security-systems';
const locationSlug = 'hopewell-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `Integrated Security Systems ${location.name}, ${location.stateCode} | Professional Monitoring`,
  description: `Expert integrated security systems services in ${location.name}, ${location.stateCode}. Complete security solutions for Hopewell residential properties and small businesses Call ${COMPANY_INFO.phone}.`,
  keywords: [
    'security systems Hopewell NJ',
    'Hopewell Township security',
    'residential security Hopewell',
    'Hopewell business alarms',
    'Hopewell Borough security systems',
    'Pennington area security',
    'rural Hopewell security',
    'Hopewell security quotes',
    'best security Hopewell NJ',
    'Hopewell security system cost'
  ],
  openGraph: {
    title: `Integrated Security Systems ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Security solutions for Hopewell properties Local installation & support.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/security-systems-hopewell-nj.jpg',
        width: 1200,
        height: 630,
        alt: `Integrated Security Systems in ${location.name}, ${location.stateCode}`
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Integrated Security Systems ${location.name} | Security Dynamics`,
    description: `Security systems Hopewell Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/security-systems-hopewell-nj.jpg'],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
  }
};

const nearbyAreas: ServiceArea[] = [
  { 
    name: 'Hopewell Borough', 
    zip: '08525', 
    features: ['Small Business Security', 'Residential Areas', 'Historic Properties'] 
  },
  { 
    name: 'Hopewell Township', 
    zip: '08534', 
    features: ['Agricultural Properties', 'Rural Businesses', 'Large Estates'] 
  },
  { 
    name: 'Pennington Area', 
    zip: '08534', 
    features: ['Professional Services', 'Medical Offices', 'Retail Centers'] 
  }
];

const testimonials = [
  {
    name: 'George Thompson',
    business: 'Hopewell Valley Vineyards',
    content: 'Security system covers our entire property. Easy to use and very effective.',
    rating: 5
  },
  {
    name: 'Nancy Martinez',
    business: 'Hopewell Shopping Center',
    content: 'Integrated security provides complete coverage. Professional and reliable.',
    rating: 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function SecuritySystemsHopewellNjPage() {
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