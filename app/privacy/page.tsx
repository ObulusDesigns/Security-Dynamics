import { Metadata } from 'next';
import { Hero } from '@/components/sections';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import { darkSectionClasses, darkSectionPatternStyle, sectionPadding } from '@/lib/utils/sectionStyles';
import {
  ShieldCheckIcon,
  LockClosedIcon,
  DocumentTextIcon,
  UserGroupIcon,
  InformationCircleIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Privacy Policy | Security Dynamics Inc.',
  description: 'Security Dynamics privacy policy. Learn how we collect, use, and protect your personal information. Your privacy and security are our priority.',
  keywords: 'privacy policy, data protection, personal information, security dynamics privacy',
  openGraph: {
    title: 'Privacy Policy | Security Dynamics Inc.',
    description: 'Our commitment to protecting your privacy and personal information.',
    url: `${SITE_CONFIG.url}/privacy`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Dynamics Privacy Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Security Dynamics',
    description: 'How we protect your personal information and privacy.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
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
      name: 'Privacy Policy',
      item: `${SITE_CONFIG.url}/privacy`
    }
  ]
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 1, 2025';

  const sections = [
    {
      id: 'information-we-collect',
      title: 'Information We Collect',
      icon: DocumentTextIcon,
      content: [
        {
          subtitle: 'Information You Provide',
          items: [
            'Contact information (name, email, phone number, address)',
            'Business information for commercial accounts',
            'Service preferences and requirements',
            'Communication history and support requests'
          ]
        },
        {
          subtitle: 'Information Collected Automatically',
          items: [
            'Device and browser information',
            'IP address and location data',
            'Website usage patterns and preferences',
            'Security system performance data (with consent)'
          ]
        }
      ]
    },
    {
      id: 'how-we-use-information',
      title: 'How We Use Your Information',
      icon: UserGroupIcon,
      content: [
        {
          subtitle: 'Service Delivery',
          items: [
            'Process service requests and installations',
            'Provide 24/7 monitoring services',
            'Send service updates and alerts',
            'Maintain and improve system performance'
          ]
        },
        {
          subtitle: 'Communication',
          items: [
            'Respond to inquiries and support requests',
            'Send important security notifications',
            'Provide service reminders and updates',
            'Share relevant security tips and information'
          ]
        }
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: ShieldCheckIcon,
      content: [
        {
          subtitle: 'We Do Not Sell Your Information',
          description: 'Security Dynamics never sells, rents, or trades your personal information to third parties for marketing purposes.'
        },
        {
          subtitle: 'Limited Sharing',
          items: [
            'Emergency responders when alarm events occur',
            'Service partners necessary for installation/maintenance',
            'Legal authorities when required by law',
            'Business transfers in case of merger or acquisition'
          ]
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: LockClosedIcon,
      content: [
        {
          subtitle: 'Protection Measures',
          items: [
            'Industry-standard encryption for data transmission',
            'Secure servers with regular security updates',
            'Limited access to personal information',
            'Regular security audits and assessments',
            'Employee training on data protection'
          ]
        }
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      icon: InformationCircleIcon,
      content: [
        {
          subtitle: 'You Have the Right To',
          items: [
            'Access your personal information',
            'Request corrections to inaccurate data',
            'Opt-out of marketing communications',
            'Request deletion of your information (subject to legal requirements)',
            'Receive your data in a portable format'
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
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <Hero
        title="Privacy Policy"
        subtitle="Your Privacy Matters"
        description="We are committed to protecting your personal information and being transparent about how we use it"
        showEmergencyBadge={false}
      />

      {/* Last Updated - Dark Section */}
      <section className={`py-4 ${darkSectionClasses}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            Last Updated: <span className="text-white font-semibold">{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* Introduction - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Security Dynamics Inc. ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-lg text-gray-600">
              By using our services or providing us with information, you consent to the practices described in this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Sections - Alternating Backgrounds */}
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

      {/* Additional Sections - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to improve your experience on our website. You can control cookies through your browser settings. Disabling cookies may limit certain features of our website.
            </p>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a minor, please contact us immediately.
            </p>
          </div>

          {/* Changes to Policy */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
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
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-lg mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong className="text-white">Email:</strong>{' '}
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-red-400 hover:text-red-300">
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p>
                <strong className="text-white">Phone:</strong>{' '}
                <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-red-400 hover:text-red-300">
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p>
                <strong className="text-white">Address:</strong><br />
                Security Dynamics Inc.<br />
                520 Route 33<br />
                Millstone, NJ 08535
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}