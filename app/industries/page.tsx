import { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import { darkSectionClasses, darkSectionPatternStyle, sectionPadding } from '@/lib/utils/sectionStyles';
import {
  BuildingOfficeIcon,
  HeartIcon,
  ShoppingBagIcon,
  CubeIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  AcademicCapIcon,
  BanknotesIcon,
  BeakerIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

// Industry data
const industries = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    slug: 'healthcare',
    icon: HeartIcon,
    description: 'Comprehensive security solutions for hospitals, medical offices, and healthcare facilities. HIPAA-compliant systems with patient safety focus.',
    features: [
      'Access control for restricted areas',
      'Infant protection systems',
      'Drug storage monitoring',
      'Emergency lockdown capabilities',
      'Integration with nurse call systems'
    ],
    stats: {
      facilities: '150+',
      yearsExperience: '20+',
      compliance: '100%'
    }
  },
  {
    id: 'retail',
    name: 'Retail',
    slug: 'retail',
    icon: ShoppingBagIcon,
    description: 'Loss prevention and security systems for retail stores, shopping centers, and boutiques. Reduce shrinkage and protect assets.',
    features: [
      'AI-powered video analytics',
      'POS transaction matching',
      'Customer traffic analysis',
      'Electronic article surveillance',
      'Remote video monitoring'
    ],
    stats: {
      stores: '300+',
      shrinkageReduction: '45%',
      roi: '< 6 months'
    }
  },
  {
    id: 'warehouse',
    name: 'Warehouse & Distribution',
    slug: 'warehouse',
    icon: CubeIcon,
    description: 'Scalable security solutions for warehouses, distribution centers, and logistics facilities. Protect inventory and operations.',
    features: [
      'Perimeter detection systems',
      'Loading dock surveillance',
      'Access control integration',
      'Thermal imaging cameras',
      'Asset tracking systems'
    ],
    stats: {
      sqftProtected: '5M+',
      incidents: '↓ 75%',
      uptime: '99.9%'
    }
  },
  {
    id: 'multi-family',
    name: 'Multi-Family Residential',
    slug: 'multi-family',
    icon: BuildingOffice2Icon,
    description: 'Integrated security for apartment complexes, condominiums, and student housing. Enhance resident safety and property value.',
    features: [
      'Video intercom systems',
      'Amenity access control',
      'Package room security',
      'Common area surveillance',
      'Visitor management'
    ],
    stats: {
      units: '10,000+',
      properties: '200+',
      satisfaction: '95%'
    }
  },
  {
    id: 'commercial-office',
    name: 'Commercial Office',
    slug: 'commercial-office',
    icon: BuildingOfficeIcon,
    description: 'Professional security systems for office buildings, corporate campuses, and business parks. Protect people and intellectual property.',
    features: [
      'Multi-tenant access control',
      'Visitor management systems',
      'Executive suite protection',
      'After-hours monitoring',
      'Parking security'
    ],
    stats: {
      buildings: '400+',
      tenants: '2,000+',
      sqft: '10M+'
    }
  },
  {
    id: 'education',
    name: 'Education',
    slug: 'education',
    icon: AcademicCapIcon,
    description: 'Campus-wide security solutions for schools, colleges, and universities. Create safer learning environments.',
    features: [
      'Emergency notification systems',
      'Classroom lockdown',
      'Visitor screening',
      'Bus GPS tracking',
      'Unified communications'
    ],
    stats: {
      campuses: '50+',
      students: '100K+',
      response: '< 30 sec'
    }
  },
  {
    id: 'financial',
    name: 'Financial Services',
    slug: 'financial',
    icon: BanknotesIcon,
    description: 'High-security solutions for banks, credit unions, and financial institutions. Meet regulatory requirements and protect assets.',
    features: [
      'Vault and safe monitoring',
      'ATM surveillance',
      'Silent alarm systems',
      'Compliance reporting',
      'Biometric access control'
    ],
    stats: {
      institutions: '75+',
      branches: '500+',
      compliance: '100%'
    }
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    slug: 'hospitality',
    icon: BuildingStorefrontIcon,
    description: 'Security systems for hotels, restaurants, and entertainment venues. Protect guests while maintaining welcoming atmosphere.',
    features: [
      'Guest room access control',
      'Point-of-sale monitoring',
      'Kitchen area surveillance',
      'Parking lot security',
      'VIP area protection'
    ],
    stats: {
      properties: '100+',
      rooms: '15K+',
      incidents: '↓ 60%'
    }
  },
  {
    id: 'cannabis',
    name: 'Cannabis',
    slug: 'cannabis',
    icon: BeakerIcon,
    description: 'CRC-compliant security for New Jersey cannabis businesses. Protect high-value inventory while meeting all state regulations.',
    features: [
      'CRC compliance packages',
      '24/7 HD surveillance',
      '90-day cloud storage',
      'METRC integration',
      'Panic alarm systems'
    ],
    stats: {
      facilities: '25+',
      compliance: '100%',
      uptime: '99.9%'
    }
  }
];

