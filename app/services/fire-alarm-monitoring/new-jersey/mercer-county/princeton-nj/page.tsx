import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'fire-alarm-monitoring';
const locationSlug = 'princeton-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `Fire Alarm Monitoring ${location.name}, ${location.stateCode} | Professional Monitoring`,
  description: `Expert fire alarm monitoring services in ${location.name}, ${location.stateCode}. UL-Listed central station monitoring for Princeton University area businesses and institutions Call ${COMPANY_INFO.phone}.`,
  keywords: [
    'fire alarm monitoring Princeton NJ',
    'Princeton University fire monitoring',
    'commercial fire alarm Princeton',
    'Nassau Street fire monitoring',
    'fire monitoring near Princeton Medical Center',
    'Princeton Junction fire alarm',
    'Princeton Borough fire monitoring',
    'Princeton fire monitoring quotes',
    'best fire alarm monitoring Princeton',
    'Princeton fire alarm service cost'
  ],
  openGraph: {
    title: `Fire Alarm Monitoring ${location.name}, ${location.stateCode} | Professional Service`,
    description: `UL-Listed fire monitoring for Princeton businesses & institutions Local installation & support.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/fire-alarm-monitoring-princeton-nj.jpg',
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
    description: `Fire monitoring for Princeton Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/fire-alarm-monitoring-princeton-nj.jpg'],
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
    name: 'Dr. Michael Chen',
    business: 'Princeton Medical Associates',
    content: 'Their fire monitoring service gives us peace of mind. Quick response and professional service every time.',
    rating: 5
  },
  {
    name: 'Sarah Williams',
    business: 'Nassau Street Shops',
    content: 'Excellent fire monitoring that meets all our insurance requirements. Very reliable service.',
    rating: 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function FireAlarmMonitoringPrincetonNjPage() {
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