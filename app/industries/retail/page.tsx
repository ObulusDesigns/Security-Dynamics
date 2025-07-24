import { Metadata } from 'next';
import { Hero, CTA } from '@/components/sections';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
// Dark section imports removed as they are no longer used
import {
  ShoppingBagIcon,
  ShieldCheckIcon,
  VideoCameraIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Retail Security Systems | Store Protection & Loss Prevention | Security Dynamics',
  description: 'Advanced retail security systems for stores in NJ & PA. Reduce shrinkage, prevent theft, enhance customer experience with AI-powered surveillance & analytics.',
  keywords: 'retail security systems, store security cameras, retail loss prevention, shoplifting prevention, POS integration, retail analytics, EAS systems, retail theft prevention',
  openGraph: {
    title: 'Retail Security Systems | Smart Store Protection',
    description: 'Reduce shrinkage by 50%+ with intelligent retail security. AI analytics, POS integration, customer insights.',
    url: `${SITE_CONFIG.url}/industries/retail`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Retail Security Systems'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/industries/retail`}};

// Schema markup
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_CONFIG.url}/industries/retail#service`,
  name: 'Retail Security Systems',
  description: 'Comprehensive security and loss prevention solutions for retail stores, shopping centers, and boutiques.',
  provider: {
    '@type': 'SecuritySystemInstallationService',
    name: 'Security Dynamics Inc.',
    telephone: COMPANY_INFO.phone},
  areaServed: ['New Jersey', 'Pennsylvania'],
  serviceType: 'Retail Security'};

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
      name: 'Retail',
      item: `${SITE_CONFIG.url}/industries/retail`
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much can retail security systems reduce shrinkage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Well-designed retail security systems typically reduce shrinkage by 30-60%. With AI analytics and POS integration, some retailers see up to 80% reduction in theft. The key is combining visible deterrents with intelligent detection and rapid response.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is retail video analytics and how does it help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retail video analytics uses AI to detect suspicious behavior, track customer patterns, monitor queue lengths, and identify potential theft in real-time. It also provides valuable business insights like heat mapping, conversion rates, and staff optimization data.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can security cameras integrate with POS systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, POS integration links transaction data with video footage, making it easy to investigate suspicious transactions, voids, refunds, and employee theft. This integration is crucial for identifying internal theft, which accounts for 30% of retail losses.'
      }
    },
    {
      '@type': 'Question',
      name: 'What are the best security solutions for small retail stores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Small retailers benefit from cloud-based systems with 4-8 HD cameras, smart motion detection, mobile alerts, and remote viewing. Essential features include entrance/exit monitoring, cash register coverage, and stockroom protection. Systems start around $2,500-5,000.'
      }
    }
  ]
};

