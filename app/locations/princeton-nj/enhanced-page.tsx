import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { 
  BuildingOfficeIcon, 
  AcademicCapIcon, 
  BeakerIcon,
  ShieldCheckIcon,
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import StructuredData from '@/components/seo/StructuredData';
import { generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/utils/structured-data';

const princetonFAQs = [
  {
    question: "What security systems work best for Princeton's historic buildings?",
    answer: "Historic Princeton buildings require wireless security systems that preserve architectural integrity. We specialize in discreet installations using wireless sensors, hidden cameras, and minimal drilling to protect both your property and its historic character."
  },
  {
    question: "Do you provide security for Princeton University area businesses?",
    answer: "Yes, we serve many businesses in the Princeton University area, including Nassau Street shops, Palmer Square retailers, and University Place offices. Our systems integrate well with university district requirements and local ordinances."
  },
  {
    question: "What's the typical response time for service calls in Princeton?",
    answer: "Our Princeton service team typically responds within 2-4 hours for urgent issues and same-day for standard service calls. We maintain technicians in the area daily due to our large client base in Princeton and surrounding areas."
  },
  {
    question: "Can you integrate with existing Princeton Township requirements?",
    answer: "Absolutely. We're familiar with Princeton's alarm ordinances, including registration requirements and false alarm policies. We ensure all installations comply with local codes and help clients with permit applications when needed."
  },
  {
    question: "What industries do you primarily serve in Princeton?",
    answer: "We serve Princeton's diverse business community including law firms, medical practices, research facilities, retail stores, restaurants, financial institutions, and tech startups. Each receives customized solutions for their specific security needs."
  }
];

const breadcrumbs = [
  { name: 'Home', url: 'https://securitydynamicsinc.com' },
  { name: 'Locations', url: 'https://securitydynamicsinc.com/locations' },
  { name: 'New Jersey', url: 'https://securitydynamicsinc.com/service-areas/mercer-county-nj' },
  { name: 'Princeton', url: 'https://securitydynamicsinc.com/locations/princeton-nj' }
];

export const metadata: Metadata = {
  title: 'Commercial Security Systems Princeton NJ | Access Control & Cameras',
  description: 'Professional security systems for Princeton businesses, law firms & university area. Access control, 4K cameras, alarm monitoring. Local service since 1984. Get free assessment.',
  keywords: 'Princeton security systems, commercial security Princeton NJ, access control Princeton, Princeton business security, video surveillance Princeton, Princeton alarm monitoring',
  openGraph: {
    title: 'Princeton NJ Commercial Security Systems | Security Dynamics',
    description: 'Trusted security provider for Princeton businesses since 1984. Protecting law firms, medical offices, retail, and university area properties.',
    url: 'https://securitydynamicsinc.com/locations/princeton-nj',
    images: [{ url: '/images/princeton-security-systems.jpg' }],
  },
  alternates: {
    canonical: 'https://securitydynamicsinc.com/locations/princeton-nj',
  },
};

export default function PrincetonSecurityPage() {
  const localBusinessData = generateLocalBusinessSchema({
    name: 'Security Dynamics - Princeton Service Area',
    city: 'Princeton',
    state: 'New Jersey',
    description: 'Commercial security systems provider serving Princeton businesses with access control, video surveillance, and 24/7 monitoring since 1984.'
  });

  return (
    <>
      <StructuredData data={localBusinessData} />
      <StructuredData data={generateFAQSchema(princetonFAQs)} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbs)} />

      <HeroSection
        title="Commercial Security Systems in Princeton, NJ"
        subtitle="Protecting Princeton's Businesses, Law Firms & Research Facilities Since 1984"
        backgroundImage="/images/princeton-downtown.jpg"
        ctaText="Get Free Security Assessment"
        ctaLink="/quote"
        height="medium"
      />

      {/* Local Trust Signals */}
      <section className="py-8 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">40+</div>
              <div className="text-sm">Years Serving Princeton</div>
            </div>
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm">Princeton Businesses Protected</div>
            </div>
            <div>
              <div className="text-3xl font-bold">15min</div>
              <div className="text-sm">Average Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm">Local Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Princeton's Trusted Security Partner</h2>
              <p className="text-lg mb-6">
                Security Dynamics has been the preferred security provider for Princeton businesses for over four decades. From Nassau Street retailers to University Place tech startups, Palmer Square professional offices to Route 1 corporate campuses, we understand Princeton's unique security challenges.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Why Princeton Businesses Choose Security Dynamics</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Local Expertise:</strong> Deep understanding of Princeton's business districts, from downtown to Carnegie Center</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Rapid Response:</strong> Technicians stationed nearby for 15-minute emergency response</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Historic Preservation:</strong> Specialized installations for Princeton's historic buildings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>University Area Experience:</strong> Familiar with campus-adjacent security requirements</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4">Industries We Serve in Princeton</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <AcademicCapIcon className="h-10 w-10 text-navy mb-3" />
                  <h4 className="font-semibold mb-2">Professional Services</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Law firms, accounting offices, and consulting firms throughout downtown Princeton and Nassau Street.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Access control for sensitive documents</li>
                    <li>• After-hours monitoring</li>
                    <li>• Video verification systems</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <BeakerIcon className="h-10 w-10 text-navy mb-3" />
                  <h4 className="font-semibold mb-2">Research & Technology</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Biotech companies, research facilities, and tech startups in Princeton's innovation corridor.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Biometric access control</li>
                    <li>• Environmental monitoring</li>
                    <li>• Intellectual property protection</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <BuildingOfficeIcon className="h-10 w-10 text-navy mb-3" />
                  <h4 className="font-semibold mb-2">Retail & Hospitality</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Palmer Square shops, Nassau Street retailers, and Princeton restaurants.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• AI-powered loss prevention</li>
                    <li>• Customer analytics</li>
                    <li>• Panic button systems</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <ShieldCheckIcon className="h-10 w-10 text-navy mb-3" />
                  <h4 className="font-semibold mb-2">Medical & Healthcare</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Medical practices, dental offices, and healthcare facilities near Princeton Medical Center.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• HIPAA-compliant systems</li>
                    <li>• Controlled substance monitoring</li>
                    <li>• Patient safety features</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">Princeton Security Challenges We Solve</h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-red-50 border-l-4 border-red p-4">
                  <h4 className="font-semibold mb-2">Historic Building Preservation</h4>
                  <p className="text-gray-700">
                    Many Princeton businesses operate in historic buildings where traditional wiring isn't feasible. We specialize in wireless solutions that preserve architectural integrity while providing comprehensive protection.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-navy p-4">
                  <h4 className="font-semibold mb-2">High-Value Asset Protection</h4>
                  <p className="text-gray-700">
                    Princeton's concentration of law firms, research facilities, and high-end retail requires sophisticated security. Our systems protect intellectual property, confidential documents, and valuable inventory.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <h4 className="font-semibold mb-2">University Area Coordination</h4>
                  <p className="text-gray-700">
                    Businesses near Princeton University need security that coordinates with campus safety. We provide systems that integrate smoothly with university district requirements.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">Our Princeton Service Areas</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    Downtown Princeton / Nassau Street
                  </li>
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    Palmer Square
                  </li>
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    Princeton Shopping Center
                  </li>
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    Carnegie Center
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    Princeton Junction
                  </li>
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    Route 1 Corridor
                  </li>
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    University Place
                  </li>
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    Princeton Forrestal Village
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-navy text-white p-6 rounded-lg mb-6 sticky top-4">
                <h3 className="text-xl font-bold mb-4">Get Princeton Security Quote</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 mr-3" />
                    <span>(609) 882-8988</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 mr-3" />
                    <span>Mon-Fri: 8:30 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 mr-3" />
                    <span>Serving Princeton Since 1984</span>
                  </div>
                </div>
                <Link
                  href="/quote"
                  className="block w-full bg-red text-white text-center py-3 rounded-lg font-semibold hover:bg-red-dark transition"
                >
                  Get Free Assessment
                </Link>
                <p className="text-sm mt-4 text-gray-200">
                  Typical response time: 15 minutes for Princeton businesses
                </p>
              </div>

              {/* Local Testimonial */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Princeton Client</h4>
                <p className="text-gray-700 italic mb-3">
                  "Security Dynamics upgraded our Nassau Street law firm's entire security system. Their knowledge of Princeton's historic buildings was invaluable - they found creative solutions that didn't damage our 1920s architecture."
                </p>
                <p className="text-sm font-semibold">- Managing Partner, Princeton Law Firm</p>
              </div>

              {/* Security Tips */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold mb-3">Princeton Security Tips</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Register alarms with Princeton Police to avoid fines</li>
                  <li>• Consider weather-resistant cameras for seasonal changes</li>
                  <li>• Use motion-activated lighting for after-hours</li>
                  <li>• Implement package theft prevention for deliveries</li>
                  <li>• Coordinate with neighboring businesses for area coverage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 border-t pt-12">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions - Princeton Security</h2>
            <div className="space-y-6">
              {princetonFAQs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Princeton Projects</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="font-semibold mb-2">Nassau Street Law Firm</h3>
                <p className="text-gray-600 mb-4">
                  Installed discrete access control and HD cameras in historic building without damaging original architecture.
                </p>
                <Link href="/case-studies/princeton-law-firm" className="text-red font-semibold hover:underline">
                  Read Case Study →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="font-semibold mb-2">Palmer Square Retailer</h3>
                <p className="text-gray-600 mb-4">
                  Deployed AI-powered loss prevention system reducing shrinkage by 40% in luxury retail environment.
                </p>
                <Link href="/case-studies/palmer-square-retail" className="text-red font-semibold hover:underline">
                  Read Case Study →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="font-semibold mb-2">Route 1 Tech Company</h3>
                <p className="text-gray-600 mb-4">
                  Secured 50,000 sq ft facility with biometric access and environmental monitoring for server rooms.
                </p>
                <Link href="/case-studies/princeton-tech-campus" className="text-red font-semibold hover:underline">
                  Read Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Protect Your Princeton Business Today"
        description="Join 500+ Princeton businesses that trust Security Dynamics for their security needs. Get a free, no-obligation security assessment."
        primaryButtonText="Schedule Princeton Assessment"
        primaryButtonLink="/quote"
        secondaryButtonText="Call (609) 882-8988"
        secondaryButtonLink="tel:609-882-8988"
      />
    </>
  );
}