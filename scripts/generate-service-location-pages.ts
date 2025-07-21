import fs from 'fs';
import path from 'path';
import { allLocations } from '../lib/data/locations';
import { services } from '../lib/data/services';

// Define which pages already exist
const existingPages = [
  'access-control-systems/new-jersey/mercer-county/princeton-nj',
  'intrusion-detection/new-jersey/mercer-county/trenton-nj',
  'video-surveillance/pennsylvania/bucks-county/doylestown-pa',
  'fire-alarm-monitoring/new-jersey/mercer-county/princeton-nj',
  'fire-alarm-monitoring/new-jersey/mercer-county/trenton-nj',
  'fire-alarm-monitoring/new-jersey/mercer-county/hopewell-nj',
  'fire-alarm-monitoring/pennsylvania/bucks-county/doylestown-pa',
  'environmental-monitoring/new-jersey/mercer-county/princeton-nj',
  'environmental-monitoring/new-jersey/mercer-county/trenton-nj',
  'environmental-monitoring/new-jersey/mercer-county/hopewell-nj',
  'environmental-monitoring/pennsylvania/bucks-county/doylestown-pa',
  'security-systems/new-jersey/mercer-county/princeton-nj',
  'security-systems/new-jersey/mercer-county/trenton-nj',
  'security-systems/new-jersey/mercer-county/hopewell-nj',
  'security-systems/pennsylvania/bucks-county/doylestown-pa',
  '24-7-central-station-monitoring/new-jersey/mercer-county/hopewell-nj',
  '24-7-central-station-monitoring/new-jersey/mercer-county/princeton-nj',
  '24-7-central-station-monitoring/new-jersey/mercer-county/trenton-nj',
  '24-7-central-station-monitoring/pennsylvania/bucks-county/doylestown-pa',
];

// Helper to get testimonials based on location type
function getTestimonials(location: any, service: any) {
  const testimonialTemplates = {
    commercial: [
      {
        name: 'Michael Chen',
        business: `${location.name} Business Center`,
        content: `Professional ${service.name.toLowerCase()} installation. The team was efficient and minimized disruption to our operations.`,
        rating: 5
      },
      {
        name: 'Sarah Williams',
        business: `Downtown ${location.name} Retail`,
        content: `Excellent service and competitive pricing. Our ${service.name.toLowerCase()} has been reliable since day one.`,
        rating: 5
      }
    ],
    residential: [
      {
        name: 'Robert Johnson',
        business: `${location.name} Homeowner`,
        content: `Great ${service.name.toLowerCase()} for our home. Feel much safer with Security Dynamics protecting our family.`,
        rating: 5
      },
      {
        name: 'Lisa Martinez',
        business: `${location.name} Resident`,
        content: `Quick response time and professional installation. Highly recommend their ${service.name.toLowerCase()}.`,
        rating: 5
      }
    ],
    tech: [
      {
        name: 'David Kim',
        business: `${location.name} Tech Solutions`,
        content: `Advanced ${service.name.toLowerCase()} perfect for our tech company. Integration with existing systems was seamless.`,
        rating: 5
      },
      {
        name: 'Jennifer Lee',
        business: `${location.name} Innovation Center`,
        content: `State-of-the-art ${service.name.toLowerCase()}. Exactly what we needed for our high-tech facility.`,
        rating: 5
      }
    ]
  };

  // Select testimonial type based on location characteristics
  let type = 'commercial';
  if (location.messaging === 'tech-focused') {
    type = 'tech';
  } else if (location.messaging === 'suburban') {
    type = 'residential';
  }

  return testimonialTemplates[type as keyof typeof testimonialTemplates];
}

