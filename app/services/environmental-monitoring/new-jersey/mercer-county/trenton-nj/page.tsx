import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'environmental-monitoring';
const locationSlug = 'trenton-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `Environmental Monitoring ${location.name}, ${location.stateCode} | Professional Monitoring`,
  description: `Expert environmental monitoring services in ${location.name}, ${location.stateCode}. Temperature and humidity monitoring for Trenton warehouses and distribution centers Call ${COMPANY_INFO.phone}.`,
  keywords: [
    'environmental monitoring Trenton NJ',
    'warehouse temperature monitoring Trenton',
    'Trenton server room sensors',
    'critical environment monitoring Trenton',
    'State building environmental monitoring',
    'Trenton hospital critical monitoring',
    'downtown Trenton sensor systems',
    'Trenton environmental monitoring quotes',
    'affordable temperature sensors Trenton',
    'Trenton monitoring system cost'
  ],
  openGraph: {
    title: `Environmental Monitoring ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Warehouse temperature monitoring in Trenton Local installation & support.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/environmental-monitoring-trenton-nj.jpg',
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
    name: 'State Capitol Complex', 
    zip: '08608', 
    features: ['Government Buildings', 'High Security Areas', 'Public Safety'] 
  },
  { 
    name: 'Downtown Trenton', 
    zip: '08609', 
    features: ['Commercial Buildings', 'Retail Stores', 'Office Complexes'] 
  },
  { 
    name: 'South Trenton', 
    zip: '08610', 
    features: ['Industrial Areas', 'Warehouses', 'Distribution Centers'] 
  }
];

const testimonials = [
  {
    name: 'Mike Stevens',
    business: 'Trenton Distribution Center',
    content: 'Temperature monitoring is crucial for our inventory. System works flawlessly.',
    rating: 5
  },
  {
    name: 'Patricia Brown',
    business: 'State Street Offices',
    content: 'Environmental monitoring protects our IT infrastructure. Excellent investment.',
    rating: 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function EnvironmentalMonitoringTrentonNjPage() {
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