export default function RetailSecurityPage() {
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
      <Hero title="Retail Security Systems"
        subtitle="Smart Loss Prevention & Store Analytics"
        description="Reduce shrinkage, prevent theft, and gain valuable customer insights with AI-powered retail security solutions. Protect profits while enhancing the shopping experience."
        
        
        primaryCta={{
          text: "Get Retail Security Assessment",
          href: "/contact"
        }}
      />

      {/* Retail Security Challenges Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Retail Security Challenges We Solve
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Modern retail faces complex security threats that impact your bottom line
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingBagIcon,
                title: 'Shoplifting & ORC',
                description: 'Combat professional shoplifters and organized retail crime with AI detection and real-time alerts.'
              },
              {
                icon: UserGroupIcon,
                title: 'Employee Theft',
                description: 'Prevent internal theft with POS integration, transaction monitoring, and behavior analytics.'
              },
              {
                icon: CurrencyDollarIcon,
                title: 'Sweet-hearting',
                description: 'Detect and prevent employees giving unauthorized discounts or free merchandise to accomplices.'
              },
              {
                icon: ChartBarIcon,
                title: 'Inventory Shrinkage',
                description: 'Track merchandise from delivery to sale with comprehensive video coverage and analytics.'
              },
              {
                icon: VideoCameraIcon,
                title: 'Blind Spots',
                description: 'Eliminate coverage gaps in fitting rooms, stockrooms, and high-theft areas with strategic camera placement.'
              },
              {
                icon: LockClosedIcon,
                title: 'After-Hours Security',
                description: 'Protect against break-ins with smart intrusion detection and immediate police response.'
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

      {/* Retail Solutions Section - Light Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
                Intelligent Retail Security Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Beyond basic surveillance - our systems provide loss prevention and business intelligence in one platform.
              </p>
              
              <div className="space-y-6">
                {[
                  'AI-Powered Behavior Detection',
                  'POS Transaction Matching',
                  'People Counting & Heat Maps',
                  'Electronic Article Surveillance (EAS)',
                  'Facial Recognition for Known Offenders',
                  'Mobile Alerts for Incidents',
                  'Cloud Storage with Smart Search',
                  'Customer Experience Analytics'
                ].map((solution, index) => (
                  <div key={index} className="flex items-center">
                    <ShieldCheckIcon className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Retail Security ROI</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Shrinkage Reduction</span>
                    <span className="text-red-600 font-bold">50-70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Employee Productivity</span>
                    <span className="text-red-600 font-bold">20-30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Customer Insights Value</span>
                    <span className="text-red-600 font-bold">15-25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Insurance Savings</span>
                    <span className="text-red-600 font-bold">10-15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">Average payback period: 6-12 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retail Analytics Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Turn Security Into Business Intelligence
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Modern retail security provides valuable insights beyond loss prevention
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <ChartBarIcon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Analytics</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Track customer flow and dwell times</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Identify high-traffic areas and dead zones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Measure conversion rates by department</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Optimize store layout and displays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Analyze queue lengths and wait times</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <UserGroupIcon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Operations Insights</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Monitor staff coverage and response times</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Verify compliance with procedures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Track delivery and stocking efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Identify training opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Measure customer service quality</span>
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
              Retail Security Success Story
            </h2>
            <p className="text-xl text-gray-600">
              How a regional retailer cut losses by 65% in one year
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Multi-Location Retail Chain - 12 Stores</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-600">Challenges:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 3.2% shrinkage rate</li>
                  <li>• No POS integration</li>
                  <li>• Blind spots in stores</li>
                  <li>• Rising ORC incidents</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-600">Solutions Implemented:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• AI behavior analytics</li>
                  <li>• Full POS integration</li>
                  <li>• 100% floor coverage</li>
                  <li>• Facial recognition alerts</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-lg font-semibold mb-4 text-red-600">Results After 12 Months:</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">65%</div>
                  <p className="text-sm text-gray-600">Shrinkage reduction</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">$420K</div>
                  <p className="text-sm text-gray-600">Annual savings</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">82%</div>
                  <p className="text-sm text-gray-600">Case resolution rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">23%</div>
                  <p className="text-sm text-gray-600">Sales increase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Types Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Security Solutions by Store Type
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Customized approaches for different retail environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: 'Apparel & Fashion',
                features: ['Fitting room monitoring', 'EAS tagging', 'High-value item protection']
              },
              {
                type: 'Grocery & Convenience',
                features: ['Self-checkout monitoring', 'Alcohol section coverage', 'Loading dock security']
              },
              {
                type: 'Electronics',
                features: ['Display case alarms', 'Demo unit tracking', 'Service area protection']
              },
              {
                type: 'Pharmacy',
                features: ['Controlled substance security', 'HIPAA compliance', 'Prescription area monitoring']
              },
              {
                type: 'Jewelry',
                features: ['Showcase protection', 'Panic buttons', 'Vault monitoring']
              },
              {
                type: 'Big Box Retail',
                features: ['Wide area coverage', 'Outdoor monitoring', 'Return fraud prevention']
              }
            ].map((store, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <ShoppingBagIcon className="w-10 h-10 text-red-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{store.type}</h3>
                <ul className="space-y-2">
                  {store.features.map((feature, idx) => (
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
              Retail Security FAQs
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about retail loss prevention
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: 'How much can retail security systems reduce shrinkage?',
                answer: 'Well-designed retail security systems typically reduce shrinkage by 30-60%. With AI analytics and POS integration, some retailers see up to 80% reduction in theft. The key is combining visible deterrents with intelligent detection and rapid response.'
              },
              {
                question: 'What is retail video analytics and how does it help?',
                answer: 'Retail video analytics uses AI to detect suspicious behavior, track customer patterns, monitor queue lengths, and identify potential theft in real-time. It also provides valuable business insights like heat mapping, conversion rates, and staff optimization data.'
              },
              {
                question: 'Can security cameras integrate with POS systems?',
                answer: 'Yes, POS integration links transaction data with video footage, making it easy to investigate suspicious transactions, voids, refunds, and employee theft. This integration is crucial for identifying internal theft, which accounts for 30% of retail losses.'
              },
              {
                question: 'What are the best security solutions for small retail stores?',
                answer: 'Small retailers benefit from cloud-based systems with 4-8 HD cameras, smart motion detection, mobile alerts, and remote viewing. Essential features include entrance/exit monitoring, cash register coverage, and stockroom protection. Systems start around $2,500-5,000.'
              },
              {
                question: 'How do I prevent organized retail crime (ORC)?',
                answer: 'Combat ORC with facial recognition to identify known offenders, real-time alerts to staff, license plate recognition in parking areas, and collaboration with law enforcement and other retailers through information sharing platforms.'
              },
              {
                question: 'What about customer privacy concerns?',
                answer: 'Modern systems balance security with privacy through features like privacy masking for sensitive areas, clear signage about surveillance, secure data storage with limited access, and compliance with state privacy laws. We help you implement security responsibly.'
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
        title="Stop Retail Theft Today"
        subtitle="Get a professional security assessment and see how much you could save"
        showFeatures={true}
      />
    </>
  );
}