// Helper to get nearby areas based on location
function getNearbyAreas(location: any) {
  const templates = {
    'hamilton-township-nj': [
      { name: 'Hamilton Square', zip: '08690', features: ['Shopping Centers', 'Medical Offices', 'Professional Buildings'] },
      { name: 'Mercerville', zip: '08619', features: ['Retail Districts', 'Small Businesses', 'Residential Areas'] },
      { name: 'Nottingham', zip: '08620', features: ['Industrial Parks', 'Commercial Properties', 'Office Complexes'] }
    ],
    'lawrence-township-nj': [
      { name: 'Lawrenceville', zip: '08648', features: ['Corporate Parks', 'Professional Services', 'Medical Centers'] },
      { name: 'Route 1 Corridor', zip: '08648', features: ['Office Buildings', 'Retail Centers', 'Tech Companies'] },
      { name: 'Quaker Bridge', zip: '08648', features: ['Shopping Mall', 'Commercial District', 'Business Centers'] }
    ],
    'ewing-nj': [
      { name: 'West Trenton', zip: '08628', features: ['Government Buildings', 'Professional Offices', 'Small Business'] },
      { name: 'TCNJ Area', zip: '08618', features: ['College Campus', 'Student Housing', 'Academic Buildings'] },
      { name: 'Olden Avenue', zip: '08638', features: ['Retail Corridor', 'Commercial Properties', 'Service Businesses'] }
    ],
    'west-windsor-nj': [
      { name: 'Princeton Junction', zip: '08550', features: ['Transit Hub', 'Corporate Centers', 'Professional Buildings'] },
      { name: 'Windsor Green', zip: '08550', features: ['Shopping Center', 'Restaurants', 'Service Businesses'] },
      { name: 'MarketFair', zip: '08550', features: ['Retail Complex', 'Office Buildings', 'Entertainment Venues'] }
    ],
    'east-windsor-nj': [
      { name: 'Hightstown', zip: '08520', features: ['Downtown Business', 'Historic Properties', 'Small Retail'] },
      { name: 'Twin Rivers', zip: '08520', features: ['Residential Community', 'Shopping Centers', 'Community Buildings'] },
      { name: 'Route 130 Business', zip: '08520', features: ['Commercial Corridor', 'Auto Dealers', 'Service Centers'] }
    ],
    'bensalem-pa': [
      { name: 'Street Road', zip: '19020', features: ['Retail Corridor', 'Shopping Centers', 'Restaurants'] },
      { name: 'Neshaminy Mall Area', zip: '19020', features: ['Major Retail', 'Commercial Properties', 'Office Buildings'] },
      { name: 'Parx Casino District', zip: '19020', features: ['Entertainment Complex', 'Hotels', 'Parking Facilities'] }
    ],
    'levittown-pa': [
      { name: 'Fairless Hills', zip: '19030', features: ['Shopping Centers', 'Medical Facilities', 'Business Parks'] },
      { name: 'Tullytown', zip: '19007', features: ['Small Business', 'Industrial Areas', 'Commercial Properties'] },
      { name: 'Vermillion Hills', zip: '19054', features: ['Residential Areas', 'Local Business', 'Community Centers'] }
    ],
    'newtown-pa': [
      { name: 'Newtown Borough', zip: '18940', features: ['Historic Downtown', 'Boutique Shops', 'Professional Offices'] },
      { name: 'Council Rock Area', zip: '18940', features: ['School District', 'Community Buildings', 'Sports Facilities'] },
      { name: 'Richboro', zip: '18954', features: ['Business Centers', 'Medical Offices', 'Retail Shops'] }
    ],
    'yardley-pa': [
      { name: 'Yardley Borough', zip: '19067', features: ['Historic District', 'Small Business', 'Professional Services'] },
      { name: 'Lower Makefield', zip: '19067', features: ['Corporate Centers', 'Shopping Areas', 'Community Buildings'] },
      { name: 'Delaware River Area', zip: '19067', features: ['Waterfront Properties', 'Recreational Areas', 'Local Business'] }
    ],
    'new-hope-pa': [
      { name: 'Main Street District', zip: '18938', features: ['Tourist Shops', 'Restaurants', 'Art Galleries'] },
      { name: 'Solebury Township', zip: '18938', features: ['Rural Business', 'Farms', 'Residential Properties'] },
      { name: 'Lambertville Bridge Area', zip: '18938', features: ['Cross-River Business', 'Historic Sites', 'Boutique Hotels'] }
    ],
    'bristol-pa': [
      { name: 'Bristol Borough', zip: '19007', features: ['Downtown Business', 'Industrial Properties', 'Waterfront Areas'] },
      { name: 'Bristol Township', zip: '19007', features: ['Commercial Centers', 'Residential Areas', 'Community Facilities'] },
      { name: 'Route 13 Corridor', zip: '19007', features: ['Business District', 'Auto Services', 'Retail Shops'] }
    ],
    'langhorne-pa': [
      { name: 'Langhorne Borough', zip: '19047', features: ['Historic Downtown', 'Small Business', 'Professional Offices'] },
      { name: 'Sesame Place Area', zip: '19047', features: ['Theme Park', 'Hotels', 'Tourist Services'] },
      { name: 'Oxford Valley', zip: '19053', features: ['Shopping Mall', 'Commercial Centers', 'Business Parks'] }
    ]
  };

  return templates[location.slug as keyof typeof templates] || [
    { name: `Downtown ${location.name}`, zip: location.zipCodes?.[0] || '00000', features: ['Business District', 'Retail Shops', 'Professional Services'] },
    { name: `${location.name} Commercial Area`, zip: location.zipCodes?.[1] || '00000', features: ['Shopping Centers', 'Office Buildings', 'Medical Facilities'] },
    { name: `${location.name} Business Park`, zip: location.zipCodes?.[2] || '00000', features: ['Corporate Offices', 'Industrial Properties', 'Service Centers'] }
  ];
}

