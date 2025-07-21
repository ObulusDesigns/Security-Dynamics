import { Metadata } from 'next';
import { Hero, CTA } from '@/components/sections';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
// Dark section imports removed as they are no longer used
import {
  AcademicCapIcon,
  ShieldCheckIcon,
  BellAlertIcon,
  UserGroupIcon,
  VideoCameraIcon,
  LockClosedIcon,
  ExclamationTriangleIcon,
  MapPinIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

// SEO Metadata
export const metadata: Metadata = {
  title: 'School & Campus Security Systems | Education Security | Security Dynamics',
  description: 'Comprehensive security solutions for schools, colleges & universities in NJ & PA. Emergency lockdown systems, visitor screening, campus-wide protection.',
  keywords: 'school security systems, campus security, education security, school lockdown systems, visitor management schools, college security systems, university campus security',
  openGraph: {
    title: 'Education Security Systems | School & Campus Protection',
    description: 'Advanced security for educational facilities. Emergency response, access control, visitor management, campus-wide monitoring.',
    url: `${SITE_CONFIG.url}/industries/education`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Education Security Systems',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'School & Campus Security Systems | Education Protection',
    description: 'Comprehensive security solutions for educational facilities. Keep students and staff safe.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/industries/education`,
  },
};

// Schema markup
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_CONFIG.url}/industries/education#service`,
  name: 'Education Security Systems',
  description: 'Comprehensive security solutions for schools, colleges, and universities including emergency response systems and access control.',
  provider: {
    '@type': 'SecuritySystemInstallationService',
    name: 'Security Dynamics Inc.',
    telephone: COMPANY_INFO.phone,
  },
  areaServed: ['New Jersey', 'Pennsylvania'],
  serviceType: 'Education Security',
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
      name: 'Education',
      item: `${SITE_CONFIG.url}/industries/education`
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What security measures are required for schools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Schools require visitor management systems, controlled entry points, emergency lockdown capabilities, video surveillance, communication systems, and compliance with state safety mandates. Many states also require specific emergency response procedures and drills.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do emergency lockdown systems work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Emergency lockdown systems instantly secure all doors, notify law enforcement, trigger strobes/alerts, send mass notifications to staff/parents, and provide real-time status to first responders. Activation can be via panic buttons, mobile apps, or automated threat detection.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is a unified campus security system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unified campus security integrates access control, video surveillance, emergency communications, intrusion detection, and visitor management into one platform. This allows centralized monitoring, coordinated responses, and comprehensive reporting across all campus facilities.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much do school security systems cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'School security costs vary by size and requirements. Elementary schools typically invest $15,000-50,000, high schools $50,000-150,000, and college campuses $100,000-1M+. Many grants and funding programs are available to help schools afford security upgrades.'
      }
    }
  ]
};

