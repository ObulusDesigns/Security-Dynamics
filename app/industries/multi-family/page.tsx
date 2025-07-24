import { Metadata } from 'next';
import Link from 'next/link';
import { Hero, CTA } from '@/components/sections';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
// Dark section imports removed as they are no longer used
import {
  HomeModernIcon,
  ShieldCheckIcon,
  VideoCameraIcon,
  KeyIcon,
  UserGroupIcon,
  BellAlertIcon,
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Multi-Family Security Systems | Apartment Complex Protection | Security Dynamics',
  description: 'Advanced security systems for apartment complexes & multi-family properties in NJ & PA. Access control, video surveillance, resident safety, property protection.',
  keywords: 'apartment security systems, multi-family security, apartment access control, resident safety systems, property management security, apartment complex cameras, gated community security, tenant protection',
  openGraph: {
    title: 'Multi-Family Security Systems | Apartment & Condo Protection',
    description: 'Comprehensive security for multi-family properties. Protect residents, reduce liability, enhance property value.',
    url: `${SITE_CONFIG.url}/industries/multi-family`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Multi-Family Security Systems'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/industries/multi-family`}};

// Schema markup
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_CONFIG.url}/industries/multi-family#service`,
  name: 'Multi-Family Security Systems',
  description: 'Comprehensive security solutions for apartment complexes, condominiums, and multi-family residential properties.',
  provider: {
    '@type': 'SecuritySystemInstallationService',
    name: 'Security Dynamics Inc.',
    telephone: COMPANY_INFO.phone},
  areaServed: ['New Jersey', 'Pennsylvania'],
  serviceType: 'Multi-Family Security'};

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
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Multi-Family',
      item: `${SITE_CONFIG.url}/industries/multi-family`
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What security features are essential for apartment complexes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essential security features include controlled access entry systems, video surveillance of common areas, visitor management, package room security, parking area monitoring, emergency call boxes, and integration with property management systems. These work together to protect residents and property.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does access control work for multi-family properties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Modern access control uses key fobs, mobile credentials, or biometrics to grant entry. Systems can be programmed to allow access to specific areas (gym, pool, parking) based on resident status. Visitor access is managed through intercom systems with video verification and temporary codes.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can security systems help reduce property insurance costs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, comprehensive security systems typically reduce property insurance premiums by 5-20%. They also significantly reduce liability claims, vandalism costs, and theft losses. Many property owners see full ROI within 2-3 years through these savings alone.'
      }
    },
    {
      '@type': 'Question',
      name: 'What about resident privacy in common areas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We balance security with privacy by focusing cameras on entrances, parking, and common areas only - never on private spaces like windows or patios. Clear signage informs residents of surveillance areas, and access to footage is strictly controlled with audit trails.'
      }
    }
  ]
};

