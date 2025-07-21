import { Metadata } from 'next';
import { Hero, CTA } from '@/components/sections';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
// Dark section imports removed as they are no longer used
import {
  BuildingStorefrontIcon,
  ShieldCheckIcon,
  VideoCameraIcon,
  LockClosedIcon,
  DocumentCheckIcon,
  CurrencyDollarIcon,
  BeakerIcon,
  ExclamationTriangleIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Cannabis Security Systems NJ | Dispensary & Cultivation Security | Security Dynamics',
  description: 'CRC-compliant cannabis security systems for New Jersey dispensaries, cultivation & manufacturing. 24/7 monitoring, access control, seed-to-sale tracking.',
  keywords: 'cannabis security systems NJ, dispensary security New Jersey, cultivation facility security, CRC compliance security, marijuana business security, cannabis surveillance NJ',
  openGraph: {
    title: 'Cannabis Security Systems | New Jersey CRC-Compliant Solutions',
    description: 'Comprehensive security for NJ cannabis businesses. CRC compliance, 24/7 monitoring, seed-to-sale integration.',
    url: `${SITE_CONFIG.url}/industries/cannabis`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Cannabis Security Systems NJ',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cannabis Security Systems | NJ Dispensary & Cultivation Protection',
    description: 'CRC-compliant security solutions for New Jersey cannabis businesses.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/industries/cannabis`,
  },
};

// Schema markup
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_CONFIG.url}/industries/cannabis#service`,
  name: 'Cannabis Security Systems',
  description: 'Comprehensive security solutions for New Jersey cannabis dispensaries, cultivation facilities, and manufacturing operations.',
  provider: {
    '@type': 'SecuritySystemInstallationService',
    name: 'Security Dynamics Inc.',
    telephone: COMPANY_INFO.phone,
  },
  areaServed: ['New Jersey'],
  serviceType: 'Cannabis Security',
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
      name: 'Cannabis',
      item: `${SITE_CONFIG.url}/industries/cannabis`
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the NJ CRC security requirements for cannabis businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New Jersey CRC requires comprehensive security including 24/7 HD surveillance with 90-day storage, complete perimeter coverage, panic alarms, access control, intrusion detection, and integration with state tracking systems. All systems must be operational before licensing.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does cannabis security cost in New Jersey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cannabis security systems in NJ typically range from $25,000-75,000 for dispensaries and $50,000-200,000+ for cultivation facilities. Costs depend on facility size, number of cameras, access points, and integration requirements. Most see ROI through compliance and loss prevention.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do cannabis security systems integrate with METRC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our systems can integrate with METRC and other seed-to-sale tracking platforms. This provides complete chain of custody documentation, automated compliance reporting, and seamless inventory management alongside your security footage.'
      }
    },
    {
      '@type': 'Question',
      name: 'What happens if my cannabis security system fails inspection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Failed inspections can delay licensing and operations. We provide pre-inspection reviews, ensure 100% CRC compliance, offer rapid remediation if issues arise, and maintain detailed documentation to prevent inspection failures.'
      }
    }
  ]
};

