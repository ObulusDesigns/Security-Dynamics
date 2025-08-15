import { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import { darkSectionClasses, darkSectionPatternStyle, sectionPadding } from '@/lib/utils/sectionStyles';
import {
  ScaleIcon,
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ClockIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Terms of Service | Security Dynamics Inc.',
  description: 'Security Dynamics terms of service. Understand our service agreements, warranties, and policies for security system installation and monitoring services.',
  keywords: 'terms of service, service agreement, security monitoring terms, installation terms, security dynamics terms',
  openGraph: {
    title: 'Terms of Service | Security Dynamics Inc.',
    description: 'Our terms and conditions for security system installation and monitoring services.',
    url: `${SITE_CONFIG.url}/terms`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Dynamics Terms of Service'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/terms`},
  robots: {
    index: true,
    follow: true}};

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
      name: 'Terms of Service',
      item: `${SITE_CONFIG.url}/terms`
    }
  ]
};

export default function TermsOfServicePage() {
  const lastUpdated = 'January 1, 2025';

  const sections = [
    {
      id: 'acceptance-of-terms',
      title: 'Acceptance of Terms',
      icon: DocumentCheckIcon,
      content: [
        {
          description: 'By accessing our website or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.'
        },
        {
          subtitle: 'Service Agreement',
          items: [
            'These terms supplement any signed service agreements',
            'Specific service contracts may contain additional terms',
            'In case of conflict, signed agreements take precedence',
            'Terms apply to all Security Dynamics services'
          ]
        }
      ]
    },
    {
      id: 'services-provided',
      title: 'Services Provided',
      icon: ShieldCheckIcon,
      content: [
        {
          subtitle: 'Installation Services',
          items: [
            'Professional security system design and installation',
            'Equipment configuration and testing',
            'User training on system operation',
            'Initial system certification and documentation'
          ]
        },
        {
          subtitle: 'Monitoring Services',
          items: [
            '24/7 central station monitoring (when subscribed)',
            'Emergency dispatch coordination',
            'System status monitoring and alerts',
            'Regular communication testing'
          ]
        },
        {
          subtitle: 'Maintenance Services',
          items: [
            'Scheduled preventive maintenance',
            'Emergency repair services',
            'Software updates and upgrades',
            'Technical support during business hours'
          ]
        }
      ]
    },
    {
      id: 'customer-responsibilities',
      title: 'Customer Responsibilities',
      icon: ExclamationTriangleIcon,
      content: [
        {
          subtitle: 'System Access',
          items: [
            'Provide safe access to installation locations',
            'Ensure adequate power and internet connectivity',
            'Maintain environmental conditions suitable for equipment',
            'Grant necessary permissions for work completion'
          ]
        },
        {
          subtitle: 'System Use',
          items: [
            'Use system only for lawful purposes',
            'Maintain confidentiality of access codes',
            'Promptly report system issues or malfunctions',
            'Follow all operating instructions and guidelines',
            'Ensure authorized users are properly trained'
          ]
        },
        {
          subtitle: 'Account Management',
          items: [
            'Keep contact information current',
            'Pay all fees and charges on time',
            'Notify us of any changes in property ownership',
            'Maintain required permits and licenses'
          ]
        }
      ]
    },
    {
      id: 'payment-terms',
      title: 'Payment Terms',
      icon: CurrencyDollarIcon,
      content: [
        {
          subtitle: 'Installation Fees',
          items: [
            'Due upon completion of installation',
            'Includes all equipment and labor specified',
            'Additional work billed at standard rates',
            'Payment methods: check, credit card, ACH'
          ]
        },
        {
          subtitle: 'Monitoring Fees',
          items: [
            'Billed monthly or annually in advance',
            'Automatic renewal unless cancelled',
            'Price adjustments with 30-day notice',
            'Late fees apply after 10-day grace period'
          ]
        },
        {
          subtitle: 'Service Calls',
          items: [
            'Warranty repairs at no charge',
            'Non-warranty service at current rates',
            'Emergency service rates apply after hours',
            'Estimates provided for major repairs'
          ]
        }
      ]
    },
    {
      id: 'warranties-limitations',
      title: 'Warranties and Limitations',
      icon: ClockIcon,
      content: [
        {
          subtitle: 'Equipment Warranty',
          items: [
            'Manufacturer warranties pass through to customer',
            'Installation warranty: 1 year from completion',
            'Does not cover damage from misuse or neglect',
            'Warranty service during normal business hours'
          ]
        },
        {
          subtitle: 'Limitation of Liability',
          description: 'Our liability is limited to the cost of services provided. We are not liable for indirect, consequential, or incidental damages. Maximum liability shall not exceed the amount paid for services in the preceding 12 months.'
        },
        {
          subtitle: 'Service Limitations',
          items: [
            'No guarantee against criminal acts or losses',
            'Monitoring dependent on communication availability',
            'Response times subject to local conditions',
            'Equipment subject to technical limitations'
          ]
        }
      ]
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: ScaleIcon,
      content: [
        {
          subtitle: 'Customer Termination',
          items: [
            '30-day written notice required',
            'Final billing for services rendered',
            'Equipment removal may incur charges',
            'No refund of prepaid monitoring fees'
          ]
        },
        {
          subtitle: 'Company Termination',
          items: [
            'Immediate termination for non-payment',
            'Termination for violation of terms',
            'Right to refuse service for safety reasons',
            '30-day notice for convenience termination'
          ]
        }
      ]
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)}}
      />

      {/* Hero Section */}
      <Hero
        title="Terms of Service"
        subtitle="Service Agreement"
        description="Please read these terms carefully before using our services"
        showEmergencyBadge={false}
      />

      {/* Last Updated - Dark Section */}
      <section className={`py-4 ${darkSectionClasses}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            Effective Date: <span className="text-white font-semibold">{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* Introduction - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              These Terms of Service ("Terms") govern your use of Security Dynamics Inc.'s services, including security system installation, monitoring, and maintenance services. By engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-900 font-semibold mb-2">Important Note:</p>
              <p className="text-amber-800">
                These general terms supplement, but do not replace, any specific written agreements you may have with Security Dynamics Inc. In the event of any conflict, the terms of your specific service agreement will prevail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections - Alternating Backgrounds */}
      {sections.map((section, index) => (
        <section 
          key={section.id}
          id={section.id}
          className={index % 2 === 0 ? `${sectionPadding} ${darkSectionClasses}` : 'py-16 md:py-24 bg-white'}
        >
          {/* Dark sections get pattern */}
          {index % 2 === 0 && (
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0" style={darkSectionPatternStyle} />
            </div>
          )}
          
          <div className={`${index % 2 === 0 ? 'relative z-10' : ''} max-w-4xl mx-auto px-4 sm:px-6 lg:px-8`}>
            <div className="flex items-center mb-8">
              <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-red-900/30' : 'bg-red-100'} rounded-xl flex items-center justify-center mr-4`}>
                <section.icon className={`w-6 h-6 ${index % 2 === 0 ? 'text-red-400' : 'text-red-600'}`} />
              </div>
              <h2 className={`text-3xl font-bold ${index % 2 === 0 ? 'text-white' : 'text-gray-900'}`}>
                {section.title}
              </h2>
            </div>

            <div className="space-y-8">
              {section.content.map((subsection, idx) => (
                <div key={idx}>
                  {subsection.subtitle && (
                    <h3 className={`text-xl font-semibold mb-4 ${index % 2 === 0 ? 'text-white' : 'text-gray-900'}`}>
                      {subsection.subtitle}
                    </h3>
                  )}
                  
                  {subsection.description && (
                    <p className={`mb-4 ${index % 2 === 0 ? 'text-gray-300' : 'text-gray-700'}`}>
                      {subsection.description}
                    </p>
                  )}
                  
                  {subsection.items && (
                    <ul className="space-y-3">
                      {subsection.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start">
                          <div className={`w-2 h-2 ${index % 2 === 0 ? 'bg-red-400' : 'bg-red-600'} rounded-full mt-2 mr-3 flex-shrink-0`} />
                          <span className={index % 2 === 0 ? 'text-gray-300' : 'text-gray-700'}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Additional Terms - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Intellectual Property */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content, trademarks, and intellectual property on our website and in our services remain the property of Security Dynamics Inc. or our licensors. You may not use, reproduce, or distribute our intellectual property without written permission.
            </p>
          </div>

          {/* Indemnification */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-700">
              You agree to indemnify and hold Security Dynamics Inc., its officers, employees, and agents harmless from any claims, damages, or expenses arising from your use of our services or violation of these terms.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700">
              These Terms shall be governed by the laws of the State of New Jersey. Any disputes shall be resolved in the courts of Mercer County, New Jersey. Both parties waive any right to a jury trial.
            </p>
          </div>

          {/* Modifications */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated effective date. Your continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </div>

          {/* Severability */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Severability</h2>
            <p className="text-gray-700">
              If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect. The unenforceable provision shall be replaced with an enforceable provision that most closely reflects the original intent.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Dark Background */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <EnvelopeIcon className="w-16 h-16 text-red-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            If you have any questions about these Terms of Service or need clarification on any points, please contact us.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-lg mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Legal Department</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong className="text-white">Email:</strong>{' '}
                <a href={`mailto:legal@${COMPANY_INFO.email.split('@')[1]}`} className="text-red-400 hover:text-red-300">
                  legal@{COMPANY_INFO.email.split('@')[1]}
                </a>
              </p>
              <p>
                <strong className="text-white">Phone:</strong>{' '}
                <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-red-400 hover:text-red-300">
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p>
                <strong className="text-white">Mail:</strong><br />
                Security Dynamics Inc.<br />
                Legal Department<br />
                520 Route 33<br />
                Millstone, NJ 08535
              </p>
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-8 max-w-2xl mx-auto">
            For general inquiries or service requests, please visit our{' '}
            <Link href="https://ocyrus.app.n8n.cloud/form/a96519af-6dc7-438a-a754-3d3eb830bdf7" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">
              Contact Page
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}