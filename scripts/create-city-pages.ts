import fs from 'fs';
import path from 'path';

const cityPageTemplate = (citySlug: string, cityName: string, stateAbbr: string, zipCode: string, lat: string, lng: string, reviewCount: string, countyName: string, faqContent: any) => `import { Metadata } from 'next';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';
import { allLocations } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';

// Get ${cityName} data
const city = allLocations.find(loc => loc.slug === '${citySlug}')!;
const nearbyLocations = allLocations.filter(loc => 
  loc.county === '${countyName}' && loc.slug !== '${citySlug}'
).slice(0, 4);

// Generate metadata
export const metadata: Metadata = {
  title: \`\${city.seo.primaryKeyword} | Security Dynamics Inc.\`,
  description: city.seo.secondaryKeywords[0] + '. ' + city.seo.localModifiers[0] + '. Get free assessment!',
  keywords: city.seo.primaryKeyword + ', ' + city.seo.secondaryKeywords.join(', '),
  openGraph: {
    title: \`\${city.seo.primaryKeyword} | 24/7 Protection\`,
    description: 'Protect your ${cityName} business with advanced security solutions. Local team, rapid response, specialized expertise.',
    url: \`\${SITE_CONFIG.url}/locations/${citySlug}\`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Systems in ${cityName} ${stateAbbr}',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: city.seo.primaryKeyword,
    description: 'Leading security provider in ${cityName} ${stateAbbr}. 24/7 monitoring & rapid response.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: \`\${SITE_CONFIG.url}/locations/${citySlug}\`,
  },
};

// Schema markup
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': \`\${SITE_CONFIG.url}/locations/${citySlug}#business\`,
  name: 'Security Dynamics Inc. - ${cityName}',
  image: \`\${SITE_CONFIG.url}/logo-1.webp\`,
  telephone: COMPANY_INFO.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_INFO.address.street,
    addressLocality: '${cityName}',
    addressRegion: '${stateAbbr}',
    postalCode: '${zipCode}',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '${lat}',
    longitude: '${lng}'
  },
  areaServed: {
    '@type': 'City',
    name: '${cityName}',
    containedIn: {
      '@type': 'AdministrativeArea',
      name: '${countyName}'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '${reviewCount}'
  },
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00'
  }
};

// BreadcrumbList schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_CONFIG.url
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Locations',
      item: \`\${SITE_CONFIG.url}/locations\`
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: '${stateAbbr === 'NJ' ? 'New Jersey' : 'Pennsylvania'}',
      item: \`\${SITE_CONFIG.url}/service-areas/${countyName.toLowerCase().replace(' ', '-')}-${stateAbbr.toLowerCase()}\`
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: '${cityName}',
      item: \`\${SITE_CONFIG.url}/locations/${citySlug}\`
    }
  ]
};

// FAQPage schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ${JSON.stringify(faqContent, null, 2)}
};

export default function ${cityName.replace(/\s+/g, '')}${stateAbbr}Page() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Page Content */}
      <CityPageTemplate 
        city={city}
        nearbyLocations={nearbyLocations}
      />
    </>
  );
}`;

