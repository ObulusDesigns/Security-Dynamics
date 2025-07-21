import { Metadata } from 'next';
import Script from 'next/script';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { getLocationBySlug } from '@/lib/data/locations';
import { generateCitySchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';

const citySlug = 'doylestown-pa';
const city = getLocationBySlug(citySlug)!;

export const metadata: Metadata = {
  title: `Commercial Security ${city.name}, ${city.stateCode} | Historic Property Protection`,
  description: `Premium commercial security in ${city.name}, ${city.stateCode}. Historic property security, healthcare facilities, boutique retail. Downtown & Hospital area. Call ${COMPANY_INFO.phone}.`,
  keywords: [
    city.seoData.primaryKeyword,
    ...city.seoData.secondaryKeywords,
    ...city.seoData.longTailVariations,
    ...city.seoData.localModifiers
  ],
  openGraph: {
    title: `Commercial Security ${city.name}, ${city.stateCode} | Historic Property Protection`,
    description: `Premium commercial security in ${city.name}, ${city.stateCode}. Historic property security, healthcare facilities, boutique retail. Downtown & Hospital area.`,
    url: `https://securitydynamicsnj.com/cities/${citySlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/doylestown-pa-security.jpg',
        width: 1200,
        height: 630,
        alt: `Commercial Security Systems in ${city.name}, ${city.stateCode}`
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Historic Property Security ${city.name}, ${city.stateCode}`,
    description: `Discrete security for ${city.name}'s historic properties & businesses. Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/doylestown-pa-security.jpg'],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/cities/${citySlug}`,
  }
};

const serviceAreas: ServiceArea[] = [
  { name: 'Historic District', zip: '18901', features: ['Museum Security', 'Historic Buildings'] },
  { name: 'Doylestown Hospital Area', zip: '18901', features: ['Healthcare Security', 'Medical Offices'] },
  { name: 'Downtown Business District', zip: '18902', features: ['Boutique Retail', 'Professional Services'] },
];

const _businessTypes = [
  {
    type: 'Healthcare Facilities',
    description: 'Hospital and medical office security'
  },
  {
    type: 'Museums & Galleries',
    description: 'Cultural institution protection'
  },
  {
    type: 'Boutique Retail',
    description: 'Upscale shop security systems'
  },
  {
    type: 'Professional Services',
    description: 'Law firms and corporate offices'
  }
];

const _faqs = [
  {
    question: `How do you protect ${city.name}'s historic properties?`,
    answer: `We specialize in discrete security installations that preserve architectural integrity. Our wireless systems and hidden cameras protect historic buildings without visible equipment or structural modifications.`
  },
  {
    question: `Do you secure Doylestown Hospital and medical facilities?`,
    answer: `Yes, we provide comprehensive healthcare security including visitor management, asset protection, and emergency lockdown systems designed specifically for medical facilities and associated offices.`
  },
  {
    question: `What boutique retail security do you offer?`,
    answer: `We protect ${city.name}'s upscale shops with discrete cameras, smart analytics for customer behavior, and after-hours protection that maintains the welcoming atmosphere important to boutique retail.`
  },
  {
    question: `Can you work with ${city.name}'s historic preservation requirements?`,
    answer: `Absolutely! We're experienced with historic district regulations and work closely with property owners to ensure all installations meet preservation guidelines while providing modern security.`
  }
];

export default function DoylestownPAPage() {
  const schema = generateCitySchema(city, serviceAreas);

  return (
    <>
      <CityPageTemplate 
        city={city}
      />
      <Script
        id="city-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}