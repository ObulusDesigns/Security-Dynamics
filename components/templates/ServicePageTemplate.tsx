import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { Hero, Testimonials, CTA } from '@/components/sections';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { 
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  LightBulbIcon,
  PhoneIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { Service } from '@/lib/types/seo';
import { allLocations } from '@/lib/data/locations';
import { darkSectionClasses, darkSectionPatternStyle, sectionPadding } from '@/lib/utils/sectionStyles';

interface ServicePageTemplateProps {
  service: Service;
  relatedServices?: Service[];
}

export default function ServicePageTemplate({ service, relatedServices = [] }: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero Section - Customized for Service */}
      <Hero title={service.name}
        subtitle="Advanced Security Solutions"
        description={service.description}
        
        
      primaryCta={{
          text: "Get Professional Consultation",
          href: "/contact"
        }}
      />

      {/* Service Details Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center bg-red-100 border border-red-200 rounded-full px-6 py-2 mb-8">
                <ShieldCheckIcon className="w-5 h-5 mr-2 text-red-600" />
                <span className="text-red-600 text-xs font-semibold tracking-widest uppercase">
                  Professional {service.name}
                </span>
              </div>
              
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                {service.name} for NJ & PA Businesses
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Benefits List */}
              <div className="space-y-4 mb-10">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 font-semibold mb-3">Ready to get started?</p>
                <a 
                  href="tel:(609) 394-8800"
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Call (609) 394-8800
                </a>
              </div>
            </div>

            {/* Right Column - Key Features */}
            <div className="space-y-6">
              {/* Key Features Card */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                
                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex items-start">
                    <div className="bg-red-100 rounded-lg p-3 mr-4">
                      <ShieldCheckIcon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Licensed & Insured</h4>
                      <p className="text-gray-600 text-sm">Fully certified in both NJ and PA with comprehensive insurance coverage</p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start">
                    <div className="bg-red-100 rounded-lg p-3 mr-4">
                      <ClockIcon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Quick Installation</h4>
                      <p className="text-gray-600 text-sm">Professional installation completed within 24-48 hours</p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-start">
                    <div className="bg-red-100 rounded-lg p-3 mr-4">
                      <CurrencyDollarIcon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Competitive Pricing</h4>
                      <p className="text-gray-600 text-sm">Transparent pricing with flexible payment options available</p>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex items-start">
                    <div className="bg-red-100 rounded-lg p-3 mr-4">
                      <UserGroupIcon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Expert Support</h4>
                      <p className="text-gray-600 text-sm">24/7 technical support and emergency response available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring Available</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">35+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">5,000+</div>
                  <div className="text-sm text-gray-600">Clients Protected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Enterprise-grade security technology tailored for your business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Core Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Advanced motion detection algorithms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Real-time alert notifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Cloud-based storage options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Mobile app integration</span>
                </li>
              </ul>
            </div>

            {/* System Requirements */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">System Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-700">High-speed internet connection</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-700">Power backup recommended</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-700">Network infrastructure ready</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-700">Compatible with existing systems</span>
                </li>
              </ul>
            </div>

            {/* Integration Options */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integration Options</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-700">Building management systems</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-700">Fire alarm integration</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-700">HR systems connectivity</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-700">Third-party API support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Technical Details if provided */}
          {service.technicalDetails && service.technicalDetails.length > 0 && (
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Additional Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.technicalDetails.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <p className="text-gray-700">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process Section - White */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Our Installation Process
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Simple, efficient, and minimally disruptive to your business
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
                description: 'Tailored solution for your specific requirements',
                icon: LightBulbIcon
              },
              {
                step: '3',
                title: 'Professional Install',
                description: 'Expert installation with minimal disruption',
                icon: ShieldCheckIcon
              },
              {
                step: '4',
                title: '24/7 Monitoring',
                description: 'Continuous protection and support',
                icon: ClockIcon
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="w-16 h-16 text-red-600 mx-auto mb-6" />
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

      {/* Service Areas Section - Dark Background with Pattern */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              {service.name} Available Throughout NJ & PA
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Local teams ready to serve your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mercer County */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Mercer County, NJ</h3>
              <div className="grid grid-cols-2 gap-4">
                {allLocations.filter(loc => loc.county === 'Mercer County').slice(0, 6).map((city) => (
                  <Link
                    key={city.slug}
                    href={`/services/${service.slug}/${city.state?.toLowerCase().replace(' ', '-')}/${city.county?.toLowerCase().replace(' ', '-')}/${city.slug}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {city.name} →
                  </Link>
                ))}
              </div>
            </div>

            {/* Bucks County */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Bucks County, PA</h3>
              <div className="grid grid-cols-2 gap-4">
                {allLocations.filter(loc => loc.county === 'Bucks County').slice(0, 6).map((city) => (
                  <Link
                    key={city.slug}
                    href={`/services/${service.slug}/${city.state?.toLowerCase().replace(' ', '-')}/${city.county?.toLowerCase().replace(' ', '-')}/${city.slug}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {city.name} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section - White */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Complete Security Solutions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Combine services for comprehensive protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.slice(0, 3).map((relatedService) => (
              <Link
                key={relatedService.slug}
                href={`/services/${relatedService.slug}`}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <ShieldCheckIcon className="w-12 h-12 mb-4 text-red-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {relatedService.name}
                </h3>
                <p className="text-gray-600 mb-4">{relatedService.description}</p>
                <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials 
        title={`${service.name} Success Stories`}
        subtitle="Real results from businesses like yours"
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
              Common questions about {service.name.toLowerCase()}
            </p>
          </div>
          
          <FAQAccordion 
            faqs={service.faqs || [
              {
                question: `How quickly can ${service.name.toLowerCase()} be installed?`,
                answer: 'Installation time varies based on the scope of your project, but most installations are completed within 1-3 days. We work around your business hours to minimize disruption.'
              },
              {
                question: `Can ${service.name.toLowerCase()} integrate with my existing security systems?`,
                answer: 'Yes, our systems are designed to integrate seamlessly with most existing security infrastructure. Our technicians will assess your current setup and ensure compatibility.'
              },
              {
                question: 'What kind of warranty and support do you offer?',
                answer: 'We provide comprehensive warranties on all equipment and installation work. Our 24/7 support team is always available for emergencies, and we offer regular maintenance plans to keep your system running optimally.'
              },
              {
                question: `How much does ${service.name.toLowerCase()} cost?`,
                answer: 'Costs vary based on your specific needs and the size of your facility. We offer on-site assessments and provide detailed, transparent quotes with no hidden fees. Contact us for a customized proposal.'
              }
            ]}
            variant="dark"
          />
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title={`Ready to Upgrade Your Security with ${service.name}?`}
        subtitle="Get a Professional consultation and custom quote"
        showFeatures={true}
      />
    </>
  );
}