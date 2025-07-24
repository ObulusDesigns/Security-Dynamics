import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { getLocationBySlug } from '@/lib/data/locations';
import { generateCitySchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const citySlug = 'yardley-pa';
const city = getLocationBySlug(citySlug)!;

export const metadata: Metadata = {
  title: `Security Systems ${city.name}, ${city.stateCode} | Luxury Home Security`,
  description: `Premium security systems in ${city.name}, ${city.stateCode}. Riverfront property security, luxury homes, boutique businesses. Delaware River area. Call ${COMPANY_INFO.phone}.`,
  keywords: [
    city.seoData.primaryKeyword,
    ...city.seoData.secondaryKeywords,
    ...city.seoData.longTailVariations,
    ...city.seoData.localModifiers
  ],
  openGraph: {
    title: `Security Systems ${city.name}, ${city.stateCode} | Luxury Home Security`,
    description: `Premium security systems in ${city.name}, ${city.stateCode}. Riverfront property security, luxury homes, boutique businesses. Delaware River area.`,
    url: `https://securitydynamicsnj.com/cities/${citySlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/yardley-pa-security.jpg',
        width: 1200,
        height: 630,
        alt: `Luxury Security Systems in ${city.name}, ${city.stateCode}`
      }
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `https://securitydynamicsnj.com/cities/${citySlug}`}
};

const serviceAreas: ServiceArea[] = [
  { name: 'Historic Yardley', zip: '19067', features: ['Borough Center', 'Historic Homes'] },
  { name: 'Delaware Riverfront', zip: '19067', features: ['Waterfront Properties', 'Estate Security'] },
  { name: 'Yardley Borough', zip: '19067', features: ['Downtown Business', 'Residential'] },
];

const _businessTypes = [
  {
    type: 'Luxury Estates',
    description: 'High-end residential security systems'
  },
  {
    type: 'Riverfront Properties',
    description: 'Specialized waterfront security'
  },
  {
    type: 'Boutique Businesses',
    description: 'Upscale retail and professional offices'
  },
  {
    type: 'Historic Homes',
    description: 'Preservation-conscious security'
  }
];

const _faqs = [
  {
    question: `What security options do you offer for riverfront properties in ${city.name}?`,
    answer: `We provide specialized security for Delaware River properties including water-resistant cameras, dock monitoring, and perimeter protection designed for ${city.name}'s unique waterfront challenges.`
  },
  {
    question: `Can you match the aesthetics of ${city.name}'s historic homes?`,
    answer: `Absolutely! We understand ${city.name}'s architectural heritage and offer discrete, wireless solutions that blend seamlessly with historic properties while providing cutting-edge protection.`
  },
  {
    question: `Do you offer home automation integration?`,
    answer: `Yes, our systems integrate with luxury home automation platforms popular in ${city.name}, including lighting control, climate management, and voice-activated security features.`
  },
  {
    question: `What makes you the best choice for ${city.name}'s upscale properties?`,
    answer: `We specialize in premium security solutions with features like biometric access, AI-powered threat detection, and white-glove service that matches the standards ${city.name} residents expect.`
  }
];

export default function YardleyPAPage() {
  const schema = generateCitySchema(city, serviceAreas);

  return (
    <>
      <Script id="schema-1" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CityPageTemplate 
        city={city}
      />
    </>
  );
}