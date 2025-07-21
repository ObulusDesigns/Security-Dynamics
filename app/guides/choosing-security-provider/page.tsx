import { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import { darkSectionClasses, darkSectionPatternStyle, sectionPadding } from '@/lib/utils/sectionStyles';
import {
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  PhoneIcon,
  ArrowRightIcon,
  ClockIcon,
  StarIcon,
  TrophyIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

// SEO Metadata
export const metadata: Metadata = {
  title: 'How to Choose a Security Provider | Complete Business Guide 2025',
  description: 'Essential guide for selecting the right security company. Learn what questions to ask, red flags to avoid, and how to evaluate security providers for your business.',
  keywords: 'choosing security provider, security company selection, business security vendor, security provider comparison, commercial security companies',
  openGraph: {
    title: 'Choosing a Security Provider | Complete Selection Guide',
    description: 'Expert guide to selecting the right security company for your business. Essential questions and evaluation criteria.',
    url: `${SITE_CONFIG.url}/guides/choosing-security-provider`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Choosing a Security Provider Guide',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Choose the Right Security Provider',
    description: 'Complete guide to selecting a security company for your business.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/guides/choosing-security-provider`,
  },
};

// Schema markup
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
      name: 'Learning Center',
      item: `${SITE_CONFIG.url}/learning-center`
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Guides',
      item: `${SITE_CONFIG.url}/guides`
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Choosing a Security Provider',
      item: `${SITE_CONFIG.url}/guides/choosing-security-provider`
    }
  ]
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Choose a Security Provider: Complete Business Guide',
  description: 'Comprehensive guide for businesses on selecting the right security company. Includes evaluation criteria, questions to ask, and red flags to avoid.',
  author: {
    '@type': 'Organization',
    name: 'Security Dynamics Inc.'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Security Dynamics Inc.',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/logo-1.webp`
    }
  },
  datePublished: '2025-01-20',
  dateModified: '2025-01-20',
  image: SITE_CONFIG.ogImage,
  articleSection: 'Security Guides',
  wordCount: 3000
};

// Questions data
const essentialQuestions = [
  {
    category: 'Licensing & Credentials',
    icon: DocumentCheckIcon,
    questions: [
      'Are you licensed in [your state]? What is your license number?',
      'Do you carry general liability and workers\' compensation insurance?',
      'Are your technicians certified? Which certifications do they hold?',
      'Are you a member of any professional security associations?',
      'Can you provide proof of insurance and bonding?'
    ]
  },
  {
    category: 'Experience & Expertise',
    icon: TrophyIcon,
    questions: [
      'How long have you been in business?',
      'How many businesses like mine have you secured?',
      'Can you provide references from similar businesses?',
      'Do you have experience with my specific industry?',
      'What manufacturers do you partner with?'
    ]
  },
  {
    category: 'Services & Capabilities',
    icon: WrenchScrewdriverIcon,
    questions: [
      'Do you offer 24/7 monitoring services?',
      'Where is your monitoring center located?',
      'What is your average response time for alarms?',
      'Do you provide installation, maintenance, and monitoring?',
      'Can you integrate with existing systems?'
    ]
  },
  {
    category: 'Technology & Equipment',
    icon: ShieldCheckIcon,
    questions: [
      'What brands and models do you recommend?',
      'Are your systems proprietary or can I use other providers?',
      'Do you offer mobile app access and remote management?',
      'How often do you update or upgrade technology?',
      'What cybersecurity measures protect the system?'
    ]
  },
  {
    category: 'Pricing & Contracts',
    icon: CurrencyDollarIcon,
    questions: [
      'What are all the costs involved (equipment, installation, monitoring)?',
      'Are there any hidden fees or charges?',
      'What are your contract terms and cancellation policies?',
      'Do you offer lease, purchase, or both options?',
      'What happens if I need to relocate my business?'
    ]
  },
  {
    category: 'Support & Service',
    icon: ChatBubbleLeftRightIcon,
    questions: [
      'What is your response time for service calls?',
      'Do you offer 24/7 technical support?',
      'How do you handle system maintenance?',
      'What is your warranty coverage?',
      'Do you provide training for my staff?'
    ]
  }
];

