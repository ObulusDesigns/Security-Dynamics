import { Metadata } from 'next';
import Link from 'next/link';
import { Hero, CTA } from '@/components/sections';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
// Dark section imports removed as they are no longer used
import {
  TruckIcon,
  CubeIcon,
  ShieldCheckIcon,
  VideoCameraIcon,
  LockClosedIcon,
  ClockIcon,
  ChartBarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Warehouse Security Systems | Distribution Center Protection | Security Dynamics',
  description: 'Advanced security systems for warehouses, distribution centers & logistics facilities in NJ & PA. Perimeter protection, cargo security, employee safety.',
  keywords: 'warehouse security systems, distribution center security, logistics facility protection, cargo theft prevention, perimeter security, loading dock cameras, warehouse access control, inventory protection',
  openGraph: {
    title: 'Warehouse Security Systems | Industrial Protection Solutions',
    description: 'Comprehensive security for warehouses & distribution centers. Prevent theft, ensure safety, optimize operations.',
    url: `${SITE_CONFIG.url}/industries/warehouse`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Warehouse Security Systems',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warehouse Security Systems | Distribution Center Protection',
    description: 'Advanced security solutions for warehouses & logistics facilities. Expert installation & monitoring.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/industries/warehouse`,
  },
};

// Schema markup
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_CONFIG.url}/industries/warehouse#service`,
  name: 'Warehouse Security Systems',
  description: 'Comprehensive security solutions for warehouses, distribution centers, and logistics facilities.',
  provider: {
    '@type': 'SecuritySystemInstallationService',
    name: 'Security Dynamics Inc.',
    telephone: COMPANY_INFO.phone,
  },
  areaServed: ['New Jersey', 'Pennsylvania'],
  serviceType: 'Warehouse Security',
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
      name: 'Warehouse',
      item: `${SITE_CONFIG.url}/industries/warehouse`
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the most important security features for warehouses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essential warehouse security features include perimeter detection, loading dock cameras with license plate recognition, employee access control, inventory cage protection, thermal imaging for fire prevention, and 24/7 monitoring with rapid response capabilities.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can security systems prevent cargo theft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our systems prevent cargo theft through multi-layered security: perimeter intrusion detection, AI-powered video analytics, access control with time restrictions, dock door sensors, GPS tracking integration, and real-time alerts for unauthorized activities.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the ROI of warehouse security systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most warehouses see ROI within 12-18 months through reduced theft (average 60-80% reduction), lower insurance premiums (10-20% savings), decreased false worker compensation claims, and improved operational efficiency. A single prevented theft incident often pays for the entire system.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can warehouse security systems integrate with WMS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our security systems integrate with warehouse management systems (WMS) to provide unified operations. This includes linking access control with employee schedules, correlating video with inventory movements, and generating comprehensive security reports within your existing platforms.'
      }
    }
  ]
};

