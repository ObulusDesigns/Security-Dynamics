import { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import { darkSectionClasses, darkSectionPatternStyle, sectionPadding } from '@/lib/utils/sectionStyles';
import {
  BoltIcon,
  WifiIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon,
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  XCircleIcon,
  LightBulbIcon,
  PhoneIcon,
  ArrowRightIcon,
  ClockIcon,
  HomeIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Wired vs Wireless Security Systems | Complete Comparison Guide 2025',
  description: 'Compare wired and wireless security systems for businesses. Learn about installation, reliability, costs, and which option is best for your commercial property.',
  keywords: 'wired vs wireless security systems, business security comparison, commercial security systems, wired security pros cons, wireless security benefits',
  openGraph: {
    title: 'Wired vs Wireless Security Systems | Business Comparison Guide',
    description: 'Expert comparison of wired and wireless security solutions. Make the right choice for your business.',
    url: `${SITE_CONFIG.url}/guides/wired-vs-wireless-security-systems`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Wired vs Wireless Security Systems Guide'},
    ],
    locale: 'en_US',
    type: 'article'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/guides/wired-vs-wireless-security-systems`}};

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
      name: 'Learning Center',
      item: `${SITE_CONFIG.url}/learning-center`
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Guides',
      item: `${SITE_CONFIG.url}/guides`
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Wired vs Wireless Security Systems',
      item: `${SITE_CONFIG.url}/guides/wired-vs-wireless-security-systems`
    }
  ]
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wired vs Wireless Security Systems: Complete Business Comparison Guide',
  description: 'Comprehensive comparison of wired and wireless security systems for businesses. Learn about installation, costs, reliability, and maintenance.',
  author: {
    '@type': 'Organization',
    name: 'Security Dynamics Inc.'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Security Dynamics Inc.',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/logo-1.webp`
    }
  },
  datePublished: '2025-01-20',
  dateModified: '2025-01-20',
  image: SITE_CONFIG.ogImage,
  articleSection: 'Security Guides',
  wordCount: 2500
};

