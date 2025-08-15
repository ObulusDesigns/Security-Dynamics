import { Metadata } from 'next';
import Link from 'next/link';
import { Hero, CTA } from '@/components/sections';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
// Dark section imports removed as they are no longer used
import {
  ShieldCheckIcon,
  LockClosedIcon,
  VideoCameraIcon,
  ExclamationTriangleIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  BellAlertIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Healthcare Security Systems | Medical Facility Protection | Security Dynamics',
  description: 'HIPAA-compliant security systems for healthcare facilities in NJ & PA. Protect patients, staff, assets with access control, video surveillance & infant protection.',
  keywords: 'healthcare security systems, medical facility security, hospital access control, HIPAA compliant security, infant protection systems, pharmacy security, emergency department security, patient safety systems',
  openGraph: {
    title: 'Healthcare Security Systems | HIPAA-Compliant Solutions',
    description: 'Comprehensive security for hospitals, medical offices & healthcare facilities. 24/7 monitoring, access control, patient protection.',
    url: `${SITE_CONFIG.url}/industries/healthcare`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Healthcare Security Systems'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/industries/healthcare`}};

// Schema markup
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_CONFIG.url}/industries/healthcare#service`,
  name: 'Healthcare Security Systems',
  description: 'Comprehensive security solutions for healthcare facilities including hospitals, medical offices, and clinics.',
  provider: {
    '@type': 'SecuritySystemInstallationService',
    name: 'Security Dynamics Inc.',
    telephone: COMPANY_INFO.phone},
  areaServed: ['New Jersey', 'Pennsylvania'],
  serviceType: 'Healthcare Security'};

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
      name: 'Healthcare',
      item: `${SITE_CONFIG.url}/industries/healthcare`
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the essential security requirements for healthcare facilities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Healthcare facilities require HIPAA-compliant access control, patient and staff safety systems, pharmacy security, infant protection, visitor management, and 24/7 monitoring. All systems must protect patient privacy while ensuring safety.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do healthcare security systems ensure HIPAA compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our systems include encrypted data storage, role-based access control, audit trails, privacy-compliant camera placement, and secure networks. All installations follow HIPAA guidelines for protecting patient information.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is an infant protection system and why is it important?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Infant protection systems use RFID tags to monitor newborn locations, prevent unauthorized removal, and alert staff to security breaches. These systems are critical for maternity wards and NICU units to ensure infant safety.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much do healthcare security systems cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Healthcare security system costs vary based on facility size and requirements. Basic systems for medical offices start around $5,000, while comprehensive hospital systems can range from $50,000 to $500,000+. We provide Security assessments and custom quotes.'
      }
    }
  ]
};