const redFlags = [
  {
    warning: 'High-pressure sales tactics',
    description: 'Legitimate companies give you time to make informed decisions'
  },
  {
    warning: 'No physical address or local presence',
    description: 'Reputable providers have established local offices'
  },
  {
    warning: 'Unusually low prices',
    description: 'Quality security systems require proper investment'
  },
  {
    warning: 'Long-term contracts with no flexibility',
    description: 'Be wary of 5+ year contracts with harsh cancellation terms'
  },
  {
    warning: 'Lack of proper licensing or insurance',
    description: 'Never work with unlicensed or uninsured providers'
  },
  {
    warning: 'No references or poor online reviews',
    description: 'Established companies should have verifiable success stories'
  },
  {
    warning: 'Proprietary systems that lock you in',
    description: 'Avoid systems that only work with one provider'
  },
  {
    warning: 'Unwillingness to provide written estimates',
    description: 'Professional companies document all proposals'
  }
];

export default function ChoosingSecurityProviderPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="schema-article"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* Hero Section */}
      <Hero
        title="Choosing a Security Provider"
        subtitle="Your Complete Selection Guide"
        description="Learn how to evaluate security companies, ask the right questions, and select the perfect partner to protect your business."
        showEmergencyBadge={false}
      />

      {/* Article Info Bar */}
      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                12 min read
              </span>
              <span>Updated January 2025</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-red-600 font-semibold">Buying Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction - White Background */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed">
              Selecting the right security provider is one of the most critical decisions you'll make 
              for your business protection. The company you choose will be responsible for safeguarding 
              your assets, employees, and operations—making thorough evaluation essential.
            </p>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-8 not-prose">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="w-6 h-6 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-red-900 mb-2">Critical Importance</p>
                  <p className="text-red-800">
                    Your security provider will have access to your facility and knowledge of your 
                    security measures. A poor choice can leave you vulnerable or locked into expensive, 
                    ineffective systems. Take time to evaluate thoroughly.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What This Guide Covers:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Essential questions to ask every potential provider</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Key evaluation criteria for comparing companies</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Red flags that signal providers to avoid</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Step-by-step selection process</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Contract terms and negotiation tips</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Evaluation Process - Dark Background */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              The Selection Process
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Follow this proven framework to evaluate and select the right security partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Define Your Needs',
                description: 'Document your security requirements, budget, timeline, and specific concerns',
                icon: ClipboardDocumentCheckIcon
              },
              {
                step: '2',
                title: 'Research Providers',
                description: 'Identify 3-5 potential companies through referrals, reviews, and industry directories',
                icon: MagnifyingGlassIcon
              },
              {
                step: '3',
                title: 'Initial Screening',
                description: 'Verify licensing, insurance, and basic qualifications before proceeding',
                icon: DocumentCheckIcon
              },
              {
                step: '4',
                title: 'Request Assessments',
                description: 'Schedule on-site security assessments with qualified providers',
                icon: BuildingOfficeIcon
              },
              {
                step: '5',
                title: 'Compare Proposals',
                description: 'Evaluate detailed proposals including technology, services, and pricing',
                icon: ArrowRightIcon
              },
              {
                step: '6',
                title: 'Check References',
                description: 'Contact provided references and verify online reviews and ratings',
                icon: UserGroupIcon
              },
              {
                step: '7',
                title: 'Review Contracts',
                description: 'Carefully examine terms, warranties, and service level agreements',
                icon: DocumentCheckIcon
              },
              {
                step: '8',
                title: 'Make Decision',
                description: 'Select provider based on value, not just price, and negotiate final terms',
                icon: CheckCircleIcon
              },
              {
                step: '9',
                title: 'Document Everything',
                description: 'Keep records of all agreements, specifications, and commitments',
                icon: ClipboardDocumentCheckIcon
              }
            ].map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Questions - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Essential Questions to Ask
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Use these questions to thoroughly evaluate each potential security provider
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {essentialQuestions.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.questions.map((question, qIndex) => (
                    <li key={qIndex} className="flex items-start">
                      <span className="text-red-600 mr-2 font-semibold">{qIndex + 1}.</span>
                      <span className="text-gray-700">{question}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div className="flex items-start">
              <LightBulbIcon className="w-8 h-8 text-blue-600 mt-0.5 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Pro Tip: Document Everything</h3>
                <p className="text-blue-800">
                  Create a spreadsheet to track responses from each provider. This makes it easier to 
                  compare options objectively and ensures you don't forget important details. Request 
                  all answers in writing when possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Evaluation Criteria - Dark Background */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Evaluation Criteria
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Rate each provider on these critical factors to make an objective decision
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Company Stability',
                items: [
                  'Years in business (5+ preferred)',
                  'Financial stability',
                  'Local presence and reputation',
                  'Number of clients served',
                  'Industry certifications'
                ]
              },
              {
                title: 'Technical Expertise',
                items: [
                  'Range of solutions offered',
                  'Technology partnerships',
                  'System design capabilities',
                  'Integration experience',
                  'Innovation and updates'
                ]
              },
              {
                title: 'Service Quality',
                items: [
                  'Response time guarantees',
                  '24/7 support availability',
                  'Technician qualifications',
                  'Training programs',
                  'Customer satisfaction rates'
                ]
              },
              {
                title: 'Monitoring Services',
                items: [
                  'UL-listed central station',
                  'Redundant monitoring centers',
                  'Average response times',
                  'False alarm procedures',
                  'Emergency protocols'
                ]
              },
              {
                title: 'Contract Terms',
                items: [
                  'Flexible contract lengths',
                  'Clear pricing structure',
                  'Upgrade/downgrade options',
                  'Cancellation policies',
                  'Warranty coverage'
                ]
              },
              {
                title: 'Value Proposition',
                items: [
                  'Total cost of ownership',
                  'ROI projections',
                  'Included vs. extra services',
                  'Long-term partnership value',
                  'Growth accommodation'
                ]
              }
            ].map((criteria, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">{criteria.title}</h3>
                <ul className="space-y-2">
                  {criteria.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <StarIcon className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flags - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ExclamationTriangleIcon className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Red Flags to Avoid
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Watch for these warning signs that indicate a provider may not be trustworthy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {redFlags.map((flag, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-start">
                  <XCircleIcon className="w-6 h-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-2">{flag.warning}</h3>
                    <p className="text-red-800 text-sm">{flag.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Warning Signs:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Door-to-door sales or unsolicited visits claiming "special deals"</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Requests for large upfront payments before any work begins</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Vague or evasive answers to direct questions</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>No written documentation or formal proposals</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Claims that seem too good to be true</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Making Your Decision - Dark Background */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircleIcon className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">
            Making the Final Decision
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-left max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-6">Decision Checklist:</h3>
            
            <div className="space-y-4">
              {[
                'The provider has all required licenses and insurance',
                'They have proven experience with businesses like yours',
                'References checked out positively',
                'The proposal addresses all your security needs',
                'Pricing is transparent with no hidden fees',
                'Contract terms are fair and flexible',
                'You feel comfortable with their team and approach',
                'They offer the technology and features you need',
                'Support and response times meet your requirements',
                'The company demonstrates long-term stability'
              ].map((item, index) => (
                <label key={index} className="flex items-start cursor-pointer">
                  <input type="checkbox" className="mt-1 mr-3 rounded text-red-600" />
                  <span className="text-gray-300">{item}</span>
                </label>
              ))}
            </div>

            <div className="mt-8 p-4 bg-green-900/30 border border-green-800/50 rounded-lg">
              <p className="text-green-300 font-semibold">
                ✓ If you can check all boxes, you've likely found the right provider!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - White Background */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <ShieldCheckIcon className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Experience the Security Dynamics Difference
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            See why businesses throughout New Jersey and Pennsylvania choose Security Dynamics. 
            We welcome your questions and encourage thorough evaluation.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Why Security Dynamics?</h3>
            <ul className="space-y-3 text-left text-gray-700">
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>35+ years serving NJ & PA businesses</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Fully licensed and insured</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>UL-listed 24/7 monitoring center</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Transparent pricing, flexible contracts</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Local team, rapid response</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Schedule Free Assessment
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call {COMPANY_INFO.phone}
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            No pressure, no obligations. Just honest security advice from local experts.
          </p>
        </div>
      </section>
    </>
  );
}