export default function WiredVsWirelessGuidePage() {
  return (
    <>
      {/* Schema Markup */}
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)}}
      />
      <Script
        id="schema-article"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)}}
      />

      {/* Hero Section */}
      <Hero
        title="Wired vs Wireless Security Systems"
        subtitle="Complete Comparison Guide for Businesses"
        description="Make an informed decision between wired and wireless security solutions with our comprehensive analysis of costs, benefits, and best use cases."
        showEmergencyBadge={false}
      />

      {/* Article Info Bar */}
      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                10 min read
              </span>
              <span>Updated January 2025</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-red-600 font-semibold">Technology Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction - White Background */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed">
              Choosing between wired and wireless security systems is one of the most important decisions 
              you'll make when protecting your business. Each technology has distinct advantages and 
              limitations that can significantly impact your security effectiveness, budget, and future flexibility.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8 not-prose">
              <div className="flex items-start">
                <LightBulbIcon className="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Quick Recommendation</p>
                  <p className="text-blue-800">
                    Most modern businesses benefit from a hybrid approach, using wired systems for critical 
                    infrastructure and wireless for flexibility. However, your specific needs, building type, 
                    and budget will determine the best choice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Comparison - Dark Background */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Technology Overview
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Understanding the fundamental differences between wired and wireless security systems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Wired Systems */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <BoltIcon className="w-10 h-10 text-yellow-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Wired Security Systems</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Wired systems use physical cables to connect sensors, cameras, and control panels. 
                Data and power travel through dedicated wiring throughout your facility.
              </p>
              
              <h4 className="text-lg font-semibold text-white mb-3">Key Characteristics:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Direct physical connections ensure stable communication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Power supplied through wiring (no battery concerns)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Immune to wireless interference and hacking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Supports unlimited devices without bandwidth concerns</span>
                </li>
              </ul>
            </div>

            {/* Wireless Systems */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <WifiIcon className="w-10 h-10 text-blue-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Wireless Security Systems</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Wireless systems use radio frequencies to communicate between devices. Sensors and 
                cameras transmit data to the control panel without physical connections.
              </p>
              
              <h4 className="text-lg font-semibold text-white mb-3">Key Characteristics:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Quick installation without drilling or cable runs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Easy to relocate and reconfigure as needed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Clean aesthetics with no visible wiring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Ideal for historic buildings or rental properties</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Head-to-Head Comparison
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Compare key factors to determine which system type best suits your business needs
            </p>
          </div>

          <div className="space-y-8">
            {/* Installation */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <WrenchScrewdriverIcon className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Installation & Setup</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-3">Wired Systems</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Requires professional installation</span>
                    </li>
                    <li className="flex items-start">
                      <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Installation can take 2-5 days</span>
                    </li>
                    <li className="flex items-start">
                      <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">May require permits and inspections</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">One-time installation for permanent setup</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-3">Wireless Systems</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Can be DIY or professional install</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Installation typically under 1 day</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Minimal structural modifications</span>
                    </li>
                    <li className="flex items-start">
                      <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">May require range testing and optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Reliability */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Reliability & Performance</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-3">Wired Systems</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">99.9% uptime reliability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">No signal interference issues</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Consistent high-quality video streams</span>
                    </li>
                    <li className="flex items-start">
                      <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Vulnerable to physical wire damage</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-3">Wireless Systems</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Modern systems very reliable (95-98%)</span>
                    </li>
                    <li className="flex items-start">
                      <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Potential for signal interference</span>
                    </li>
                    <li className="flex items-start">
                      <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Range limitations in large buildings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">No physical vulnerabilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cost Analysis */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <CurrencyDollarIcon className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Cost Analysis</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-3">Wired Systems</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Higher upfront installation costs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Lower long-term maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">No battery replacement costs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Better ROI over 5+ years</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-3">Wireless Systems</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Lower initial investment</span>
                    </li>
                    <li className="flex items-start">
                      <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Ongoing battery replacement costs</span>
                    </li>
                    <li className="flex items-start">
                      <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">May require signal boosters</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Cost-effective for smaller systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Use Cases - Dark Background */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Best Use Cases
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              When each system type makes the most sense for your business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Wired Best For */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <BoltIcon className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Wired Systems Are Best For:</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <BuildingOfficeIcon className="w-6 h-6 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">New Construction</span>
                    <p className="text-gray-300 text-sm mt-1">
                      Installing during construction minimizes costs and allows optimal placement
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <BuildingOfficeIcon className="w-6 h-6 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Large Commercial Properties</span>
                    <p className="text-gray-300 text-sm mt-1">
                      Warehouses, factories, and multi-story buildings with high device counts
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <BuildingOfficeIcon className="w-6 h-6 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">High-Security Applications</span>
                    <p className="text-gray-300 text-sm mt-1">
                      Banks, data centers, government facilities requiring maximum reliability
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <BuildingOfficeIcon className="w-6 h-6 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Owned Properties</span>
                    <p className="text-gray-300 text-sm mt-1">
                      Long-term installations where ROI can be maximized
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Wireless Best For */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <WifiIcon className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Wireless Systems Are Best For:</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <HomeIcon className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Historic Buildings</span>
                    <p className="text-gray-300 text-sm mt-1">
                      Preserve architecture without drilling or visible wiring
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <HomeIcon className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Rental Properties</span>
                    <p className="text-gray-300 text-sm mt-1">
                      Easy to install and remove without permanent modifications
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <HomeIcon className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Small to Medium Businesses</span>
                    <p className="text-gray-300 text-sm mt-1">
                      Cost-effective for offices, retail stores, and restaurants
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <HomeIcon className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Temporary Installations</span>
                    <p className="text-gray-300 text-sm mt-1">
                      Construction sites, events, or seasonal businesses
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid Solutions - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ArrowsRightLeftIcon className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              The Hybrid Approach
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Many businesses find the optimal solution combines both technologies
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              A hybrid security system leverages the strengths of both wired and wireless technologies. 
              This approach is becoming increasingly popular as it provides maximum flexibility while 
              maintaining reliability where it matters most.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Hybrid Configurations:</h3>
            
            <div className="space-y-6 my-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  Wired Core + Wireless Expansion
                </h4>
                <p className="text-gray-700">
                  Use wired connections for critical components (main cameras, control panel, high-traffic areas) 
                  while adding wireless sensors for perimeter protection and less critical zones.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  Wired Video + Wireless Sensors
                </h4>
                <p className="text-gray-700">
                  Install wired cameras for reliable, high-quality video surveillance while using wireless 
                  door/window sensors and motion detectors for intrusion detection.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  Building-Specific Solutions
                </h4>
                <p className="text-gray-700">
                  Use wired systems in permanent structures and wireless in temporary buildings, 
                  outdoor areas, or spaces that may be reconfigured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework - Dark Background */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <LightBulbIcon className="w-16 h-16 text-red-400 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">
            Making Your Decision
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-left">
            <h3 className="text-xl font-bold text-white mb-6">Consider These Key Questions:</h3>
            
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-red-400 mr-3">1.</span>
                <span><strong className="text-white">Building Status:</strong> Are you in a new construction, existing building, or rental property?</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">2.</span>
                <span><strong className="text-white">Timeline:</strong> How long do you plan to occupy the space?</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">3.</span>
                <span><strong className="text-white">Budget:</strong> What's your upfront budget vs. long-term investment capacity?</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">4.</span>
                <span><strong className="text-white">Size:</strong> How many devices do you need and across what area?</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">5.</span>
                <span><strong className="text-white">Security Level:</strong> What's your risk tolerance and security requirements?</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">6.</span>
                <span><strong className="text-white">Future Plans:</strong> Will you need to expand or modify the system?</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section - White Background */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <ShieldCheckIcon className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Ready to Choose Your Security System?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our security experts can assess your specific needs and recommend the perfect solution—whether 
            wired, wireless, or hybrid. Get a Professional consultation and custom system design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://ocyrus.app.n8n.cloud/form/a96519af-6dc7-438a-a754-3d3eb830bdf7" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Get Professional Consultation
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call {COMPANY_INFO.phone}
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Serving businesses throughout New Jersey and Eastern Pennsylvania with both wired and wireless solutions.
          </p>
        </div>
      </section>
    </>
  );
}