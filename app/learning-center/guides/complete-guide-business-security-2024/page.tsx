import { Metadata } from 'next';
import { getGuideBySlug } from '@/lib/data/guides';
import { generateArticleSchema } from '@/lib/seo/schema';
import { COMPANY_INFO, SITE_CONFIG } from '@/lib/utils/constants';
import { GuidePageTemplate } from '@/components/templates/GuidePageTemplate';
import { 
  CheckCircleIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  CameraIcon,
  ChartBarIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

const guideSlug = 'complete-guide-business-security-2024';
const guide = getGuideBySlug(guideSlug)!;

export const metadata: Metadata = {
  title: `${guide.title} | ${COMPANY_INFO.name}`,
  description: guide.description,
  keywords: guide.seoKeywords,
  openGraph: {
    title: guide.title,
    description: guide.description,
    url: `https://securitydynamicsnj.com/learning-center/guides/${guideSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: guide.featuredImage,
        width: 1200,
        height: 630,
        alt: guide.title
      }
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: guide.publishedDate,
    modifiedTime: guide.lastUpdated,
    authors: [guide.author]
  },
  twitter: {
    card: 'summary_large_image',
    title: guide.title,
    description: guide.description,
    images: [guide.featuredImage],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/learning-center/guides/${guideSlug}`,
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
      name: 'Learning Center',
      item: `${SITE_CONFIG.url}/learning-center`
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Guides',
      item: `${SITE_CONFIG.url}/learning-center#guides`
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: guide.title,
      item: `${SITE_CONFIG.url}/learning-center/guides/${guideSlug}`
    }
  ]
};