export default function MultiFamilySecurityPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script id="schema-1" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)}}
      />
      <Script id="schema-2" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)}}
      />
      <Script id="schema-3" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)}}
      />

      {/* Hero Section */}
      <Hero title="Multi-Family Security Systems"
        subtitle="Protect Residents & Enhance Property Value"
        description="Comprehensive security solutions designed for apartment complexes, condominiums, and multi-family properties. Create safer communities while reducing liability and operational costs."
        
        
        primaryCta={{
          text: "Get Property Security Assessment",
          href: "/contact"
        }}
      />

      {/* Multi-Family Security Challenges Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Multi-Family Security Challenges We Solve
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Property managers face unique security challenges that impact resident satisfaction and NOI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: UserGroupIcon,
                title: 'Unauthorized Access',
                description: 'Prevent non-residents from entering buildings, amenity areas, and parking facilities with smart access control.'
              },
              {
                icon: HomeModernIcon,
                title: 'Package Theft',
                description: 'Secure package rooms and delivery areas with cameras, access control, and notification systems.'
              },
              {
                icon: ShieldCheckIcon,
                title: 'Vandalism & Crime',
                description: 'Deter property damage and criminal activity with visible surveillance and rapid incident response.'
              },
              {
                icon: KeyIcon,
                title: 'Key Management',
                description: 'Eliminate lost key issues and re-keying costs with electronic access control and audit trails.'
              },
              {
                icon: BellAlertIcon,
                title: 'Emergency Response',
                description: 'Ensure quick response to fires, medical emergencies, and security incidents with integrated systems.'
              },
              {
                icon: ClockIcon,
                title: 'After-Hours Security',
                description: 'Maintain property security 24/7 without expensive on-site guards through remote monitoring.'
              }
            ].map((challenge, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <challenge.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Family Solutions Section - Light Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
                Comprehensive Property Security Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Integrated systems designed to protect residents, reduce liability, and streamline property management.
              </p>
              
              <div className="space-y-6">
                {[
                  'Smart Access Control with Mobile Credentials',
                  'HD Video Surveillance with Cloud Storage',
                  'Video Intercom & Visitor Management',
                  'License Plate Recognition for Parking',
                  'Package Room Security & Notifications',
                  'Pool & Amenity Area Monitoring',
                  'Emergency Call Stations',
                  'Integration with Property Management Software'
                ].map((solution, index) => (
                  <div key={index} className="flex items-center">
                    <ShieldCheckIcon className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Property Security Benefits</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Crime Reduction</span>
                    <span className="text-red-400 font-bold">60-75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Insurance Savings</span>
                    <span className="text-red-400 font-bold">10-20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Resident Retention</span>
                    <span className="text-red-400 font-bold">15-25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Property Value</span>
                    <span className="text-red-400 font-bold">5-10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '7%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">Based on 200+ multi-family installations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Solutions for Every Property Type
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Customized security approaches for different multi-family properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: 'Garden Apartments',
                units: '50-200 units',
                features: ['Perimeter security', 'Parking lot cameras', 'Building entry control', 'Package lockers']
              },
              {
                type: 'High-Rise Buildings',
                units: '200+ units',
                features: ['Lobby security desk', 'Elevator access control', 'Stairwell monitoring', 'Garage security']
              },
              {
                type: 'Luxury Communities',
                units: 'Premium properties',
                features: ['Concierge integration', 'Amenity reservations', 'Valet parking systems', 'White glove service']
              },
              {
                type: 'Student Housing',
                units: 'University-affiliated',
                features: ['24/7 monitoring', 'Guest registration', 'Party prevention', 'Study room access']
              },
              {
                type: 'Senior Living',
                units: '55+ communities',
                features: ['Medical alerts', 'Wander prevention', 'Wellness checks', 'Family notifications']
              },
              {
                type: 'Mixed-Use Properties',
                units: 'Retail + Residential',
                features: ['Separated access', 'Retail security', 'Loading dock control', 'Dual monitoring']
              }
            ].map((property, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <HomeModernIcon className="w-10 h-10 text-red-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{property.type}</h3>
                <p className="text-sm text-gray-600 mb-4">{property.units}</p>
                <ul className="space-y-2">
                  {property.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features Section - Light Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
              Smart Technology for Modern Properties
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Cutting-edge features that residents expect and property managers need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <VideoCameraIcon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">AI-Powered Video Analytics</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Loitering and suspicious behavior detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Automatic license plate recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>People counting for occupancy limits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Slip and fall detection for liability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Package delivery notifications</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <KeyIcon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Mobile Access Control</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Smartphone app for residents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Digital guest passes with expiration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Amenity booking and access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Maintenance staff tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Move-in/move-out automation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Multi-Family Security Success Story
            </h2>
            <p className="text-xl text-gray-600">
              How we transformed security at a 320-unit apartment complex
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Garden-Style Apartment Community - Mercer County</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-600">Challenges:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• High crime rate in parking areas</li>
                  <li>• Package theft epidemic</li>
                  <li>• Unauthorized pool access</li>
                  <li>• Rising insurance costs</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-600">Solutions Implemented:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 65 HD cameras with analytics</li>
                  <li>• Smart package lockers</li>
                  <li>• Pool access control system</li>
                  <li>• Virtual guard services</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-lg font-semibold mb-4 text-red-600">Results After 6 Months:</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">71%</div>
                  <p className="text-sm text-gray-600">Crime reduction</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">94%</div>
                  <p className="text-sm text-gray-600">Resident satisfaction</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">18%</div>
                  <p className="text-sm text-gray-600">Insurance savings</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">22%</div>
                  <p className="text-sm text-gray-600">Reduced turnover</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-lg">
              <p className="text-gray-700 italic">
                "The security upgrade has been transformative. We've seen a dramatic reduction in incidents, 
                happier residents, and our property value has increased significantly. The ROI was achieved 
                in less than two years."
              </p>
              <p className="text-sm text-gray-600 mt-3">- Property Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Light Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
              Multi-Family Security FAQs
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about apartment complex security
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: 'What security features are essential for apartment complexes?',
                answer: 'Essential security features include controlled access entry systems, video surveillance of common areas, visitor management, package room security, parking area monitoring, emergency call boxes, and integration with property management systems. These work together to protect residents and property.'
              },
              {
                question: 'How does access control work for multi-family properties?',
                answer: 'Modern access control uses key fobs, mobile credentials, or biometrics to grant entry. Systems can be programmed to allow access to specific areas (gym, pool, parking) based on resident status. Visitor access is managed through intercom systems with video verification and temporary codes.'
              },
              {
                question: 'Can security systems help reduce property insurance costs?',
                answer: 'Yes, comprehensive security systems typically reduce property insurance premiums by 5-20%. They also significantly reduce liability claims, vandalism costs, and theft losses. Many property owners see full ROI within 2-3 years through these savings alone.'
              },
              {
                question: 'What about resident privacy in common areas?',
                answer: 'We balance security with privacy by focusing cameras on entrances, parking, and common areas only - never on private spaces like windows or patios. Clear signage informs residents of surveillance areas, and access to footage is strictly controlled with audit trails.'
              },
              {
                question: 'How do virtual guard services work?',
                answer: 'Virtual guards monitor your property remotely using cameras and sensors. When they detect suspicious activity, they can speak through cameras, sound alarms, and contact police. This provides 24/7 security at a fraction of the cost of on-site guards.'
              },
              {
                question: 'Can the system integrate with property management software?',
                answer: 'Yes, our systems integrate with popular property management platforms like Yardi, RealPage, and AppFolio. This allows synchronized resident data, automated move-in/out processes, and unified reporting for security and property management.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Multi-Family Security Resources
            </h2>
            <p className="text-xl text-gray-600">
              Tools and guides for property managers and owners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Security ROI Calculator',
                description: 'Calculate savings and payback period for your property',
                link: '/tools/multi-family-roi-calculator'
              },
              {
                title: 'Buyer\'s Guide',
                description: 'Complete guide to selecting apartment security systems',
                link: '/guides/apartment-security-buyers-guide'
              },
              {
                title: 'Grant Opportunities',
                description: 'Federal and state grants for property security upgrades',
                link: '/resources/security-grants-multi-family'
              }
            ].map((resource, index) => (
              <Link
                key={index}
                href={resource.link}
                className="group bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center text-red-600">
                  <span>Access Resource</span>
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Create Safer Communities Today"
        subtitle="Get a professional security assessment and custom solution for your property"
        showFeatures={true}
      />
    </>
  );
}