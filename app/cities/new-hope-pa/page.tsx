import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { getLocationBySlug } from '@/lib/data/locations';
import { generateCitySchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const citySlug = 'new-hope-pa';
const city = getLocationBySlug(citySlug)!;

export const metadata: Metadata = {
  title: `Business Security Systems ${city.name}, ${city.stateCode} | Tourism & Retail`,
  description: `Commercial security systems in ${city.name}, ${city.stateCode}. Main Street businesses, art galleries, restaurants, boutique security. 24/7 monitoring. Call ${COMPANY_INFO.phone}.`,
  keywords: [
    city.seoData.primaryKeyword,
    ...city.seoData.secondaryKeywords,
    ...city.seoData.longTailVariations,
    ...city.seoData.localModifiers
  ],
  openGraph: {
    title: `Business Security Systems ${city.name}, ${city.stateCode} | Tourism & Retail`,
    description: `Commercial security systems in ${city.name}, ${city.stateCode}. Main Street businesses, art galleries, restaurants, boutique security. 24/7 monitoring.`,
    url: `https://securitydynamicsnj.com/cities/${citySlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/new-hope-pa-security.jpg',
        width: 1200,
        height: 630,
        alt: `Business Security Systems in ${city.name}, ${city.stateCode}`
      }
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `https://securitydynamicsnj.com/cities/${citySlug}`}
};

const serviceAreas: ServiceArea[] = [
  { name: 'Main Street', zip: '18938', features: ['Tourist District', 'High-Traffic Areas'] },
  { name: 'Delaware Canal', zip: '18938', features: ['Waterfront Business', 'Historic Area'] },
  { name: 'Lambertville Bridge Area', zip: '18938', features: ['Cross-River Traffic', 'Border Location'] },
];

const _businessTypes = [
  {
    type: 'Tourism Businesses',
    description: 'Hotels, B&Bs, and tourist attractions'
  },
  {
    type: 'Art Galleries',
    description: 'High-value art and antique protection'
  },
  {
    type: 'Restaurants & Bars',
    description: 'Hospitality security solutions'
  },
  {
    type: 'Boutique Retail',
    description: 'Specialty shops and unique stores'
  }
];

const _faqs = [
  {
    question: `What security challenges are unique to ${city.name} businesses?`,
    answer: `${city.name}'s high tourist traffic, seasonal variations, and valuable inventory require specialized security. We provide crowd monitoring, after-hours protection, and discrete daytime surveillance perfect for Main Street businesses.`
  },
  {
    question: `Can you protect art galleries and antique shops?`,
    answer: `Yes, we specialize in high-value asset protection with features like individual piece monitoring, environmental sensors, and silent alarms perfect for ${city.name}'s many galleries and antique dealers.`
  },
  {
    question: `Do you offer seasonal security adjustments?`,
    answer: `Absolutely! We understand ${city.name}'s tourist seasons and can scale security up during busy periods and adjust for quieter times, helping businesses manage costs while maintaining protection.`
  },
  {
    question: `How do you handle the historic nature of ${city.name} buildings?`,
    answer: `We use wireless technology and careful installation techniques that preserve the historic character of ${city.name}'s buildings while providing modern security capabilities.`
  }
];

export default function NewHopePAPage() {
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