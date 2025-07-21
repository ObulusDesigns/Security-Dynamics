import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Hero, CTA } from '@/components/sections';
import { 
  ShieldCheckIcon,
  VideoCameraIcon,
  LockClosedIcon,
  BellAlertIcon,
  FireIcon,
  CloudIcon,
  ClockIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import { services, getServicesByCategory } from '@/lib/data/services';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import { darkSectionClasses, darkSectionPatternStyle, sectionPadding } from '@/lib/utils/sectionStyles';

// Generate metadata
export const metadata: Metadata = {
  title: 'Security Services | Access Control, Video Surveillance & Monitoring | Security Dynamics Inc.',
  description: 'Comprehensive security services for NJ & PA businesses. Access control, video surveillance, intrusion detection, fire monitoring & 24/7 central station. Get free consultation!',
  keywords: 'security services, access control systems, video surveillance, intrusion detection, fire alarm monitoring, 24/7 monitoring, business security NJ PA',
  openGraph: {
    title: 'Commercial Security Services | NJ & PA | Security Dynamics Inc.',
    description: 'Full-service security solutions: access control, video surveillance, alarms, monitoring. Licensed & insured. 24/7 support for businesses in NJ & PA.',
    url: `${SITE_CONFIG.url}/services`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Services for NJ & PA Businesses',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Services | Access Control & Surveillance',
    description: 'Complete security solutions for businesses. 24/7 monitoring & support.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
  },
};

// Schema markup
const serviceListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${SITE_CONFIG.url}/services#service-list`,
  name: 'Security Services Offered by Security Dynamics Inc.',
  numberOfItems: services.length,
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: service.name,
    url: `${SITE_CONFIG.url}/services/${service.slug}`,
    description: service.description
  }))
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
      name: 'Services',
      item: `${SITE_CONFIG.url}/services`
    }
  ]
};

// Organization schema with hasOfferCatalog
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_CONFIG.url}#organization`,
  name: 'Security Dynamics Inc.',
  url: SITE_CONFIG.url,
  telephone: COMPANY_INFO.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_INFO.address.street,
    addressLocality: COMPANY_INFO.address.city,
    addressRegion: COMPANY_INFO.address.stateCode,
    postalCode: COMPANY_INFO.address.zip,
    addressCountry: 'US'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Security Services Catalog',
    itemListElement: services.map(service => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        url: `${SITE_CONFIG.url}/services/${service.slug}`
      }
    }))
  }
};

// Map icons to services
const serviceIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  'access-control-systems': LockClosedIcon,
  'intrusion-detection': BellAlertIcon,
  'video-surveillance': VideoCameraIcon,
  'fire-alarm-monitoring': FireIcon,
  'environmental-monitoring': CloudIcon,
  '24-7-central-station-monitoring': ClockIcon,
  'security-systems': ShieldCheckIcon,
};

// Service categories
const categories = [
  {
    name: 'Security Systems',
    description: 'Advanced technology to protect your property and assets',
    services: getServicesByCategory('Security Systems')
  },
  {
    name: 'Life Safety',
    description: 'Critical monitoring to protect people and property',
    services: getServicesByCategory('Life Safety')
  },
  {
    name: 'Specialty Monitoring',
    description: 'Specialized solutions for unique security needs',
    services: getServicesByCategory('Specialty Monitoring')
  },
  {
    name: 'Monitoring Services',
    description: '24/7 professional monitoring and response',
    services: getServicesByCategory('Monitoring Services')
  },
  {
    name: 'Complete Solutions',
    description: 'Integrated security systems for comprehensive protection',
    services: getServicesByCategory('Complete Solutions')
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script
        id="service-list-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceListSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Hero Section */}
      <Hero title="Comprehensive Security Services"
        subtitle="Protecting NJ & PA Businesses Since 1990"
        description="From access control to 24/7 monitoring, we provide complete security solutions tailored to your business needs."
        
        
      primaryCta={{
          text: "Get Free Consultation",
          href: "/contact"
        }}
      />

      {/* Services Overview - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Full-Service Security Solutions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to protect your business, employees, and assets. 
              Licensed, insured, and available 24/7 throughout New Jersey and Pennsylvania.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">30+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">5,000+</div>
              <div className="text-gray-600">Protected Sites</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
          </div>

          {/* All Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug] || ShieldCheckIcon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <Icon className="w-12 h-12 mb-4 text-red-600 group-hover:text-red-700 transition-colors" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                    <span>Learn More</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services by Category - Dark Blue */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Services by Category
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Choose from our specialized security categories
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category.name} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      <ShieldCheckIcon className="w-5 h-5 mr-2" />
                      <span>{service.name}</span>
                      <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions - White */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tailored security services for your industry's unique needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {['Healthcare', 'Retail', 'Warehouse', 'Commercial', 'Multi-Family'].map((industry) => (
              <div key={industry} className="text-center">
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <BuildingOfficeIcon className="w-12 h-12 mx-auto mb-3 text-red-600" />
                  <h3 className="font-semibold text-gray-900">{industry}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services - Dark Blue */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Why Choose Security Dynamics?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Experience, expertise, and excellence in every service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Licensed & Insured',
                description: 'Fully licensed in NJ & PA with comprehensive insurance coverage'
              },
              {
                title: 'UL-Listed Monitoring',
                description: 'Our central station meets the highest industry standards'
              },
              {
                title: '24/7 Support',
                description: 'Emergency response and technical support around the clock'
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored security plans for your specific needs and budget'
              },
              {
                title: 'Latest Technology',
                description: 'State-of-the-art equipment with AI-powered features'
              },
              {
                title: 'Local Expertise',
                description: 'Serving Mercer & Bucks Counties with local teams'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process - White */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Simple, transparent, and focused on your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Free Consultation',
                description: 'Discuss your security needs and concerns'
              },
              {
                step: '2',
                title: 'Site Assessment',
                description: 'Comprehensive evaluation of your property'
              },
              {
                step: '3',
                title: 'Custom Proposal',
                description: 'Detailed plan with transparent pricing'
              },
              {
                step: '4',
                title: 'Expert Installation',
                description: 'Professional setup with minimal disruption'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" strokeWidth="2" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas - Dark Blue */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Serving All of Mercer & Bucks Counties
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Local teams ready to serve your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Mercer County, NJ</h3>
              <ul className="grid grid-cols-2 gap-3 text-gray-300">
                <li>Trenton</li>
                <li>Princeton</li>
                <li>Hamilton</li>
                <li>Lawrence</li>
                <li>Ewing</li>
                <li>West Windsor</li>
                <li>Hopewell</li>
                <li>East Windsor</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Bucks County, PA</h3>
              <ul className="grid grid-cols-2 gap-3 text-gray-300">
                <li>Doylestown</li>
                <li>Bensalem</li>
                <li>Levittown</li>
                <li>Newtown</li>
                <li>Yardley</li>
                <li>Langhorne</li>
                <li>New Hope</li>
                <li>Bristol</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Ready to Secure Your Business?"
        subtitle="Get a free consultation and custom security plan"
        showFeatures={true}
      />
    </>
  );
}