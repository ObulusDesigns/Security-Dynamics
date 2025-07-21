import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'environmental-monitoring';
const locationSlug = 'hopewell-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `Environmental Monitoring ${location.name}, ${location.stateCode} | Professional Monitoring`,
  description: `Expert environmental monitoring services in ${location.name}, ${location.stateCode}. Agricultural and facility environmental monitoring throughout Hopewell Valley Call ${COMPANY_INFO.phone}.`,
  keywords: [
    'environmental monitoring Hopewell NJ',
    'agricultural monitoring Hopewell',
    'Hopewell facility sensors',
    'temperature monitoring Hopewell Township',
    'farm environmental monitoring Hopewell',
    'Hopewell Valley sensors',
    'rural facility monitoring',
    'Hopewell environmental monitoring cost',
    'best sensor systems Hopewell',
    'Hopewell NJ monitoring quotes'
  ],
  openGraph: {
    title: `Environmental Monitoring ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Agricultural monitoring in Hopewell Valley Local installation & support.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/environmental-monitoring-hopewell-nj.jpg',
        width: 1200,
        height: 630,
        alt: `Environmental Monitoring in ${location.name}, ${location.stateCode}`
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Environmental Monitoring ${location.name} | Security Dynamics`,
    description: `Hopewell monitoring systems Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/environmental-monitoring-hopewell-nj.jpg'],
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
    name: 'Robert Taylor',
    business: 'Hopewell Greenhouses',
    content: 'Temperature monitoring is critical for our operation. System is very reliable.',
    rating: 5
  },
  {
    name: 'Linda Davis',
    business: 'Hopewell Medical Center',
    content: 'Environmental monitoring for our medical storage. Works perfectly!',
    rating: 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function EnvironmentalMonitoringHopewellNjPage() {
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