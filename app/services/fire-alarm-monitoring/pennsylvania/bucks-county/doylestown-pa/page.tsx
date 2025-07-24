import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'fire-alarm-monitoring';
const locationSlug = 'doylestown-pa';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `Fire Alarm Monitoring ${location.name}, ${location.stateCode} | Professional Monitoring`,
  description: `Expert fire alarm monitoring services in ${location.name}, ${location.stateCode}. Discrete fire monitoring solutions for historic Doylestown properties and healthcare facilities Call ${COMPANY_INFO.phone}.`,
  keywords: [
    'fire alarm monitoring Doylestown PA',
    'historic Doylestown fire monitoring',
    'Doylestown Hospital fire alarm',
    'downtown Doylestown fire monitoring',
    'fire monitoring near Mercer Museum',
    'Doylestown Borough fire alarm',
    'Central Bucks fire monitoring',
    'Doylestown fire monitoring quotes',
    'premium fire alarm Doylestown',
    'Doylestown PA fire alarm service'
  ],
  openGraph: {
    title: `Fire Alarm Monitoring ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Fire monitoring for historic Doylestown Local installation & support.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/fire-alarm-monitoring-doylestown-pa.jpg',
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
    name: 'Historic District', 
    zip: '18901', 
    features: ['Historic Buildings', 'Museums', 'Boutique Retail'] 
  },
  { 
    name: 'Doylestown Hospital Area', 
    zip: '18901', 
    features: ['Healthcare Facilities', 'Medical Offices', 'Professional Services'] 
  },
  { 
    name: 'Central Bucks', 
    zip: '18902', 
    features: ['Corporate Offices', 'Shopping Centers', 'Restaurants'] 
  }
];

const testimonials = [
  {
    name: 'Elizabeth Foster',
    business: 'Doylestown Historic Inn',
    content: 'Fire monitoring that preserves our historic aesthetics. Excellent service!',
    rating: 5
  },
  {
    name: 'Michael Hughes',
    business: 'Central Bucks Medical',
    content: 'Reliable fire monitoring for our medical facility. Professional and thorough.',
    rating: 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function FireAlarmMonitoringDoylestownPaPage() {
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