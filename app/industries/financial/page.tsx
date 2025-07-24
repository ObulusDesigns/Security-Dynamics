import { Metadata } from 'next';
import { Hero, CTA } from '@/components/sections';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
// Dark section imports removed as they are no longer used
import {
  BanknotesIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  VideoCameraIcon,
  BellAlertIcon,
  FingerPrintIcon,
  DocumentCheckIcon,
  KeyIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Bank & Financial Security Systems | Credit Union Security | Security Dynamics',
  description: 'High-security solutions for banks, credit unions & financial institutions in NJ & PA. Vault protection, ATM surveillance, compliance reporting, biometric access.',
  keywords: 'bank security systems, credit union security, financial institution security, vault monitoring, ATM surveillance, bank alarm systems, financial compliance security',
  openGraph: {
    title: 'Financial Institution Security Systems | Bank & Credit Union Protection',
    description: 'Advanced security for financial institutions. Vault monitoring, ATM protection, compliance reporting, 24/7 surveillance.',
    url: `${SITE_CONFIG.url}/industries/financial`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Financial Security Systems'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/industries/financial`}};

// Schema markup
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_CONFIG.url}/industries/financial#service`,
  name: 'Financial Institution Security Systems',
  description: 'Comprehensive security solutions for banks, credit unions, and financial institutions including vault protection and compliance systems.',
  provider: {
    '@type': 'SecuritySystemInstallationService',
    name: 'Security Dynamics Inc.',
    telephone: COMPANY_INFO.phone},
  areaServed: ['New Jersey', 'Pennsylvania'],
  serviceType: 'Financial Security'};

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
      name: 'Financial',
      item: `${SITE_CONFIG.url}/industries/financial`
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What security requirements do financial institutions have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Financial institutions must comply with Bank Protection Act requirements including vault alarms, robbery alarms, surveillance systems, and UL-certified equipment. Additional requirements include FDIC/NCUA compliance, SAR reporting capabilities, and audit trail maintenance.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do bank vault security systems work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Modern vault security combines time-delayed locks, biometric access control, seismic and thermal sensors, 24/7 monitoring, and duress code capabilities. Systems log all access attempts and integrate with central station monitoring for immediate police response.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is required for ATM security?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ATM security requires surveillance cameras with facial capture, anti-skimming technology, vibration sensors for physical attacks, lighting requirements, and transaction-matched video recording. Remote ATMs need additional perimeter detection and GPS tracking.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much do bank security systems cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bank security costs vary significantly. Small credit union branches typically invest $25,000-75,000, while full-service banks range from $100,000-500,000+. Costs include UL-rated equipment, vault protection, compliance systems, and professional monitoring.'
      }
    }
  ]
};

