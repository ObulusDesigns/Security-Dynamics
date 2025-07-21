import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'security-systems';
const locationSlug = 'doylestown-pa';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `Integrated Security Systems ${location.name}, ${location.stateCode} | Professional Monitoring`,
  description: `Expert integrated security systems services in ${location.name}, ${location.stateCode}. Discrete integrated security for historic properties and Doylestown healthcare facilities Call ${COMPANY_INFO.phone}.`,
  keywords: [
    'security systems Doylestown PA',
    'historic property security Doylestown',
    'Doylestown business security',
    'integrated security Doylestown',
    'downtown Doylestown security',
    'Doylestown Hospital security systems',
    'Central Bucks security',
    'Doylestown security quotes',
    'premium security Doylestown',
    'Doylestown PA security cost'
  ],
  openGraph: {
    title: `Integrated Security Systems ${location.name}, ${location.stateCode} | Professional Service`,
    description: `Discrete security for historic properties Local installation & support.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/security-systems-doylestown-pa.jpg',
        width: 1200,
        height: 630,
        alt: `Integrated Security Systems in ${location.name}, ${location.stateCode}`
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Integrated Security Systems ${location.name} | Security Dynamics`,
    description: `Security systems Doylestown Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/security-systems-doylestown-pa.jpg'],
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
    name: 'Jonathan Wright',
    business: 'Doylestown Business Center',
    content: 'Integrated security system meets all our needs. Professional installation team.',
    rating: 5
  },
  {
    name: 'Melissa Turner',
    business: 'County Theater',
    content: 'Security system works perfectly for our historic venue. Great support!',
    rating: 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function SecuritySystemsDoylestownPaPage() {
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