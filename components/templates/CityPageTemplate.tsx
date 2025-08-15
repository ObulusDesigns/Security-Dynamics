import React from 'react';
import Link from 'next/link';
import { Hero, Services, Testimonials, CTA } from '@/components/sections';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { 
  MapPinIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  ClockIcon,
  ShieldCheckIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { Location } from '@/lib/types/seo';
import { services as allServices } from '@/lib/data/services';
import { darkSectionClasses, darkSectionPatternStyle, sectionPadding } from '@/lib/utils/sectionStyles';

interface CityPageTemplateProps {
  city: Location;
  nearbyLocations?: Location[];
}

export function CityPageTemplate({ 
  city, 
  nearbyLocations = []
}: CityPageTemplateProps) {
  return (
    <>
      {/* Hero Section - Customized for City */}
      <Hero title={`Security Systems in ${city.name}`}
        subtitle={city.state}
        description={`Professional security systems for ${city.name} businesses. Expert installation and 24/7 monitoring.`}
        
        
        location={`${city.name}, ${city.state}`}
      primaryCta={{
          text: "Get Security Assessment",
          href: "https://ocyrus.app.n8n.cloud/form/a96519af-6dc7-438a-a754-3d3eb830bdf7"
        }}
      />

      {/* Local Expertise Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center bg-red-100 border border-red-200 rounded-full px-6 py-2 mb-6">
              <MapPinIcon className="w-5 h-5 mr-2 text-red-600" />
              <span className="text-red-600 text-xs font-semibold tracking-widest uppercase">
                Local {city.name} Team
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Your Trusted Security Partner in {city.name}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {`With 35+ years of experience, our local ${city.name} team delivers customized security solutions that protect what matters most to your business.`}
            </p>
          </div>

          {/* Interactive Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">15</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Minute Response</div>
              <p className="text-gray-600">Average emergency response time in {city.name}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Local Businesses</div>
              <p className="text-gray-600">Protected throughout {city.name}</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Always Available</div>
              <p className="text-gray-600">Round-the-clock monitoring and support</p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Interactive Coverage Map */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {city.name} Coverage Areas
              </h3>
              
              {/* Interactive Area List */}
              <div className="space-y-4 mb-8">
                {['Downtown Business District', 'Industrial Park Zone', 'Medical & Healthcare Centers', 'Retail Shopping Districts', 'Technology Business Parks', 'Educational Institutions'].map((area, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-600 transition-colors">
                          <BuildingOfficeIcon className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{area}</h4>
                          <p className="text-sm text-gray-600">Full coverage available</p>
                        </div>
                      </div>
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Radius */}
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <p className="text-gray-700">
                  <span className="font-semibold">Service Radius:</span> Entire {city.name} area + 20 miles
                </p>
              </div>
            </div>

            {/* Right Column - Why Choose Local */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Why Local Expertise Matters
              </h3>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <ClockIcon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Rapid Response Times</h4>
                      <p className="text-gray-600">Our {city.name} technicians are stationed locally, ensuring we can reach your business within 15 minutes for emergencies.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPinIcon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Community Knowledge</h4>
                      <p className="text-gray-600">We understand {city.name}'s unique layout, traffic patterns, and business districts to optimize your security coverage.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <ShieldCheckIcon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Local Compliance</h4>
                      <p className="text-gray-600">Stay compliant with {city.name} ordinances and {city.state} state regulations with our expert guidance.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 bg-gray-900 rounded-xl p-6 text-center">
                <p className="text-white text-lg mb-4">Ready to secure your {city.name} business?</p>
                <a 
                  href="tel:(609) 394-8800"
                  className="inline-flex items-center bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-bold transition-all duration-200"
                >
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Call (609) 394-8800 Now
                </a>
              </div>
            </div>
          </div>

          {/* Nearby Locations */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Also Serving These Nearby Areas</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyLocations.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/locations/${nearby.slug}`}
                  className="bg-white px-6 py-3 rounded-full text-gray-700 hover:bg-red-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {nearby.name} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services 
        title={`Security Solutions for ${city.name} Businesses`}
        subtitle="Professional installation and 24/7 monitoring tailored to local needs"
        showAllServices={true}
      />

      {/* Local Business Types Section - Dark Background with Pattern */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Protecting Every Type of {city.name} Business
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Customized security solutions for our local business community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Retail Stores', 'Office Buildings', 'Warehouses', 'Medical Facilities', 'Educational Institutions', 'Government Buildings'].map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <BuildingOfficeIcon className="w-12 h-12 mb-4 text-red-400" />
                <h3 className="text-xl font-bold text-white mb-3">{type}</h3>
                <p className="text-gray-300">
                  Specialized security solutions tailored for {type.toLowerCase()} in {city.name}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service + Location CTAs - White */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Popular Security Services in {city.name}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Click to learn more about specific solutions for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {allServices.slice(0, 4).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/${city.state?.toLowerCase().replace(' ', '-')}/${city.county?.toLowerCase().replace(' ', '-')}/${city.slug}`}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {service.name} in {city.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Local installation & support
                    </p>
                  </div>
                  <ShieldCheckIcon className="w-8 h-8 text-red-600 group-hover:text-red-700 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials 
        title={`What ${city.name} Businesses Say`}
        subtitle="Real results from local companies"
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about security in {city.name}
            </p>
          </div>
          
          <FAQAccordion 
            faqs={[
              {
                question: `What security services does Security Dynamics offer in ${city.name}?`,
                answer: `We provide comprehensive security solutions including access control systems, video surveillance, intrusion detection, 24/7 monitoring, and emergency response services tailored specifically for ${city.name} businesses.`
              },
              {
                question: `How quickly can Security Dynamics respond to emergencies in ${city.name}?`,
                answer: `Our average emergency response time in ${city.name} is 15 minutes or less. We have local technicians familiar with the area who can quickly reach any business location.`
              },
              {
                question: `Do you offer professional security assessments for ${city.name} businesses?`,
                answer: `Yes, we provide complimentary security assessments for all ${city.name} businesses. Our experts will evaluate your current security posture and recommend solutions tailored to your specific needs and budget.`
              },
              {
                question: `What makes Security Dynamics different from other security companies in ${city.name}?`,
                answer: `With over 35 years of experience, local expertise, 24/7 support, and cutting-edge technology, we provide personalized security solutions that larger companies can't match. Our deep roots in the community mean we understand ${city.name}'s unique security challenges.`
              }
            ]}
            variant="dark"
          />
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title={`Ready to Secure Your ${city.name} Business?`}
        subtitle="Get a security assessment from our local team"
        showFeatures={true}
      />
    </>
  );
}