import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { getLocationBySlug } from '@/lib/data/locations';
import { generateCitySchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const citySlug = 'hopewell-nj';
const city = getLocationBySlug(citySlug)!;

export const metadata: Metadata = {
  title: `Security Systems ${city.name}, ${city.stateCode} | Farm & Home Security`,
  description: `Professional security systems in ${city.name}, ${city.stateCode}. Farm security, residential alarms, small business protection. Hopewell Valley & Pennington area. Call ${COMPANY_INFO.phone}.`,
  keywords: [
    city.seoData.primaryKeyword,
    ...city.seoData.secondaryKeywords,
    ...city.seoData.longTailVariations,
    ...city.seoData.localModifiers
  ],
  openGraph: {
    title: `Security Systems ${city.name}, ${city.stateCode} | Farm & Home Security`,
    description: `Professional security systems in ${city.name}, ${city.stateCode}. Farm security, residential alarms, small business protection. Hopewell Valley & Pennington area.`,
    url: `https://securitydynamicsnj.com/cities/${citySlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/hopewell-nj-security.jpg',
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
  { name: 'Hopewell Borough', zip: '08525', features: ['Historic District', 'Small Business'] },
  { name: 'Hopewell Township', zip: '08534', features: ['Farm Properties', 'Large Estates'] },
  { name: 'Pennington Area', zip: '08534', features: ['Residential', 'Professional Offices'] },
];

const _businessTypes = [
  {
    type: 'Agricultural Properties',
    description: 'Farm security and equipment protection'
  },
  {
    type: 'Small Businesses',
    description: 'Local shops and professional services'
  },
  {
    type: 'Professional Offices',
    description: 'Medical, legal, and business offices'
  },
  {
    type: 'Historic Properties',
    description: 'Discrete security for historic homes'
  }
];

const _faqs = [
  {
    question: `Do you offer security solutions for farms in ${city.name}?`,
    answer: `Yes, we specialize in agricultural security including barn monitoring, equipment protection, and perimeter security for large properties. Our systems are designed for the unique needs of Hopewell Valley farms.`
  },
  {
    question: `Can you install discrete security in historic homes?`,
    answer: `Absolutely! We understand the importance of preserving the aesthetic of ${city.name}'s historic properties. We offer wireless solutions and carefully concealed installations that don't compromise your home's character.`
  },
  {
    question: `What areas of ${city.name} do you cover?`,
    answer: `We service all of ${city.name} including Hopewell Borough, Hopewell Township, and the Pennington area. Our team knows the local community and provides personalized service throughout Hopewell Valley.`
  },
  {
    question: `Do you have experience with large property security?`,
    answer: `Yes, many ${city.name} residents have large estates and farms. We design custom solutions using long-range cameras, driveway sensors, and smart detection systems perfect for expansive properties.`
  }
];

export default function HopewellNJPage() {
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