// SEO Metadata
export const metadata: Metadata = {
  title: 'Industries We Serve | Security Solutions by Industry | Security Dynamics',
  description: 'Specialized security systems for healthcare, retail, warehouse, multi-family, commercial office, education, and more. Industry-specific solutions for NJ & PA businesses.',
  keywords: 'industry security solutions, healthcare security, retail loss prevention, warehouse security, commercial security systems, multi-family security',
  openGraph: {
    title: 'Industries We Serve | Specialized Security Solutions',
    description: 'Expert security systems tailored to your industry\'s unique needs. Healthcare, retail, warehouse, education, and more.',
    url: `${SITE_CONFIG.url}/industries`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Dynamics Industries',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries We Serve | Security Dynamics',
    description: 'Specialized security solutions for every industry.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/industries`,
  },
};

// Schema markup
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
      name: 'Industries',
      item: `${SITE_CONFIG.url}/industries`
    }
  ]
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  name: 'Security Dynamics Inc.',
  description: 'Industry-specific security solutions provider',
  url: `${SITE_CONFIG.url}/industries`,
  areaServed: [
    {
      '@type': 'State',
      name: 'New Jersey'
    },
    {
      '@type': 'State',
      name: 'Pennsylvania'
    }
  ],
  knowsAbout: industries.map(industry => industry.name + ' Security')
};

export default function IndustriesPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Hero Section */}
      <Hero
        title="Industries We Serve"
        subtitle="Specialized Security Solutions"
        description="Expert security systems tailored to meet the unique challenges and compliance requirements of your industry"
        primaryCta={{
          text: "Get Industry-Specific Consultation",
          href: "/contact"
        }}
      />

      {/* Introduction - Dark Background */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-red-900/20 border border-red-800/30 rounded-full px-6 py-2 mb-6">
              <ShieldCheckIcon className="w-5 h-5 mr-2 text-red-400" />
              <span className="text-red-400 text-xs font-semibold tracking-widest uppercase">
                35+ Years of Industry Expertise
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Security Solutions Designed for Your Industry
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Every industry faces unique security challenges. That's why we've developed specialized solutions 
              that address the specific needs, regulations, and operational requirements of each sector we serve.
            </p>
          </div>

          {/* Industry Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-white mb-2">8</div>
              <div className="text-gray-300">Industry Verticals</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-white mb-2">5,000+</div>
              <div className="text-gray-300">Businesses Protected</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300">Compliance Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Industry Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Select Your Industry
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our specialized security solutions designed to meet the unique needs of your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry) => {
              const hasDetailPage = ['healthcare', 'retail', 'warehouse', 'multi-family', 'commercial-office', 'education', 'financial', 'hospitality', 'cannabis'].includes(industry.slug);
              const Component = hasDetailPage ? Link : 'div';
              
              return (
                <Component
                  key={industry.id}
                  href={hasDetailPage ? `/industries/${industry.slug}` : '#'}
                  className={`group bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 ${
                    hasDetailPage ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <industry.icon className="w-10 h-10 text-red-600 group-hover:text-red-700 transition-colors" />
                    {hasDetailPage && (
                      <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {industry.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {industry.description}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-xs">
                      {Object.entries(industry.stats).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-bold text-gray-900">{value}</div>
                          <div className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Component>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters - Dark Background */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Why Industry Expertise Matters
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Generic security solutions often fall short. Our industry-specific approach ensures you get exactly what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Regulatory Compliance',
                description: 'We understand the specific regulations and compliance requirements for each industry, from HIPAA to PCI-DSS.',
                icon: DocumentCheckIcon
              },
              {
                title: 'Operational Understanding',
                description: 'Our team knows how your industry operates, allowing us to design systems that enhance rather than hinder operations.',
                icon: CubeIcon
              },
              {
                title: 'Risk Assessment',
                description: 'Industry-specific risk assessment helps identify and address the unique threats your business faces.',
                icon: ShieldCheckIcon
              },
              {
                title: 'Best Practices',
                description: 'Leverage proven security strategies developed through decades of experience in your industry.',
                icon: CheckCircleIcon
              },
              {
                title: 'Integration Expertise',
                description: 'Seamless integration with industry-specific systems and software you already use.',
                icon: BuildingOfficeIcon
              },
              {
                title: 'Specialized Training',
                description: 'Our technicians receive ongoing training on the latest industry trends and technologies.',
                icon: AcademicCapIcon
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <benefit.icon className="w-10 h-10 text-red-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - White Background */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <BuildingOfficeIcon className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We serve many more industries than listed here. Contact us to discuss how we can create 
            a customized security solution for your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Get Custom Industry Solution
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}