export default function EducationSecurityPage() {
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
      <Hero title="Education Security Systems"
        subtitle="Protecting Students, Staff & Campuses"
        description="Comprehensive security solutions designed specifically for educational institutions. From K-12 schools to university campuses, we create safer learning environments with advanced technology and rapid response capabilities."
        
        
        primaryCta={{
          text: "Get Campus Security Assessment",
          href: "/contact"
        }}
      />

      {/* Education Security Challenges Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Education Security Challenges We Address
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Educational institutions face unique security challenges requiring specialized solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ExclamationTriangleIcon,
                title: 'Active Threat Response',
                description: 'Rapid lockdown capabilities, emergency notifications, and coordinated response procedures to protect lives during critical incidents.'
              },
              {
                icon: UserGroupIcon,
                title: 'Visitor & Volunteer Screening',
                description: 'Comprehensive visitor management with background checks, badge printing, and real-time tracking of all campus guests.'
              },
              {
                icon: BellAlertIcon,
                title: 'Emergency Communications',
                description: 'Mass notification systems reaching students, staff, and parents instantly through multiple channels during emergencies.'
              },
              {
                icon: VideoCameraIcon,
                title: 'Campus-Wide Monitoring',
                description: 'Strategic camera placement covering entrances, hallways, common areas, and perimeters while respecting privacy.'
              },
              {
                icon: LockClosedIcon,
                title: 'Access Control',
                description: 'Controlled entry to buildings, classrooms, and sensitive areas with time-based permissions and lockdown override.'
              },
              {
                icon: MapPinIcon,
                title: 'Bus & Transport Security',
                description: 'GPS tracking, onboard cameras, and communication systems to ensure safe student transportation.'
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

      {/* Education Solutions Section - Light Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                Comprehensive Campus Security Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our education security systems create layers of protection while maintaining an open, welcoming learning environment.
              </p>
              
              <div className="space-y-6">
                {[
                  'Emergency Lockdown & Alert Systems',
                  'Visitor Management with Sex Offender Screening',
                  'Classroom Panic Buttons & Duress Alarms',
                  'Weapons Detection Technology',
                  'Reunification Planning & Tools',
                  'Integration with School Information Systems',
                  'Automated Attendance & Hall Pass Tracking',
                  'Mental Health Threat Assessment Tools'
                ].map((solution, index) => (
                  <div key={index} className="flex items-center">
                    <ShieldCheckIcon className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education Security Impact</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Emergency Response Time</span>
                    <span className="text-red-600 font-bold">&lt; 30 sec</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Unauthorized Entry Prevention</span>
                    <span className="text-red-600 font-bold">99%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '99%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Parent Communication Speed</span>
                    <span className="text-red-600 font-bold">&lt; 2 min</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Staff Confidence Level</span>
                    <span className="text-red-600 font-bold">+85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">Results from 50+ educational institutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Types Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Solutions by Education Level
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tailored security approaches for different educational environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: 'Elementary Schools',
                features: ['Perimeter fencing', 'Single entry control', 'Playground monitoring', 'Parent pickup systems']
              },
              {
                type: 'Middle & High Schools',
                features: ['Multiple building access', 'Hallway supervision', 'Cafeteria monitoring', 'Athletic facility security']
              },
              {
                type: 'Colleges & Universities',
                features: ['Campus-wide systems', 'Dormitory access', 'Blue light emergency phones', 'Parking enforcement']
              },
              {
                type: 'Private & Charter Schools',
                features: ['Customized solutions', 'After-school programs', 'Special event security', 'Tuition protection']
              },
              {
                type: 'Preschools & Daycares',
                features: ['Parent verification', 'Classroom cameras', 'Secure pickup/dropoff', 'Naptime monitoring']
              },
              {
                type: 'Technical & Trade Schools',
                features: ['Equipment protection', 'Lab access control', 'Tool tracking', 'Workshop monitoring']
              }
            ].map((school, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <AcademicCapIcon className="w-10 h-10 text-red-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{school.type}</h3>
                <ul className="space-y-2">
                  {school.features.map((feature, idx) => (
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

      {/* Case Study Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Education Security Success Story
            </h2>
            <p className="text-xl text-gray-600">
              How we transformed campus safety at a regional school district
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Regional School District - 12 Schools, 8,500 Students</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-600">Challenges:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• No unified security system</li>
                  <li>• Manual visitor sign-in</li>
                  <li>• Limited emergency response</li>
                  <li>• Inconsistent procedures</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-600">Solutions Implemented:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• District-wide platform</li>
                  <li>• Automated visitor screening</li>
                  <li>• One-button lockdown</li>
                  <li>• Standardized protocols</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-lg font-semibold mb-4 text-red-600">Results After One School Year:</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                  <p className="text-sm text-gray-600">Visitor screening compliance</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">15 sec</div>
                  <p className="text-sm text-gray-600">Lockdown activation time</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">90%</div>
                  <p className="text-sm text-gray-600">Reduced incidents</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">A+</div>
                  <p className="text-sm text-gray-600">State safety rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Meeting Education Security Standards
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our systems comply with all state and federal requirements for school safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <ShieldCheckIcon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">State Mandates</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>NJ School Security Act compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>PA Safe Schools requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Alyssa's Law panic button systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Annual security drill support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Threat assessment protocols</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <DevicePhoneMobileIcon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Standards</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>FERPA-compliant data protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>ADA accessibility features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>NFPA fire code integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Clery Act reporting support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Title IX compliance tools</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div className="flex items-start">
              <ExclamationTriangleIcon className="w-8 h-8 text-blue-600 mt-0.5 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Grant Funding Available</h3>
                <p className="text-blue-800">
                  We help schools identify and apply for security grants including COPS, SVPP, state bond 
                  programs, and foundation funding. Many schools qualify for significant funding assistance 
                  to upgrade their security infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Light Gray Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Education Security FAQs
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about securing educational facilities
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: 'What security measures are required for schools?',
                answer: 'Schools require visitor management systems, controlled entry points, emergency lockdown capabilities, video surveillance, communication systems, and compliance with state safety mandates. Many states also require specific emergency response procedures and drills.'
              },
              {
                question: 'How do emergency lockdown systems work?',
                answer: 'Emergency lockdown systems instantly secure all doors, notify law enforcement, trigger strobes/alerts, send mass notifications to staff/parents, and provide real-time status to first responders. Activation can be via panic buttons, mobile apps, or automated threat detection.'
              },
              {
                question: 'What is a unified campus security system?',
                answer: 'Unified campus security integrates access control, video surveillance, emergency communications, intrusion detection, and visitor management into one platform. This allows centralized monitoring, coordinated responses, and comprehensive reporting across all campus facilities.'
              },
              {
                question: 'How much do school security systems cost?',
                answer: 'School security costs vary by size and requirements. Elementary schools typically invest $15,000-50,000, high schools $50,000-150,000, and college campuses $100,000-1M+. Many grants and funding programs are available to help schools afford security upgrades.'
              },
              {
                question: 'How can we balance security with an open learning environment?',
                answer: 'Modern security systems are designed to be unobtrusive while effective. Features like welcoming visitor kiosks, discrete cameras, silent alarms, and age-appropriate procedures maintain a positive atmosphere while ensuring safety.'
              },
              {
                question: 'What training do you provide for staff?',
                answer: 'We provide comprehensive training including system operation, emergency procedures, drill coordination, threat recognition, and de-escalation techniques. Regular refresher training and new staff onboarding ensure everyone stays prepared.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
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
        title="Protect Your Students & Staff Today"
        subtitle="Get a free campus security assessment and funding guidance"
        showFeatures={true}
      />
    </>
  );
}