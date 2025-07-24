import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'security-systems';
const locationSlug = 'trenton-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `Integrated Security Systems ${location.name}, ${location.stateCode} | Professional Monitoring`,
  description: `Expert integrated security systems services in ${location.name}, ${location.stateCode}. Comprehensive security systems for Trenton businesses, warehouses, and government buildings Call ${COMPANY_INFO.phone}.`,
  keywords: [
    'security systems Trenton NJ',
    'commercial security Trenton',
    'Trenton business security',
    'integrated alarms Trenton',
    'downtown Trenton security',
    'State Capitol area security systems',
    'South Trenton security installation',
    'Trenton security system quotes',
    'affordable security Trenton',
    'Trenton security cost'
  ],
  openGraph: {
    title: `Integrated Security Systems ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Complete security for Trenton facilities Local installation & support.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/security-systems-trenton-nj.jpg',
        width: 1200,
        height: 630,
        alt: `Integrated Security Systems in ${location.name}, ${location.stateCode}`
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
    name: 'Thomas Wilson',
    business: 'Trenton Business Park',
    content: 'Complete security solution for our multi-building campus. Highly recommend.',
    rating: 5
  },
  {
    name: 'Maria Garcia',
    business: 'Downtown Retail Plaza',
    content: 'Integrated security system works perfectly for our needs. Professional installation.',
    rating: 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function SecuritySystemsTrentonNjPage() {
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