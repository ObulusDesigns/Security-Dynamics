import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero as HeroSection } from '@/components/sections/Hero';
import { CTA as CTASection } from '@/components/sections/CTA';
import { CheckCircleIcon, CalculatorIcon, PhoneIcon, ShieldCheckIcon, CurrencyDollarIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import StructuredData from '@/components/seo/StructuredData';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/utils/structured-data';

const pricingFAQs = [
  {
    question: "How much does a commercial security system cost in New Jersey?",
    answer: "Commercial security systems in NJ typically range from $1,500 to $25,000+ for equipment and installation, depending on business size, number of entry points, and system complexity. Monthly monitoring adds $30-$200. Small businesses (under 3,000 sq ft) average $2,500-$5,000, while larger facilities can exceed $15,000."
  },
  {
    question: "What factors affect commercial security system pricing?",
    answer: "Key pricing factors include: property size, number of doors/windows, camera quantity and quality (HD vs 4K), access control points, fire alarm integration, environmental monitoring needs, cloud vs local storage, professional monitoring level, and installation complexity."
  },
  {
    question: "Is it cheaper to buy or lease a security system?",
    answer: "Purchasing typically saves 20-30% over 5 years compared to leasing. Buying requires $3,000-$10,000 upfront but offers ownership and no long-term contracts. Leasing spreads costs at $100-$500/month but may include maintenance and upgrades. Most Mercer County businesses prefer purchasing for long-term savings."
  },
  {
    question: "Are there tax benefits for security system investments?",
    answer: "Yes! Under Section 179, businesses can deduct the full purchase price of security equipment in the year of purchase, up to $1,160,000 in 2024. This can provide 20-35% tax savings. Additionally, some insurance companies offer 5-20% premium discounts for professionally monitored systems."
  },
  {
    question: "What's included in monthly monitoring costs?",
    answer: "Professional monitoring ($30-$200/month) typically includes: 24/7 central station monitoring, emergency dispatch coordination, system health checks, mobile app access, cloud video storage (varies by plan), technical support, and software updates. UL-Listed monitoring for fire alarms may cost additional $20-$50/month."
  }
];

const breadcrumbs = [
  { name: 'Home', url: 'https://securitydynamicsinc.com' },
  { name: 'Guides', url: 'https://securitydynamicsinc.com/guides' },
  { name: 'Commercial Security System Costs', url: 'https://securitydynamicsinc.com/guides/commercial-security-system-costs' }
];

export const metadata: Metadata = {
  title: 'Commercial Security System Costs in NJ 2025 | Complete Pricing Guide',
  description: 'Detailed breakdown of commercial security system costs in New Jersey. Equipment, installation, monitoring prices, and ROI calculator. Get accurate pricing for your business size.',
  keywords: 'commercial security system cost, business security pricing NJ, security system cost per square foot, commercial security installation cost, security monitoring prices',
  openGraph: {
    title: 'Commercial Security System Costs in NJ - 2025 Pricing Guide',
    description: 'Complete pricing guide for commercial security systems in New Jersey. Real costs, ROI analysis, and savings tips.',
    url: 'https://securitydynamicsinc.com/guides/commercial-security-system-costs',
    images: [{ url: '/images/commercial-security-pricing-guide.jpg' }],
  },
  alternates: {
    canonical: 'https://securitydynamicsinc.com/guides/commercial-security-system-costs',
  },
};

export default function CommercialSecurityCostGuide() {
  return (
    <>
      <StructuredData data={generateFAQSchema(pricingFAQs)} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbs)} />
      
      <HeroSection
        title="Commercial Security System Costs in New Jersey"
        subtitle="2025 Complete Pricing Guide for Mercer County & Bucks County Businesses"
        primaryCta={{
          text: "Get Custom Quote",
          href: "/quote"
        }}
      />

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Answer Box */}
          <div className="bg-gradient-to-r from-navy to-navy-light p-8 rounded-xl text-white mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <CurrencyDollarIcon className="h-8 w-8 mr-3" />
              Quick Cost Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Equipment & Installation</h3>
                <ul className="space-y-1 text-gray-100">
                  <li>• Small Business (1-5 doors): $1,500 - $5,000</li>
                  <li>• Medium Business (6-15 doors): $5,000 - $15,000</li>
                  <li>• Large Facility (15+ doors): $15,000 - $50,000+</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Monthly Monitoring</h3>
                <ul className="space-y-1 text-gray-100">
                  <li>• Basic Monitoring: $30 - $50/month</li>
                  <li>• Advanced w/ Video: $75 - $150/month</li>
                  <li>• Enterprise UL-Listed: $150 - $500/month</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-xl font-bold mb-4">What You'll Learn</h2>
            <ul className="space-y-2">
              <li><a href="#breakdown" className="text-red hover:underline">→ Detailed Cost Breakdown by System Type</a></li>
              <li><a href="#factors" className="text-red hover:underline">→ Factors That Affect Your Investment</a></li>
              <li><a href="#roi" className="text-red hover:underline">→ ROI Calculator & Payback Period</a></li>
              <li><a href="#comparison" className="text-red hover:underline">→ Buy vs Lease vs DIY Comparison</a></li>
              <li><a href="#savings" className="text-red hover:underline">→ Tax Benefits & Insurance Savings</a></li>
              <li><a href="#examples" className="text-red hover:underline">→ Real Pricing Examples from Mercer County</a></li>
            </ul>
          </div>

          {/* Main Content */}
          <article className="prose prose-lg max-w-none">
            
            <section id="introduction" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Understanding Commercial Security System Costs in 2025</h2>
              <p className="text-lg leading-relaxed mb-4">
                If you're researching commercial security system costs for your New Jersey business, you're likely looking for straightforward, honest pricing information. After 40+ years serving Mercer County and Bucks County businesses, we've learned that every security investment is unique—but patterns emerge based on business type, size, and security needs.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                This comprehensive guide breaks down real-world pricing for commercial security systems in 2025, including equipment costs, installation fees, monitoring services, and the often-overlooked factors that impact your total investment. We'll also show you how to calculate ROI and take advantage of significant tax benefits available to New Jersey businesses.
              </p>
            </section>

            <section id="breakdown" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Detailed Cost Breakdown by System Component</h2>
              
              <h3 className="text-2xl font-semibold mb-4">1. Video Surveillance Systems</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Component</th>
                      <th className="text-left py-2">Price Range</th>
                      <th className="text-left py-2">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">HD Cameras (1080p)</td>
                      <td className="py-3 font-semibold">$150 - $300 each</td>
                      <td className="py-3">Standard quality, good for most applications</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">4K AI Cameras</td>
                      <td className="py-3 font-semibold">$400 - $800 each</td>
                      <td className="py-3">Premium quality with smart detection</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">NVR/DVR System</td>
                      <td className="py-3 font-semibold">$500 - $2,500</td>
                      <td className="py-3">Based on storage capacity and channels</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Installation per camera</td>
                      <td className="py-3 font-semibold">$100 - $300</td>
                      <td className="py-3">Includes cabling and configuration</td>
                    </tr>
                    <tr>
                      <td className="py-3">Cloud Storage</td>
                      <td className="py-3 font-semibold">$10 - $50/camera/month</td>
                      <td className="py-3">30-day retention typical</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mb-4">2. Access Control Systems</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Component</th>
                      <th className="text-left py-2">Price Range</th>
                      <th className="text-left py-2">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">Card Reader (Basic)</td>
                      <td className="py-3 font-semibold">$300 - $500</td>
                      <td className="py-3">Proximity card reader</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Biometric Reader</td>
                      <td className="py-3 font-semibold">$800 - $2,000</td>
                      <td className="py-3">Fingerprint or facial recognition</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Control Panel</td>
                      <td className="py-3 font-semibold">$1,000 - $3,000</td>
                      <td className="py-3">Manages 2-32 doors typically</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Electric Lock Hardware</td>
                      <td className="py-3 font-semibold">$200 - $600/door</td>
                      <td className="py-3">Mag locks or electric strikes</td>
                    </tr>
                    <tr>
                      <td className="py-3">Software License</td>
                      <td className="py-3 font-semibold">$50 - $200/month</td>
                      <td className="py-3">Cloud-based management</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mb-4">3. Intrusion Detection Systems</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Component</th>
                      <th className="text-left py-2">Price Range</th>
                      <th className="text-left py-2">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">Control Panel</td>
                      <td className="py-3 font-semibold">$300 - $800</td>
                      <td className="py-3">Heart of the system</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Motion Detectors</td>
                      <td className="py-3 font-semibold">$50 - $150 each</td>
                      <td className="py-3">PIR or dual-technology</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Door/Window Contacts</td>
                      <td className="py-3 font-semibold">$20 - $50 each</td>
                      <td className="py-3">Magnetic sensors</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Glass Break Detectors</td>
                      <td className="py-3 font-semibold">$75 - $150 each</td>
                      <td className="py-3">Acoustic sensors</td>
                    </tr>
                    <tr>
                      <td className="py-3">Keypads</td>
                      <td className="py-3 font-semibold">$100 - $250 each</td>
                      <td className="py-3">For arming/disarming</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mb-4">4. Fire Alarm Systems</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Component</th>
                      <th className="text-left py-2">Price Range</th>
                      <th className="text-left py-2">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">Fire Panel</td>
                      <td className="py-3 font-semibold">$1,500 - $5,000</td>
                      <td className="py-3">Addressable systems</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Smoke Detectors</td>
                      <td className="py-3 font-semibold">$75 - $200 each</td>
                      <td className="py-3">Photoelectric or ionization</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Heat Detectors</td>
                      <td className="py-3 font-semibold">$50 - $100 each</td>
                      <td className="py-3">For kitchens/garages</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Pull Stations</td>
                      <td className="py-3 font-semibold">$50 - $100 each</td>
                      <td className="py-3">Manual activation</td>
                    </tr>
                    <tr>
                      <td className="py-3">Strobe/Horn</td>
                      <td className="py-3 font-semibold">$75 - $150 each</td>
                      <td className="py-3">Audio/visual alerts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="factors" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Key Factors That Affect Your Security Investment</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Property Characteristics</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Square Footage:</strong> Larger spaces need more equipment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Entry Points:</strong> Each door/window adds cost</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Building Age:</strong> Older buildings may need more work</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Multiple Floors:</strong> Increases installation complexity</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Business Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Industry Regulations:</strong> Healthcare, cannabis have strict rules</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Insurance Requirements:</strong> May mandate certain features</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>24/7 Operations:</strong> Different needs than 9-5 business</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Integration Needs:</strong> Connecting to existing systems</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-navy text-white p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-4">Cost Per Square Foot Guidelines</h3>
                <p className="mb-4">
                  While every business is unique, these averages help with budgeting:
                </p>
                <ul className="space-y-2">
                  <li>• <strong>Basic Security:</strong> $0.50 - $1.00 per sq ft</li>
                  <li>• <strong>Standard Security:</strong> $1.00 - $2.50 per sq ft</li>
                  <li>• <strong>Advanced Security:</strong> $2.50 - $5.00 per sq ft</li>
                  <li>• <strong>High-Security:</strong> $5.00+ per sq ft</li>
                </ul>
                <p className="mt-4 text-sm text-gray-200">
                  Example: A 5,000 sq ft office requiring standard security would budget $5,000 - $12,500 for equipment and installation.
                </p>
              </div>
            </section>

            <section id="roi" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">ROI Calculator: Understanding Your Security Investment Return</h2>
              
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CalculatorIcon className="h-6 w-6 mr-2 text-navy" />
                  Security System ROI Factors
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Direct Savings:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Insurance Premium Reduction: 5-20% ($500-$2,000/year typical)</li>
                      <li>• Theft Prevention: Average commercial theft = $1,500</li>
                      <li>• Reduced Security Guard Costs: $30,000-$50,000/year per guard</li>
                      <li>• Lower False Alarm Fines: $50-$500 per incident</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Indirect Benefits:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Increased Employee Productivity: 5-10% improvement</li>
                      <li>• Reduced Liability Claims: Average slip-and-fall = $20,000</li>
                      <li>• Better Employee Retention: Safe workplace reduces turnover</li>
                      <li>• Enhanced Customer Trust: Visible security increases sales</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-900 font-semibold">
                    Typical ROI: Most businesses see full payback in 18-36 months through combined savings and loss prevention.
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-navy rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Sample ROI Calculation</h3>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Initial Investment</td>
                      <td className="py-2 text-right font-semibold text-red-600">-$8,500</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Annual Monitoring</td>
                      <td className="py-2 text-right font-semibold text-red-600">-$1,200</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Insurance Savings (15%)</td>
                      <td className="py-2 text-right font-semibold text-green-600">+$1,500</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Prevented Theft (estimated)</td>
                      <td className="py-2 text-right font-semibold text-green-600">+$3,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Tax Deduction (Section 179)</td>
                      <td className="py-2 text-right font-semibold text-green-600">+$2,125</td>
                    </tr>
                    <tr className="font-bold text-lg">
                      <td className="py-3">First Year Net Cost</td>
                      <td className="py-3 text-right text-green-600">-$3,075</td>
                    </tr>
                    <tr className="font-bold text-lg border-t">
                      <td className="py-3">Payback Period</td>
                      <td className="py-3 text-right text-navy">14 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="comparison" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Buy vs. Lease vs. DIY: Which is Right for Your Business?</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 text-left">Factor</th>
                      <th className="p-4 text-center">Purchase</th>
                      <th className="p-4 text-center">Lease</th>
                      <th className="p-4 text-center">DIY</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-white">
                      <td className="p-4 font-semibold">Upfront Cost</td>
                      <td className="p-4 text-center">$3,000 - $25,000+</td>
                      <td className="p-4 text-center">$0 - $500</td>
                      <td className="p-4 text-center">$500 - $2,000</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4 font-semibold">Monthly Cost</td>
                      <td className="p-4 text-center">$30 - $200 (monitoring)</td>
                      <td className="p-4 text-center">$100 - $500</td>
                      <td className="p-4 text-center">$0 - $50</td>
                    </tr>
                    <tr className="border-b bg-white">
                      <td className="p-4 font-semibold">5-Year Total</td>
                      <td className="p-4 text-center">$5,000 - $35,000</td>
                      <td className="p-4 text-center">$6,000 - $30,000</td>
                      <td className="p-4 text-center">$500 - $5,000</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4 font-semibold">Professional Install</td>
                      <td className="p-4 text-center">✅ Yes</td>
                      <td className="p-4 text-center">✅ Yes</td>
                      <td className="p-4 text-center">❌ No</td>
                    </tr>
                    <tr className="border-b bg-white">
                      <td className="p-4 font-semibold">Professional Monitoring</td>
                      <td className="p-4 text-center">✅ Available</td>
                      <td className="p-4 text-center">✅ Included</td>
                      <td className="p-4 text-center">⚠️ Limited</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4 font-semibold">Maintenance Included</td>
                      <td className="p-4 text-center">⚠️ Optional</td>
                      <td className="p-4 text-center">✅ Yes</td>
                      <td className="p-4 text-center">❌ No</td>
                    </tr>
                    <tr className="border-b bg-white">
                      <td className="p-4 font-semibold">System Ownership</td>
                      <td className="p-4 text-center">✅ You own it</td>
                      <td className="p-4 text-center">❌ No</td>
                      <td className="p-4 text-center">✅ You own it</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4 font-semibold">Tax Benefits</td>
                      <td className="p-4 text-center">✅ Section 179</td>
                      <td className="p-4 text-center">⚠️ Operating expense</td>
                      <td className="p-4 text-center">⚠️ Limited</td>
                    </tr>
                    <tr className="bg-navy text-white">
                      <td className="p-4 font-semibold">Best For</td>
                      <td className="p-4 text-center">Established businesses</td>
                      <td className="p-4 text-center">Startups, short-term</td>
                      <td className="p-4 text-center">Tech-savvy, tiny budget</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <p className="font-semibold text-blue-900 mb-2">Our Recommendation for Mercer County Businesses:</p>
                <p className="text-blue-800">
                  Most established businesses benefit from purchasing their security system. With Section 179 tax deductions and long-term savings, ownership typically provides the best ROI. Leasing makes sense for startups or businesses planning to relocate within 2-3 years.
                </p>
              </div>
            </section>

            <section id="savings" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Maximizing Tax Benefits & Insurance Savings</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-green-900">
                    <ShieldCheckIcon className="h-6 w-6 inline mr-2" />
                    Section 179 Tax Deduction
                  </h3>
                  <p className="mb-4 text-green-800">
                    The IRS Section 179 deduction allows businesses to deduct the full purchase price of qualifying equipment in the year of purchase.
                  </p>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>2024 Limit:</strong> Up to $1,160,000 in equipment</li>
                    <li>• <strong>Qualifying Systems:</strong> Security cameras, access control, alarms</li>
                    <li>• <strong>Tax Savings:</strong> 20-35% of system cost</li>
                    <li>• <strong>Example:</strong> $10,000 system = $2,500-$3,500 tax savings</li>
                  </ul>
                  <p className="mt-4 text-sm text-green-600">
                    *Consult your tax advisor for specific situations
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">
                    <ChartBarIcon className="h-6 w-6 inline mr-2" />
                    Insurance Premium Discounts
                  </h3>
                  <p className="mb-4 text-blue-800">
                    Most commercial insurance companies offer discounts for professionally monitored security systems.
                  </p>
                  <ul className="space-y-2 text-blue-700">
                    <li>• <strong>Typical Discount:</strong> 5-20% on premiums</li>
                    <li>• <strong>Requirements:</strong> UL-Listed central monitoring</li>
                    <li>• <strong>Average Savings:</strong> $500-$2,000/year</li>
                    <li>• <strong>Additional:</strong> May reduce deductibles</li>
                  </ul>
                  <p className="mt-4 text-sm text-blue-600">
                    *Check with your insurance provider for specific discounts
                  </p>
                </div>
              </div>
            </section>

            <section id="examples" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Real Pricing Examples from Mercer County Businesses</h2>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-navy">Small Professional Office - Princeton</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Business Type: Law Firm</p>
                      <p className="text-sm text-gray-600 mb-2">Size: 2,500 sq ft, 3 doors</p>
                      <p className="text-sm text-gray-600">Employees: 8</p>
                    </div>
                    <div>
                      <p className="font-semibold">System Components:</p>
                      <ul className="text-sm space-y-1">
                        <li>• 6 HD cameras with 30-day storage</li>
                        <li>• 3-door access control system</li>
                        <li>• Basic intrusion detection</li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Investment:</span>
                      <span className="text-2xl font-bold text-navy">$4,850</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-600">Monthly Monitoring:</span>
                      <span className="font-semibold">$65/month</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-navy">Medium Retail Store - Hamilton Township</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Business Type: Electronics Retailer</p>
                      <p className="text-sm text-gray-600 mb-2">Size: 8,000 sq ft, 5 doors</p>
                      <p className="text-sm text-gray-600">Employees: 15</p>
                    </div>
                    <div>
                      <p className="font-semibold">System Components:</p>
                      <ul className="text-sm space-y-1">
                        <li>• 16 4K cameras with AI analytics</li>
                        <li>• 5-door access control</li>
                        <li>• Advanced intrusion with zones</li>
                        <li>• Panic buttons at registers</li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Investment:</span>
                      <span className="text-2xl font-bold text-navy">$12,500</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-600">Monthly Monitoring:</span>
                      <span className="font-semibold">$125/month</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-navy">Large Warehouse - Trenton</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Business Type: Distribution Center</p>
                      <p className="text-sm text-gray-600 mb-2">Size: 25,000 sq ft, 12 doors</p>
                      <p className="text-sm text-gray-600">Employees: 40</p>
                    </div>
                    <div>
                      <p className="font-semibold">System Components:</p>
                      <ul className="text-sm space-y-1">
                        <li>• 32 cameras (mix of 4K and thermal)</li>
                        <li>• 12-door access with time zones</li>
                        <li>• Perimeter detection system</li>
                        <li>• Fire alarm integration</li>
                        <li>• Environmental monitoring</li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Investment:</span>
                      <span className="text-2xl font-bold text-navy">$28,750</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-600">Monthly Monitoring:</span>
                      <span className="font-semibold">$275/month</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions About Security System Costs</h2>
              
              <div className="space-y-4">
                {pricingFAQs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Get Your Custom Security System Quote</h2>
              
              <div className="bg-gradient-to-r from-navy to-navy-light p-8 rounded-xl text-white">
                <p className="text-lg mb-6">
                  Every business is unique, and generic pricing can only tell part of the story. For an accurate quote tailored to your specific needs, location, and industry requirements, our security experts are ready to help.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-3">What We'll Discuss:</h3>
                    <ul className="space-y-1 text-gray-100">
                      <li>✓ Your specific security concerns</li>
                      <li>✓ Property layout and vulnerabilities</li>
                      <li>✓ Industry compliance requirements</li>
                      <li>✓ Budget and financing options</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">What You'll Receive:</h3>
                    <ul className="space-y-1 text-gray-100">
                      <li>✓ Detailed system recommendation</li>
                      <li>✓ Itemized cost breakdown</li>
                      <li>✓ ROI analysis for your business</li>
                      <li>✓ No-pressure, honest advice</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center px-6 py-3 bg-red text-white font-semibold rounded-lg hover:bg-red-dark transition"
                  >
                    Get Free Quote
                  </Link>
                  <a
                    href="tel:609-882-8988"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-gray-100 transition"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    Call (609) 882-8988
                  </a>
                </div>
              </div>
            </section>

          </article>
        </div>
      </div>

      <CTASection
        title="Ready to Invest in Your Business Security?"
        subtitle="Get a detailed quote with transparent pricing and ROI analysis for your Mercer County or Bucks County business."
      />
    </>
  );
}