import { Metadata } from 'next';
import { getGuideBySlug } from '@/lib/data/guides';
import { generateArticleSchema } from '@/lib/seo/schema';
import { COMPANY_INFO, SITE_CONFIG } from '@/lib/utils/constants';
import { GuidePageTemplate } from '@/components/templates/GuidePageTemplate';
import { 
  CheckCircleIcon,
  XCircleIcon,
  HomeIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

const guideSlug = 'home-security-buyers-guide';
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
    title: 'System Types Comparison',
    icon: ChartBarIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Understanding the different types of home security systems is the first step in choosing 
          the right protection for your family.
        </p>
        
        <div className="overflow-x-auto my-8">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  System Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Best For
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pros
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cons
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4">
                  <strong>Professionally Monitored</strong>
                </td>
                <td className="px-6 py-4">
                  Families wanting 24/7 protection
                </td>
                <td className="px-6 py-4">
                  <ul className="list-disc list-inside text-sm">
                    <li>24/7 monitoring</li>
                    <li>Police dispatch</li>
                    <li>Fire/medical alerts</li>
                  </ul>
                </td>
                <td className="px-6 py-4">
                  <ul className="list-disc list-inside text-sm">
                    <li>Monthly fees</li>
                    <li>Contracts required</li>
                  </ul>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4">
                  <strong>Self-Monitored</strong>
                </td>
                <td className="px-6 py-4">
                  Tech-savvy homeowners
                </td>
                <td className="px-6 py-4">
                  <ul className="list-disc list-inside text-sm">
                    <li>No monthly fees</li>
                    <li>Full control</li>
                    <li>Mobile alerts</li>
                  </ul>
                </td>
                <td className="px-6 py-4">
                  <ul className="list-disc list-inside text-sm">
                    <li>You handle alerts</li>
                    <li>No dispatch</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">
                  <strong>Unmonitored</strong>
                </td>
                <td className="px-6 py-4">
                  Budget-conscious deterrent seekers
                </td>
                <td className="px-6 py-4">
                  <ul className="list-disc list-inside text-sm">
                    <li>Lowest cost</li>
                    <li>Deterrent effect</li>
                    <li>Local alarms</li>
                  </ul>
                </td>
                <td className="px-6 py-4">
                  <ul className="list-disc list-inside text-sm">
                    <li>No remote alerts</li>
                    <li>Limited protection</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-lg">
          <p className="font-semibold text-blue-900 mb-2">Our Recommendation:</p>
          <p className="text-blue-800">
            For most families, professionally monitored systems provide the best peace of mind. 
            The monthly cost is often offset by insurance discounts and the invaluable 24/7 protection.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Smart Home Integration',
    icon: HomeIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Modern security systems can integrate seamlessly with your smart home devices, creating 
          a connected ecosystem that's both convenient and secure.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">Popular Integrations</h3>
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="border rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3 flex items-center">
              <ShieldCheckIcon className="h-6 w-6 text-red-600 mr-2" />
              Voice Assistants
            </h4>
            <p className="text-gray-700 mb-3">
              Control your security system with Alexa, Google Assistant, or Siri.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Arm/disarm with voice commands</li>
              <li>• Check system status</li>
              <li>• Control smart locks</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3 flex items-center">
              <ShieldCheckIcon className="h-6 w-6 text-red-600 mr-2" />
              Smart Lighting
            </h4>
            <p className="text-gray-700 mb-3">
              Automate lights based on security events or schedules.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Lights on when motion detected</li>
              <li>• Vacation mode simulation</li>
              <li>• Emergency lighting paths</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3 flex items-center">
              <ShieldCheckIcon className="h-6 w-6 text-red-600 mr-2" />
              Smart Locks
            </h4>
            <p className="text-gray-700 mb-3">
              Keyless entry with full access control and monitoring.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Remote lock/unlock</li>
              <li>• Temporary access codes</li>
              <li>• Auto-lock when armed</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3 flex items-center">
              <ShieldCheckIcon className="h-6 w-6 text-red-600 mr-2" />
              Thermostats
            </h4>
            <p className="text-gray-700 mb-3">
              Save energy and maintain comfort with intelligent climate control.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Adjust when away</li>
              <li>• Freeze prevention</li>
              <li>• Energy savings</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'DIY vs Professional Installation',
    icon: WrenchScrewdriverIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          One of the biggest decisions you'll make is whether to install the system yourself 
          or hire professionals. Both options have their merits.
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-green-900">DIY Installation</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-green-800">Lower upfront cost</span>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-green-800">Install on your schedule</span>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-green-800">Easy to relocate</span>
              </div>
              <div className="flex items-start">
                <XCircleIcon className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-red-800">Time-consuming setup</span>
              </div>
              <div className="flex items-start">
                <XCircleIcon className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-red-800">Limited technical support</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Professional Installation</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-blue-800">Expert placement & setup</span>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-blue-800">Hardwired reliability</span>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-blue-800">Ongoing support included</span>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-blue-800">Clean, hidden wiring</span>
              </div>
              <div className="flex items-start">
                <XCircleIcon className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-red-800">Higher initial investment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Monitoring Options',
    icon: ShieldCheckIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          The monitoring service you choose is just as important as the equipment. Here's what 
          to look for in a monitoring provider.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">Key Features to Consider</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-red-600 pl-6">
            <h4 className="font-semibold mb-2">Redundant Monitoring Centers</h4>
            <p className="text-gray-700">
              Look for providers with multiple monitoring centers to ensure service continuity 
              even during natural disasters or power outages.
            </p>
          </div>
          <div className="border-l-4 border-red-600 pl-6">
            <h4 className="font-semibold mb-2">Cellular Backup</h4>
            <p className="text-gray-700">
              Systems should use cellular communication as primary or backup to prevent defeat 
              by cutting phone lines.
            </p>
          </div>
          <div className="border-l-4 border-red-600 pl-6">
            <h4 className="font-semibold mb-2">Two-Way Voice</h4>
            <p className="text-gray-700">
              Speak directly with monitoring operators through your panel during emergencies 
              for faster, more accurate response.
            </p>
          </div>
          <div className="border-l-4 border-red-600 pl-6">
            <h4 className="font-semibold mb-2">Mobile App Control</h4>
            <p className="text-gray-700">
              Arm/disarm, view cameras, and receive alerts from anywhere using your smartphone.
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded-lg">
          <p className="font-semibold text-yellow-900 mb-2">Important Note:</p>
          <p className="text-yellow-800">
            Always verify that your monitoring service is UL-Listed. This certification ensures 
            they meet strict standards for reliability, redundancy, and response procedures.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Cost Considerations',
    icon: CurrencyDollarIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Understanding the full cost of a security system helps you budget appropriately and 
          avoid surprises. Here's a breakdown of typical expenses.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 my-6">
          <h3 className="text-xl font-semibold mb-4">Typical Cost Breakdown</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Cost Category</th>
                <th className="text-right py-2">DIY Range</th>
                <th className="text-right py-2">Professional Range</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">Equipment</td>
                <td className="text-right">$200-$800</td>
                <td className="text-right">$500-$2,500</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Installation</td>
                <td className="text-right">$0 (DIY)</td>
                <td className="text-right">$100-$500</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Monthly Monitoring</td>
                <td className="text-right">$10-$40</td>
                <td className="text-right">$30-$60</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Annual Service</td>
                <td className="text-right">Not included</td>
                <td className="text-right">Often included</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-4">Money-Saving Tips</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-2xl font-bold text-red-600 mr-3">1.</span>
            <div>
              <strong>Check Insurance Discounts:</strong> Most homeowners insurance offers 
              5-20% discounts for monitored security systems.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-2xl font-bold text-red-600 mr-3">2.</span>
            <div>
              <strong>Bundle Services:</strong> Combining security with home automation 
              often reduces overall costs.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-2xl font-bold text-red-600 mr-3">3.</span>
            <div>
              <strong>Avoid Long Contracts:</strong> Look for month-to-month options or 
              shorter contract terms for flexibility.
            </div>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: 'Insurance Benefits',
    icon: DocumentCheckIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          A properly installed and monitored security system doesn't just protect your home – 
          it can also lead to significant savings on your homeowners insurance.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-green-900">Average Savings</h3>
            <p className="text-3xl font-bold text-green-700 mb-2">5-20%</p>
            <p className="text-green-800">
              Off your annual homeowners insurance premium with a monitored security system
            </p>
          </div>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-blue-900">Requirements</h3>
            <ul className="space-y-2 text-blue-800">
              <li>✓ 24/7 professional monitoring</li>
              <li>✓ UL-Listed monitoring center</li>
              <li>✓ Certificate of installation</li>
              <li>✓ Fire/smoke detection (higher discount)</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 mt-6">
          <strong>Pro Tip:</strong> Contact your insurance provider before purchasing to understand 
          their specific requirements and discount amounts. Some insurers offer higher discounts 
          for systems with fire monitoring or water leak detection.
        </p>

        <div className="bg-gray-100 rounded-lg p-8 mt-8">
          <h3 className="text-xl font-bold mb-6">Your Decision Framework</h3>
          <p className="mb-6 text-gray-700">
            Use these questions to guide your security system selection:
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                1
              </span>
              <div>
                <p className="font-semibold">What's your primary goal?</p>
                <p className="text-sm text-gray-600 mt-1">Deterrence only? Active monitoring? Smart home integration?</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                2
              </span>
              <div>
                <p className="font-semibold">What's your budget?</p>
                <p className="text-sm text-gray-600 mt-1">Consider both upfront costs and monthly fees</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                3
              </span>
              <div>
                <p className="font-semibold">How tech-savvy are you?</p>
                <p className="text-sm text-gray-600 mt-1">DIY requires comfort with technology and troubleshooting</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                4
              </span>
              <div>
                <p className="font-semibold">Do you rent or own?</p>
                <p className="text-sm text-gray-600 mt-1">Renters need wireless, easily moveable systems</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                5
              </span>
              <div>
                <p className="font-semibold">What's your home layout?</p>
                <p className="text-sm text-gray-600 mt-1">Larger homes may need professional design for full coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function HomeSecurityGuidePage() {
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
        subtitle="Everything You Need to Know Before Buying"
        description={guide.description}
        readTime={guide.readTime}
        lastUpdated={new Date(guide.lastUpdated).toLocaleDateString()}
        sections={guideSections}
        relatedGuides={[
          {
            title: "Business Security Guide",
            href: "/learning-center/guides/complete-guide-business-security-2024",
            description: "Complete guide for commercial security systems"
          },
          {
            title: "Security Systems",
            href: "/services/security-systems",
            description: "Explore our residential security solutions"
          }
        ]}
      />
    </>
  );
}