export default function HealthcareSecurityPage() {
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
      <Hero title="Healthcare Security Systems"
        subtitle="HIPAA-Compliant Protection for Medical Facilities"
        description="Comprehensive security solutions designed specifically for hospitals, medical offices, and healthcare facilities. Protect patients, staff, and assets while maintaining regulatory compliance."
        
        
        primaryCta={{
          text: "Get Healthcare Security Assessment",
          href: "https://ocyrus.app.n8n.cloud/form/a96519af-6dc7-438a-a754-3d3eb830bdf7"
        }}
      />

      {/* Healthcare Security Challenges Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Healthcare Security Challenges We Solve
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Medical facilities face unique security challenges that require specialized solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheckIcon,
                title: 'Patient & Staff Safety',
                description: 'Protect against workplace violence, unauthorized access, and emergency situations with comprehensive monitoring and rapid response protocols.'
              },
              {
                icon: LockClosedIcon,
                title: 'HIPAA Compliance',
                description: 'Ensure all security systems meet HIPAA requirements for patient privacy, data protection, and access control audit trails.'
              },
              {
                icon: ExclamationTriangleIcon,
                title: 'Drug Diversion Prevention',
                description: 'Secure pharmacy areas, medication rooms, and anesthesia carts with biometric access and real-time monitoring.'
              },
              {
                icon: UserGroupIcon,
                title: 'Visitor Management',
                description: 'Control and track visitor access while maintaining a welcoming environment for patients and families.'
              },
              {
                icon: BellAlertIcon,
                title: 'Infant Protection',
                description: 'RFID-based systems prevent unauthorized removal of infants from maternity and NICU areas.'
              },
              {
                icon: VideoCameraIcon,
                title: 'Emergency Department Security',
                description: 'High-risk area monitoring with panic buttons, weapons detection, and rapid law enforcement notification.'
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

      {/* Healthcare Solutions Section - Light Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
                Comprehensive Healthcare Security Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our integrated security systems are designed specifically for healthcare environments, balancing security needs with patient care requirements.
              </p>
              
              <div className="space-y-6">
                {[
                  'Access Control with Role-Based Permissions',
                  'HD Video Surveillance with Privacy Masking',
                  'Infant & Pediatric Protection Systems',
                  'Duress & Panic Alert Systems',
                  'Asset Tracking for Medical Equipment',
                  'Integration with Nurse Call Systems',
                  'Visitor Management & Screening',
                  '24/7 Central Station Monitoring'
                ].map((solution, index) => (
                  <div key={index} className="flex items-center">
                    <ShieldCheckIcon className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Healthcare Facility Types We Secure</h3>
              <div className="space-y-4">
                {[
                  { type: 'Hospitals & Medical Centers', count: '50+' },
                  { type: 'Medical Office Buildings', count: '200+' },
                  { type: 'Urgent Care Centers', count: '75+' },
                  { type: 'Surgery Centers', count: '40+' },
                  { type: 'Behavioral Health Facilities', count: '30+' },
                  { type: 'Long-Term Care Facilities', count: '60+' }
                ].map((facility, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-gray-700">{facility.type}</span>
                    <span className="text-red-600 font-bold">{facility.count} Secured</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">Trusted by healthcare facilities across New Jersey and Pennsylvania</p>
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
              Meeting Healthcare Compliance Standards
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our security solutions meet or exceed all healthcare regulatory requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                standard: 'HIPAA',
                description: 'Full compliance with privacy and security rules'
              },
              {
                standard: 'Joint Commission',
                description: 'Meeting Environment of Care standards'
              },
              {
                standard: 'CMS',
                description: 'Medicare & Medicaid requirements'
              },
              {
                standard: 'OSHA',
                description: 'Workplace safety compliance'
              }
            ].map((item, index) => (
              <div key={index} className="bg-red-50 rounded-xl p-6 text-center">
                <ClipboardDocumentCheckIcon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-600 mb-2">{item.standard}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
              Healthcare Security Success Story
            </h2>
            <p className="text-xl text-gray-600">
              How we transformed security at a major medical center
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Regional Medical Center - 450 Bed Facility</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-600">Challenges:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Outdated analog camera system</li>
                  <li>• No infant protection in maternity</li>
                  <li>• Limited pharmacy security</li>
                  <li>• Poor visitor tracking</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-600">Solutions Implemented:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 200+ HD IP cameras with analytics</li>
                  <li>• RFID infant protection system</li>
                  <li>• Biometric pharmacy access</li>
                  <li>• Integrated visitor management</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-lg font-semibold mb-4 text-red-600">Results:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">73%</div>
                  <p className="text-sm text-gray-600">Reduction in security incidents</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">100%</div>
                  <p className="text-sm text-gray-600">HIPAA compliance achieved</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">$150K</div>
                  <p className="text-sm text-gray-600">Annual loss prevention savings</p>
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
              Healthcare Security FAQs
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about securing medical facilities
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: 'What are the essential security requirements for healthcare facilities?',
                answer: 'Healthcare facilities require HIPAA-compliant access control, patient and staff safety systems, pharmacy security, infant protection, visitor management, and 24/7 monitoring. All systems must protect patient privacy while ensuring safety.'
              },
              {
                question: 'How do healthcare security systems ensure HIPAA compliance?',
                answer: 'Our systems include encrypted data storage, role-based access control, audit trails, privacy-compliant camera placement, and secure networks. All installations follow HIPAA guidelines for protecting patient information.'
              },
              {
                question: 'What is an infant protection system and why is it important?',
                answer: 'Infant protection systems use RFID tags to monitor newborn locations, prevent unauthorized removal, and alert staff to security breaches. These systems are critical for maternity wards and NICU units to ensure infant safety.'
              },
              {
                question: 'How much do healthcare security systems cost?',
                answer: 'Healthcare security system costs vary based on facility size and requirements. Basic systems for medical offices start around $5,000, while comprehensive hospital systems can range from $50,000 to $500,000+. We provide Security assessments and custom quotes.'
              },
              {
                question: 'Can security systems integrate with existing healthcare technology?',
                answer: 'Yes, our systems integrate with nurse call systems, electronic health records (for access control), building management systems, and emergency communication platforms to create a unified security ecosystem.'
              },
              {
                question: 'What emergency features are included in healthcare security systems?',
                answer: 'Emergency features include duress buttons, lockdown capabilities, mass notification systems, automated law enforcement alerts, real-time location tracking, and integration with emergency response protocols.'
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

      {/* Resources Section - Light Gray Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
              Healthcare Security Resources
            </h2>
            <p className="text-xl text-gray-600">
              Download guides and learn more about healthcare security best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Healthcare Security Guide',
                description: 'Comprehensive guide to securing medical facilities',
                link: '/guides/healthcare-security-guide'
              },
              {
                title: 'HIPAA Compliance Checklist',
                description: 'Ensure your security meets HIPAA requirements',
                link: '/resources/hipaa-compliance-checklist'
              },
              {
                title: 'Cost Calculator',
                description: 'Estimate your healthcare security investment',
                link: '/tools/healthcare-security-calculator'
              }
            ].map((resource, index) => (
              <Link
                key={index}
                href={resource.link}
                className="group bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center text-red-600">
                  <span>Learn More</span>
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Secure Your Healthcare Facility Today"
        subtitle="Get a professional security assessment and HIPAA compliance review"
        showFeatures={true}
      />
    </>
  );
}