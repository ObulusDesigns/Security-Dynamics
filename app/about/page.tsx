import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Hero } from '@/components/sections';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import { 
  ShieldCheckIcon, 
  TrophyIcon, 
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { darkSectionClasses, darkSectionPatternStyle, sectionPadding } from '@/lib/utils/sectionStyles';

// SEO Metadata
export const metadata: Metadata = {
  title: 'About Security Dynamics Inc. | 35+ Years Protecting NJ & PA Businesses',
  description: 'Family-owned security company serving Mercer County NJ & Bucks County PA since 1987. Licensed, insured, 24/7 monitoring. Learn about our mission & team.',
  keywords: 'about Security Dynamics, security company Trenton NJ, security company Bucks County PA, family owned security company, licensed security installer',
  openGraph: {
    title: 'About Security Dynamics Inc. | Your Trusted Security Partner Since 1987',
    description: 'Family-owned, locally operated security company protecting businesses across NJ & PA for over 35 years.',
    url: `${SITE_CONFIG.url}/about`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Dynamics Inc. - About Us',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Security Dynamics Inc. | 35+ Years of Excellence',
    description: 'Family-owned security company serving NJ & PA businesses with cutting-edge technology and personalized service.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
};

// Schema markup
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_CONFIG.url}/#organization`,
  name: 'Security Dynamics Inc.',
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logo-1.webp`,
  image: `${SITE_CONFIG.url}/office-exterior.jpg`,
  description: 'Family-owned security company providing comprehensive security solutions to businesses across New Jersey and Pennsylvania since 1987.',
  foundingDate: '1987',
  founders: [
    {
      '@type': 'Person',
      name: 'John Smith',
      jobTitle: 'Founder'
    }
  ],
  telephone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_INFO.address.street,
    addressLocality: COMPANY_INFO.address.city,
    addressRegion: COMPANY_INFO.address.state,
    postalCode: COMPANY_INFO.address.zip,
    addressCountry: 'US'
  },
  areaServed: [
    {
      '@type': 'AdministrativeArea',
      name: 'Mercer County',
      containedIn: {
        '@type': 'State',
        name: 'New Jersey'
      }
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Bucks County',
      containedIn: {
        '@type': 'State',
        name: 'Pennsylvania'
      }
    }
  ],
  sameAs: [
    'https://www.facebook.com/securitydynamicsinc',
    'https://www.linkedin.com/company/security-dynamics-inc'
  ],
  award: [
    'Best Security Company - Mercer County 2023',
    'Excellence in Customer Service Award 2022',
    'Top Rated Security Installer - Angie\'s List'
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
      name: 'About',
      item: `${SITE_CONFIG.url}/about`
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
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

      {/* Hero Section */}
      <Hero
        title="About Security Dynamics Inc."
        subtitle="Your Trusted Security Partner Since 1987"
        description="Family-owned and operated, we've been protecting businesses across New Jersey and Pennsylvania for over 35 years with cutting-edge technology and personalized service."
        primaryCta={{
          text: "Get Free Assessment",
          href: "/contact"
        }}
      />

      {/* Company Overview - Dark Background with Pattern */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-white mb-6">
                Protecting What Matters Most to Your Business
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Security Dynamics Inc. was founded on a simple principle: every business deserves 
                enterprise-level security with personal, local service. For over three decades, 
                we've been the trusted security partner for businesses throughout Mercer County, NJ 
                and Bucks County, PA.
              </p>
              <p className="text-gray-300 mb-12">
                As a family-owned company, we understand the importance of protecting what you've 
                built. That's why we combine state-of-the-art technology with old-fashioned values 
                like integrity, reliability, and personal accountability. When you call us, you 
                speak with someone who knows your name and your business.
              </p>
              
              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-red-600/20 to-red-600/10 backdrop-blur-sm rounded-xl p-6 border border-red-600/20 hover:border-red-600/40 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-2">
                    <ClockIcon className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors" />
                    <div className="text-4xl font-bold text-white group-hover:text-red-300 transition-colors">35+</div>
                  </div>
                  <p className="text-gray-300 text-sm">Years in Business</p>
                </div>
                
                <div className="bg-gradient-to-br from-red-600/20 to-red-600/10 backdrop-blur-sm rounded-xl p-6 border border-red-600/20 hover:border-red-600/40 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-2">
                    <BuildingOfficeIcon className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors" />
                    <div className="text-4xl font-bold text-white group-hover:text-red-300 transition-colors">5,000+</div>
                  </div>
                  <p className="text-gray-300 text-sm">Businesses Protected</p>
                </div>
                
                <div className="bg-gradient-to-br from-red-600/20 to-red-600/10 backdrop-blur-sm rounded-xl p-6 border border-red-600/20 hover:border-red-600/40 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-2">
                    <ShieldCheckIcon className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors" />
                    <div className="text-4xl font-bold text-white group-hover:text-red-300 transition-colors">24/7</div>
                  </div>
                  <p className="text-gray-300 text-sm">Monitoring & Support</p>
                </div>
                
                <div className="bg-gradient-to-br from-red-600/20 to-red-600/10 backdrop-blur-sm rounded-xl p-6 border border-red-600/20 hover:border-red-600/40 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-2">
                    <UserGroupIcon className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors" />
                    <div className="text-4xl font-bold text-white group-hover:text-red-300 transition-colors">15min</div>
                  </div>
                  <p className="text-gray-300 text-sm">Average Response Time</p>
                </div>
              </div>
            </div>
            
            {/* Mission Box */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "To provide innovative security solutions that protect our clients' assets, 
                  employees, and peace of mind, while delivering exceptional service that 
                  exceeds expectations and builds lasting partnerships."
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Local Expertise</h4>
                      <p className="text-gray-400">Deep knowledge of NJ & PA security needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Cutting-Edge Technology</h4>
                      <p className="text-gray-400">Latest security innovations and AI analytics</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Personal Service</h4>
                      <p className="text-gray-400">Family values with enterprise capabilities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              These principles guide every decision we make and every service we provide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheckIcon,
                title: 'Integrity',
                description: 'We do the right thing, even when no one is watching. Your trust is our most valuable asset.'
              },
              {
                icon: UserGroupIcon,
                title: 'Partnership',
                description: 'We\'re not just vendors—we\'re partners invested in your success and security.'
              },
              {
                icon: ClockIcon,
                title: 'Reliability',
                description: '24/7/365 support means we\'re always there when you need us most.'
              },
              {
                icon: TrophyIcon,
                title: 'Excellence',
                description: 'We continuously improve our skills and technology to deliver the best possible service.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <value.icon className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Dark Background with Pattern */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-6">
              Why Businesses Choose Security Dynamics
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              We combine the best of both worlds: local, personalized service with enterprise-level technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Local Advantages</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Headquarters in Millstone, NJ - we're your neighbors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">15-minute average response time in our service areas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Deep understanding of local regulations and requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Personal relationships with local law enforcement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Community involvement and local business support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Technology Leadership</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">AI-powered video analytics and threat detection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Cloud-based systems with mobile access anywhere</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Integration with existing business systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Cybersecurity-hardened equipment and networks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Future-proof scalable solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Certified Excellence
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our certifications and awards reflect our commitment to quality and professionalism
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { 
                title: 'NJ Licensed', 
                subtitle: 'Alarm & Security Installer',
                icon: (
                  <svg className="w-12 h-12 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                title: 'PA Licensed', 
                subtitle: 'Security System Contractor',
                icon: (
                  <svg className="w-12 h-12 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                )
              },
              { 
                title: 'BBB A+ Rating', 
                subtitle: 'Accredited Business',
                icon: (
                  <svg className="w-12 h-12 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                )
              },
              { 
                title: 'UL Listed', 
                subtitle: 'Central Station Monitoring',
                icon: (
                  <svg className="w-12 h-12 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                title: 'NFPA Certified', 
                subtitle: 'Fire Alarm Systems',
                icon: (
                  <svg className="w-12 h-12 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                )
              },
              { 
                title: 'ESA Member', 
                subtitle: 'Electronic Security Association',
                icon: (
                  <svg className="w-12 h-12 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              { 
                title: 'Insured', 
                subtitle: '$2M Liability Coverage',
                icon: (
                  <svg className="w-12 h-12 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                )
              },
              { 
                title: 'Bonded', 
                subtitle: 'Employee Surety Bond',
                icon: (
                  <svg className="w-12 h-12 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              }
            ].map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-red-300 transition-all duration-300 group hover:shadow-lg">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-600">{cert.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Awards Section */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recent Awards & Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 text-center group hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrophyIcon className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Best Security Company</h4>
                <p className="text-gray-600 text-sm">Mercer County Business Awards</p>
                <p className="text-red-600 font-semibold mt-2">2023</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center group hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrophyIcon className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Excellence in Service</h4>
                <p className="text-gray-600 text-sm">Chamber of Commerce</p>
                <p className="text-red-600 font-semibold mt-2">2022</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center group hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrophyIcon className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Top Rated Installer</h4>
                <p className="text-gray-600 text-sm">Angie's List</p>
                <p className="text-red-600 font-semibold mt-2">2021-2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Service Areas Map - Dark Background */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-6">
              Proudly Serving NJ & PA
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              From our headquarters in Millstone, NJ, we provide rapid response throughout our service areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Mercer County, NJ</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Trenton', 'Princeton', 'Hamilton Township', 'Lawrence Township', 'Ewing', 'West Windsor', 'East Windsor', 'Hopewell'].map((city, index) => (
                  <Link
                    key={index}
                    href={`/locations/${city.toLowerCase().replace(' ', '-')}-nj`}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all"
                  >
                    <BuildingOfficeIcon className="w-8 h-8 mx-auto mb-2 text-red-400" />
                    <span className="text-sm text-white">{city}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Bucks County, PA</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Doylestown', 'Bensalem', 'Levittown', 'Newtown', 'Yardley', 'New Hope', 'Bristol', 'Langhorne'].map((city, index) => (
                  <Link
                    key={index}
                    href={`/locations/${city.toLowerCase().replace(' ', '-')}-pa`}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all"
                  >
                    <BuildingOfficeIcon className="w-8 h-8 mx-auto mb-2 text-red-400" />
                    <span className="text-sm text-white">{city}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/locations"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              View All Service Areas
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Ready to Experience the Security Dynamics Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of businesses that trust us to protect what matters most
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Get Free Security Assessment
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center justify-center border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}