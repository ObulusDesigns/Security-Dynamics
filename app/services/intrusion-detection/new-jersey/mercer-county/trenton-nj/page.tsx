import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'intrusion-detection';
const locationSlug = 'trenton-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `Intrusion Detection Systems ${location.name}, ${location.stateCode} | Business Alarm Systems`,
  description: `Advanced intrusion detection for ${location.name} businesses. AI-powered burglar alarms, 24/7 monitoring, rapid response near State Capitol. Call ${COMPANY_INFO.phone}.`,
  keywords: [
    `intrusion detection ${location.name} ${location.stateCode}`,
    `burglar alarm systems Trenton NJ`,
    `business security alarms Trenton`,
    `State Capitol area security`,
    `warehouse intrusion detection Trenton`,
    `commercial alarm systems 08608`,
    `Trenton business district security`,
    `24/7 alarm monitoring Mercer County`
  ],
  openGraph: {
    title: `Intrusion Detection ${location.name}, ${location.stateCode} | Business Alarms`,
    description: `Protect your Trenton business with advanced intrusion detection. AI-powered systems, 24/7 monitoring, rapid police response.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/intrusion-detection-trenton.jpg',
        width: 1200,
        height: 630,
        alt: `Intrusion Detection Systems in ${location.name}, ${location.stateCode}`
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
    features: ['Government Buildings', 'High Security Areas', 'Critical Infrastructure'] 
  },
  { 
    name: 'Downtown Business District', 
    zip: '08609', 
    features: ['Commercial Properties', 'Retail Stores', 'Office Buildings'] 
  },
  { 
    name: 'Warehouse District', 
    zip: '08610', 
    features: ['Industrial Security', 'Perimeter Protection', 'Loading Dock Monitoring'] 
  },
];

const testimonials = [
  {
    name: 'James Rodriguez',
    business: 'Trenton Logistics LLC',
    content: 'After multiple break-in attempts, Security Dynamics installed a system that stopped intruders cold. Haven\'t had an incident since.',
    rating: 5
  },
  {
    name: 'Lisa Chen',
    business: 'Downtown Jewelry Store',
    content: 'The AI-powered detection eliminates false alarms while catching real threats. Police response time has been incredible.',
    rating: 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function IntrusionDetectionTrentonNJPage() {
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