export default function WarehouseSecurityPage() {
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
      <Hero title="Warehouse Security Systems"
        subtitle="Protect Your Distribution Center & Cargo"
        description="Advanced security solutions designed for warehouses, distribution centers, and logistics facilities. Prevent theft, ensure safety, and optimize operations with intelligent monitoring."
        
        
        primaryCta={{
          text: "Get Warehouse Security Assessment",
          href: "/contact"
        }}
      />

      {/* Warehouse Security Challenges Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Warehouse Security Challenges We Solve
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Distribution centers face unique security threats that require specialized solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TruckIcon,
                title: 'Cargo Theft Prevention',
                description: 'Stop organized theft rings targeting high-value shipments with AI-powered detection and real-time alerts.'
              },
              {
                icon: CubeIcon,
                title: 'Inventory Protection',
                description: 'Secure valuable inventory in cages, high-value areas, and throughout the facility with zone-based monitoring.'
              },
              {
                icon: ShieldCheckIcon,
                title: 'Perimeter Security',
                description: 'Detect and deter intrusions before they reach your facility with thermal cameras and fence sensors.'
              },
              {
                icon: ClockIcon,
                title: '24/7 Operations Security',
                description: 'Maintain security during all shifts with automated monitoring and remote management capabilities.'
              },
              {
                icon: LockClosedIcon,
                title: 'Access Control',
                description: 'Manage employee, vendor, and driver access with time-based permissions and audit trails.'
              },
              {
                icon: ChartBarIcon,
                title: 'Operational Insights',
                description: 'Use security data to improve efficiency, reduce shrinkage, and optimize workflows.'
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

      {/* Warehouse Solutions Section - Light Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
                Comprehensive Warehouse Security Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our integrated security systems are built for the demanding environment of modern warehouses and distribution centers.
              </p>
              
              <div className="space-y-6">
                {[
                  'Thermal & HD Cameras with AI Analytics',
                  'License Plate Recognition at All Gates',
                  'Loading Dock Door Sensors & Seals',
                  'Perimeter Fence Intrusion Detection',
                  'Employee Time & Access Management',
                  'Inventory Cage Motion Detection',
                  'Fire & Environmental Monitoring',
                  'Remote Video Verification Services'
                ].map((solution, index) => (
                  <div key={index} className="flex items-center">
                    <ShieldCheckIcon className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Warehouse Security ROI</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Theft Reduction</span>
                    <span className="text-red-400 font-bold">60-80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '70%' }}></div>
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
                    <span className="text-gray-700">Operational Efficiency</span>
                    <span className="text-red-400 font-bold">25-35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">False Claims Reduction</span>
                    <span className="text-red-400 font-bold">90%+</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">Average ROI achieved within 12-18 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Advanced Warehouse Security Features
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Technology designed for modern logistics operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <VideoCameraIcon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Video Analytics</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Detect loitering and suspicious behavior patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Track package movement and handling violations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Identify safety violations and PPE compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Count people and vehicles automatically</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Search video by object, color, or direction</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <LockClosedIcon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Access Control</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Biometric readers for high-security areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Mobile credentials for contractors and drivers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Time-based access for shift workers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Integration with HR and timekeeping systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Real-time location tracking for emergencies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section - Light Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
              Warehouse Security Success Story
            </h2>
            <p className="text-xl text-gray-600">
              How we helped a major distribution center eliminate theft
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Regional Distribution Center - 500,000 sq ft</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-600">Challenges:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• $2M+ annual shrinkage</li>
                  <li>• Organized cargo theft</li>
                  <li>• No perimeter detection</li>
                  <li>• Limited dock visibility</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-600">Solutions Implemented:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 120 AI-enabled cameras</li>
                  <li>• Thermal perimeter detection</li>
                  <li>• LPR at all entry points</li>
                  <li>• Biometric access control</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-lg font-semibold mb-4 text-red-600">Results in First Year:</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">78%</div>
                  <p className="text-sm text-gray-600">Reduction in theft</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">$1.6M</div>
                  <p className="text-sm text-gray-600">Saved in shrinkage</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">15%</div>
                  <p className="text-sm text-gray-600">Insurance reduction</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">8 mo</div>
                  <p className="text-sm text-gray-600">ROI achieved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Warehouse Security FAQs
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about securing distribution centers
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: 'What are the most important security features for warehouses?',
                answer: 'Essential warehouse security features include perimeter detection, loading dock cameras with license plate recognition, employee access control, inventory cage protection, thermal imaging for fire prevention, and 24/7 monitoring with rapid response capabilities.'
              },
              {
                question: 'How can security systems prevent cargo theft?',
                answer: 'Our systems prevent cargo theft through multi-layered security: perimeter intrusion detection, AI-powered video analytics, access control with time restrictions, dock door sensors, GPS tracking integration, and real-time alerts for unauthorized activities.'
              },
              {
                question: 'What is the ROI of warehouse security systems?',
                answer: 'Most warehouses see ROI within 12-18 months through reduced theft (average 60-80% reduction), lower insurance premiums (10-20% savings), decreased false worker compensation claims, and improved operational efficiency. A single prevented theft incident often pays for the entire system.'
              },
              {
                question: 'Can warehouse security systems integrate with WMS?',
                answer: 'Yes, our security systems integrate with warehouse management systems (WMS) to provide unified operations. This includes linking access control with employee schedules, correlating video with inventory movements, and generating comprehensive security reports within your existing platforms.'
              },
              {
                question: 'How do you secure large outdoor storage areas?',
                answer: 'Outdoor areas require specialized solutions including thermal cameras for 24/7 detection, radar-based perimeter sensors, mobile surveillance units for temporary storage, drone detection systems, and weatherproof equipment rated for extreme conditions.'
              },
              {
                question: 'What about securing multiple warehouse locations?',
                answer: 'We provide enterprise platforms that allow centralized monitoring and management of multiple facilities. This includes unified dashboards, cross-site analytics, standardized procedures, and the ability to share resources and respond to incidents across all locations from a single command center.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
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

      {/* Resources Section - Light Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
              Warehouse Security Resources
            </h2>
            <p className="text-xl text-gray-600">
              Tools and guides to help secure your distribution center
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Security Assessment Checklist',
                description: 'Evaluate your current warehouse security posture',
                link: '/resources/warehouse-security-checklist'
              },
              {
                title: 'ROI Calculator',
                description: 'Calculate potential savings from security upgrades',
                link: '/tools/warehouse-security-roi-calculator'
              },
              {
                title: 'Best Practices Guide',
                description: 'Industry standards for warehouse protection',
                link: '/guides/warehouse-security-best-practices'
              }
            ].map((resource, index) => (
              <Link
                key={index}
                href={resource.link}
                className="group bg-white rounded-xl p-8 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center text-red-600">
                  <span>Download Now</span>
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Eliminate Warehouse Theft Today"
        subtitle="Get a free security assessment and see how much you could save"
        showFeatures={true}
      />
    </>
  );
}