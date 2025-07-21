import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { getLocationBySlug } from '@/lib/data/locations';
import { generateCitySchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const citySlug = 'bristol-pa';
const city = getLocationBySlug(citySlug)!;

export const metadata: Metadata = {
  title: `Security Systems ${city.name}, ${city.stateCode} | Industrial & Business Security`,
  description: `Commercial security systems in ${city.name}, ${city.stateCode}. Industrial facilities, waterfront businesses, retail security. Route 13 corridor. Call ${COMPANY_INFO.phone}.`,
  keywords: [
    city.seoData.primaryKeyword,
    ...city.seoData.secondaryKeywords,
    ...city.seoData.longTailVariations,
    ...city.seoData.localModifiers
  ],
  openGraph: {
    title: `Security Systems ${city.name}, ${city.stateCode} | Industrial & Business Security`,
    description: `Commercial security systems in ${city.name}, ${city.stateCode}. Industrial facilities, waterfront businesses, retail security. Route 13 corridor.`,
    url: `https://securitydynamicsnj.com/cities/${citySlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/bristol-pa-security.jpg',
        width: 1200,
        height: 630,
        alt: `Industrial Security Systems in ${city.name}, ${city.stateCode}`
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Industrial Security ${city.name}, ${city.stateCode}`,
    description: `Industrial & commercial security in ${city.name}. Protect your facility 24/7. Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/bristol-pa-security.jpg'],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/cities/${citySlug}`,
  }
};

const serviceAreas: ServiceArea[] = [
  { name: 'Bristol Borough', zip: '19007', features: ['Downtown Area', 'Historic District'] },
  { name: 'Route 13 Corridor', zip: '19007', features: ['Commercial Strip', 'Industrial Zone'] },
  { name: 'Waterfront District', zip: '19007', features: ['Industrial Properties', 'Warehouses'] },
];

const _businessTypes = [
  {
    type: 'Industrial Facilities',
    description: 'Warehouse and manufacturing security'
  },
  {
    type: 'Healthcare Centers',
    description: 'Medical facilities and clinics'
  },
  {
    type: 'Retail Businesses',
    description: 'Stores along Route 13'
  },
  {
    type: 'Waterfront Properties',
    description: 'Industrial waterfront security'
  }
];

const _faqs = [
  {
    question: `What industrial security solutions do you offer in ${city.name}?`,
    answer: `We provide comprehensive industrial security including perimeter protection, access control for loading docks, employee tracking, and 24/7 monitoring designed for ${city.name}'s industrial facilities.`
  },
  {
    question: `Do you secure properties along Route 13?`,
    answer: `Yes, we specialize in securing commercial properties along the busy Route 13 corridor, including retail stores, service businesses, and industrial facilities with high-traffic considerations.`
  },
  {
    question: `Can you handle large warehouse facilities?`,
    answer: `Absolutely! We have extensive experience securing ${city.name}'s waterfront warehouses and industrial properties with solutions for inventory protection, employee safety, and operational efficiency.`
  },
  {
    question: `What response time can ${city.name} businesses expect?`,
    answer: `Our average response time in ${city.name} is under 20 minutes, with priority response for industrial and commercial clients. We have technicians familiar with the Route 13 corridor and waterfront district.`
  }
];

export default function BristolPAPage() {
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