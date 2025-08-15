import { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections';
import { MapPinIcon, BuildingOfficeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { mercerCities, bucksCities } from '@/lib/data/locations';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Security Systems by Location | NJ & PA Service Areas | Security Dynamics',
  description: 'Security Dynamics serves businesses throughout Mercer County NJ and Bucks County PA. Find local security system installation and 24/7 monitoring in your area.',
  keywords: 'security systems New Jersey, security systems Pennsylvania, Mercer County security, Bucks County security, security company near me, local security installer',
  openGraph: {
    title: 'Service Areas | Security Systems in NJ & PA',
    description: 'Complete coverage across Mercer County NJ and Bucks County PA. Find your local Security Dynamics team.',
    url: `${SITE_CONFIG.url}/locations`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Dynamics Service Areas',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations`,
  },
};

// Schema markup
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Security Dynamics Service Locations',
  description: 'All service areas covered by Security Dynamics Inc.',
  numberOfItems: mercerCities.length + bucksCities.length,
  itemListElement: [
    ...mercerCities.map((city, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Place',
        name: `${city.name}, ${city.state}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: city.name,
          addressRegion: city.state
        },
        url: `${SITE_CONFIG.url}/locations/${city.slug}`
      }
    })),
    ...bucksCities.map((city, index) => ({
      '@type': 'ListItem',
      position: mercerCities.length + index + 1,
      item: {
        '@type': 'Place',
        name: `${city.name}, ${city.state}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: city.name,
          addressRegion: city.state
        },
        url: `${SITE_CONFIG.url}/locations/${city.slug}`
      }
    }))
  ]
};

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
      item: `${SITE_CONFIG.url}/locations`
    }
  ]
};

export default function LocationsPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script id="schema-1" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />
      <Script id="schema-2" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <Hero title="Security Systems Across"
        subtitle="New Jersey & Pennsylvania"
        description="With local teams throughout Mercer County NJ and Bucks County PA, we provide rapid response and personalized service to businesses in every community we serve."
        
        
      primaryCta={{
          text: "Find Your Local Team",
          href: "#locations"
        }}
      />

      {/* Service Areas Overview - White */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center bg-red-100 border border-red-200 rounded-full px-6 py-2 mb-8">
              <MapPinIcon className="w-5 h-5 mr-2 text-red-600" />
              <span className="text-red-600 text-xs font-semibold tracking-widest uppercase">
                Complete Regional Coverage
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Local Security Experts in Your Community
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose your location below to find specialized security solutions tailored to your area's unique needs and challenges.
            </p>
          </div>

          {/* Coverage Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">2</div>
              <div className="text-gray-600">Counties Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">16+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Response</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">15min</div>
              <div className="text-gray-600">Avg Response Time</div>
            </div>
          </div>

          {/* County Sections */}
          <div id="locations" className="space-y-16">
            {/* Mercer County Section */}
            <div>
              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Mercer County, New Jersey</h3>
                    <p className="text-gray-700">Serving the capital region and surrounding business communities</p>
                  </div>
                  <Link
                    href="/service-areas/mercer-county-nj"
                    className="hidden md:inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                  >
                    View County Overview
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mercerCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/locations/${city.slug}`}
                      className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                          {city.name}
                        </h4>
                        <BuildingOfficeIcon className="w-5 h-5 text-red-400" />
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {city.messaging === 'crime-focused' && 'High-crime area security specialist'}
                        {city.messaging === 'tech-focused' && 'Tech company security expert'}
                        {city.messaging === 'commercial-focused' && 'Commercial district protection'}
                        {city.messaging === 'historic-focused' && 'Historic building security specialist'}
                        {city.messaging === 'suburban' && 'Suburban business security'}
                      </p>
                      <div className="flex items-center text-red-600 text-sm font-semibold group-hover:text-red-700 transition-colors">
                        <span>View Services</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/service-areas/mercer-county-nj"
                  className="md:hidden inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 mt-6"
                >
                  View Mercer County Overview
                </Link>
              </div>
            </div>

            {/* Bucks County Section */}
            <div>
              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Bucks County, Pennsylvania</h3>
                    <p className="text-gray-700">Protecting businesses from historic Doylestown to bustling Bensalem</p>
                  </div>
                  <Link
                    href="/service-areas/bucks-county-pa"
                    className="hidden md:inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                  >
                    View County Overview
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {bucksCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/locations/${city.slug}`}
                      className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                          {city.name}
                        </h4>
                        <BuildingOfficeIcon className="w-5 h-5 text-red-400" />
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {city.messaging === 'crime-focused' && 'High-crime area security specialist'}
                        {city.messaging === 'tech-focused' && 'Tech company security expert'}
                        {city.messaging === 'commercial-focused' && 'Commercial district protection'}
                        {city.messaging === 'historic-focused' && 'Historic building security specialist'}
                        {city.messaging === 'suburban' && 'Suburban business security'}
                      </p>
                      <div className="flex items-center text-red-600 text-sm font-semibold group-hover:text-red-700 transition-colors">
                        <span>View Services</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/service-areas/bucks-county-pa"
                  className="md:hidden inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 mt-6"
                >
                  View Bucks County Overview
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - White */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            Can't Find Your Location?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            We're expanding our coverage area. Contact us to discuss security solutions for your business location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <PhoneIcon className="w-6 h-6 mr-3" />
              Call {COMPANY_INFO.phone}
            </a>
            <Link
              href="https://ocyrus.app.n8n.cloud/form/a96519af-6dc7-438a-a754-3d3eb830bdf7" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Request Coverage Area
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}