import { Metadata } from 'next';
import { GuidePageTemplate } from '@/components/templates/GuidePageTemplate';
import { SITE_CONFIG } from '@/lib/utils/constants';
import { 
  CurrencyDollarIcon,
  ChartBarIcon,
  CalculatorIcon,
  ShieldCheckIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Business Security System Cost Guide 2025 | Complete Pricing Breakdown',
  description: 'Comprehensive guide to commercial security system costs in 2025. Learn about equipment pricing, installation fees, monitoring costs, and ROI for NJ & PA businesses.',
  keywords: 'business security system cost, commercial security pricing, security system installation cost, security monitoring fees, security ROI calculator',
  openGraph: {
    title: 'Business Security System Cost Guide 2025',
    description: 'Everything you need to know about security system costs for your business. Equipment, installation, monitoring & ROI breakdown.',
    url: `${SITE_CONFIG.url}/guides/business-security-system-cost`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Business Security System Cost Guide',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/guides/business-security-system-cost`,
  },
};

// Schema markup
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Business Security System Cost Guide 2025',
  description: 'Comprehensive guide to commercial security system costs including equipment, installation, and monitoring fees.',
  image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
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
      name: 'Guides',
      item: `${SITE_CONFIG.url}/learning-center`
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Security System Cost Guide',
      item: `${SITE_CONFIG.url}/guides/business-security-system-cost`
    }
  ]
};