// Generate page content
function generatePageContent(service: any, location: any) {
  const statePath = location.state.toLowerCase().replace(' ', '-');
  const countyPath = location.county.toLowerCase().replace(' ', '-');
  const functionName = service.slug.includes('24-7') 
    ? `CentralStationMonitoring24x7${location.name.replace(/[^a-zA-Z]/g, '')}${location.stateCode}Page`
    : `${service.name.replace(/[^a-zA-Z]/g, '')}${location.name.replace(/[^a-zA-Z]/g, '')}${location.stateCode}Page`;

  const nearbyAreas = getNearbyAreas(location);
  const testimonials = getTestimonials(location, service);

  // Customize description based on location
  const locationSpecificDescriptions: Record<string, string> = {
    'hamilton-township-nj': `${service.description} Serving Hamilton Square, Mercerville, and all Hamilton Township businesses.`,
    'lawrence-township-nj': `${service.description} Perfect for Route 1 corridor businesses and Lawrenceville corporate parks.`,
    'ewing-nj': `${service.description} Protecting TCNJ area businesses and West Trenton professional offices.`,
    'west-windsor-nj': `${service.description} Advanced solutions for Princeton Junction tech companies and MarketFair businesses.`,
    'east-windsor-nj': `${service.description} Serving Twin Rivers, Hightstown, and Route 130 business corridor.`,
    'bensalem-pa': `${service.description} Ideal for Street Road retail, Neshaminy Mall area, and Parx Casino district businesses.`,
    'levittown-pa': `${service.description} Protecting Fairless Hills businesses and Levittown residential communities.`,
    'newtown-pa': `${service.description} Discrete solutions for historic Newtown Borough and Council Rock area businesses.`,
    'yardley-pa': `${service.description} Premium security for Delaware River properties and Yardley Borough businesses.`,
    'new-hope-pa': `${service.description} Specialized security for Main Street shops, restaurants, and tourist businesses.`,
    'bristol-pa': `${service.description} Industrial-strength security for Bristol waterfront and Route 13 businesses.`,
    'langhorne-pa': `${service.description} Protecting Sesame Place area hotels and Oxford Valley commercial properties.`
  };

  const description = locationSpecificDescriptions[location.slug] || 
    `Expert ${service.name.toLowerCase()} services in ${location.name}, ${location.stateCode}. ${service.description} Call \${COMPANY_INFO.phone}.`;

  return `import { Metadata } from 'next';
import { ServiceLocationTemplate } from '@/components/templates/ServiceLocationTemplate';
import { getLocationBySlug, getServiceBySlug, services } from '@/lib/data';
import { generateServiceLocationSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { ServiceArea } from '@/lib/types';
import Script from 'next/script';

const serviceSlug = '${service.slug}';
const locationSlug = '${location.slug}';

const service = getServiceBySlug(serviceSlug)!;
const location = getLocationBySlug(locationSlug)!;

export const metadata: Metadata = {
  title: \`\${service.name} \${location.name}, \${location.stateCode} | Professional ${service.category}\`,
  description: \`${description}\`,
  keywords: [
    '${service.name.toLowerCase()} ${location.name} ${location.stateCode}',
    '${location.name} ${service.slug.replace(/-/g, ' ')}',
    '${service.slug.replace(/-/g, ' ')} ${location.name}',
    '${service.category.toLowerCase()} ${location.name}',
    '${location.name} ${service.category.toLowerCase()} services',
    '${service.slug.replace(/-/g, ' ')} near me ${location.name}',
    'best ${service.name.toLowerCase()} ${location.name}',
    '${location.name} ${service.slug.replace(/-/g, ' ')} cost',
    '${service.name.toLowerCase()} installation ${location.name}',
    '${service.slug.replace(/-/g, ' ')} quotes ${location.name}'
  ],
  openGraph: {
    title: \`\${service.name} \${location.name}, \${location.stateCode} | Professional Service\`,
    description: \`${service.shortDescription} in ${location.name}. Local installation & support.\`,
    url: \`https://securitydynamicsnj.com/services/\${serviceSlug}/\${location.state?.toLowerCase().replace(' ', '-')}/\${location.county?.toLowerCase().replace(' ', '-')}/\${locationSlug}\`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/images/og/\${serviceSlug}-\${locationSlug}.jpg',
        width: 1200,
        height: 630,
        alt: \`\${service.name} in \${location.name}, \${location.stateCode}\`
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: \`\${service.name} \${location.name} | Security Dynamics\`,
    description: \`${service.shortDescription} in ${location.name}. Call \${COMPANY_INFO.phone}.\`,
    images: ['/images/og/\${serviceSlug}-\${locationSlug}.jpg'],
  },
  alternates: {
    canonical: \`https://securitydynamicsnj.com/services/\${serviceSlug}/\${location.state?.toLowerCase().replace(' ', '-')}/\${location.county?.toLowerCase().replace(' ', '-')}/\${locationSlug}\`,
  }
};

const nearbyAreas: ServiceArea[] = ${JSON.stringify(nearbyAreas, null, 2).split('\n').map((line, i) => i === 0 ? line : '  ' + line).join('\n')};

const testimonials = ${JSON.stringify(testimonials, null, 2).split('\n').map((line, i) => i === 0 ? line : line).join('\n')};

// Get related services (excluding the current one)
const relatedServices = services.filter(s => s.slug !== serviceSlug).slice(0, 3);

export default function ${functionName}() {
  const schema = generateServiceLocationSchema(service, location, nearbyAreas);

  return (
    <>
      <Script id="schema-1" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceLocationTemplate 
        service={service}
        location={location}
        nearbyAreas={nearbyAreas}
        relatedServices={relatedServices}
        testimonials={testimonials}
      />
    </>
  );
}`;
}