// City data with FAQs
const cities = [
  // Remaining Mercer County cities
  {
    slug: 'lawrence-township-nj',
    name: 'Lawrence Township',
    state: 'NJ',
    zip: '08648',
    lat: '40.2973',
    lng: '-74.7293',
    reviews: '41',
    county: 'Mercer County',
    faqs: [
      {
        '@type': 'Question',
        name: 'What security solutions do you offer for Lawrence Township medical facilities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide HIPAA-compliant security for Lawrence Township\'s healthcare facilities including patient area monitoring, pharmacy access control, infant protection systems, and visitor management. Our solutions meet Joint Commission requirements and integrate with existing hospital systems.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you secure professional office buildings in Lawrence Township?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we specialize in multi-tenant office building security with individual suite access control, shared area monitoring, after-hours building access, and visitor management systems. Many Lawrence Township corporate parks trust us for comprehensive security solutions.'
        }
      },
      {
        '@type': 'Question',
        name: 'How quickly can you respond to emergencies in Lawrence Township?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our average emergency response time in Lawrence Township is 15 minutes. We have technicians familiar with the Route 1 corridor, Lawrenceville, and all major business districts, ensuring rapid response to security alerts anywhere in the township.'
        }
      },
      {
        '@type': 'Question',
        name: 'What areas of Lawrence Township does Security Dynamics serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve all of Lawrence Township including Lawrenceville, the Route 1 business corridor, Princeton Pike area, Business Route 206, Quaker Bridge Mall area, and surrounding office parks. Our coverage extends to all commercial and professional districts.'
        }
      }
    ]
  },
  {
    slug: 'ewing-nj',
    name: 'Ewing',
    state: 'NJ',
    zip: '08618',
    lat: '40.2698',
    lng: '-74.7999',
    reviews: '35',
    county: 'Mercer County',
    faqs: [
      {
        '@type': 'Question',
        name: 'Do you provide security for state facilities in Ewing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we have extensive experience securing government and state facilities in Ewing. Our systems meet all state security requirements including CJIS compliance, secure area access control, visitor screening systems, and integration with existing state security protocols.'
        }
      },
      {
        '@type': 'Question',
        name: 'What security do you offer for Ewing educational institutions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide comprehensive security for schools and colleges in Ewing including campus-wide surveillance, emergency lockdown systems, visitor management, and mass notification integration. Our solutions are designed to create safe learning environments while remaining unobtrusive.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can you secure Ewing Township municipal buildings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We secure many municipal facilities in Ewing with solutions including public area monitoring, employee access control, evidence room security, and integration with police dispatch systems. We understand the unique needs of public buildings.'
        }
      },
      {
        '@type': 'Question',
        name: 'What areas of Ewing does Security Dynamics serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve all of Ewing including West Trenton, Ewing Township proper, areas near The College of New Jersey, Trenton-Mercer Airport vicinity, and all state facility locations. Our local team ensures rapid response throughout the township.'
        }
      }
    ]
  },
  {
    slug: 'west-windsor-nj',
    name: 'West Windsor',
    state: 'NJ',
    zip: '08550',
    lat: '40.3048',
    lng: '-74.6399',
    reviews: '44',
    county: 'Mercer County',
    faqs: [
      {
        '@type': 'Question',
        name: 'What security solutions do you offer for West Windsor tech parks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide advanced security for West Windsor\'s technology companies including biometric lab access, intellectual property protection, server room monitoring, and integrated systems that scale with growing businesses. Our solutions meet the high standards of Princeton Junction\'s corporate corridor.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you secure corporate offices in West Windsor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we specialize in corporate security for West Windsor\'s many headquarters and regional offices. This includes executive area protection, board room security, visitor management systems, and after-hours monitoring tailored to corporate environments.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can you provide integrated security for multi-building campuses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Many West Windsor corporate campuses use our integrated platforms to manage security across multiple buildings from a single interface. This includes unified access control, centralized video monitoring, and coordinated emergency response systems.'
        }
      },
      {
        '@type': 'Question',
        name: 'What areas of West Windsor does Security Dynamics serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve all of West Windsor including Princeton Junction, the Alexander Road corridor, Carnegie Center area, Route 1 business district, and all corporate parks. Our familiarity with West Windsor\'s business districts ensures rapid, knowledgeable service.'
        }
      }
    ]
  },
  // Continue with remaining cities...
];

// Create directories and files
cities.forEach(city => {
  const dirPath = path.join(process.cwd(), 'app', 'locations', city.slug);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Write the page file
  const content = cityPageTemplate(
    city.slug,
    city.name,
    city.state,
    city.zip,
    city.lat,
    city.lng,
    city.reviews,
    city.county,
    city.faqs
  );
  
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
  console.log(`Created ${city.name} page`);
});

console.log('All city pages created successfully!');