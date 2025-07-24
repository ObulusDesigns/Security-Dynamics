import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = '24-7-central-station-monitoring';
const locationSlug = 'hopewell-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `24/7 Central Station Monitoring ${location.name}, ${location.stateCode} | Professional Monitoring`,
  description: `Expert 24/7 central station monitoring services in ${location.name}, ${location.stateCode}. Reliable central station monitoring for Hopewell Township homes and businesses Call ${COMPANY_INFO.phone}.`,
  keywords: [
    '24/7 central station monitoring Hopewell NJ',
    'Hopewell Township alarm monitoring',
    'residential monitoring Hopewell',
    'Hopewell Valley 24/7 service',
    'Hopewell Borough monitoring',
    'Pennington area 24/7 service',
    'rural Hopewell monitoring',
    'Hopewell monitoring service quotes',
    'best 24/7 monitoring Hopewell',
    'Hopewell NJ monitoring cost'
  ],
  openGraph: {
    title: `24/7 Central Station Monitoring ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Reliable monitoring for Hopewell Township Local installation & support.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/24-7-central-station-monitoring-hopewell-nj.jpg',
        width: 1200,
        height: 630,
        alt: `24/7 Central Station Monitoring in ${location.name}, ${location.stateCode}`
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
    name: 'William Brown',
    business: 'Hopewell Business Park',
    content: '24/7 monitoring provides excellent security coverage. Very responsive team.',
    rating: 5
  },
  {
    name: 'Karen Wilson',
    business: 'Township Office Complex',
    content: 'Professional monitoring service that we can count on. Great local support.',
    rating: 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function CentralStationMonitoring24x7HopewellNjPage() {
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