const guideSections = [
  {
    title: 'Understanding Security System Pricing',
    icon: CurrencyDollarIcon,
    content: `Commercial security systems are priced based on several factors that vary significantly depending on your business needs. Unlike residential systems, commercial installations require more robust equipment, professional-grade monitoring, and often must meet specific compliance requirements.

The total cost of a business security system includes:
• Equipment costs (cameras, sensors, control panels)
• Professional installation fees
• Monthly monitoring services
• Maintenance and support
• Optional features and integrations

Most businesses in New Jersey and Pennsylvania invest between $2,500 and $15,000 for initial setup, with monthly monitoring ranging from $50 to $500 depending on the level of service required.`
  },
  {
    title: 'Equipment Costs Breakdown',
    icon: ChartBarIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Equipment represents the largest upfront investment in your security system. Here's what to expect for commercial-grade components:
        </p>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-4">Video Surveillance Equipment</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• HD Cameras (2MP): $150-$300 each</li>
            <li>• 4K Cameras: $300-$600 each</li>
            <li>• PTZ Cameras: $800-$2,000 each</li>
            <li>• Network Video Recorder: $500-$2,000</li>
            <li>• Video Management Software: $50-$200 per camera</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-4">Access Control Systems</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Card Readers: $200-$500 per door</li>
            <li>• Biometric Readers: $500-$1,500 per door</li>
            <li>• Control Panels: $500-$2,000</li>
            <li>• Access Cards: $3-$10 each</li>
            <li>• Management Software: $500-$2,000</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-4">Intrusion Detection</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Motion Sensors: $40-$150 each</li>
            <li>• Door/Window Contacts: $20-$50 each</li>
            <li>• Glass Break Detectors: $50-$150 each</li>
            <li>• Control Panel: $200-$800</li>
            <li>• Keypads: $100-$300 each</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'Installation and Setup Fees',
    icon: CalculatorIcon,
    content: `Professional installation is crucial for commercial security systems. Unlike DIY residential options, business installations require certified technicians who understand commercial building codes, network infrastructure, and compliance requirements.

Installation costs typically include:

Labor Rates:
• Basic installation: $75-$150 per hour
• Complex integrations: $150-$250 per hour
• Emergency/after-hours: $200-$350 per hour

Project Fees:
• Small business (under 5,000 sq ft): $1,000-$3,000
• Medium business (5,000-20,000 sq ft): $3,000-$8,000
• Large facilities (over 20,000 sq ft): $8,000-$20,000+

Additional costs may include:
• Wiring and cable runs: $1-$3 per foot
• Network configuration: $500-$2,000
• System programming: $500-$1,500
• Training for your staff: $250-$1,000`
  },
  {
    title: 'Monthly Monitoring Costs',
    icon: ClockIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Professional monitoring ensures 24/7 protection and rapid response to security events. Monitoring costs vary based on the services included:
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Cost</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Features</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Basic Monitoring</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">$50-$100</td>
                <td className="px-6 py-4 text-gray-700">Alarm monitoring, basic dispatch</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Enhanced Monitoring</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">$100-$250</td>
                <td className="px-6 py-4 text-gray-700">Video verification, priority response</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Premium Monitoring</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">$250-$500</td>
                <td className="px-6 py-4 text-gray-700">Full integration, virtual guard tours</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Enterprise</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">$500+</td>
                <td className="px-6 py-4 text-gray-700">Custom solutions, dedicated support</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Additional monitoring services may include environmental monitoring ($25-$50/month), fire alarm monitoring ($35-$75/month), and access control management ($50-$150/month).
        </p>
      </div>
    )
  },
  {
    title: 'Cost Factors and Variables',
    icon: ChartBarIcon,
    content: `Several factors influence the total cost of your security system:

Business Size and Layout:
• Square footage of coverage area
• Number of entry/exit points
• Building construction type
• Multiple floors or buildings
• Outdoor vs indoor coverage needs

Industry Requirements:
• Healthcare: HIPAA compliance adds 20-30% to costs
• Financial: Enhanced encryption and audit trails
• Retail: POS integration and analytics
• Government: CJIS compliance and clearances

Technology Choices:
• Wired vs wireless systems (wireless costs 10-20% more)
• On-premise vs cloud storage
• AI-powered analytics vs basic recording
• Integration with existing systems

Location Factors:
• Urban areas may have higher labor costs
• Historic buildings require special installation
• Multi-site businesses need centralized management
• Local permit and inspection fees ($100-$500)`
  },
  {
    title: 'ROI and Cost Justification',
    icon: ShieldCheckIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          While security systems require significant investment, they provide measurable returns through loss prevention, operational efficiency, and risk mitigation:
        </p>

        <div className="bg-green-50 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-4">Direct Cost Savings</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <CheckCircleIcon className="w-5 h-5 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Insurance Discounts:</strong> 5-20% reduction in premiums</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="w-5 h-5 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Theft Prevention:</strong> Average loss prevention of $15,000/year</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="w-5 h-5 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Reduced Security Staff:</strong> Save $30,000-$50,000 per guard position</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="w-5 h-5 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>False Alarm Fines:</strong> Avoid $50-$500 per incident</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-4">Operational Benefits</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Improved employee productivity through access control</li>
            <li>• Remote management reduces facility visits</li>
            <li>• Evidence for disputes and liability claims</li>
            <li>• Compliance with industry regulations</li>
            <li>• Enhanced customer confidence and trust</li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed font-medium">
          Most businesses see full ROI within 18-24 months through combined savings and loss prevention.
        </p>
      </div>
    )
  },
  {
    title: 'Financing and Budget Options',
    icon: CurrencyDollarIcon,
    content: `Understanding that security is a significant investment, we offer flexible payment options to fit your budget:

Purchase Options:
• Outright Purchase: Best long-term value, full ownership
• Lease-to-Own: Fixed monthly payments, ownership after term
• Equipment Lease: Lower monthly costs, upgrade flexibility
• Security-as-a-Service: All-inclusive monthly fee

Financing Programs:
• 0% financing for 12-24 months (qualified buyers)
• Low-interest loans through partner banks
• Section 179 tax deductions for equipment
• Municipal lease programs for government entities

Budget-Friendly Strategies:
• Phase implementation over time
• Start with critical areas first
• Choose scalable systems
• Consider certified pre-owned equipment
• Bundle services for discounts

Many businesses start with basic coverage and expand as budget allows. Our consultants can design a phased approach that provides immediate protection while planning for future growth.`
  }
];

const relatedGuides = [
  {
    title: 'Wired vs Wireless Security Systems',
    href: '/guides/wired-vs-wireless-security-systems',
    description: 'Compare the pros and cons of wired and wireless security solutions'
  },
  {
    title: 'Choosing a Security Company',
    href: '/guides/choosing-security-company',
    description: 'Essential factors to consider when selecting a security provider'
  },
  {
    title: 'PA & NJ Surveillance Laws',
    href: '/blog/pa-nj-surveillance-laws',
    description: 'Understanding legal requirements for business surveillance'
  }
];

export default function SecurityCostGuidePage() {
  return (
    <>
      {/* Schema Markup */}
      <Script id="schema-1" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <Script id="schema-2" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Page Content */}
      <GuidePageTemplate
        title="Business Security System Cost Guide"
        subtitle="2025 Complete Pricing Breakdown"
        description="Get transparent pricing information to budget for your commercial security system. From equipment costs to monitoring fees, understand every aspect of your security investment."
        readTime="12 min"
        lastUpdated="January 2025"
        sections={guideSections}
        relatedGuides={relatedGuides}
      />
    </>
  );
}