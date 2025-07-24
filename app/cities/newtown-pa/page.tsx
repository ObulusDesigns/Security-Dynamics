import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { getLocationBySlug } from '@/lib/data/locations';
import { generateCitySchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const citySlug = 'newtown-pa';
const city = getLocationBySlug(citySlug)!;

export const metadata: Metadata = {
  title: `Security Systems ${city.name}, ${city.stateCode} | Historic Property Security`,
  description: `Premium security systems in ${city.name}, ${city.stateCode}. Historic property protection, luxury home security, business alarms. State Street & Historic District. Call ${COMPANY_INFO.phone}.`,
  keywords: [
    city.seoData.primaryKeyword,
    ...city.seoData.secondaryKeywords,
    ...city.seoData.longTailVariations,
    ...city.seoData.localModifiers
  ],
  openGraph: {
    title: `Security Systems ${city.name}, ${city.stateCode} | Historic Property Security`,
    description: `Premium security systems in ${city.name}, ${city.stateCode}. Historic property protection, luxury home security, business alarms. State Street & Historic District.`,
    url: `https://securitydynamicsnj.com/cities/${citySlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/newtown-pa-security.jpg',
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
  { name: 'Historic Newtown', zip: '18940', features: ['Historic Properties', 'Discrete Systems'] },
  { name: 'State Street', zip: '18940', features: ['Business District', 'Boutique Security'] },
  { name: 'Council Rock Area', zip: '18940', features: ['Residential', 'School District'] },
];

const _businessTypes = [
  {
    type: 'Historic Properties',
    description: 'Preservation-friendly security solutions'
  },
  {
    type: 'Professional Offices',
    description: 'Law firms, medical practices, consultants'
  },
  {
    type: 'Boutique Retail',
    description: 'Upscale shops and galleries'
  },
  {
    type: 'Healthcare Facilities',
    description: 'Medical and dental practices'
  }
];

const _faqs = [
  {
    question: `Can you install security without damaging historic properties in ${city.name}?`,
    answer: `Absolutely! We specialize in discrete, wireless installations that preserve the integrity of ${city.name}'s historic properties. Our systems are designed to be invisible while providing maximum protection.`
  },
  {
    question: `Do you secure businesses along State Street?`,
    answer: `Yes, we provide custom security solutions for State Street's boutique shops, restaurants, and professional offices. Our systems include after-hours protection and discrete daytime monitoring.`
  },
  {
    question: `What makes your systems ideal for ${city.name}'s upscale properties?`,
    answer: `We offer premium features like facial recognition, package detection, and integration with home automation systems. Our installations maintain the aesthetic appeal important to ${city.name} residents.`
  },
  {
    question: `Do you understand ${city.name}'s historic district requirements?`,
    answer: `Yes, we're familiar with historic district guidelines and work to ensure all installations comply with local preservation standards while providing state-of-the-art security.`
  }
];

export default function NewtownPAPage() {
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