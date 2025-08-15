import { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections';
import { SITE_CONFIG } from '@/lib/utils/constants';
import {
  CpuChipIcon,
  CloudIcon,
  FingerPrintIcon,
  VideoCameraIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  LockClosedIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Top Security Technology Trends for 2025: What Businesses Need to Know',
  description: 'Stay ahead with the latest security innovations: AI-powered analytics, cloud integration, biometric access control, edge computing, and more.',
  keywords: 'security technology trends 2025, AI security systems, cloud security, biometric access control, edge computing security, smart security systems',
  openGraph: {
    title: 'Top Security Technology Trends for 2025',
    description: 'Discover the cutting-edge security technologies that will define business protection in 2025 and beyond.',
    url: `${SITE_CONFIG.url}/blog/security-technology-trends-2025`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Technology Trends 2025'},
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-05T00:00:00.000Z',
    authors: ['Security Dynamics Inc.']},
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog/security-technology-trends-2025`}};

// Schema markup
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Top Security Technology Trends for 2025: What Businesses Need to Know',
  description: 'Stay ahead with the latest security innovations: AI-powered analytics, cloud integration, biometric access control, edge computing, and more.',
  image: SITE_CONFIG.ogImage,
  datePublished: '2025-01-05T00:00:00.000Z',
  dateModified: '2025-01-05T00:00:00.000Z',
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
    '@id': `${SITE_CONFIG.url}/blog/security-technology-trends-2025`
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
      name: 'Security Technology Trends 2025',
      item: `${SITE_CONFIG.url}/blog/security-technology-trends-2025`
    }
  ]
};

export default function SecurityTechnologyTrends2025Page() {
  const trends = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Video Analytics',
      description: 'Advanced artificial intelligence that can detect unusual behavior, identify individuals, and predict security threats before they occur.',
      benefits: [
        'Reduce false alarms by up to 95%',
        'Automatic threat detection and alerts',
        'Behavioral pattern recognition',
        'Real-time incident response'
      ]
    },
    {
      icon: CloudIcon,
      title: 'Cloud-Based Security Management',
      description: 'Centralized control of all security systems from anywhere, with automatic updates and infinite scalability.',
      benefits: [
        'Access from any device, anywhere',
        'Automatic software updates',
        'Reduced IT infrastructure costs',
        'Enhanced disaster recovery'
      ]
    },
    {
      icon: FingerPrintIcon,
      title: 'Advanced Biometric Access Control',
      description: 'Multi-factor authentication using fingerprints, facial recognition, and even behavioral biometrics for ultimate security.',
      benefits: [
        'Eliminate lost or stolen credentials',
        'Touchless entry options',
        'Integration with time & attendance',
        'Audit trail for compliance'
      ]
    },
    {
      icon: VideoCameraIcon,
      title: 'Edge Computing for Video Surveillance',
      description: 'Process video data at the camera level, reducing bandwidth needs and enabling faster response times.',
      benefits: [
        'Reduced network bandwidth by 70%',
        'Faster alert notifications',
        'Enhanced privacy protection',
        'Lower storage costs'
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: 'Zero Trust Security Architecture',
      description: 'A comprehensive approach that verifies every user and device, regardless of location or network.',
      benefits: [
        'Enhanced cybersecurity posture',
        'Granular access control',
        'Reduced insider threat risk',
        'Compliance with regulations'
      ]
    },
    {
      icon: ChartBarIcon,
      title: 'Predictive Security Analytics',
      description: 'Use historical data and machine learning to predict and prevent security incidents before they happen.',
      benefits: [
        'Proactive threat prevention',
        'Optimized security staffing',
        'Risk assessment insights',
        'ROI measurement tools'
      ]
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <Script
        id="schema-article"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)}}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)}}
      />

      {/* Hero Section */}
      <Hero
        title="Top Security Technology Trends for 2025"
        subtitle="Stay Ahead of the Curve"
        description="Discover the cutting-edge technologies that will transform business security this year"
        showEmergencyBadge={false}
      />

      {/* Main Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Meta */}
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>January 5, 2025</span>
              <span>•</span>
              <span>6 min read</span>
              <span>•</span>
              <span>Technology</span>
            </div>
            <Link href="/blog" className="text-red-600 hover:text-red-700 font-medium">
              ← Back to Blog
            </Link>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              The security industry is experiencing a technological revolution. As we move through 2025, 
              businesses face increasingly sophisticated threats that require equally advanced solutions. 
              From AI-powered analytics to cloud-based management systems, the latest innovations are 
              transforming how we protect people, property, and assets.
            </p>
            <p className="text-lg text-gray-600">
              In this comprehensive guide, we'll explore the six most impactful security technology 
              trends that are reshaping the industry and what they mean for your business.
            </p>
          </div>

          {/* Trends Section */}
          <div className="space-y-16">
            {trends.map((trend, index) => (
              <section key={index} className="relative">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
                      <trend.icon className="w-8 h-8 text-red-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {index + 1}. {trend.title}
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                      {trend.description}
                    </p>
                    
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <LightBulbIcon className="w-5 h-5 mr-2 text-yellow-500" />
                        Key Benefits:
                      </h3>
                      <ul className="space-y-2">
                        {trend.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Implementation Guide */}
          <section className="mt-16 bg-slate-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How to Implement These Technologies
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Assess Your Current System</h3>
                  <p className="text-gray-600">
                    Start with a comprehensive security audit to identify gaps and opportunities for improvement.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Prioritize Based on Risk</h3>
                  <p className="text-gray-600">
                    Focus on technologies that address your highest security risks and compliance requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Plan for Integration</h3>
                  <p className="text-gray-600">
                    Ensure new technologies work seamlessly with your existing systems and workflows.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Partner with Experts</h3>
                  <p className="text-gray-600">
                    Work with experienced security professionals who understand both the technology and your industry.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mt-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The Future of Security is Here
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              These technologies aren't just concepts – they're practical solutions available today 
              that can dramatically improve your security posture while reducing operational costs. 
              The key is choosing the right combination of technologies for your specific needs and 
              implementing them strategically.
            </p>
            <p className="text-lg text-gray-700">
              As cyber and physical threats continue to evolve, staying current with security 
              technology isn't optional – it's essential for protecting your business, employees, 
              and assets.
            </p>
          </section>

          {/* CTA Box */}
          <div className="mt-12 bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
            <LockClosedIcon className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Modernize Your Security?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Get a Professional consultation to discover which technologies will have the biggest impact 
              on your security and bottom line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://ocyrus.app.n8n.cloud/form/a96519af-6dc7-438a-a754-3d3eb830bdf7" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Schedule Consultation
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/blog/signs-security-system-needs-upgrade"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Is Your System Outdated?
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                href="/blog/signs-security-system-needs-upgrade"
                className="group bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-200"
              >
                <h4 className="font-semibold text-gray-900 group-hover:text-red-600 mb-2">
                  7 Signs Your Business Security System Needs an Upgrade
                </h4>
                <p className="text-sm text-gray-600">
                  Learn the warning signs that indicate it's time to modernize your security infrastructure.
                </p>
              </Link>
              
              <Link 
                href="/blog/security-system-maintenance-checklist"
                className="group bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-200"
              >
                <h4 className="font-semibold text-gray-900 group-hover:text-red-600 mb-2">
                  The Complete Security System Maintenance Checklist
                </h4>
                <p className="text-sm text-gray-600">
                  Keep your security system running at peak performance with regular maintenance.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}