export default function CannabisSecurityPage() {
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
      <Hero title="Cannabis Security Systems"
        subtitle="CRC-Compliant Solutions for New Jersey"
        description="Comprehensive security systems designed specifically for New Jersey cannabis businesses. Meet all CRC requirements while protecting your investment with state-of-the-art technology."
        
        
        primaryCta={{
          text: "Get Compliance Assessment",
          href: "/contact"
        }}
      />

      {/* CRC Compliance Alert - White Background */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-start">
              <ScaleIcon className="w-6 h-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="font-semibold text-green-900 mb-1">New Jersey CRC Compliance Guaranteed</p>
                <p className="text-green-800">
                  Our security systems meet or exceed all New Jersey Cannabis Regulatory Commission requirements. 
                  We handle the complexity so you can focus on your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cannabis Security Challenges Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Cannabis Security Challenges in New Jersey
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Navigate complex regulations while protecting your high-value inventory and maintaining compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DocumentCheckIcon,
                title: 'CRC Compliance',
                description: 'Meet strict New Jersey Cannabis Regulatory Commission requirements for surveillance, storage, and reporting.'
              },
              {
                icon: CurrencyDollarIcon,
                title: 'High-Value Inventory',
                description: 'Protect valuable cannabis products from theft with comprehensive monitoring and access control.'
              },
              {
                icon: VideoCameraIcon,
                title: '24/7 Surveillance',
                description: 'Maintain required continuous HD recording with 90-day retention and remote access capabilities.'
              },
              {
                icon: LockClosedIcon,
                title: 'Limited Access Areas',
                description: 'Control and document access to cultivation, processing, vault, and restricted areas.'
              },
              {
                icon: BeakerIcon,
                title: 'Seed-to-Sale Tracking',
                description: 'Integrate security with METRC and inventory systems for complete chain of custody.'
              },
              {
                icon: ExclamationTriangleIcon,
                title: 'Federal Regulations',
                description: 'Navigate the unique challenges of state-legal businesses with federal banking restrictions.'
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

      {/* Cannabis Solutions Section - Gray Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
                Complete Cannabis Security Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Purpose-built security systems that protect your cannabis business while ensuring full regulatory compliance.
              </p>
              
              <div className="space-y-6">
                {[
                  'HD Cameras with Night Vision (Min 720p)',
                  'Perimeter Coverage - No Blind Spots',
                  'Panic & Duress Alarm Systems',
                  'Biometric Access Control',
                  'Motion Detection & Analytics',
                  'Remote Viewing Capabilities',
                  '90-Day Cloud Storage',
                  'Backup Power Systems'
                ].map((solution, index) => (
                  <div key={index} className="flex items-center">
                    <ShieldCheckIcon className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-900">{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">NJ CRC Requirements Met</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-red-400 mb-2">Video Surveillance</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• 24/7 HD recording (720p minimum)</li>
                    <li>• 90-day retention period</li>
                    <li>• Complete facility coverage</li>
                    <li>• Date/time/location stamping</li>
                  </ul>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-red-400 mb-2">Access Control</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Limited access areas (LAA)</li>
                    <li>• Electronic logging</li>
                    <li>• Badge/biometric systems</li>
                    <li>• Visitor management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-400 mb-2">Alarm Systems</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Intrusion detection</li>
                    <li>• Panic/duress alarms</li>
                    <li>• 24/7 monitoring</li>
                    <li>• Immediate police response</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Types Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Solutions by Cannabis Business Type
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tailored security approaches for different license classes in New Jersey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: 'Retail Dispensaries',
                features: ['Customer area monitoring', 'POS integration', 'Vault security', 'Product display protection']
              },
              {
                type: 'Cultivation Facilities',
                features: ['Grow room surveillance', 'Environmental monitoring', 'Perimeter detection', 'Loading dock security']
              },
              {
                type: 'Manufacturing',
                features: ['Production line cameras', 'Lab area security', 'Inventory tracking', 'Hazmat compliance']
              },
              {
                type: 'Micro-Businesses',
                features: ['Scalable systems', 'Cost-effective solutions', 'Multi-use coverage', 'Compliance packages']
              },
              {
                type: 'Delivery Services',
                features: ['Vehicle GPS tracking', 'Body cameras', 'Route monitoring', 'Cash management']
              },
              {
                type: 'Testing Labs',
                features: ['Sample security', 'Chain of custody', 'Clean room monitoring', 'Data protection']
              }
            ].map((facility, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <BuildingStorefrontIcon className="w-10 h-10 text-red-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.type}</h3>
                <ul className="space-y-2">
                  {facility.features.map((feature, idx) => (
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

      {/* NJ Regulations Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
              New Jersey Cannabis Security Regulations
            </h2>
            <p className="text-xl text-gray-600">
              Key requirements from the NJ Cannabis Regulatory Commission
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-red-400">Surveillance Requirements</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-900">Continuous 24/7 recording of all areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-900">Minimum 720p resolution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-900">90-day video retention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-900">Coverage of all entrances/exits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-900">POS and scale visibility</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-red-400">Security Features</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-900">Commercial-grade locks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-900">Intrusion detection systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-900">Panic alarm buttons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-900">Failure notification system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-900">Backup power supply</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                <ExclamationTriangleIcon className="w-5 h-5 inline mr-2" />
                Security systems must be fully operational before CRC inspection and licensing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Cannabis Security Success Story
            </h2>
            <p className="text-xl text-gray-600">
              How we helped a NJ dispensary achieve compliance in record time
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Northern NJ Dispensary - Class 5 Retail License</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-600">Challenges:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tight timeline for CRC inspection</li>
                  <li>• Complex multi-room layout</li>
                  <li>• Integration with METRC</li>
                  <li>• Limited budget</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-600">Solutions Provided:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 48 HD cameras installed</li>
                  <li>• Biometric access control</li>
                  <li>• Cloud storage with backup</li>
                  <li>• Full CRC compliance package</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-8">
              <h4 className="text-lg font-semibold mb-4 text-red-600">Results:</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                  <p className="text-sm text-gray-600">CRC compliant</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">3 weeks</div>
                  <p className="text-sm text-gray-600">Installation time</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">$0</div>
                  <p className="text-sm text-gray-600">Product loss</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">First</div>
                  <p className="text-sm text-gray-600">Pass inspection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Gray Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
              Cannabis Security FAQs
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about cannabis security in New Jersey
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: 'What are the NJ CRC security requirements for cannabis businesses?',
                answer: 'New Jersey CRC requires comprehensive security including 24/7 HD surveillance with 90-day storage, complete perimeter coverage, panic alarms, access control, intrusion detection, and integration with state tracking systems. All systems must be operational before licensing.'
              },
              {
                question: 'How much does cannabis security cost in New Jersey?',
                answer: 'Cannabis security systems in NJ typically range from $25,000-75,000 for dispensaries and $50,000-200,000+ for cultivation facilities. Costs depend on facility size, number of cameras, access points, and integration requirements. Most see ROI through compliance and loss prevention.'
              },
              {
                question: 'Do cannabis security systems integrate with METRC?',
                answer: 'Yes, our systems can integrate with METRC and other seed-to-sale tracking platforms. This provides complete chain of custody documentation, automated compliance reporting, and seamless inventory management alongside your security footage.'
              },
              {
                question: 'What happens if my cannabis security system fails inspection?',
                answer: 'Failed inspections can delay licensing and operations. We provide pre-inspection reviews, ensure 100% CRC compliance, offer rapid remediation if issues arise, and maintain detailed documentation to prevent inspection failures.'
              },
              {
                question: 'Can I use my security system for business insights?',
                answer: 'Absolutely! Beyond compliance, cannabis security systems provide heat mapping for product placement, customer flow analysis, staff optimization data, and inventory verification. Many operators use security analytics to improve operations.'
              },
              {
                question: 'What about federal banking restrictions?',
                answer: 'We understand the unique challenges of cannabis banking. Our systems support cash management protocols, provide detailed audit trails for financial compliance, and offer secure cash room monitoring to protect your assets.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
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
        title="Secure Your Cannabis Business Today"
        subtitle="Get a free CRC compliance assessment and security consultation"
        showFeatures={true}
      />
    </>
  );
}