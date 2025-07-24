import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Hero, Testimonials, CTA } from '@/components/sections';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { 
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  BuildingOfficeIcon,
  HomeIcon,
  PhoneIcon,
  ArrowRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';
import { darkSectionClasses, darkSectionPatternStyle, sectionPadding } from '@/lib/utils/sectionStyles';
import { allLocations } from '@/lib/data/locations';
import { COMPANY_INFO } from '@/lib/utils/constants';

interface BrandPageProps {
  brand: {
    name: string;
    fullName: string;
    tagline: string;
    description: string;
    logo?: string;
    features: string[];
    benefits: {
      residential: string[];
      commercial: string[];
    };
    products: {
      name: string;
      description: string;
      ideal: string;
    }[];
    faqs: {
      question: string;
      answer: string;
    }[];
    certifications?: string[];
    warranty?: string;
  };
}

export default function BrandPageTemplate({ brand }: BrandPageProps) {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={`${brand.fullName} Security Systems`}
        subtitle={`Authorized ${brand.name} Dealer in New Jersey & Pennsylvania`}
        description={brand.tagline}
        showEmergencyBadge={false}
        primaryCta={{
          text: "Get Professional Consultation",
          href: "/contact"
        }}
      />

      {/* Brand Overview - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center bg-red-100 border border-red-200 rounded-full px-6 py-2 mb-8">
                <ShieldCheckIcon className="w-5 h-5 mr-2 text-red-600" />
                <span className="text-red-600 text-xs font-semibold tracking-widest uppercase">
                  Authorized {brand.name} Dealer
                </span>
              </div>
              
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                Why Choose {brand.name} for Your Security Needs
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {brand.description}
              </p>

              {/* Key Features */}
              <div className="space-y-4 mb-10">
                {brand.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 font-semibold mb-3">Ready to secure your property with {brand.name}?</p>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Call {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            {/* Right Column - Stats & Trust Signals */}
            <div className="space-y-6">
              {/* Trust Card */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Your Trusted {brand.name} Partner
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-600">35+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-600">5,000+</div>
                    <div className="text-sm text-gray-600">Systems Installed</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-600">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-600">100%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                </div>

                {/* Certifications */}
                {brand.certifications && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Certifications & Training:</h4>
                    <ul className="space-y-2">
                      {brand.certifications.map((cert, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Brand Logo if available */}
              {brand.logo && (
                <div className="bg-white rounded-xl p-8 shadow-lg flex items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={`${brand.fullName} Logo`}
                    width={250}
                    height={100}
                    className="max-w-full h-auto"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase - Dark Background with Pattern */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              {brand.name} Product Solutions
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive security systems tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brand.products.map((product, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                <CpuChipIcon className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <p className="text-sm text-red-400 font-semibold">Ideal for: {product.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential vs Commercial - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              {brand.name} Solutions for Every Property
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tailored security systems for homes and businesses across New Jersey & Pennsylvania
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Residential */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <HomeIcon className="w-10 h-10 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Residential Security</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Protect your family and home with {brand.name}'s advanced residential security solutions.
              </p>

              <ul className="space-y-3 mb-8">
                {brand.benefits.residential.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/contact"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
              >
                Get Residential Quote
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Commercial */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <BuildingOfficeIcon className="w-10 h-10 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Commercial Security</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Comprehensive {brand.name} solutions for businesses of all sizes and industries.
              </p>

              <ul className="space-y-3 mb-8">
                {brand.benefits.commercial.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/contact"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
              >
                Get Commercial Quote
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process - Dark Background with Pattern */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Your {brand.name} Installation Process
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Professional installation with minimal disruption to your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Security Assessment',
                description: 'On-site evaluation of your security needs',
                icon: ChartBarIcon
              },
              {
                step: '2',
                title: 'Custom Design',
                description: `Tailored ${brand.name} solution for your property`,
                icon: WrenchScrewdriverIcon
              },
              {
                step: '3',
                title: 'Expert Installation',
                description: 'Professional setup by certified technicians',
                icon: UserGroupIcon
              },
              {
                step: '4',
                title: 'Ongoing Support',
                description: '24/7 monitoring and maintenance',
                icon: ClockIcon
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-3xl font-bold text-white">{item.step}</span>
                </div>
                <item.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              {brand.name} Installation Throughout NJ & PA
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Local teams ready to install and service your {brand.name} security system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mercer County */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mercer County, NJ</h3>
              <div className="grid grid-cols-2 gap-3">
                {allLocations.filter(loc => loc.county === 'Mercer County').slice(0, 8).map((city) => (
                  <Link
                    key={city.slug}
                    href={`/locations/${city.slug}`}
                    className="text-gray-700 hover:text-red-600 transition-colors flex items-center"
                  >
                    <span className="mr-2">•</span>
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Bucks County */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bucks County, PA</h3>
              <div className="grid grid-cols-2 gap-3">
                {allLocations.filter(loc => loc.county === 'Bucks County').slice(0, 8).map((city) => (
                  <Link
                    key={city.slug}
                    href={`/locations/${city.slug}`}
                    className="text-gray-700 hover:text-red-600 transition-colors flex items-center"
                  >
                    <span className="mr-2">•</span>
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
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

      {/* Testimonials */}
      <Testimonials 
        title={`What Customers Say About Our ${brand.name} Installations`}
        subtitle="Real experiences from businesses and homeowners"
      />

      {/* FAQ Section - Dark Background with Pattern */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Frequently Asked Questions About {brand.name}
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about {brand.name} security systems
            </p>
          </div>
          
          <FAQAccordion 
            faqs={brand.faqs}
            variant="dark"
          />
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title={`Ready to Secure Your Property with ${brand.name}?`}
        subtitle="Get a Professional consultation from our certified technicians"
        showFeatures={true}
      />
    </>
  );
}