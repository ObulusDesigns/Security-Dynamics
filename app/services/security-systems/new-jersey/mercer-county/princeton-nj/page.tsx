import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'security-systems';
const locationSlug = 'princeton-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `Integrated Security Systems ${location.name}, ${location.stateCode} | Professional Monitoring`,
  description: `Expert integrated security systems services in ${location.name}, ${location.stateCode}. Integrated security solutions for Princeton University area businesses and high-value properties Call ${COMPANY_INFO.phone}.`,
  keywords: [
    'security systems Princeton NJ',
    'integrated security Princeton',
    'smart security systems Princeton',
    'Princeton business security solutions',
    'Princeton University security systems',
    'Nassau Street security',
    'Princeton Junction security installation',
    'Princeton security system cost',
    'best security systems Princeton',
    'Princeton security quotes'
  ],
  openGraph: {
    title: `Integrated Security Systems ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Integrated security for Princeton businesses Local installation & support.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/security-systems-princeton-nj.jpg',
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
    name: 'Dr. Sarah Chen',
    business: 'Princeton Medical Associates',
    content: 'Comprehensive security system that integrates perfectly. Professional installation and support.',
    rating: 5
  },
  {
    name: 'Mark Thompson',
    business: 'Nassau Street Boutique',
    content: 'The integrated security system has everything we need. User-friendly and reliable.',
    rating: 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function SecuritySystemsPrincetonNjPage() {
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