const guideSections = [
  {
    title: 'Access Control Systems',
    icon: LockClosedIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Access control is the foundation of business security. Modern systems go far beyond 
          traditional lock-and-key mechanisms, offering sophisticated solutions that provide 
          both security and convenience.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-4">Types of Access Control</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
            <div>
              <strong>Card-Based Systems:</strong> Traditional proximity cards or smart cards 
              that employees tap or swipe for entry.
            </div>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
            <div>
              <strong>Biometric Systems:</strong> Fingerprint, facial recognition, or iris 
              scanning for maximum security.
            </div>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
            <div>
              <strong>Mobile Credentials:</strong> Smartphone-based access using Bluetooth 
              or NFC technology.
            </div>
          </li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-lg">
          <p className="font-semibold text-blue-900 mb-2">Pro Tip:</p>
          <p className="text-blue-800">
            Choose a system that can scale with your business. Cloud-based access control 
            allows you to manage multiple locations from a single dashboard and easily add 
            or remove users as your team grows.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Video Surveillance',
    icon: CameraIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Modern video surveillance has evolved from grainy analog cameras to high-definition 
          IP systems with AI-powered analytics. The right camera system can deter crime, 
          provide evidence, and even improve operations.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">Camera Types and Placement</h3>
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-3">Indoor Cameras</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Dome cameras for discrete monitoring</li>
              <li>• PTZ cameras for large spaces</li>
              <li>• Turret cameras for corridors</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-3">Outdoor Cameras</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Bullet cameras for perimeters</li>
              <li>• Thermal cameras for night vision</li>
              <li>• License plate recognition cameras</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-4">AI-Powered Analytics</h3>
        <p className="text-gray-700 mb-4">
          2024's video surveillance systems offer intelligent features that go beyond recording:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Person detection vs. general motion detection</li>
          <li>Facial recognition for VIP or blacklist alerts</li>
          <li>Object detection (packages, vehicles, weapons)</li>
          <li>Crowd counting and heat mapping</li>
          <li>Loitering and intrusion detection</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Intrusion Detection',
    icon: ShieldCheckIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          A comprehensive intrusion detection system combines multiple technologies to create 
          layers of protection. Modern systems use both signature-based and anomaly-based 
          detection methods.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">Essential Components</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-gray-300 pl-6">
            <h4 className="font-semibold mb-2">Perimeter Protection</h4>
            <p className="text-gray-700">Door contacts, window sensors, and glass break detectors form your first line of defense.</p>
          </div>
          <div className="border-l-4 border-gray-300 pl-6">
            <h4 className="font-semibold mb-2">Interior Detection</h4>
            <p className="text-gray-700">Motion sensors using PIR, microwave, or dual-technology for accurate detection.</p>
          </div>
          <div className="border-l-4 border-gray-300 pl-6">
            <h4 className="font-semibold mb-2">Environmental Monitoring</h4>
            <p className="text-gray-700">Smoke, heat, water leak, and temperature sensors protect against non-criminal threats.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Integration Strategies',
    icon: ChartBarIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          The true power of modern security systems lies in integration. When your access control, 
          video surveillance, and intrusion detection work together, you create a unified 
          security ecosystem.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">Benefits of Integration</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-2xl font-bold text-red-600 mr-3">1.</span>
            <div>
              <strong>Single Interface:</strong> Manage all systems from one dashboard, 
              reducing training time and improving efficiency.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-2xl font-bold text-red-600 mr-3">2.</span>
            <div>
              <strong>Automated Responses:</strong> Door forced open? Cameras automatically 
              record, lights turn on, and security is notified.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-2xl font-bold text-red-600 mr-3">3.</span>
            <div>
              <strong>Better Intelligence:</strong> Correlate events across systems for 
              deeper insights and faster incident resolution.
            </div>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: 'ROI Calculation',
    icon: CurrencyDollarIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Understanding the return on investment for security systems helps justify the expense 
          and choose the right level of protection for your business.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-4">Cost Factors to Consider</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Direct Savings</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Reduced theft and shrinkage</li>
                <li>✓ Lower insurance premiums</li>
                <li>✓ Decreased security guard costs</li>
                <li>✓ Fewer false alarm fines</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">Indirect Benefits</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Improved employee productivity</li>
                <li>✓ Better customer confidence</li>
                <li>✓ Legal protection via video evidence</li>
                <li>✓ Operational insights from analytics</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mt-6">
          <strong>Typical ROI Timeline:</strong> Most businesses see positive ROI within 12-18 months, 
          with theft reduction alone often covering 40-60% of system costs in the first year.
        </p>
      </div>
    )
  },
  {
    title: 'Compliance Requirements',
    icon: DocumentTextIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Different industries face various compliance requirements that impact security system 
          design. Understanding these requirements ensures your system meets legal obligations 
          while protecting your business.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">Industry-Specific Requirements</h3>
        
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3 flex items-center">
              <DocumentTextIcon className="h-6 w-6 text-red-600 mr-2" />
              Healthcare (HIPAA)
            </h4>
            <ul className="space-y-2 text-gray-700 pl-8">
              <li>• Access logs retained for 6 years</li>
              <li>• Encryption for stored video</li>
              <li>• Role-based access control mandatory</li>
              <li>• Physical safeguards for IT areas</li>
            </ul>
          </div>

          <div className="border rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3 flex items-center">
              <DocumentTextIcon className="h-6 w-6 text-red-600 mr-2" />
              Retail (PCI DSS)
            </h4>
            <ul className="space-y-2 text-gray-700 pl-8">
              <li>• Cameras cannot view POS PIN entry</li>
              <li>• 90-day video retention minimum</li>
              <li>• Access control for server rooms</li>
              <li>• Visitor access procedures required</li>
            </ul>
          </div>

          <div className="border rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3 flex items-center">
              <DocumentTextIcon className="h-6 w-6 text-red-600 mr-2" />
              Cannabis Businesses
            </h4>
            <ul className="space-y-2 text-gray-700 pl-8">
              <li>• 24/7 recording of all areas</li>
              <li>• 90-day retention (NJ), 4 years (PA)</li>
              <li>• Specific camera resolution requirements</li>
              <li>• Panic buttons mandatory</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mt-8">
          <h3 className="text-xl font-bold mb-6">Implementation Checklist</h3>
          <p className="mb-6 text-gray-700">
            Use this checklist to ensure a successful security system implementation:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Planning Phase</h4>
              <ul className="space-y-2 text-gray-700">
                <li>☐ Conduct security assessment</li>
                <li>☐ Define security objectives</li>
                <li>☐ Set budget parameters</li>
                <li>☐ Review compliance requirements</li>
                <li>☐ Get stakeholder buy-in</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Implementation Phase</h4>
              <ul className="space-y-2 text-gray-700">
                <li>☐ Choose certified installer</li>
                <li>☐ Schedule installation</li>
                <li>☐ Train staff on system</li>
                <li>☐ Test all components</li>
                <li>☐ Document procedures</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function BusinessSecurityGuidePage() {
  const schema = generateArticleSchema({
    title: guide.title,
    description: guide.description,
    datePublished: guide.publishedDate,
    dateModified: guide.lastUpdated,
    image: guide.featuredImage,
    url: `https://securitydynamicsnj.com/learning-center/guides/${guideSlug}`
  });

  return (
    <>
      <Script 
        id="schema-article" 
        type="application/ld+json" 
        strategy="afterInteractive" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script 
        id="schema-breadcrumb" 
        type="application/ld+json" 
        strategy="afterInteractive" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <GuidePageTemplate
        title={guide.title}
        subtitle="Your Complete Security Planning Resource"
        description={guide.description}
        readTime={guide.readTime}
        lastUpdated={new Date(guide.lastUpdated).toLocaleDateString()}
        sections={guideSections}
        relatedGuides={[
          {
            title: "Home Security Buyer's Guide",
            href: "/learning-center/guides/home-security-buyers-guide",
            description: "Comprehensive guide for residential security systems"
          },
          {
            title: "Security Compliance Guide",
            href: "/learning-center/guides/security-compliance-regulations-guide",
            description: "Navigate regulations and compliance requirements"
          }
        ]}
      />
    </>
  );
}