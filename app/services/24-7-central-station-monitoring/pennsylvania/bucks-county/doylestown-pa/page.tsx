import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = '24-7-central-station-monitoring';
const locationSlug = 'doylestown-pa';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `24/7 Central Station Monitoring ${location.name}, ${location.stateCode} | Professional Monitoring`,
  description: `Expert 24/7 central station monitoring services in ${location.name}, ${location.stateCode}. Premium 24/7 monitoring service for Doylestown's historic district and medical facilities Call ${COMPANY_INFO.phone}.`,
  keywords: [
    '24/7 central station monitoring Doylestown PA',
    'Doylestown business monitoring',
    'historic district alarm monitoring',
    'professional monitoring Doylestown',
    'downtown Doylestown monitoring',
    'Doylestown Hospital security monitoring',
    'Central Bucks 24/7 service',
    'Doylestown monitoring quotes',
    'premium 24/7 service Doylestown',
    'Doylestown PA monitoring cost'
  ],
  openGraph: {
    title: `24/7 Central Station Monitoring ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Premium monitoring in historic Doylestown Local installation & support.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/24-7-central-station-monitoring-doylestown-pa.jpg',
        width: 1200,
        height: 630,
        alt: `24/7 Central Station Monitoring in ${location.name}, ${location.stateCode}`
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `24/7 Central Station Monitoring ${location.name} | Security Dynamics`,
    description: `24/7 monitoring Doylestown Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/24-7-central-station-monitoring-doylestown-pa.jpg'],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
  }
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
    name: 'Daniel Phillips',
    business: 'Doylestown Professional Building',
    content: 'Central station monitoring provides comprehensive coverage. Very satisfied.',
    rating: 5
  },
  {
    name: 'Rachel Green',
    business: 'Historic District Shops',
    content: '24/7 monitoring keeps our boutique secure. Excellent local service.',
    rating: 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function CentralStationMonitoring24x7DoylestownPaPage() {
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