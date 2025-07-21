import { Metadata } from 'next';
import { BlogPostTemplate } from '@/components/templates/BlogPostTemplate';
import { getBlogPostBySlug, getRecentBlogPosts } from '@/lib/data/blog';
import { generateArticleSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { 
  DocumentTextIcon,
  VideoCameraIcon,
  ClockIcon,
  ShieldExclamationIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

const postSlug = 'cannabis-business-security-requirements-nj-pa';
const post = getBlogPostBySlug(postSlug)!;

export const metadata: Metadata = {
  title: `${post.title} | ${COMPANY_INFO.name}`,
  description: post.excerpt,
  keywords: post.seoKeywords,
  openGraph: {
    title: post.title,
    description: post.excerpt,
    url: `https://securitydynamicsnj.com/learning-center/blog/${postSlug}`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: post.featuredImage,
        width: 1200,
        height: 630,
        alt: post.title
      }
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: post.publishedDate,
    modifiedTime: post.lastUpdated,
    authors: [post.author]
  },
  twitter: {
    card: 'summary_large_image',
    title: post.title,
    description: post.excerpt,
    images: [post.featuredImage],
  },
  alternates: {
    canonical: `https://securitydynamicsnj.com/learning-center/blog/${postSlug}`,
  }
};

export default function CannabisSecurityPage() {
  const schema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    datePublished: post.publishedDate,
    dateModified: post.lastUpdated,
    image: post.featuredImage,
    url: `https://securitydynamicsnj.com/learning-center/blog/${postSlug}`
  });

  const relatedPosts = getRecentBlogPosts(3).filter(p => p.slug !== postSlug);

  const content = (
    <>
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
        <div className="flex items-start">
          <ShieldExclamationIcon className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
          <div>
            <p className="font-semibold text-yellow-900 mb-2">Compliance Notice</p>
            <p className="text-yellow-800 text-sm">
              Cannabis security regulations change frequently. This guide reflects requirements 
              as of January 2024. Always consult current state regulations and your legal 
              counsel for the most up-to-date requirements.
            </p>
          </div>
        </div>
      </div>

      <p className="lead text-xl text-gray-700 mb-8">
        The cannabis industry faces unique security challenges and strict regulatory requirements. 
        Whether you're opening a dispensary, cultivation facility, or processing center in 
        New Jersey or Pennsylvania, understanding and meeting security compliance requirements 
        is essential for obtaining and maintaining your license.
      </p>

      <h2 className="text-3xl font-bold mb-6">Overview: Why Cannabis Security is Different</h2>
      <p>
        Cannabis businesses face security requirements far beyond those of typical retail or 
        agricultural operations. These regulations exist to:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span>Prevent diversion of products to the black market</span>
        </li>
        <li className="flex items-start">
          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span>Protect high-value inventory from theft</span>
        </li>
        <li className="flex items-start">
          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span>Ensure public safety and community acceptance</span>
        </li>
        <li className="flex items-start">
          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span>Maintain detailed records for regulatory compliance</span>
        </li>
        <li className="flex items-start">
          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span>Protect employees and customers from robbery attempts</span>
        </li>
      </ul>

      <h2 className="text-3xl font-bold mb-6 mt-12">New Jersey Cannabis Security Requirements</h2>
      <p>
        New Jersey's Cannabis Regulatory Commission (CRC) has established comprehensive security 
        requirements for all cannabis businesses. Here's what you need to know:
      </p>

      <div className="bg-blue-50 border rounded-lg p-6 my-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <DocumentTextIcon className="h-6 w-6 text-blue-600 mr-2" />
          NJ Video Surveillance Requirements
        </h3>
        <div className="space-y-4 text-blue-900">
          <div>
            <h4 className="font-semibold mb-2">Coverage Areas (100% Required)</h4>
            <ul className="space-y-2 text-sm pl-4">
              <li>• All entrances and exits (interior and exterior)</li>
              <li>• All rooms with cannabis (cultivation, processing, storage)</li>
              <li>• Point-of-sale areas and cash registers</li>
              <li>• All safes, vaults, and storage areas</li>
              <li>• Parking lots and exterior perimeter</li>
              <li>• Loading/unloading areas</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Technical Specifications</h4>
            <ul className="space-y-2 text-sm pl-4">
              <li>• Minimum 1080p resolution (HD quality)</li>
              <li>• 15 frames per second minimum</li>
              <li>• Adequate lighting for clear footage 24/7</li>
              <li>• Date and time stamp on all recordings</li>
              <li>• Ability to produce clear still photos</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Storage Requirements</h4>
            <p className="text-sm font-semibold text-red-700">
              90-day retention minimum for all footage
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">NJ Alarm System Requirements</h3>
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="border rounded-lg p-6">
          <h4 className="font-semibold mb-3">Intrusion Detection</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Motion detectors in all cannabis areas</li>
            <li>• Door and window contacts</li>
            <li>• Glass break sensors</li>
            <li>• Vault/safe protection</li>
            <li>• Perimeter detection systems</li>
          </ul>
        </div>
        <div className="border rounded-lg p-6">
          <h4 className="font-semibold mb-3">Panic Alarms</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Silent panic buttons at each register</li>
            <li>• Duress codes for alarm system</li>
            <li>• Mobile panic buttons for managers</li>
            <li>• Direct police notification</li>
            <li>• Audible alarms for robbery</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">NJ Access Control & Physical Security</h3>
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
          <div>
            <strong>Limited Access Areas:</strong> All areas containing cannabis must have 
            restricted access with electronic access control logging all entries/exits.
          </div>
        </li>
        <li className="flex items-start">
          <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
          <div>
            <strong>Visitor Management:</strong> All visitors must be logged, badged, and 
            escorted at all times. Visitor logs retained for 5 years.
          </div>
        </li>
        <li className="flex items-start">
          <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
          <div>
            <strong>Safe/Vault Requirements:</strong> All cash and high-value products must 
            be stored in a commercial-grade safe or vault when not in use.
          </div>
        </li>
        <li className="flex items-start">
          <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</span>
          <div>
            <strong>Exterior Security:</strong> Commercial-grade locks, security lighting, 
            and opaque windows to prevent product visibility from outside.
          </div>
        </li>
      </ul>

      <h2 className="text-3xl font-bold mb-6 mt-12">Pennsylvania Cannabis Security Requirements</h2>
      <p>
        Pennsylvania's Department of Health oversees medical marijuana regulations with equally 
        stringent but somewhat different requirements:
      </p>

      <div className="bg-green-50 border rounded-lg p-6 my-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <VideoCameraIcon className="h-6 w-6 text-green-600 mr-2" />
          PA Video Surveillance Requirements
        </h3>
        <div className="space-y-4 text-green-900">
          <div>
            <h4 className="font-semibold mb-2">Key Differences from NJ</h4>
            <ul className="space-y-2 text-sm pl-4">
              <li>• Fixed cameras required (no PTZ as primary)</li>
              <li>• Facial recognition capability at 20 feet</li>
              <li>• Ability to export footage in standard format</li>
              <li>• Backup power for 4 hours minimum</li>
              <li>• Off-site backup storage required</li>
            </ul>
          </div>
          <div className="bg-red-100 border border-red-200 rounded p-4">
            <h4 className="font-semibold mb-2 text-red-800 flex items-center">
              <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
              Critical PA Requirement
            </h4>
            <p className="text-sm font-semibold text-red-700">
              4-YEAR retention requirement for all footage (vs. 90 days in NJ)
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">PA Alarm System Requirements</h3>
      <div className="space-y-4 my-6">
        <div className="border-l-4 border-gray-300 pl-6">
          <h4 className="font-semibold mb-2">Professional Monitoring</h4>
          <p className="text-gray-700">
            Must use a DEA-registered monitoring company with ability to dispatch law 
            enforcement within 5 minutes of alarm activation.
          </p>
        </div>
        <div className="border-l-4 border-gray-300 pl-6">
          <h4 className="font-semibold mb-2">System Features</h4>
          <p className="text-gray-700">
            Automatic voice dialer, failure notification systems, and ability to remain 
            operational during power outages for minimum 4 hours.
          </p>
        </div>
        <div className="border-l-4 border-gray-300 pl-6">
          <h4 className="font-semibold mb-2">Testing Requirements</h4>
          <p className="text-gray-700">
            Annual professional inspection required with documentation retained for 
            Department of Health review.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12">Common Compliance Pitfalls to Avoid</h2>
      <p>
        Based on enforcement actions and failed inspections, here are the most common mistakes 
        cannabis businesses make:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-red-50 rounded-lg p-6">
          <h3 className="font-semibold text-red-900 mb-3">Camera Blind Spots</h3>
          <p className="text-red-800 text-sm">
            Inspectors use floor plans to identify blind spots. Every square foot of 
            cannabis areas must be visible. Use overlapping coverage and test with 
            actual walkthrough videos.
          </p>
        </div>
        <div className="bg-red-50 rounded-lg p-6">
          <h3 className="font-semibold text-red-900 mb-3">Retention Failures</h3>
          <p className="text-red-800 text-sm">
            Running out of storage space is not an acceptable excuse. Plan for 2x the 
            required storage to handle high-activity periods and ensure redundancy.
          </p>
        </div>
        <div className="bg-red-50 rounded-lg p-6">
          <h3 className="font-semibold text-red-900 mb-3">Quality Issues</h3>
          <p className="text-red-800 text-sm">
            "Potato quality" video won't pass inspection. Test facial recognition and 
            license plate readability at required distances in all lighting conditions.
          </p>
        </div>
        <div className="bg-red-50 rounded-lg p-6">
          <h3 className="font-semibold text-red-900 mb-3">Access Control Gaps</h3>
          <p className="text-red-800 text-sm">
            Propped doors, shared badges, and tailgating are major violations. Every 
            entry must be individually logged with time stamps.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12">Building a Compliant System: Best Practices</h2>

      <h3 className="text-2xl font-semibold mb-4">1. Start with Professional Design</h3>
      <p>
        Cannabis security is too complex for DIY approaches. Work with security professionals 
        who understand state regulations and have experience with successful cannabis installations.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
        <p className="font-semibold text-blue-900 mb-2">Design Considerations</p>
        <ul className="space-y-2 text-blue-800">
          <li>• Create detailed floor plans with camera placements</li>
          <li>• Calculate storage needs based on camera count and quality</li>
          <li>• Plan for future expansion and additional cameras</li>
          <li>• Include redundancy for critical systems</li>
          <li>• Design with inspection requirements in mind</li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">2. Choose the Right Equipment</h3>
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="border rounded-lg p-6">
          <h4 className="font-semibold mb-3 flex items-center">
            <VideoCameraIcon className="h-5 w-5 text-primary mr-2" />
            Cameras
          </h4>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• Minimum 4MP resolution</li>
            <li>• True day/night capability</li>
            <li>• Wide dynamic range</li>
            <li>• Vandal-resistant housing</li>
            <li>• Power over Ethernet (PoE)</li>
          </ul>
        </div>
        <div className="border rounded-lg p-6">
          <h4 className="font-semibold mb-3 flex items-center">
            <ClockIcon className="h-5 w-5 text-primary mr-2" />
            Storage
          </h4>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• Enterprise-grade NVR</li>
            <li>• RAID configuration</li>
            <li>• Hot-swappable drives</li>
            <li>• Automated health monitoring</li>
            <li>• Cloud backup capability</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">3. Plan for Inspections</h3>
      <p>
        State inspectors will thoroughly test your security system. Be prepared:
      </p>

      <div className="bg-gray-50 p-6 rounded-lg my-6">
        <h4 className="font-semibold mb-4">Inspection Checklist</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-sm">
            <li>☐ All cameras operational and recording</li>
            <li>☐ Video quality meets standards</li>
            <li>☐ Full coverage verification</li>
            <li>☐ Retention period compliance</li>
            <li>☐ Export functionality works</li>
          </ul>
          <ul className="space-y-2 text-sm">
            <li>☐ Alarm system tests properly</li>
            <li>☐ Access logs are complete</li>
            <li>☐ Panic buttons functional</li>
            <li>☐ Monitoring certificates current</li>
            <li>☐ Staff training documented</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12">Cost Considerations</h2>
      <p>
        Cannabis security systems represent a significant investment. Here's what to budget:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Facility Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Typical Camera Count</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Equipment Cost Range</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Installation Cost</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4">Dispensary (2,500 sq ft)</td>
              <td className="px-6 py-4">25-40 cameras</td>
              <td className="px-6 py-4">$15,000-$30,000</td>
              <td className="px-6 py-4">$8,000-$15,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4">Cultivation (10,000 sq ft)</td>
              <td className="px-6 py-4">60-100 cameras</td>
              <td className="px-6 py-4">$40,000-$75,000</td>
              <td className="px-6 py-4">$20,000-$35,000</td>
            </tr>
            <tr>
              <td className="px-6 py-4">Processing Facility</td>
              <td className="px-6 py-4">40-70 cameras</td>
              <td className="px-6 py-4">$25,000-$50,000</td>
              <td className="px-6 py-4">$15,000-$25,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
        <p className="font-semibold text-yellow-900 mb-2">Don't Forget Ongoing Costs</p>
        <ul className="text-yellow-800 space-y-1">
          <li>• Monthly monitoring: $100-$300</li>
          <li>• Annual maintenance: $2,000-$5,000</li>
          <li>• Storage expansion: $1,000-$3,000/year</li>
          <li>• Compliance updates: Variable</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12">Staying Compliant Long-Term</h2>
      <p>
        Getting licensed is just the beginning. Maintaining compliance requires ongoing attention:
      </p>

      <div className="space-y-4 my-6">
        <div className="flex items-start">
          <span className="text-2xl font-bold text-primary mr-4">1.</span>
          <div>
            <h3 className="font-semibold text-lg mb-2">Regular System Audits</h3>
            <p className="text-gray-700">
              Monthly reviews of camera coverage, video quality, and retention compliance. 
              Document all findings and corrective actions.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="text-2xl font-bold text-primary mr-4">2.</span>
          <div>
            <h3 className="font-semibold text-lg mb-2">Stay Current with Regulations</h3>
            <p className="text-gray-700">
              Subscribe to state agency updates and industry newsletters. Regulations 
              change frequently, and ignorance is not a defense.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="text-2xl font-bold text-primary mr-4">3.</span>
          <div>
            <h3 className="font-semibold text-lg mb-2">Maintain Vendor Relationships</h3>
            <p className="text-gray-700">
              Keep service contracts current and maintain relationships with vendors who 
              understand cannabis compliance requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white p-8 rounded-lg mt-12">
        <h2 className="text-2xl font-bold mb-4">Need Cannabis Security Compliance Help?</h2>
        <p className="mb-6">
          Security Dynamics specializes in compliant cannabis security systems for New Jersey 
          and Pennsylvania. We understand the unique requirements and have successfully 
          installed systems that pass state inspections on the first attempt.
        </p>
        <p className="font-semibold">
          Don't risk your license with inadequate security. Contact us for a compliance 
          consultation and detailed system design that meets all state requirements.
        </p>
      </div>
    </>
  );

  return (
    <>
      <Script id="schema-1" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogPostTemplate 
        post={post}
        content={content}
        relatedPosts={relatedPosts}
      />
    </>
  );
}