import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'fire-alarm-monitoring';
const locationSlug = 'hopewell-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `Fire Alarm Monitoring ${location.name}, ${location.stateCode} | Professional Monitoring`,
  description: `Expert fire alarm monitoring services in ${location.name}, ${location.stateCode}. Reliable fire alarm monitoring for Hopewell Township residential and agricultural properties Call ${COMPANY_INFO.phone}.`,
  keywords: [
    'fire alarm monitoring Hopewell NJ',
    'Hopewell Township fire monitoring',
    'Hopewell Valley fire alarm',
    'residential fire monitoring Hopewell',
    'fire monitoring Hopewell Borough',
    'Pennington area fire alarm',
    'rural Hopewell fire monitoring',
    'Hopewell fire monitoring quotes',
    'best fire alarm Hopewell NJ',
    'Hopewell fire alarm cost'
  ],
  openGraph: {
    title: `Fire Alarm Monitoring ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Reliable fire monitoring for Hopewell properties Local installation & support.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/fire-alarm-monitoring-hopewell-nj.jpg',
        width: 1200,
        height: 630,
        alt: `Fire Alarm Monitoring in ${location.name}, ${location.stateCode}`
      }
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`}
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
    name: 'John Miller',
    business: 'Hopewell Farm Supply',
    content: 'Fire monitoring for our agricultural buildings. Reliable service at a fair price.',
    rating: 5
  },
  {
    name: 'Susan Anderson',
    business: 'Hopewell Borough Shops',
    content: 'Professional fire monitoring that gives us peace of mind. Excellent local service.',
    rating: 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function FireAlarmMonitoringHopewellNjPage() {
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