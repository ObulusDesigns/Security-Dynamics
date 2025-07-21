import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'fire-alarm-monitoring';
const locationSlug = 'trenton-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `Fire Alarm Monitoring ${location.name}, ${location.stateCode} | Professional Monitoring`,
  description: `Expert fire alarm monitoring services in ${location.name}, ${location.stateCode}. Professional fire monitoring for State Capitol area and downtown Trenton businesses Call ${COMPANY_INFO.phone}.`,
  keywords: [
    'fire alarm monitoring Trenton NJ',
    'State Capitol fire monitoring',
    'downtown Trenton fire alarm',
    'commercial fire monitoring Trenton',
    'fire monitoring near Trenton City Hall',
    'Trenton warehouse fire alarm',
    'South Trenton fire monitoring',
    'Trenton fire monitoring cost',
    'affordable fire alarm Trenton',
    'Trenton fire alarm quotes'
  ],
  openGraph: {
    title: `Fire Alarm Monitoring ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Professional fire monitoring for downtown Trenton Local installation & support.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/fire-alarm-monitoring-trenton-nj.jpg',
        width: 1200,
        height: 630,
        alt: `Fire Alarm Monitoring in ${location.name}, ${location.stateCode}`
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Fire Alarm Monitoring ${location.name} | Security Dynamics`,
    description: `Fire monitoring in Trenton Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/fire-alarm-monitoring-trenton-nj.jpg'],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
  }
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
    name: 'Carlos Rodriguez',
    business: 'Trenton Warehouse District',
    content: 'Reliable fire monitoring for our entire facility. Quick response times and great service.',
    rating: 5
  },
  {
    name: 'Angela White',
    business: 'Downtown Trenton Retail',
    content: 'Professional fire monitoring that meets all city requirements. Very satisfied.',
    rating: 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function FireAlarmMonitoringTrentonNjPage() {
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