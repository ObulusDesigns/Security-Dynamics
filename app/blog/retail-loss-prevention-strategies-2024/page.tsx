import { Metadata } from 'next';
import { BlogPostTemplate } from '@/components/templates/BlogPostTemplate';
import { getBlogPostBySlug, getRecentBlogPosts } from '@/lib/data/blog';
import { generateArticleSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { 
  ChartBarIcon,
  UserGroupIcon,
  CameraIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  LightBulbIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

const postSlug = 'retail-loss-prevention-strategies-2024';
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
  alternates: {
    canonical: `https://securitydynamicsnj.com/learning-center/blog/${postSlug}`}
};

export default function RetailLossPreventionPage() {
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
      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
        <div className="flex items-start">
          <ExclamationTriangleIcon className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
          <div>
            <p className="font-semibold text-red-900 mb-2">The Retail Shrinkage Crisis</p>
            <p className="text-red-800">
              U.S. retailers lost $112.1 billion to shrinkage in 2023, representing 1.6% 
              of total retail sales. With organized retail crime on the rise and margins 
              tighter than ever, effective loss prevention is no longer optional – it's 
              essential for survival.
            </p>
          </div>
        </div>
      </div>

      <p className="lead text-xl text-gray-700 mb-8">
        Traditional loss prevention methods are no longer enough. Today's retailers need 
        sophisticated strategies that combine cutting-edge technology, smart analytics, and 
        human expertise to combat increasingly organized theft operations. Here's what's 
        actually working in 2024.
      </p>

      <h2 className="text-3xl font-bold mb-6">Understanding Modern Retail Theft</h2>
      <p>
        Before diving into solutions, it's crucial to understand how retail theft has evolved. 
        We're no longer dealing primarily with opportunistic shoplifters – today's threats 
        are more sophisticated and organized.
      </p>

      <div className="bg-gray-50 p-6 rounded-lg my-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <ChartBarIcon className="h-6 w-6 text-gray-700 mr-2" />
          2024 Shrinkage Breakdown
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-primary mb-3">External Theft (37%)</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Organized Retail Crime (ORC): 26%</li>
              <li>• Opportunistic shoplifting: 8%</li>
              <li>• Return fraud: 3%</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-3">Internal Theft (29%)</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Employee theft: 22%</li>
              <li>• Vendor/supplier fraud: 7%</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-3">Process Failures (25%)</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Administrative errors: 16%</li>
              <li>• Pricing mistakes: 9%</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-3">Unknown (9%)</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Unattributed losses</li>
              <li>• Data discrepancies</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12">Strategy 1: AI-Powered Video Analytics</h2>
      <p>
        The biggest breakthrough in loss prevention isn't more cameras – it's smarter cameras. 
        AI-powered analytics can now detect suspicious behavior patterns in real-time, alerting 
        staff before theft occurs.
      </p>

      <div className="border rounded-lg p-6 my-6">
        <h3 className="font-semibold text-lg mb-4 flex items-center">
          <CameraIcon className="h-6 w-6 text-primary mr-2" />
          What AI Can Detect
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Concealment behaviors (bag stuffing)</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Sweethearting at checkout</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Group theft coordination</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Return fraud patterns</span>
            </li>
          </ul>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Product tampering</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Loitering in high-value areas</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Cart pushout attempts</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Employee policy violations</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
        <p className="font-semibold text-blue-900 mb-2">Real-World Results</p>
        <p className="text-blue-800">
          Major retailers using AI-powered analytics report 40-60% reductions in shrinkage 
          within the first year. The key is real-time alerts that allow intervention before 
          theft occurs, not just evidence after the fact.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12">Strategy 2: Strategic Product Protection</h2>
      <p>
        Not all products need the same level of protection. Smart retailers are using data 
        to identify high-risk items and applying targeted security measures that don't 
        destroy the shopping experience.
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="font-semibold text-green-900 mb-3">Low Risk Items</h3>
          <p className="text-green-800 text-sm mb-3">Basic deterrence sufficient</p>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Standard EAS tags</li>
            <li>• Open display</li>
            <li>• Camera coverage</li>
          </ul>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="font-semibold text-yellow-900 mb-3">Medium Risk Items</h3>
          <p className="text-yellow-800 text-sm mb-3">Enhanced protection needed</p>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Keeper boxes</li>
            <li>• Spider wraps</li>
            <li>• Dedicated cameras</li>
          </ul>
        </div>
        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="font-semibold text-red-900 mb-3">High Risk Items</h3>
          <p className="text-red-800 text-sm mb-3">Maximum security required</p>
          <ul className="text-sm text-red-700 space-y-1">
            <li>• Locked cases</li>
            <li>• Alpha boxes</li>
            <li>• Staff assistance</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">The Power Aisle Concept</h3>
      <p>
        Progressive retailers are creating "power aisles" – high-value product areas with 
        concentrated security measures:
      </p>
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
          <span>Multiple camera angles with analytics focused on concealment behaviors</span>
        </li>
        <li className="flex items-start">
          <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
          <span>Public view monitors showing customers they're being recorded</span>
        </li>
        <li className="flex items-start">
          <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
          <span>Strategic staff positioning and enhanced customer service</span>
        </li>
        <li className="flex items-start">
          <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</span>
          <span>Smart shelf technology that detects unusual removal patterns</span>
        </li>
      </ul>

      <h2 className="text-3xl font-bold mb-6 mt-12">Strategy 3: Data-Driven Staff Deployment</h2>
      <p>
        Your employees are your best defense against theft – but only if they're in the right 
        place at the right time. Modern analytics can predict high-risk periods and optimize 
        staff placement.
      </p>

      <div className="bg-gray-50 p-6 rounded-lg my-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <UserGroupIcon className="h-6 w-6 text-gray-700 mr-2" />
          Smart Staffing Strategies
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-primary mb-2">Heat Map Scheduling</h4>
            <p className="text-gray-700 text-sm">
              Use historical theft data to identify peak risk hours and days. Schedule 
              additional floor coverage during these periods rather than relying on 
              uniform staffing.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-2">Zone Defense</h4>
            <p className="text-gray-700 text-sm">
              Assign staff to specific high-risk zones rather than general floor coverage. 
              Employees become familiar with normal behavior patterns in their areas.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-2">Customer Service Prevention</h4>
            <p className="text-gray-700 text-sm">
              Train staff to approach all customers in high-risk areas with offers of 
              assistance. Thieves hate attention – legitimate customers appreciate the service.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12">Strategy 4: Technology Integration</h2>
      <p>
        The most effective loss prevention programs integrate multiple technologies into a 
        unified system that provides actionable intelligence, not just data.
      </p>

      <div className="border rounded-lg p-6 my-6">
        <h3 className="font-semibold text-lg mb-4">The Modern Loss Prevention Tech Stack</h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <strong>POS Integration:</strong> Matches transaction data with video to 
              identify sweethearting, voids abuse, and discount fraud.
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <strong>RFID Inventory:</strong> Real-time inventory tracking identifies 
              shrinkage immediately, not during quarterly counts.
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Exception Reporting:</strong> AI identifies unusual patterns in 
              returns, voids, discounts, and no-sales.
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Facial Recognition:</strong> Identifies known offenders and ORC 
              members upon entry (where legally permitted).
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Mobile Reporting:</strong> Staff can discretely report suspicious 
              activity via smartphone apps.
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12">Strategy 5: Organized Retail Crime (ORC) Response</h2>
      <p>
        ORC has become the single biggest threat to retail profitability. These professional 
        theft rings require a coordinated response.
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
        <h3 className="font-semibold text-red-900 mb-3">ORC Red Flags to Watch</h3>
        <ul className="space-y-2 text-red-800">
          <li>• Groups entering together but splitting up immediately</li>
          <li>• Individuals with empty bags entering high-value areas</li>
          <li>• Repeated visits without purchases</li>
          <li>• Distraction techniques (one person engages staff while others steal)</li>
          <li>• Large quantity thefts of specific items</li>
          <li>• Use of tools to defeat security devices</li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Building an ORC Defense</h3>
      <div className="space-y-4 my-6">
        <div className="border-l-4 border-gray-300 pl-6">
          <h4 className="font-semibold mb-2">Information Sharing</h4>
          <p className="text-gray-700">
            Join regional ORC associations and information-sharing networks. What hits 
            your competitor today may target you tomorrow.
          </p>
        </div>
        <div className="border-l-4 border-gray-300 pl-6">
          <h4 className="font-semibold mb-2">Law Enforcement Partnerships</h4>
          <p className="text-gray-700">
            Build relationships with local police and prosecutors. Provide quality evidence 
            packages that make prosecution easier.
          </p>
        </div>
        <div className="border-l-4 border-gray-300 pl-6">
          <h4 className="font-semibold mb-2">Civil Recovery</h4>
          <p className="text-gray-700">
            Pursue civil demand letters and litigation against repeat offenders. The 
            financial deterrent can be significant.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12">Measuring Success: KPIs That Matter</h2>
      <p>
        You can't manage what you don't measure. Here are the metrics that successful 
        retailers track:
      </p>

      <div className="bg-blue-50 p-6 rounded-lg my-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <ChartBarIcon className="h-6 w-6 text-blue-600 mr-2" />
          Essential Loss Prevention KPIs
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-900 mb-3">Shrinkage Metrics</h4>
            <ul className="space-y-2 text-blue-800 text-sm">
              <li>• Shrinkage rate by department</li>
              <li>• Known vs. unknown shrinkage</li>
              <li>• Recovery rate</li>
              <li>• Apprehension rate</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 mb-3">Operational Metrics</h4>
            <ul className="space-y-2 text-blue-800 text-sm">
              <li>• Cases per detective hour</li>
              <li>• Alert response time</li>
              <li>• False positive rate</li>
              <li>• Training completion rates</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12">ROI: Making the Business Case</h2>
      <p>
        Modern loss prevention technology requires investment, but the returns are compelling:
      </p>

      <div className="border-2 border-green-200 rounded-lg p-6 my-6">
        <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
          <CurrencyDollarIcon className="h-6 w-6 text-green-600 mr-2" />
          Typical ROI Timeline
        </h3>
        <div className="space-y-3 text-green-800">
          <div className="flex justify-between items-center">
            <span>Initial Investment (50 cameras + analytics)</span>
            <span className="font-bold">$75,000</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Annual Monitoring & Maintenance</span>
            <span className="font-bold">$12,000</span>
          </div>
          <div className="flex justify-between items-center border-t pt-3">
            <span>Average Annual Shrinkage Reduction</span>
            <span className="font-bold text-green-600">$150,000</span>
          </div>
          <div className="flex justify-between items-center">
            <span>ROI Period</span>
            <span className="font-bold text-green-600">7-8 months</span>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12">Implementation Roadmap</h2>
      <p>
        Ready to modernize your loss prevention program? Here's a proven implementation approach:
      </p>

      <div className="space-y-4 my-8">
        <div className="flex items-start">
          <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
            1
          </span>
          <div>
            <h3 className="font-semibold text-lg mb-2">Assess Current State (Weeks 1-2)</h3>
            <p className="text-gray-700">
              Analyze shrinkage data, identify high-risk areas, and audit existing technology. 
              Understand your specific vulnerabilities before investing in solutions.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
            2
          </span>
          <div>
            <h3 className="font-semibold text-lg mb-2">Design Integrated Solution (Weeks 3-4)</h3>
            <p className="text-gray-700">
              Work with security professionals to design a system that addresses your 
              specific risks while integrating with existing infrastructure.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
            3
          </span>
          <div>
            <h3 className="font-semibold text-lg mb-2">Pilot Program (Months 2-3)</h3>
            <p className="text-gray-700">
              Start with highest-risk location or department. Measure results carefully 
              and refine approach before full rollout.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
            4
          </span>
          <div>
            <h3 className="font-semibold text-lg mb-2">Full Deployment (Months 4-6)</h3>
            <p className="text-gray-700">
              Roll out proven solutions across all locations. Ensure consistent training 
              and support for all stakeholders.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
        <h3 className="font-semibold text-yellow-900 mb-2 flex items-center">
          <LightBulbIcon className="h-6 w-6 mr-2" />
          Critical Success Factor
        </h3>
        <p className="text-yellow-800">
          The best technology in the world won't help if your team doesn't use it properly. 
          Invest heavily in training and change management. Make loss prevention everyone's 
          responsibility, not just the LP department's.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12">The Future of Retail Loss Prevention</h2>
      <p className="mb-6">
        Looking ahead, several trends will shape loss prevention strategies:
      </p>

      <ul className="space-y-3 mb-8">
        <li className="flex items-start">
          <span className="text-primary mr-2">→</span>
          <span><strong>Predictive Analytics:</strong> AI will predict theft attempts before they happen based on behavioral patterns.</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">→</span>
          <span><strong>Frictionless Security:</strong> Solutions that protect without impacting the customer experience.</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">→</span>
          <span><strong>Supply Chain Integration:</strong> End-to-end tracking from manufacturer to consumer.</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">→</span>
          <span><strong>Collaborative Networks:</strong> Real-time threat sharing between retailers.</span>
        </li>
      </ul>

      <div className="bg-primary text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Take Action Against Retail Shrinkage</h2>
        <p className="mb-6">
          Don't let another quarter pass with unacceptable shrinkage rates. Modern loss 
          prevention technology pays for itself quickly while creating a safer environment 
          for employees and customers.
        </p>
        <p className="font-semibold">
          Contact our retail security specialists for a professional shrinkage assessment and 
          customized loss prevention strategy. Stop theft before it happens.
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