import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { getLocationBySlug } from '@/lib/data/locations';
import { generateCitySchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const citySlug = 'west-windsor-nj';
const city = getLocationBySlug(citySlug)!;

export const metadata: Metadata = {
  title: `Security Systems ${city.name}, ${city.stateCode} | Smart Home Security`,
  description: `Advanced security systems in ${city.name}, ${city.stateCode}. Smart home integration, business security, AI-powered cameras. Princeton Junction area. Call ${COMPANY_INFO.phone}.`,
  keywords: [
    city.seoData.primaryKeyword,
    ...city.seoData.secondaryKeywords,
    ...city.seoData.longTailVariations,
    ...city.seoData.localModifiers
  ],
  openGraph: {
    title: `Security Systems ${city.name}, ${city.stateCode} | Smart Home Security`,
    description: `Advanced security systems in ${city.name}, ${city.stateCode}. Smart home integration, business security, AI-powered cameras. Princeton Junction area.`,
    url: `https://securitydynamicsnj.com/cities/${citySlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/west-windsor-nj-security.jpg',
        width: 1200,
        height: 630,
        alt: `Smart Security Systems in ${city.name}, ${city.stateCode}`
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Smart Security ${city.name}, ${city.stateCode}`,
    description: `Advanced security systems in ${city.name}. Smart home integration & AI-powered monitoring. Call ${COMPANY_INFO.phone}.`,
    images: ['/images/og/west-windsor-nj-security.jpg'],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/cities/${citySlug}`,
  }
};

const serviceAreas: ServiceArea[] = [
  { name: 'Princeton Junction', zip: '08550', features: ['Corporate Parks', 'Transit Hub Security'] },
  { name: 'West Windsor Township', zip: '08550', features: ['Luxury Homes', 'Smart Integration'] },
  { name: 'Grovers Mill', zip: '08550', features: ['Historic Area', 'Residential Security'] },
];

const _businessTypes = [
  {
    type: 'Corporate Headquarters',
    description: 'High-tech security for corporate campuses'
  },
  {
    type: 'Tech Companies',
    description: 'Advanced systems for technology firms'
  },
  {
    type: 'Professional Services',
    description: 'Law firms, medical practices, financial services'
  },
  {
    type: 'Luxury Residential',
    description: 'Smart home security for high-end properties'
  }
];

const _faqs = [
  {
    question: `What smart home features do you offer in ${city.name}?`,
    answer: `We provide full smart home integration including voice control, mobile app management, automated scenes, and integration with popular platforms like Alexa, Google Home, and Apple HomeKit. Perfect for the tech-savvy residents of ${city.name}.`
  },
  {
    question: `Do you service the Princeton Junction business district?`,
    answer: `Yes, we specialize in corporate security solutions for the Princeton Junction area, including access control, visitor management systems, and integrated surveillance for office parks.`
  },
  {
    question: `Can you integrate with existing smart home systems?`,
    answer: `Absolutely! Our systems are designed to work seamlessly with existing smart home infrastructure. We're experts at creating unified security ecosystems for ${city.name}'s tech-forward community.`
  },
  {
    question: `What makes your systems ideal for ${city.name} residents?`,
    answer: `Our advanced technology matches the sophisticated needs of ${city.name} residents. We offer AI-powered analytics, facial recognition options, and enterprise-grade cybersecurity - perfect for this tech-hub community.`
  }
];

export default function WestWindsorNJPage() {
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