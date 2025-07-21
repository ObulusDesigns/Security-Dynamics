import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'environmental-monitoring';
const locationSlug = 'doylestown-pa';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `Environmental Monitoring ${location.name}, ${location.stateCode} | Professional Monitoring`,
  description: `Expert environmental monitoring services in ${location.name}, ${location.stateCode}. Museum-grade environmental monitoring for historic preservation and healthcare Call ${COMPANY_INFO.phone}.`,
  keywords: [
    'environmental monitoring Doylestown PA',
    'healthcare facility monitoring Doylestown',
    'museum environmental sensors',
    'Doylestown data monitoring',
    'Doylestown Hospital environmental',
    'historic building monitoring',
    'Central Bucks sensor systems',
    'Doylestown environmental monitoring quotes',
    'premium sensor systems Doylestown',
    'Doylestown PA monitoring cost'
  ],
  openGraph: {
    title: `Environmental Monitoring ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Museum & healthcare environmental monitoring Local installation & support.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/environmental-monitoring-doylestown-pa.jpg',
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
    description: `Doylestown environmental monitoring Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/environmental-monitoring-doylestown-pa.jpg'],
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
    name: 'Christopher Adams',
    business: 'Mercer Museum',
    content: 'Environmental monitoring protects our historic artifacts. Critical for preservation.',
    rating: 5
  },
  {
    name: 'Amanda Roberts',
    business: 'Doylestown Data Center',
    content: 'Server room monitoring prevents costly downtime. Highly recommended!',
    rating: 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function EnvironmentalMonitoringDoylestownPaPage() {
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