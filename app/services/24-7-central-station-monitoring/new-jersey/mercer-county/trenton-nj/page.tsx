import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = '24-7-central-station-monitoring';
const locationSlug = 'trenton-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `24/7 Central Station Monitoring ${location.name}, ${location.stateCode} | Professional Monitoring`,
  description: `Expert 24/7 central station monitoring services in ${location.name}, ${location.stateCode}. Round-the-clock security monitoring for Trenton commercial and government facilities Call ${COMPANY_INFO.phone}.`,
  keywords: [
    '24/7 central station monitoring Trenton NJ',
    'Trenton business alarm monitoring',
    'downtown Trenton 24/7 monitoring',
    'professional monitoring Trenton',
    'State Capitol area monitoring',
    'South Trenton security monitoring',
    'Trenton warehouse monitoring service',
    'Trenton monitoring cost',
    'affordable 24/7 monitoring Trenton',
    'Trenton central station quotes'
  ],
  openGraph: {
    title: `24/7 Central Station Monitoring ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Round-the-clock monitoring for Trenton Local installation & support.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/24-7-central-station-monitoring-trenton-nj.jpg',
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
    description: `24/7 monitoring Trenton Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/24-7-central-station-monitoring-trenton-nj.jpg'],
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
    name: 'David Martinez',
    business: 'South Trenton Industrial',
    content: 'Round-the-clock monitoring keeps our facility secure. Professional and reliable.',
    rating: 5
  },
  {
    name: 'Jennifer Lee',
    business: 'Capitol Area Business',
    content: 'Central station monitoring provides the security we need. Great service team.',
    rating: 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function CentralStationMonitoring24x7TrentonNjPage() {
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