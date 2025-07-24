import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'environmental-monitoring';
const locationSlug = 'princeton-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `Environmental Monitoring ${location.name}, ${location.stateCode} | Professional Monitoring`,
  description: `Expert environmental monitoring services in ${location.name}, ${location.stateCode}. Critical environment monitoring for Princeton tech companies and research facilities Call ${COMPANY_INFO.phone}.`,
  keywords: [
    'environmental monitoring Princeton NJ',
    'data center monitoring Princeton',
    'server room sensors Princeton',
    'lab environmental monitoring Princeton',
    'Princeton University lab monitoring',
    'Princeton tech companies environmental',
    'Route 1 data center monitoring',
    'Princeton environmental monitoring cost',
    'best temperature monitoring Princeton',
    'Princeton humidity sensor quotes'
  ],
  openGraph: {
    title: `Environmental Monitoring ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Server room & lab monitoring for Princeton tech Local installation & support.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/environmental-monitoring-princeton-nj.jpg',
        width: 1200,
        height: 630,
        alt: `Environmental Monitoring in ${location.name}, ${location.stateCode}`
      }
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`}
};

const nearbyAreas: ServiceArea[] = [
  { 
    name: 'Princeton University', 
    zip: '08544', 
    features: ['Campus Security', 'Student Housing Access', 'Academic Buildings'] 
  },
  { 
    name: 'Nassau Street', 
    zip: '08542', 
    features: ['Retail Security', 'Office Buildings', 'Restaurant Security'] 
  },
  { 
    name: 'Princeton Junction', 
    zip: '08550', 
    features: ['Corporate Parks', 'Tech Companies', 'Multi-Tenant Buildings'] 
  }
];

const testimonials = [
  {
    name: 'James Park',
    business: 'Princeton Tech Center',
    content: 'Critical for our server room. The environmental monitoring has prevented several potential disasters.',
    rating: 5
  },
  {
    name: 'Dr. Lisa Thompson',
    business: 'Princeton Research Lab',
    content: 'Temperature and humidity monitoring is essential for our sensitive equipment. Great system!',
    rating: 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function EnvironmentalMonitoringPrincetonNjPage() {
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