export default function FinancialSecurityPage() {
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
      <Hero title="Financial Institution Security"
        subtitle="Bank-Grade Protection & Compliance"
        description="Comprehensive security solutions designed for banks, credit unions, and financial institutions. Meet regulatory requirements while protecting assets, employees, and customers with advanced technology."
        
        
        primaryCta={{
          text: "Get Financial Security Assessment",
          href: "/contact"
        }}
      />

      {/* Financial Security Challenges Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Financial Security Challenges We Solve
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Financial institutions face stringent security requirements and evolving threats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: LockClosedIcon,
                title: 'Vault & Safe Protection',
                description: 'Multi-layered security for vaults, safes, and cash storage areas with time delays, dual control, and 24/7 monitoring.'
              },
              {
                icon: BanknotesIcon,
                title: 'ATM Security',
                description: 'Comprehensive ATM protection against skimming, physical attacks, and fraud with real-time alerts and video verification.'
              },
              {
                icon: DocumentCheckIcon,
                title: 'Regulatory Compliance',
                description: 'Meet Bank Protection Act, FDIC, NCUA, and state requirements with compliant systems and automated reporting.'
              },
              {
                icon: BellAlertIcon,
                title: 'Silent Alarm Systems',
                description: 'Discrete duress alerts for tellers, offices, and vaults with immediate law enforcement notification.'
              },
              {
                icon: FingerPrintIcon,
                title: 'Biometric Access Control',
                description: 'Secure sensitive areas with fingerprint, facial recognition, and multi-factor authentication systems.'
              },
              {
                icon: VideoCameraIcon,
                title: 'Transaction Surveillance',
                description: 'High-resolution cameras with transaction data overlay for investigating disputes and fraud.'
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

      {/* Financial Solutions Section - Light Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
                Bank-Grade Security Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our financial security systems exceed regulatory requirements while providing operational efficiency and customer confidence.
              </p>
              
              <div className="space-y-6">
                {[
                  'UL-Listed Central Station Monitoring',
                  'Vault Time Delay & Dual Control Systems',
                  'Teller Duress & Hold-up Alarms',
                  'ATM Skimming & Attack Detection',
                  'Check Fraud Prevention Systems',
                  'Compliance Audit Trail & Reporting',
                  'Facial Recognition for Known Threats',
                  'Integration with Core Banking Systems'
                ].map((solution, index) => (
                  <div key={index} className="flex items-center">
                    <ShieldCheckIcon className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Financial Security Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Regulatory Compliance</span>
                    <span className="text-red-400 font-bold">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Robbery Deterrence</span>
                    <span className="text-red-400 font-bold">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Fraud Detection Rate</span>
                    <span className="text-red-400 font-bold">89%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '89%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Alarm Response Time</span>
                    <span className="text-red-400 font-bold">&lt; 90s</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">Data from 75+ financial institutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Regulations Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Meeting Financial Compliance Standards
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our systems are designed to exceed all regulatory requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                standard: 'Bank Protection Act',
                description: 'Full compliance with federal security device requirements'
              },
              {
                standard: 'UL Standards',
                description: 'UL-681 vault protection and UL-1981 monitoring'
              },
              {
                standard: 'FDIC/NCUA',
                description: 'Meet all examination requirements and guidelines'
              },
              {
                standard: 'SAR Reporting',
                description: 'Support for Suspicious Activity Report documentation'
              }
            ].map((item, index) => (
              <div key={index} className="bg-red-50 rounded-xl p-6 text-center">
                <DocumentCheckIcon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-red-600 mb-2">{item.standard}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Compliance Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Automated compliance reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Audit trail maintenance (7+ years)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Examiner-ready documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Annual compliance reviews</span>
                </li>
              </ul>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Security testing procedures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Employee training programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Incident response planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>BSA/AML support features</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Facility Types Section - Light Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Solutions by Financial Institution Type
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Customized security for different financial environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: 'Bank Branches',
                features: ['Teller line protection', 'Vault security', 'ATM monitoring', 'Night depository']
              },
              {
                type: 'Credit Unions',
                features: ['Member area security', 'Shared branching', 'Drive-up protection', 'Loan office security']
              },
              {
                type: 'Corporate Offices',
                features: ['Executive protection', 'Data center security', 'Trading floor monitoring', 'Visitor screening']
              },
              {
                type: 'Mortgage Companies',
                features: ['Document security', 'Client privacy', 'Cash handling areas', 'Closing room protection']
              },
              {
                type: 'Investment Firms',
                features: ['Server room access', 'Client meeting areas', 'Wire transfer security', 'Records protection']
              },
              {
                type: 'Cash Management',
                features: ['Counting room security', 'Armored car procedures', 'Currency tracking', 'Dual control systems']
              }
            ].map((facility, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <BanknotesIcon className="w-10 h-10 text-red-600 mb-3" />
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

      {/* Case Study Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Financial Security Success Story
            </h2>
            <p className="text-xl text-gray-600">
              How we modernized security for a regional credit union
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Regional Credit Union - 8 Branches, $2B Assets</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-600">Challenges:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Aging analog systems</li>
                  <li>• No centralized monitoring</li>
                  <li>• Manual compliance reporting</li>
                  <li>• Limited ATM protection</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-600">Solutions Implemented:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• IP-based HD cameras</li>
                  <li>• Unified security platform</li>
                  <li>• Automated compliance</li>
                  <li>• Advanced ATM security</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-8">
              <h4 className="text-lg font-semibold mb-4 text-red-600">Results:</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                  <p className="text-sm text-gray-600">Exam compliance</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">78%</div>
                  <p className="text-sm text-gray-600">Fraud reduction</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">$125K</div>
                  <p className="text-sm text-gray-600">Annual savings</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
                  <p className="text-sm text-gray-600">Member satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features Section - Light Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Advanced Financial Security Technology
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Cutting-edge features designed for modern financial institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <KeyIcon className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vault Security Features</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Time-delayed electronic locks</li>
                <li>• Biometric dual control</li>
                <li>• Seismic & thermal detection</li>
                <li>• Day gate automation</li>
                <li>• Remote lock/unlock capability</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <ClockIcon className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Monitoring Services</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• UL-listed central stations</li>
                <li>• Video verification</li>
                <li>• Opening/closing procedures</li>
                <li>• Exception reporting</li>
                <li>• Direct police dispatch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Financial Security FAQs
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about securing financial institutions
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: 'What security requirements do financial institutions have?',
                answer: 'Financial institutions must comply with Bank Protection Act requirements including vault alarms, robbery alarms, surveillance systems, and UL-certified equipment. Additional requirements include FDIC/NCUA compliance, SAR reporting capabilities, and audit trail maintenance.'
              },
              {
                question: 'How do bank vault security systems work?',
                answer: 'Modern vault security combines time-delayed locks, biometric access control, seismic and thermal sensors, 24/7 monitoring, and duress code capabilities. Systems log all access attempts and integrate with central station monitoring for immediate police response.'
              },
              {
                question: 'What is required for ATM security?',
                answer: 'ATM security requires surveillance cameras with facial capture, anti-skimming technology, vibration sensors for physical attacks, lighting requirements, and transaction-matched video recording. Remote ATMs need additional perimeter detection and GPS tracking.'
              },
              {
                question: 'How much do bank security systems cost?',
                answer: 'Bank security costs vary significantly. Small credit union branches typically invest $25,000-75,000, while full-service banks range from $100,000-500,000+. Costs include UL-rated equipment, vault protection, compliance systems, and professional monitoring.'
              },
              {
                question: 'Can security systems help with compliance audits?',
                answer: 'Yes, modern systems automate compliance reporting, maintain required audit trails, generate examiner reports, and document all security tests and procedures. This significantly reduces audit preparation time and ensures consistent compliance.'
              },
              {
                question: 'What happens during a robbery alarm?',
                answer: 'Silent alarms immediately notify our UL-listed central station, which contacts law enforcement with location and alarm details. Video verification helps dispatchers provide real-time information to responding officers while maintaining covert alarm status.'
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

      {/* CTA Section */}
      <CTA
        title="Secure Your Financial Institution Today"
        subtitle="Get a compliance review and custom security assessment"
        showFeatures={true}
      />
    </>
  );
}