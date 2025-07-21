import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'access-control-systems';
const locationSlug = 'princeton-nj';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `Access Control Systems ${location.name}, ${location.stateCode} | Smart Security`,
  description: `Advanced access control systems in ${location.name}, ${location.stateCode}. Biometric scanners, key cards, mobile access for Princeton University area businesses. Call ${COMPANY_INFO.phone}.`,
  keywords: [
    `access control systems ${location.name} ${location.stateCode}`,
    `key card systems Princeton`,
    `biometric security Princeton NJ`,
    `Princeton University area access control`,
    `mobile access control Princeton`,
    `corporate security systems Princeton Junction`,
    `smart building access Princeton`,
    `cloud-based access control NJ`
  ],
  openGraph: {
    title: `Access Control Systems ${location.name}, ${location.stateCode} | Smart Security`,
    description: `Advanced access control for Princeton businesses & institutions. Biometric, mobile & cloud-based solutions. Local installation & support.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/access-control-princeton.jpg',
        width: 1200,
        height: 630,
        alt: `Access Control Systems in ${location.name}, ${location.stateCode}`
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Access Control ${location.name} | Smart Security`,
    description: `Advanced access control for Princeton. Biometric & mobile solutions. Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/access-control-princeton.jpg'],
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
    features: ['Retail Security', 'Office Buildings', 'Restaurant Access'] 
  },
  { 
    name: 'Princeton Junction', 
    zip: '08550', 
    features: ['Corporate Parks', 'Tech Companies', 'Multi-Tenant Buildings'] 
  },
];

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    business: 'Princeton Medical Associates',
    content: 'The biometric system they installed gives us perfect control over sensitive areas while maintaining HIPAA compliance.',
    rating: 5
  },
  {
    name: 'Mark Thompson',
    business: 'Nassau Street Boutique',
    content: 'Mobile access control has transformed how we manage employee access. No more lost keys or security concerns!',
    rating: 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function AccessControlPrincetonNJPage() {
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