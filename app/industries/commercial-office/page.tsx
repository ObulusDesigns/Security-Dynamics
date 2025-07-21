import { Metadata } from 'next';
import { Hero, CTA } from '@/components/sections';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
// Dark section imports removed as they are no longer used
import {
  BuildingOfficeIcon,
  ShieldCheckIcon,
  KeyIcon,
  UserGroupIcon,
  ClockIcon,
  VideoCameraIcon,
  BellAlertIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Commercial Office Security Systems | Building Protection | Security Dynamics',
  description: 'Professional security systems for office buildings, corporate campuses & business parks in NJ & PA. Access control, visitor management, after-hours protection.',
  keywords: 'commercial office security, office building security systems, corporate security, business park security, visitor management systems, office access control',
  openGraph: {
    title: 'Commercial Office Security Systems | Professional Building Protection',
    description: 'Comprehensive security for office buildings & corporate facilities. Multi-tenant access control, visitor management, 24/7 monitoring.',
    url: `${SITE_CONFIG.url}/industries/commercial-office`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Commercial Office Security Systems',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Office Security Systems | Building Protection',
    description: 'Professional security solutions for office buildings and corporate facilities.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/industries/commercial-office`,
  },
};

// Schema markup
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_CONFIG.url}/industries/commercial-office#service`,
  name: 'Commercial Office Security Systems',
  description: 'Comprehensive security solutions for office buildings, corporate campuses, and business parks.',
  provider: {
    '@type': 'SecuritySystemInstallationService',
    name: 'Security Dynamics Inc.',
    telephone: COMPANY_INFO.phone,
  },
  areaServed: ['New Jersey', 'Pennsylvania'],
  serviceType: 'Commercial Office Security',
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
      name: 'Industries',
      item: `${SITE_CONFIG.url}/industries`
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Commercial Office',
      item: `${SITE_CONFIG.url}/industries/commercial-office`
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What security features are essential for office buildings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essential office building security includes access control systems, visitor management, video surveillance, intrusion detection, emergency communication systems, and integration with building management systems. Multi-tenant buildings also need floor-by-floor access control and elevator security.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do visitor management systems work for offices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Modern visitor management systems pre-register guests, print temporary badges, notify hosts of arrivals, track visitor movements, and maintain compliance logs. Integration with access control ensures visitors only access authorized areas during approved times.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can security systems integrate with building management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, modern security systems integrate seamlessly with building management systems (BMS) to control HVAC based on occupancy, manage lighting, coordinate elevator access, and provide unified dashboards for facility managers.'
      }
    },
    {
      '@type': 'Question',
      name: 'What are typical costs for office building security?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Office security costs vary by building size and requirements. Small offices may invest $5,000-15,000, while multi-floor buildings typically range from $25,000-100,000+. Costs include access control, cameras, visitor management, and monitoring services.'
      }
    }
  ]
};

export default function CommercialOfficeSecurityPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script id="schema-1" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Script id="schema-2" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script id="schema-3" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero Section */}
      <Hero title="Commercial Office Security Systems"
        subtitle="Professional Protection for Business Environments"
        description="Comprehensive security solutions designed for office buildings, corporate campuses, and business parks. Protect your tenants, employees, and assets with integrated access control and monitoring."
        
        
        primaryCta={{
          text: "Get Office Security Assessment",
          href: "/contact"
        }}
      />

      {/* Office Security Challenges Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Office Security Challenges We Solve
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Modern office buildings face complex security challenges requiring sophisticated solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: UserGroupIcon,
                title: 'Multi-Tenant Management',
                description: 'Control access for multiple companies, each with unique security needs and schedules within the same building.'
              },
              {
                icon: ClockIcon,
                title: 'After-Hours Security',
                description: 'Protect facilities during nights and weekends when most staff are absent but some tenants require access.'
              },
              {
                icon: KeyIcon,
                title: 'Visitor & Contractor Access',
                description: 'Manage temporary access for guests, delivery personnel, and service providers while maintaining security.'
              },
              {
                icon: BellAlertIcon,
                title: 'Emergency Response',
                description: 'Coordinate building-wide evacuations, lockdowns, and emergency communications across all tenants.'
              },
              {
                icon: BuildingOfficeIcon,
                title: 'Executive Protection',
                description: 'Enhanced security for C-suite offices, boardrooms, and sensitive areas containing confidential information.'
              },
              {
                icon: VideoCameraIcon,
                title: 'Common Area Monitoring',
                description: 'Secure lobbies, elevators, stairwells, parking garages, and other shared spaces effectively.'
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

      {/* Office Solutions Section - Light Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
                Integrated Office Security Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Create a secure, professional environment that enhances productivity while protecting people and assets.
              </p>
              
              <div className="space-y-6">
                {[
                  'Smart Access Control with Mobile Credentials',
                  'Touchless Visitor Management Systems',
                  'HD Video Surveillance with Analytics',
                  'Elevator & Floor Access Restrictions',
                  'Parking Access & License Plate Recognition',
                  'Integration with Directory & Tenant Systems',
                  'Emergency Mass Notification',
                  'Remote Management Capabilities'
                ].map((solution, index) => (
                  <div key={index} className="flex items-center">
                    <ShieldCheckIcon className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Office Security Benefits</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Unauthorized Access Prevention</span>
                    <span className="text-red-600 font-bold">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Visitor Processing Time</span>
                    <span className="text-red-600 font-bold">-70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Security Incident Response</span>
                    <span className="text-red-600 font-bold">&lt; 60s</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Tenant Satisfaction</span>
                    <span className="text-red-600 font-bold">+40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">Based on client data from 400+ office buildings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Types Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Solutions by Building Type
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Customized security approaches for different commercial office environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <BuildingOfficeIcon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-Tenant Buildings</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Floor-by-floor access control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Separate tenant alarm partitions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Shared lobby visitor management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Individual suite monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Centralized security operations</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <BuildingOfficeIcon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Campuses</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Perimeter access control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Vehicle gate management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Inter-building secure transit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Executive area protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Campus-wide emergency alerts</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <BuildingOfficeIcon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Single-Tenant Offices</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Employee access management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Department-based permissions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Time-based access schedules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Integration with HR systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Secure server room access</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <BuildingOfficeIcon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Parks</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Shared security infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Common area surveillance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Coordinated emergency response</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Park-wide access credentials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Centralized monitoring options</span>
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
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
              Office Security Success Story
            </h2>
            <p className="text-xl text-gray-600">
              How we transformed security at a major business complex
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Class A Office Tower - 25 Floors, 50+ Tenants</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-600">Challenges:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Manual visitor logs</li>
                  <li>• No after-hours tracking</li>
                  <li>• Limited elevator control</li>
                  <li>• Separate tenant systems</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-600">Solutions Implemented:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Unified access platform</li>
                  <li>• Touchless visitor kiosks</li>
                  <li>• Smart elevator integration</li>
                  <li>• Cloud-based management</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-lg font-semibold mb-4 text-red-600">Results After Implementation:</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">90%</div>
                  <p className="text-sm text-gray-600">Faster visitor check-in</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">100%</div>
                  <p className="text-sm text-gray-600">After-hours accountability</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">60%</div>
                  <p className="text-sm text-gray-600">Reduced security costs</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">98%</div>
                  <p className="text-sm text-gray-600">Tenant satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Advanced Office Security Technology
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Modern features that enhance security while improving the workplace experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Mobile Access Control',
                features: ['Smartphone credentials', 'Touchless entry', 'Temporary visitor passes']
              },
              {
                title: 'Occupancy Analytics',
                features: ['Space utilization data', 'Traffic flow patterns', 'Energy optimization']
              },
              {
                title: 'Cloud Management',
                features: ['Remote administration', 'Real-time updates', 'Multi-site control']
              },
              {
                title: 'Video Analytics',
                features: ['Loitering detection', 'Crowd monitoring', 'Facial recognition']
              },
              {
                title: 'Integration APIs',
                features: ['HR system sync', 'Building management', 'Tenant platforms']
              },
              {
                title: 'Emergency Systems',
                features: ['Mass notifications', 'Mustering reports', 'First responder access']
              }
            ].map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <VideoCameraIcon className="w-10 h-10 text-red-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
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

      {/* FAQ Section - Light Gray Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
              Commercial Office Security FAQs
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about securing office buildings
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: 'What security features are essential for office buildings?',
                answer: 'Essential office building security includes access control systems, visitor management, video surveillance, intrusion detection, emergency communication systems, and integration with building management systems. Multi-tenant buildings also need floor-by-floor access control and elevator security.'
              },
              {
                question: 'How do visitor management systems work for offices?',
                answer: 'Modern visitor management systems pre-register guests, print temporary badges, notify hosts of arrivals, track visitor movements, and maintain compliance logs. Integration with access control ensures visitors only access authorized areas during approved times.'
              },
              {
                question: 'Can security systems integrate with building management?',
                answer: 'Yes, modern security systems integrate seamlessly with building management systems (BMS) to control HVAC based on occupancy, manage lighting, coordinate elevator access, and provide unified dashboards for facility managers.'
              },
              {
                question: 'What are typical costs for office building security?',
                answer: 'Office security costs vary by building size and requirements. Small offices may invest $5,000-15,000, while multi-floor buildings typically range from $25,000-100,000+. Costs include access control, cameras, visitor management, and monitoring services.'
              },
              {
                question: 'How can we secure our office after hours?',
                answer: 'After-hours security combines scheduled access control, motion-activated cameras, intrusion alarms, security lighting, and 24/7 monitoring. Systems can automatically arm/disarm based on schedules and send alerts for any unauthorized access.'
              },
              {
                question: 'What about protecting sensitive areas like server rooms?',
                answer: 'Sensitive areas require multi-factor authentication (card + PIN or biometric), specialized environmental monitoring, video surveillance with recording, audit trails of all access, and integration with IT security systems for comprehensive protection.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
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

      {/* CTA Section */}
      <CTA
        title="Secure Your Office Building Today"
        subtitle="Get a comprehensive security assessment and custom solution design"
        showFeatures={true}
      />
    </>
  );
}