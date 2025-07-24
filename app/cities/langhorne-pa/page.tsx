import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { getLocationBySlug } from '@/lib/data/locations';
import { generateCitySchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const citySlug = 'langhorne-pa';
const city = getLocationBySlug(citySlug)!;

export const metadata: Metadata = {
  title: `Security Systems ${city.name}, ${city.stateCode} | Business & Medical Security`,
  description: `Professional security systems in ${city.name}, ${city.stateCode}. Medical office security, retail protection, business alarms. Route 1 & Sesame Place area. Call ${COMPANY_INFO.phone}.`,
  keywords: [
    city.seoData.primaryKeyword,
    ...city.seoData.secondaryKeywords,
    ...city.seoData.longTailVariations,
    ...city.seoData.localModifiers
  ],
  openGraph: {
    title: `Security Systems ${city.name}, ${city.stateCode} | Business & Medical Security`,
    description: `Professional security systems in ${city.name}, ${city.stateCode}. Medical office security, retail protection, business alarms. Route 1 & Sesame Place area.`,
    url: `https://securitydynamicsnj.com/cities/${citySlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/langhorne-pa-security.jpg',
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
  { name: 'Route 1 Business Corridor', zip: '19047', features: ['Commercial District', 'Medical Offices'] },
  { name: 'Sesame Place Area', zip: '19047', features: ['Tourism Zone', 'High Traffic'] },
  { name: 'Langhorne Borough', zip: '19053', features: ['Historic Area', 'Small Business'] },
];

const _businessTypes = [
  {
    type: 'Medical Offices',
    description: 'Healthcare facility security systems'
  },
  {
    type: 'Retail Centers',
    description: 'Shopping plaza and store security'
  },
  {
    type: 'Professional Services',
    description: 'Office building protection'
  },
  {
    type: 'Tourism Businesses',
    description: 'Hotels and hospitality security'
  }
];

const _faqs = [
  {
    question: `What medical office security do you provide in ${city.name}?`,
    answer: `We offer HIPAA-compliant security solutions for ${city.name}'s many medical offices, including access control, patient area monitoring, and after-hours protection for medical equipment and records.`
  },
  {
    question: `Do you service businesses near Sesame Place?`,
    answer: `Yes, we provide security for hotels, restaurants, and businesses in the Sesame Place area, with solutions designed for high-traffic tourism businesses and seasonal traffic patterns.`
  },
  {
    question: `Can you secure Route 1 commercial properties?`,
    answer: `Absolutely! We specialize in securing businesses along the busy Route 1 corridor, from retail stores to professional offices, with systems designed for high-visibility commercial locations.`
  },
  {
    question: `What makes you ideal for ${city.name} businesses?`,
    answer: `We understand ${city.name}'s mix of medical practices, retail businesses, and tourism. Our local team provides quick response and systems tailored to each business type's specific needs.`
  }
];

export default function LanghornePAPage() {
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