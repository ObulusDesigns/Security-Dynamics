import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { getLocationBySlug } from '@/lib/data/locations';
import { generateCitySchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const citySlug = 'ewing-nj';
const city = getLocationBySlug(citySlug)!;

export const metadata: Metadata = {
  title: `Security Systems ${city.name}, ${city.stateCode} | ${COMPANY_INFO.name}`,
  description: `Professional security systems in ${city.name}, ${city.stateCode}. Home & business security, alarm monitoring, cameras & access control. 24/7 emergency service near TCNJ. Call ${COMPANY_INFO.phone}.`,
  keywords: [
    city.seoData.primaryKeyword,
    ...city.seoData.secondaryKeywords,
    ...city.seoData.longTailVariations,
    ...city.seoData.localModifiers
  ],
  openGraph: {
    title: `Security Systems ${city.name}, ${city.stateCode} | ${COMPANY_INFO.name}`,
    description: `Professional security systems in ${city.name}, ${city.stateCode}. Home & business security, alarm monitoring, cameras & access control. 24/7 emergency service near TCNJ.`,
    url: `https://securitydynamicsnj.com/cities/${citySlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/ewing-nj-security.jpg',
        width: 1200,
        height: 630,
        alt: `Security Systems in ${city.name}, ${city.stateCode}`
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Security Systems ${city.name}, ${city.stateCode}`,
    description: `Professional security systems in ${city.name}. 24/7 monitoring & emergency service. Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/ewing-nj-security.jpg'],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/cities/${citySlug}`,
  }
};

const serviceAreas: ServiceArea[] = [
  { name: 'West Trenton', zip: '08628', features: ['Near Capital City Airport', 'Quick Response'] },
  { name: 'TCNJ Area', zip: '08638', features: ['College Campus Security', 'Student Housing'] },
  { name: 'Ewing Township', zip: '08618', features: ['Residential Areas', 'Local Business'] },
];

const _businessTypes = [
  {
    type: 'Education Facilities',
    description: 'Campus security for TCNJ and local schools'
  },
  {
    type: 'Healthcare Centers',
    description: 'Medical offices and healthcare facilities'
  },
  {
    type: 'Retail Businesses',
    description: 'Local shops and shopping centers'
  },
  {
    type: 'Corporate Offices',
    description: 'Business parks and office buildings'
  }
];

const _faqs = [
  {
    question: `What makes Security Dynamics the best choice for security in ${city.name}?`,
    answer: `We offer local expertise with rapid response times throughout ${city.name}, including the TCNJ area and West Trenton. Our 24/7 monitoring center and local technicians ensure immediate support when you need it.`
  },
  {
    question: `Do you provide security for TCNJ and surrounding student housing?`,
    answer: `Yes, we specialize in campus and student housing security solutions, offering affordable packages for rental properties and comprehensive systems for educational facilities.`
  },
  {
    question: `What areas of ${city.name} do you service?`,
    answer: `We service all of ${city.name} including West Trenton, the TCNJ campus area, and all residential neighborhoods. Our local team ensures quick response times throughout ${city.county}.`
  },
  {
    question: `How quickly can you install a security system in ${city.name}?`,
    answer: `We typically schedule installations within 24-48 hours. For businesses and emergency situations, we offer same-day service throughout ${city.name} and ${city.county}.`
  }
];

export default function EwingNJPage() {
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