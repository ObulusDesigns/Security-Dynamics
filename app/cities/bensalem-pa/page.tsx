import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { getLocationBySlug } from '@/lib/data/locations';
import { generateCitySchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const citySlug = 'bensalem-pa';
const city = getLocationBySlug(citySlug)!;

export const metadata: Metadata = {
  title: `Commercial Security Systems ${city.name}, ${city.stateCode} | Retail Loss Prevention`,
  description: `Business security systems in ${city.name}, ${city.stateCode}. Retail loss prevention, commercial surveillance, access control. Neshaminy Mall & Parx Casino area. Call ${COMPANY_INFO.phone}.`,
  keywords: [
    city.seoData.primaryKeyword,
    ...city.seoData.secondaryKeywords,
    ...city.seoData.longTailVariations,
    ...city.seoData.localModifiers
  ],
  openGraph: {
    title: `Commercial Security Systems ${city.name}, ${city.stateCode} | Retail Loss Prevention`,
    description: `Business security systems in ${city.name}, ${city.stateCode}. Retail loss prevention, commercial surveillance, access control. Neshaminy Mall & Parx Casino area.`,
    url: `https://securitydynamicsnj.com/cities/${citySlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/bensalem-pa-security.jpg',
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
    title: `Business Security ${city.name}, ${city.stateCode}`,
    description: `Commercial security & loss prevention in ${city.name}. Protect your business 24/7. Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/bensalem-pa-security.jpg'],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/cities/${citySlug}`,
  }
};

const serviceAreas: ServiceArea[] = [
  { name: 'Neshaminy Mall Area', zip: '19020', features: ['Retail Security', 'Loss Prevention'] },
  { name: 'Street Road', zip: '19020', features: ['Commercial Corridor', 'Business District'] },
  { name: 'Parx Casino Area', zip: '19020', features: ['High-Traffic Security', '24/7 Operations'] },
];

const _businessTypes = [
  {
    type: 'Retail Stores',
    description: 'Loss prevention and customer analytics'
  },
  {
    type: 'Entertainment Venues',
    description: 'High-traffic area security solutions'
  },
  {
    type: 'Shopping Centers',
    description: 'Mall and plaza comprehensive security'
  },
  {
    type: 'Commercial Properties',
    description: 'Office buildings and business complexes'
  }
];

const _faqs = [
  {
    question: `What retail security solutions do you offer for ${city.name} businesses?`,
    answer: `We provide comprehensive retail security including loss prevention systems, customer counting, heat mapping, and POS integration. Perfect for stores in Neshaminy Mall and along Street Road.`
  },
  {
    question: `Do you service the Parx Casino area?`,
    answer: `Yes, we provide security solutions for businesses throughout the Parx Casino area, specializing in high-traffic commercial properties that require 24/7 reliable surveillance and access control.`
  },
  {
    question: `Can you integrate with existing retail systems?`,
    answer: `Absolutely! Our systems integrate with most POS systems, inventory management, and customer analytics platforms. We help ${city.name} retailers maximize both security and business intelligence.`
  },
  {
    question: `What makes you the best choice for ${city.name} businesses?`,
    answer: `We understand the unique challenges of ${city.name}'s busy commercial districts. Our local team provides rapid response, and we specialize in high-traffic retail environments like those found along Street Road.`
  }
];

export default function BensalemPAPage() {
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