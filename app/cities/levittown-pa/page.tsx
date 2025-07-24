import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { getLocationBySlug } from '@/lib/data/locations';
import { generateCitySchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const citySlug = 'levittown-pa';
const city = getLocationBySlug(citySlug)!;

export const metadata: Metadata = {
  title: `Security Systems ${city.name}, ${city.stateCode} | Home & Business Security`,
  description: `Affordable security systems in ${city.name}, ${city.stateCode}. Home security, business alarms, video surveillance. All Levittown sections covered. Call ${COMPANY_INFO.phone}.`,
  keywords: [
    city.seoData.primaryKeyword,
    ...city.seoData.secondaryKeywords,
    ...city.seoData.longTailVariations,
    ...city.seoData.localModifiers
  ],
  openGraph: {
    title: `Security Systems ${city.name}, ${city.stateCode} | Home & Business Security`,
    description: `Affordable security systems in ${city.name}, ${city.stateCode}. Home security, business alarms, video surveillance. All Levittown sections covered.`,
    url: `https://securitydynamicsnj.com/cities/${citySlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/levittown-pa-security.jpg',
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
  { name: 'Fairless Hills', zip: '19030', features: ['Shopping Districts', 'Residential Areas'] },
  { name: 'Levittown Sections', zip: '19056', features: ['All Neighborhoods', 'Quick Response'] },
  { name: 'Tullytown Border', zip: '19057', features: ['Commercial Area', 'Route 13 Corridor'] },
];

const _businessTypes = [
  {
    type: 'Retail Businesses',
    description: 'Local shops and service businesses'
  },
  {
    type: 'Healthcare Facilities',
    description: 'Medical offices and clinics'
  },
  {
    type: 'Small Businesses',
    description: 'Family-owned and local enterprises'
  },
  {
    type: 'Residential Properties',
    description: 'Single-family homes and townhouses'
  }
];

const _faqs = [
  {
    question: `Do you service all sections of ${city.name}?`,
    answer: `Yes, we service all ${city.name} sections including Fairless Hills, all numbered sections, and surrounding areas. Our local technicians know every neighborhood and provide quick response times throughout the community.`
  },
  {
    question: `What makes your systems affordable for ${city.name} residents?`,
    answer: `We offer flexible packages designed for ${city.name} homeowners, including low monthly monitoring rates, Professional installation included, and equipment financing options. We believe everyone deserves quality security.`
  },
  {
    question: `Can you secure both my home and business in ${city.name}?`,
    answer: `Absolutely! Many ${city.name} residents run businesses from home or own local shops. We offer combination packages that protect both your residence and business with integrated monitoring.`
  },
  {
    question: `How familiar are you with ${city.name}'s layout?`,
    answer: `Our technicians are locals who know ${city.name}'s unique section layout intimately. Whether you're in the numbered sections or Fairless Hills, we know the fastest routes and can respond quickly.`
  }
];

export default function LevittownPAPage() {
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