// Main generation function
async function generatePages() {
  let createdCount = 0;
  const errors: string[] = [];

  for (const service of services) {
    for (const location of allLocations) {
      const statePath = location.state.toLowerCase().replace(' ', '-');
      const countyPath = location.county.toLowerCase().replace(' ', '-');
      const pagePath = `${service.slug}/${statePath}/${countyPath}/${location.slug}`;

      // Skip if page already exists
      if (existingPages.includes(pagePath)) {
        continue;
      }

      // Create directory structure
      const dirPath = path.join(
        process.cwd(),
        'app',
        'services',
        service.slug,
        statePath,
        countyPath,
        location.slug
      );

      try {
        // Create directory if it doesn't exist
        fs.mkdirSync(dirPath, { recursive: true });

        // Generate page content
        const content = generatePageContent(service, location);

        // Write the page file
        const filePath = path.join(dirPath, 'page.tsx');
        fs.writeFileSync(filePath, content);

        createdCount++;
        console.log(`✅ Created: ${pagePath}`);
      } catch (error) {
        const errorMsg = `❌ Error creating ${pagePath}: ${error}`;
        errors.push(errorMsg);
        console.error(errorMsg);
      }
    }
  }

  console.log(`\n🎉 Generation complete!`);
  console.log(`✅ Created ${createdCount} pages`);
  if (errors.length > 0) {
    console.log(`❌ ${errors.length} errors occurred:`);
    errors.forEach(err => console.log(err));
  }
}

// Run the generator
generatePages().catch(console.error);