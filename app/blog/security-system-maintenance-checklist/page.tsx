import { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import {
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  CalendarIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Security System Maintenance Checklist 2025 | Keep Your Business Safe',
  description: 'Complete security system maintenance checklist for businesses. Monthly, quarterly & annual tasks to ensure reliable protection. Downloadable guide included.',
  keywords: 'security system maintenance, security camera maintenance, access control maintenance, alarm system maintenance, security system checklist, preventive maintenance',
  openGraph: {
    title: 'Security System Maintenance Checklist | Essential Guide 2025',
    description: 'Keep your security systems running perfectly with this comprehensive maintenance checklist. Prevent failures before they happen.',
    url: `${SITE_CONFIG.url}/blog/security-system-maintenance-checklist`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security System Maintenance Checklist'},
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    authors: ['Security Dynamics Inc.']},
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog/security-system-maintenance-checklist`}};

// Schema markup
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Security System Maintenance Checklist 2025',
  description: 'Complete security system maintenance checklist for businesses. Monthly, quarterly & annual tasks.',
  image: `${SITE_CONFIG.url}/blog/maintenance-checklist-hero.jpg`,
  datePublished: '2025-01-15T00:00:00.000Z',
  dateModified: '2025-01-15T00:00:00.000Z',
  author: {
    '@type': 'Organization',
    name: 'Security Dynamics Inc.',
    url: SITE_CONFIG.url
  },
  publisher: {
    '@type': 'Organization',
    name: 'Security Dynamics Inc.',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/logo-1.webp`
    }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_CONFIG.url}/blog/security-system-maintenance-checklist`
  }
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
      name: 'Blog',
      item: `${SITE_CONFIG.url}/blog`
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Security System Maintenance Checklist',
      item: `${SITE_CONFIG.url}/blog/security-system-maintenance-checklist`
    }
  ]
};

export default function SecurityMaintenanceChecklistPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script id="schema-1" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)}}
      />
      <Script id="schema-2" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)}}
      />

      {/* Hero Section */}
      <Hero title="Security System Maintenance Checklist"
        subtitle="Keep Your Business Protection Running at Peak Performance"
        description="Regular maintenance prevents 90% of security system failures. Use this comprehensive checklist to ensure your cameras, alarms, and access control systems work when you need them most."
        
        
        primaryCta={{
          text: "Download PDF Checklist",
          href: "/resources/maintenance-checklist-pdf"
        }}
      />

      {/* Article Content - White Background */}
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Meta */}
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Published January 15, 2025</span>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-500">15 min read</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Your security system is your business's first line of defense against theft, vandalism, and other threats. 
              But like any technology, it requires regular maintenance to function properly. Studies show that 
              <strong>properly maintained security systems are 3x more reliable</strong> than neglected ones.
            </p>

            <p className="text-gray-700 mb-8">
              This comprehensive checklist covers everything from basic camera cleaning to advanced system diagnostics. 
              Whether you handle maintenance in-house or work with a professional service provider, this guide ensures 
              nothing gets overlooked.
            </p>
          </div>

          {/* Why Maintenance Matters Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Security System Maintenance Matters</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: ExclamationTriangleIcon,
                  title: 'Prevent System Failures',
                  description: '67% of security breaches occur due to equipment failure'
                },
                {
                  icon: CheckCircleIcon,
                  title: 'Ensure Reliability',
                  description: 'Maintained systems have 99.9% uptime vs 85% for unmaintained'
                },
                {
                  icon: CalendarIcon,
                  title: 'Extend Equipment Life',
                  description: 'Regular maintenance doubles the lifespan of security equipment'
                },
                {
                  icon: WrenchScrewdriverIcon,
                  title: 'Reduce Repair Costs',
                  description: 'Preventive maintenance costs 75% less than emergency repairs'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <benefit.icon className="w-10 h-10 text-primary mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Monthly Maintenance Tasks */}
          <section className="mb-16">
            <div className="bg-primary-50 rounded-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <CalendarIcon className="w-8 h-8 mr-3 text-primary" />
                Monthly Maintenance Tasks
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Video Surveillance System</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Clean camera lenses with microfiber cloth and lens cleaner</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Check all camera views for obstructions (grown vegetation, spider webs)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Verify night vision/infrared functionality on all cameras</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Test motion detection zones and sensitivity settings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Review and delete unnecessary stored footage to free up space</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Access Control System</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Test all card readers and keypads for proper operation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Review access logs for unusual patterns or failed attempts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Update employee access permissions (add new, remove terminated)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Check door locks and strikes for proper alignment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Test emergency release mechanisms and panic buttons</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Intrusion Detection System</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Test all motion sensors with walk tests</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Check door and window contacts for proper operation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Test alarm panel communication with monitoring center</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Verify all user codes and update as needed</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Check backup battery levels and replace if below 80%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Quarterly Maintenance Tasks */}
          <section className="mb-16">
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <CalendarIcon className="w-8 h-8 mr-3 text-primary" />
                Quarterly Maintenance Tasks
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">System Infrastructure</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Inspect all cable connections for corrosion or damage</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Clean equipment rooms and ensure proper ventilation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Test UPS systems and backup power supplies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Update firmware on all devices (cameras, NVRs, access panels)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Review and optimize network bandwidth usage</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Documentation & Training</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Update emergency contact lists and procedures</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Conduct refresher training for system users</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Review and update security policies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Document any system changes or modifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Test incident response procedures with staff</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Annual Maintenance Tasks */}
          <section className="mb-16">
            <div className="bg-primary-900 text-white rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <CalendarIcon className="w-8 h-8 mr-3 text-accent" />
                Annual Maintenance Tasks
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Professional Inspection</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-blue-100">Schedule comprehensive system inspection by certified technician</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-blue-100">Perform full system audit and vulnerability assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-blue-100">Replace all batteries (sensors, panels, backup systems)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-blue-100">Deep clean all equipment including inside housings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-blue-100">Review system design for coverage gaps or needed upgrades</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">System Optimization</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-blue-100">Recalibrate all cameras for optimal image quality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-blue-100">Update software to latest stable versions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-blue-100">Review and optimize recording settings and retention</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-blue-100">Test integration with other building systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-blue-100">Create system backup and disaster recovery plan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Warning Signs Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Warning Signs Your System Needs Immediate Attention</h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
              <div className="flex">
                <ExclamationTriangleIcon className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-2">Critical Warning Signs</h3>
                  <ul className="space-y-2 text-red-800">
                    <li>• Cameras showing "No Signal" or black screens</li>
                    <li>• Access control doors not locking/unlocking properly</li>
                    <li>• Alarm system showing communication failures</li>
                    <li>• Frequent false alarms or system errors</li>
                    <li>• Recording gaps or missing footage</li>
                    <li>• Unusual noises from equipment (buzzing, clicking)</li>
                    <li>• Visible damage to cables or equipment</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-gray-700">
              If you notice any of these warning signs, contact your security provider immediately. 
              Delaying repairs could leave your business vulnerable and may result in more expensive fixes later.
            </p>
          </section>

          {/* DIY vs Professional Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">DIY vs. Professional Maintenance</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tasks You Can Do Yourself</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-2 flex-shrink-0" />
                    <span>Cleaning camera lenses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-2 flex-shrink-0" />
                    <span>Basic visual inspections</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-2 flex-shrink-0" />
                    <span>Testing user codes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-2 flex-shrink-0" />
                    <span>Reviewing footage and logs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 mr-2 flex-shrink-0" />
                    <span>Updating contact information</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tasks Requiring Professionals</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <WrenchScrewdriverIcon className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Firmware updates and software upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <WrenchScrewdriverIcon className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Cable repairs or replacements</span>
                  </li>
                  <li className="flex items-start">
                    <WrenchScrewdriverIcon className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>System reconfiguration</span>
                  </li>
                  <li className="flex items-start">
                    <WrenchScrewdriverIcon className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Component replacements</span>
                  </li>
                  <li className="flex items-start">
                    <WrenchScrewdriverIcon className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Integration troubleshooting</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cost Savings Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Cost of Neglecting Maintenance</h2>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">$3,500</div>
                  <p className="text-gray-600">Average emergency repair cost</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">72 hrs</div>
                  <p className="text-gray-600">Average downtime for major failures</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">$45,000</div>
                  <p className="text-gray-600">Average loss from security breach</p>
                </div>
              </div>
              
              <p className="text-gray-700 mt-8 text-center">
                Compare this to an average annual maintenance contract of <strong>$1,200-2,400</strong> 
                and the choice becomes clear.
              </p>
            </div>
          </section>

          {/* Download CTA */}
          <section className="mb-16">
            <div className="bg-primary-50 rounded-xl p-8 text-center">
              <ClipboardDocumentCheckIcon className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Get Your Printable Maintenance Checklist
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Download our comprehensive PDF checklist with monthly, quarterly, and annual tasks. 
                Keep it in your equipment room for easy reference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/resources/maintenance-checklist-pdf"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Download PDF Checklist
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-primary border-2 border-primary px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Schedule Maintenance Service
                </Link>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Keep Your Security Investment Protected</h2>
            <p className="text-gray-700 mb-6">
              Regular maintenance is the key to maximizing your security system's effectiveness and lifespan. 
              By following this checklist, you'll prevent most common failures, reduce costs, and ensure your 
              business stays protected 24/7.
            </p>
            <p className="text-gray-700">
              Remember: The best time to maintain your security system is before something goes wrong. 
              Start your maintenance routine today and enjoy peace of mind knowing your protection is always ready.
            </p>
          </section>
        </div>
      </article>

      {/* Related Articles - Dark Blue Background */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Related Security Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/blog/signs-security-system-needs-upgrade"
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all border border-white/20"
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                7 Signs Your Security System Needs an Upgrade
              </h3>
              <p className="text-blue-100 mb-4">
                Is your security system outdated? Learn the warning signs and when it's time to modernize.
              </p>
              <span className="text-accent flex items-center">
                Read More <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/guides/choosing-security-provider"
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all border border-white/20"
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                How to Choose a Security System Provider
              </h3>
              <p className="text-blue-100 mb-4">
                Essential questions to ask and factors to consider when selecting a security partner.
              </p>
              <span className="text-accent flex items-center">
                Read More <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/services/24-7-central-station-monitoring"
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all border border-white/20"
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                Professional Monitoring Services
              </h3>
              <p className="text-blue-100 mb-4">
                Learn how 24/7 professional monitoring can enhance your security system's effectiveness.
              </p>
              <span className="text-accent flex items-center">
                Learn More <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Professional Maintenance Support?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our certified technicians provide comprehensive maintenance services to keep your security systems running perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Schedule Maintenance Service
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}