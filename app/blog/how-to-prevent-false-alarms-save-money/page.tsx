import { Metadata } from 'next';
import { BlogPostTemplate } from '@/components/templates/BlogPostTemplate';
import { getBlogPostBySlug, getRecentBlogPosts } from '@/lib/data/blog';
import { generateArticleSchema } from '@/lib/seo/schema';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { 
  ExclamationTriangleIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

const postSlug = 'how-to-prevent-false-alarms-save-money';
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

export default function PreventFalseAlarmsPage() {
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
            <p className="font-semibold text-red-900 mb-2">The Cost of False Alarms</p>
            <p className="text-red-800">
              False alarms cost U.S. businesses and homeowners over $1.8 billion annually 
              in fines and wasted resources. The average business experiences 2-4 false 
              alarms per year, with fines ranging from $50 to $500 per incident.
            </p>
          </div>
        </div>
      </div>

      <p className="lead text-xl text-gray-700 mb-8">
        False alarms aren't just annoying – they're expensive, disruptive, and can even 
        put you at risk if authorities start treating your alarms as "cry wolf" situations. 
        The good news? Most false alarms are completely preventable with the right knowledge 
        and practices.
      </p>

      <h2 className="text-3xl font-bold mb-6">Understanding Why False Alarms Happen</h2>
      <p>
        Before we can prevent false alarms, we need to understand their root causes. According 
        to industry data, here are the top culprits:
      </p>

      <div className="bg-gray-50 p-6 rounded-lg my-6">
        <h3 className="text-xl font-semibold mb-4">Top 5 Causes of False Alarms</h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
              1
            </span>
            <div>
              <strong>User Error (40%):</strong> Incorrect code entry, forgetting to disarm, 
              or accidentally triggering panic buttons.
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
              2
            </span>
            <div>
              <strong>Equipment Malfunction (25%):</strong> Faulty sensors, low batteries, 
              or improper installation.
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
              3
            </span>
            <div>
              <strong>Environmental Factors (20%):</strong> Pets, insects, weather, or 
              HVAC systems triggering sensors.
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
              4
            </span>
            <div>
              <strong>Wandering Visitors (10%):</strong> Employees, cleaning crews, or 
              contractors unfamiliar with the system.
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
              5
            </span>
            <div>
              <strong>Doors and Windows (5%):</strong> Loose-fitting doors, drafts, or 
              objects near sensors.
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12">The True Cost of False Alarms</h2>
      <p>
        Many people underestimate the real impact of false alarms. Let's break down the 
        actual costs:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border-2 border-red-200 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-3 flex items-center text-red-700">
            <CurrencyDollarIcon className="h-6 w-6 mr-2" />
            Direct Costs
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Municipal fines: $50-$500 per incident</li>
            <li>• Service calls: $75-$150 per visit</li>
            <li>• Lost productivity: $200-$500 per event</li>
            <li>• Annual permit fees: $25-$100</li>
          </ul>
        </div>
        <div className="border-2 border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-3 flex items-center text-yellow-700">
            <ExclamationTriangleIcon className="h-6 w-6 mr-2" />
            Hidden Costs
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Decreased police response priority</li>
            <li>• Employee stress and disruption</li>
            <li>• Customer confidence issues</li>
            <li>• Potential permit revocation</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12">Proven Strategies to Prevent False Alarms</h2>

      <h3 className="text-2xl font-semibold mb-4 mt-8">1. Proper User Training</h3>
      <p>
        The single most effective way to reduce false alarms is comprehensive user training. 
        Everyone who uses your system should know:
      </p>

      <div className="bg-blue-50 p-6 rounded-lg my-6">
        <h4 className="font-semibold text-blue-900 mb-3">Essential Training Topics</h4>
        <ul className="space-y-2 text-blue-800">
          <li className="flex items-start">
            <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>How to properly arm and disarm the system</span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>Understanding entry and exit delays</span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>What to do if you accidentally trigger an alarm</span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>Proper use of keyfobs and panic buttons</span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>How to grant temporary access to visitors</span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">2. Alarm Verification Technology</h3>
      <p>
        Modern alarm systems offer several verification methods that can dramatically reduce 
        false dispatches:
      </p>

      <div className="space-y-4 my-6">
        <div className="border-l-4 border-green-500 pl-6">
          <h4 className="font-semibold mb-2">Video Verification</h4>
          <p className="text-gray-700">
            When an alarm triggers, operators can instantly view camera footage to verify 
            if there's a real threat before dispatching police. This can reduce false 
            dispatches by up to 90%.
          </p>
        </div>
        <div className="border-l-4 border-green-500 pl-6">
          <h4 className="font-semibold mb-2">Two-Way Voice</h4>
          <p className="text-gray-700">
            Monitoring operators can speak directly through your alarm panel to verify 
            the situation and potentially cancel false alarms before dispatch.
          </p>
        </div>
        <div className="border-l-4 border-green-500 pl-6">
          <h4 className="font-semibold mb-2">Sequential Verification</h4>
          <p className="text-gray-700">
            Requires two different sensors to trigger before dispatching, eliminating 
            single-sensor false alarms from environmental factors.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">3. Regular Maintenance</h3>
      <p>
        A well-maintained system is a reliable system. Follow this maintenance schedule:
      </p>

      <div className="bg-gray-50 p-6 rounded-lg my-6">
        <h4 className="font-semibold mb-4 flex items-center">
          <WrenchScrewdriverIcon className="h-6 w-6 text-gray-700 mr-2" />
          Maintenance Checklist
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-primary mb-2">Monthly Tasks</h5>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>☐ Test system and all sensors</li>
              <li>☐ Check for sensor obstructions</li>
              <li>☐ Clean camera lenses</li>
              <li>☐ Review user access list</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-primary mb-2">Annual Tasks</h5>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>☐ Professional inspection</li>
              <li>☐ Battery replacement</li>
              <li>☐ Software updates</li>
              <li>☐ Sensor calibration</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">4. Environmental Considerations</h3>
      <p>
        Many false alarms are caused by environmental factors that can be easily addressed:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <XCircleIcon className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <strong>Pets:</strong> Use pet-immune sensors or adjust mounting height. Most 
            modern sensors can ignore animals up to 85 pounds.
          </div>
        </li>
        <li className="flex items-start">
          <XCircleIcon className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <strong>HVAC Systems:</strong> Don't place motion sensors near vents or in the 
            path of strong air currents.
          </div>
        </li>
        <li className="flex items-start">
          <XCircleIcon className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <strong>Windows and Doors:</strong> Ensure proper fit and use dual-technology 
            sensors in problem areas.
          </div>
        </li>
        <li className="flex items-start">
          <XCircleIcon className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <strong>Decorations:</strong> Keep balloons, plants, and hanging decorations 
            away from motion sensors.
          </div>
        </li>
      </ul>

      <h2 className="text-3xl font-bold mb-6 mt-12">Working with Your Monitoring Company</h2>
      <p>
        Your monitoring company is your partner in reducing false alarms. Here's how to 
        work together effectively:
      </p>

      <div className="border rounded-lg p-6 my-6">
        <h3 className="font-semibold text-lg mb-4 flex items-center">
          <ClipboardDocumentCheckIcon className="h-6 w-6 text-primary mr-2" />
          Best Practices for Monitoring
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="font-bold text-primary mr-2">1.</span>
            <div>
              <strong>Update Contact Lists:</strong> Keep your call list current with people 
              who can quickly respond and cancel false alarms.
            </div>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-primary mr-2">2.</span>
            <div>
              <strong>Use Passcodes:</strong> Establish clear verbal passcodes for alarm 
              cancellation – and make sure everyone knows them.
            </div>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-primary mr-2">3.</span>
            <div>
              <strong>Enhanced Call Verification:</strong> Request that operators call 
              multiple numbers before dispatching police.
            </div>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-primary mr-2">4.</span>
            <div>
              <strong>Review Alarm History:</strong> Ask for monthly reports to identify 
              patterns and problem areas.
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12">The Payoff: Real Savings</h2>
      <p>
        Implementing these strategies can lead to significant savings:
      </p>

      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 my-6">
        <h3 className="text-xl font-semibold text-green-900 mb-4">
          Typical Results After Implementation
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-green-800">
          <div>
            <p className="font-semibold">False Alarm Reduction:</p>
            <p className="text-3xl font-bold">75-90%</p>
          </div>
          <div>
            <p className="font-semibold">Annual Savings:</p>
            <p className="text-3xl font-bold">$500-$2,000</p>
          </div>
        </div>
        <p className="text-sm mt-4 text-green-700">
          Based on average business with 4 false alarms per year at $200 per incident
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12">Take Action Today</h2>
      <p>
        Don't wait for the next false alarm fine to arrive. Start implementing these 
        strategies today:
      </p>

      <div className="bg-primary text-white p-8 rounded-lg mt-8">
        <ol className="space-y-3">
          <li className="flex items-start">
            <span className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">
              1
            </span>
            <span>Schedule training for all system users</span>
          </li>
          <li className="flex items-start">
            <span className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">
              2
            </span>
            <span>Review your system's verification options</span>
          </li>
          <li className="flex items-start">
            <span className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">
              3
            </span>
            <span>Schedule professional maintenance</span>
          </li>
          <li className="flex items-start">
            <span className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">
              4
            </span>
            <span>Update monitoring contact information</span>
          </li>
          <li className="flex items-start">
            <span className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">
              5
            </span>
            <span>Address environmental factors</span>
          </li>
        </ol>
      </div>

      <p className="mt-8 text-lg font-semibold">
        Remember: Every false alarm prevented saves money, reduces stress, and ensures 
        that when you really need help, it arrives quickly and takes your situation seriously.
      </p>
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