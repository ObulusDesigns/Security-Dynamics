import { Metadata } from 'next';
import { getGuideBySlug } from '@/lib/data/guides';
import { generateArticleSchema } from '@/lib/seo/schema';
import { COMPANY_INFO, SITE_CONFIG } from '@/lib/utils/constants';
import { GuidePageTemplate } from '@/components/templates/GuidePageTemplate';
import { 
  CheckCircleIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  ClipboardDocumentCheckIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

const guideSlug = 'security-compliance-regulations-guide';
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
  alternates: {
    canonical: `https://securitydynamicsnj.com/learning-center/guides/${guideSlug}`}
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
    title: 'HIPAA Compliance',
    icon: ShieldCheckIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          The Health Insurance Portability and Accountability Act (HIPAA) sets strict standards 
          for protecting patient health information. Any business that handles protected health 
          information (PHI) must comply.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-4">Who Must Comply?</h3>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Covered Entities</h4>
            <ul className="text-blue-800 space-y-1 text-sm">
              <li>• Healthcare providers</li>
              <li>• Health plans</li>
              <li>• Healthcare clearinghouses</li>
              <li>• Pharmacies</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Business Associates</h4>
            <ul className="text-green-800 space-y-1 text-sm">
              <li>• Medical billing companies</li>
              <li>• IT service providers</li>
              <li>• Document storage companies</li>
              <li>• Any vendor handling PHI</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-4">Physical Security Requirements</h3>
        <div className="bg-gray-50 border rounded-lg p-6 my-6">
          <h4 className="font-semibold mb-4 flex items-center">
            <ShieldCheckIcon className="h-6 w-6 text-red-600 mr-2" />
            HIPAA Security Rule - Physical Safeguards
          </h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-red-600">Facility Access Controls</h5>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Electronic access control systems with audit trails</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Visitor management and escort procedures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Locked areas for servers and records</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-red-600">Workstation Security</h5>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Physical cable locks for computers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Privacy screens in public areas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Clean desk policies</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-red-600">Device and Media Controls</h5>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Inventory tracking of all devices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Secure disposal procedures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Encryption for portable devices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 rounded-lg">
          <p className="font-semibold text-red-900 mb-2">Penalties for Non-Compliance</p>
          <p className="text-red-800">
            HIPAA violations can result in fines from $100 to $2 million per violation, 
            with annual maximums up to $2 million per provision. Criminal penalties can 
            include imprisonment.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'PCI DSS Requirements',
    icon: DocumentTextIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          The Payment Card Industry Data Security Standard (PCI DSS) applies to any business 
          that accepts, processes, stores, or transmits credit card information.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">Compliance Levels</h3>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Annual Transactions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Requirements</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 font-medium">Level 1</td>
                <td className="px-6 py-4">Over 6 million</td>
                <td className="px-6 py-4">Annual on-site audit</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">Level 2</td>
                <td className="px-6 py-4">1-6 million</td>
                <td className="px-6 py-4">Annual self-assessment</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Level 3</td>
                <td className="px-6 py-4">20,000-1 million</td>
                <td className="px-6 py-4">Annual self-assessment</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">Level 4</td>
                <td className="px-6 py-4">Under 20,000</td>
                <td className="px-6 py-4">Annual self-assessment</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-4">Physical Security Requirements</h3>
        <div className="space-y-4 my-6">
          <div className="border-l-4 border-gray-300 pl-6">
            <h4 className="font-semibold mb-2">Requirement 9.1: Facility Entry Controls</h4>
            <p className="text-gray-700">Use video cameras and/or access control mechanisms to monitor individual physical access to sensitive areas.</p>
          </div>
          <div className="border-l-4 border-gray-300 pl-6">
            <h4 className="font-semibold mb-2">Requirement 9.2: Employee Identification</h4>
            <p className="text-gray-700">Develop procedures to distinguish between onsite personnel and visitors, including badges or access devices.</p>
          </div>
          <div className="border-l-4 border-gray-300 pl-6">
            <h4 className="font-semibold mb-2">Requirement 9.3: Physical Access to Systems</h4>
            <p className="text-gray-700">Control physical access to systems in the cardholder data environment.</p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-lg">
          <p className="font-semibold text-blue-900 mb-2">Video Surveillance Note</p>
          <p className="text-blue-800">
            PCI DSS specifically prohibits cameras from viewing PIN entry devices. Position 
            cameras carefully to avoid capturing customer PIN entries while still monitoring 
            the overall transaction area.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Fire Code Regulations',
    icon: BuildingOfficeIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Fire alarm and life safety systems are heavily regulated at both state and local levels. 
          Requirements vary significantly between New Jersey and Pennsylvania.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <BuildingOfficeIcon className="h-6 w-6 text-red-600 mr-2" />
              New Jersey Requirements
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="font-semibold mr-2">NJ Fire Code:</span>
                <span>Based on International Fire Code with state amendments</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Inspections:</span>
                <span>Annual fire alarm inspections required</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Monitoring:</span>
                <span>Central station monitoring required for commercial</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Testing:</span>
                <span>Monthly testing with documented logs</span>
              </li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <BuildingOfficeIcon className="h-6 w-6 text-red-600 mr-2" />
              Pennsylvania Requirements
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="font-semibold mr-2">PA Fire Code:</span>
                <span>Uniform Construction Code (UCC) based</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Inspections:</span>
                <span>Annual inspections by certified technicians</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Monitoring:</span>
                <span>Required for specific occupancy types</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Testing:</span>
                <span>Quarterly testing minimum</span>
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-4">Common Requirements</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
            <div>
              <strong>UL-Listed Monitoring:</strong> Fire alarm monitoring must be provided by 
              a UL-Listed central station
            </div>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
            <div>
              <strong>Licensed Installation:</strong> Systems must be installed by state-licensed 
              fire alarm contractors
            </div>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
            <div>
              <strong>Record Keeping:</strong> Maintain inspection and testing records for 
              minimum 3 years
            </div>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: 'ADA Compliance',
    icon: ScaleIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          The Americans with Disabilities Act (ADA) requires that security systems be accessible 
          to people with disabilities. This affects both employees and visitors.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">Access Control Requirements</h3>
        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Physical Requirements</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Card readers at 48" max height</li>
                <li>• Keypads between 15-48" height</li>
                <li>• 30" x 48" clear floor space</li>
                <li>• Operating force max 5 pounds</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Alternative Access</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Remote door release options</li>
                <li>• Voice activation systems</li>
                <li>• Mobile app alternatives</li>
                <li>• Staff assistance protocols</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-4">Alarm System Accessibility</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-red-600 pl-6">
            <h4 className="font-semibold mb-2">Visual Alarms</h4>
            <p className="text-gray-700">
              Required in all public and common use areas for hearing-impaired individuals. 
              Must meet specific candela ratings based on room size.
            </p>
          </div>
          <div className="border-l-4 border-red-600 pl-6">
            <h4 className="font-semibold mb-2">Audible Alarms</h4>
            <p className="text-gray-700">
              Must not exceed 110 dB and should have distinct patterns for different alert 
              types to assist visually-impaired individuals.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Insurance Requirements',
    icon: ClipboardDocumentCheckIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Insurance companies often have specific security requirements that can affect your 
          premiums and coverage. Understanding these can save money and ensure adequate protection.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">Common Insurance Mandates</h3>
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-3">For Discounts</h4>
            <ul className="space-y-2 text-green-800">
              <li>✓ UL-Listed central station monitoring</li>
              <li>✓ Certificate of installation</li>
              <li>✓ Fire/smoke detection systems</li>
              <li>✓ Water leak detection</li>
              <li>✓ Temperature monitoring</li>
            </ul>
          </div>
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="font-semibold text-red-900 mb-3">High-Risk Requirements</h4>
            <ul className="space-y-2 text-red-800">
              <li>• Safe or vault alarms</li>
              <li>• Holdup/panic buttons</li>
              <li>• Specific camera coverage</li>
              <li>• Guard tour systems</li>
              <li>• Perimeter detection</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-lg">
          <p className="font-semibold text-blue-900 mb-2">Pro Tip</p>
          <p className="text-blue-800">
            Always provide your insurance company with detailed system specifications and 
            monitoring certificates. Many businesses miss out on 5-20% premium reductions 
            simply by not documenting their security measures properly.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Local Ordinances',
    icon: BuildingOfficeIcon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Beyond state and federal requirements, many municipalities have their own security 
          ordinances that affect alarm systems and monitoring.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">Common Local Requirements</h3>
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3">Alarm Registration</h4>
            <p className="text-gray-700 mb-3">
              Many municipalities require alarm system registration:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Annual registration fees ($25-$100 typical)</li>
              <li>• Renewal requirements</li>
              <li>• Contact information updates</li>
              <li>• Responsible party designation</li>
            </ul>
          </div>

          <div className="border rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3">False Alarm Ordinances</h4>
            <p className="text-gray-700 mb-3">
              Most jurisdictions have false alarm reduction programs:
            </p>
            <div className="bg-yellow-50 p-4 rounded mt-3">
              <p className="font-semibold text-yellow-900 mb-2">Typical Fine Structure:</p>
              <ul className="text-yellow-800 space-y-1 text-sm">
                <li>• 1-2 false alarms: Warning</li>
                <li>• 3rd false alarm: $50-$100</li>
                <li>• 4th false alarm: $100-$200</li>
                <li>• 5+ false alarms: $200-$500 each</li>
                <li>• Possible permit revocation</li>
              </ul>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3">Video Surveillance Restrictions</h4>
            <p className="text-gray-700 mb-3">
              Some areas restrict camera placement:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• No audio recording without consent</li>
              <li>• No cameras in private areas</li>
              <li>• Neighbor property restrictions</li>
              <li>• Public sidewalk limitations</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mt-8">
          <h3 className="text-xl font-bold mb-6">Compliance Checklist</h3>
          <p className="mb-6 text-gray-700">
            Use this checklist to ensure your security systems meet all applicable requirements:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Documentation</h4>
              <ul className="space-y-2 text-gray-700">
                <li>☐ System design specifications</li>
                <li>☐ Installation certificates</li>
                <li>☐ Monitoring agreements</li>
                <li>☐ Testing/inspection logs</li>
                <li>☐ Training records</li>
                <li>☐ Incident reports</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Regular Reviews</h4>
              <ul className="space-y-2 text-gray-700">
                <li>☐ Annual compliance audit</li>
                <li>☐ Regulation updates check</li>
                <li>☐ Insurance requirement review</li>
                <li>☐ Local ordinance changes</li>
                <li>☐ System functionality tests</li>
                <li>☐ Staff training updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function ComplianceGuidePage() {
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
        subtitle="Navigate Regulations with Confidence"
        description={guide.description}
        readTime={guide.readTime}
        lastUpdated={new Date(guide.lastUpdated).toLocaleDateString()}
        sections={guideSections}
        relatedGuides={[
          {
            title: "Business Security Guide",
            href: "/learning-center/guides/complete-guide-business-security-2024",
            description: "Complete guide to commercial security systems"
          },
          {
            title: "UL-Listed Monitoring",
            href: "/services/24-7-central-station-monitoring",
            description: "Learn about our compliant monitoring services"
          }
        ]}
      />
    </>
  );
}