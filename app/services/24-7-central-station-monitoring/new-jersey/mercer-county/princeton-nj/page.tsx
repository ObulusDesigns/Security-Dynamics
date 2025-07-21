import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = '24-7-central-station-monitoring';
const locationSlug = 'princeton-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `24/7 Central Station Monitoring ${location.name}, ${location.stateCode} | Professional Monitoring`,
  description: `Expert 24/7 central station monitoring services in ${location.name}, ${location.stateCode}. Professional 24/7 monitoring for Princeton businesses, reducing false alarms and ensuring rapid response Call ${COMPANY_INFO.phone}.`,
  keywords: [
    '24/7 central station monitoring Princeton NJ',
    'UL-Listed monitoring Princeton',
    'professional alarm monitoring Princeton',
    'Princeton security monitoring service',
    'Princeton University campus monitoring',
    'Nassau Street business monitoring',
    'Princeton Junction 24/7 monitoring',
    'Princeton monitoring service cost',
    'best central monitoring Princeton',
    'Princeton 24/7 monitoring quotes'
  ],
  openGraph: {
    title: `24/7 Central Station Monitoring ${location.name}, ${location.stateCode} | Professional Service`,
    description: `24/7 professional monitoring in Princeton Local installation & support.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/24-7-central-station-monitoring-princeton-nj.jpg',
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
    description: `24/7 monitoring Princeton Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/24-7-central-station-monitoring-princeton-nj.jpg'],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
  }
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
    name: 'Robert Davis',
    business: 'Princeton Corporate Park',
    content: 'Professional monitoring service that reduces false alarms. Their operators are well-trained.',
    rating: 5
  },
  {
    name: 'Emily Johnson',
    business: 'Palmer Square Offices',
    content: '24/7 monitoring gives us confidence our property is always protected. Excellent service.',
    rating: 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function CentralStationMonitoring24x7PrincetonNjPage() {
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