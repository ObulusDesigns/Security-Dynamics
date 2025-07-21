import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = 'video-surveillance';
const locationSlug = 'doylestown-pa';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: `Video Surveillance Systems ${location.name}, ${location.stateCode} | Historic Property CCTV`,
  description: `Discrete video surveillance for ${location.name}'s historic properties. HD cameras, cloud storage, AI analytics for businesses & healthcare. Call ${COMPANY_INFO.phone}.`,
  keywords: [
    `video surveillance ${location.name} ${location.stateCode}`,
    `CCTV installation Doylestown PA`,
    `historic property security cameras`,
    `Doylestown Hospital security`,
    `discrete surveillance historic district`,
    `IP cameras Bucks County PA`,
    `museum security systems Doylestown`,
    `healthcare video surveillance PA`
  ],
  openGraph: {
    title: `Video Surveillance ${location.name}, ${location.stateCode} | Historic Property CCTV`,
    description: `Discrete video surveillance for Doylestown's historic properties. Preserve aesthetics while ensuring security. Professional installation.`,
    url: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/video-surveillance-doylestown.jpg',
        width: 1200,
        height: 630,
        alt: `Video Surveillance Systems in ${location.name}, ${location.stateCode}`
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Historic Property CCTV ${location.name}`,
    description: `Discrete surveillance for Doylestown's historic buildings. Professional installation. Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/video-surveillance-doylestown.jpg'],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/services/${serviceSlug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${locationSlug}`,
  }
};

const nearbyAreas: ServiceArea[] = [
  { 
    name: 'Historic District', 
    zip: '18901', 
    features: ['Museum Security', 'Boutique Shops', 'Historic Buildings'] 
  },
  { 
    name: 'Doylestown Hospital', 
    zip: '18901', 
    features: ['Healthcare Facilities', 'Medical Offices', 'Parking Security'] 
  },
  { 
    name: 'County Theater Area', 
    zip: '18902', 
    features: ['Entertainment Venues', 'Restaurants', 'Night Vision'] 
  },
];

const testimonials = [
  {
    name: 'Patricia Williams',
    business: 'Mercer Museum',
    content: 'They designed a surveillance system that protects our collection without compromising the historic character of our building.',
    rating: 5
  },
  {
    name: 'Robert Johnson',
    business: 'Main Street Gallery',
    content: 'The discrete cameras blend perfectly with our historic interior. Excellent night vision for after-hours protection.',
    rating: 5
  }
];

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function VideoSurveillanceDoylestownPAPage() {
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