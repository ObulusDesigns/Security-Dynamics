import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { getLocationBySlug } from '@/lib/data/locations';
import { generateCitySchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const citySlug = 'east-windsor-nj';
const city = getLocationBySlug(citySlug)!;

export const metadata: Metadata = {
  title: `Security Systems ${city.name}, ${city.stateCode} | Business & Home Security`,
  description: `Reliable security systems in ${city.name}, ${city.stateCode}. Commercial security, residential alarms, video surveillance. Twin Rivers & Hightstown area. Call ${COMPANY_INFO.phone}.`,
  keywords: [
    city.seoData.primaryKeyword,
    ...city.seoData.secondaryKeywords,
    ...city.seoData.longTailVariations,
    ...city.seoData.localModifiers
  ],
  openGraph: {
    title: `Security Systems ${city.name}, ${city.stateCode} | Business & Home Security`,
    description: `Reliable security systems in ${city.name}, ${city.stateCode}. Commercial security, residential alarms, video surveillance. Twin Rivers & Hightstown area.`,
    url: `https://securitydynamicsnj.com/cities/${citySlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/east-windsor-nj-security.jpg',
        width: 1200,
        height: 630,
        alt: `Security Systems in ${city.name}, ${city.stateCode}`
      }
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `https://securitydynamicsnj.com/cities/${citySlug}`}
};

const serviceAreas: ServiceArea[] = [
  { name: 'Twin Rivers', zip: '08520', features: ['Community Security', 'HOA Solutions'] },
  { name: 'Hightstown', zip: '08520', features: ['Borough Coverage', 'Quick Response'] },
  { name: 'Route 130 Corridor', zip: '08520', features: ['Commercial District', 'Business Security'] },
];

const _businessTypes = [
  {
    type: 'Retail Centers',
    description: 'Shopping centers and retail stores'
  },
  {
    type: 'Industrial Facilities',
    description: 'Warehouses and distribution centers'
  },
  {
    type: 'Commercial Properties',
    description: 'Office buildings and business parks'
  },
  {
    type: 'Residential Communities',
    description: 'HOAs and apartment complexes'
  }
];

const _faqs = [
  {
    question: `Do you provide security for Twin Rivers community?`,
    answer: `Yes, we specialize in community security solutions for Twin Rivers, including individual home systems and HOA common area surveillance. We understand the unique needs of planned communities.`
  },
  {
    question: `What commercial security do you offer on Route 130?`,
    answer: `We provide comprehensive commercial security for businesses along Route 130, including retail security, warehouse protection, and integrated access control systems for the busy commercial corridor.`
  },
  {
    question: `How fast is your response time in ${city.name}?`,
    answer: `Our average response time in ${city.name} is under 20 minutes, with local technicians stationed nearby. We have dedicated coverage for Twin Rivers, Hightstown, and the Route 130 business district.`
  },
  {
    question: `Can you handle large commercial installations?`,
    answer: `Absolutely! We regularly install complex systems for ${city.name}'s industrial and commercial facilities. Our team is experienced with multi-building campuses and large-scale warehouse security.`
  }
];

export default function EastWindsorNJPage() {
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