import React from 'react';
import Link from 'next/link';
import { Hero, Services, Testimonials, CTA } from '@/components/sections';
import { 
  MapPinIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { Location, CountyHub } from '@/lib/types/seo';
import { darkSectionClasses, darkSectionPatternStyle, sectionPadding } from '@/lib/utils/sectionStyles';

interface CountyPageTemplateProps {
  county: CountyHub;
  cities: Location[];
}

export default function CountyPageTemplate({ county, cities }: CountyPageTemplateProps) {
  return (
    <>
      {/* Hero Section - Customized for County */}
      <Hero title={`Commercial Security Solutions`}
        subtitle={`in ${county.name}`}
        description={county.description}
        
        
        location={county.name}
      primaryCta={{
          text: "Get Security Assessment",
          href: "https://ocyrus.app.n8n.cloud/form/a96519af-6dc7-438a-a754-3d3eb830bdf7"
        }}
      />

      {/* Local Coverage Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center bg-red-100 border border-red-200 rounded-full px-6 py-2 mb-8">
              <MapPinIcon className="w-5 h-5 mr-2 text-red-600" />
              <span className="text-red-600 text-xs font-semibold tracking-widest uppercase">
                Service Areas in {county.name}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Protecting Businesses Across {county.name}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              With local teams stationed throughout {county.name}, we provide rapid response and personalized service to businesses in every city and township.
            </p>
          </div>

          {/* Cities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {city.name}
                  </h3>
                  <BuildingOfficeIcon className="w-6 h-6 text-red-400 group-hover:text-red-600 transition-colors" />
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Professional security systems for businesses in {city.name}
                </p>
                <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                  <span>View Security Services</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* County Stats */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {county.name} Security Coverage
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {cities.length}
                </div>
                <div className="text-sm text-gray-600">Cities Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">15 min</div>
                <div className="text-sm text-gray-600">Avg Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Local Businesses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services 
        title={`Security Services Available in ${county.name}`}
        subtitle="Comprehensive protection tailored for local businesses"
        showAllServices={true}
      />

      {/* Why Choose Us Section - Dark Background with Pattern */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Why Businesses in {county.name} Choose Security Dynamics
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Local expertise combined with enterprise-grade security technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Presence',
                description: `Teams stationed throughout ${county.name} for rapid response`,
                icon: MapPinIcon
              },
              {
                title: 'County Expertise',
                description: 'Deep understanding of local security challenges and regulations',
                icon: UserGroupIcon
              },
              {
                title: 'Proven Results',
                description: `Protecting ${county.name} businesses for over 20 years`,
                icon: CheckCircleIcon
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <item.icon className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials 
        title={`Trusted by ${county.name} Businesses`}
        subtitle="Real results from local companies"
      />

      {/* CTA Section */}
      <CTA 
        title={`Ready to Secure Your ${county.name} Business?`}
        subtitle="Get a security assessment from our local team"
        showFeatures={true}
      />
    </>
  );
}