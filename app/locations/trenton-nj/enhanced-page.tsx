import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { 
  BuildingOffice2Icon,
  BuildingLibraryIcon,
  TruckIcon,
  ShieldCheckIcon,
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  CheckCircleIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import StructuredData from '@/components/seo/StructuredData';
import { generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/utils/structured-data';

const trentonFAQs = [
  {
    question: "Do you work with Trenton government buildings and contractors?",
    answer: "Yes, we're experienced with state and municipal government security requirements. We work with numerous Trenton government buildings and are familiar with state contracting processes, prevailing wage requirements, and public bidding procedures."
  },
  {
    question: "What's your response time for downtown Trenton businesses?",
    answer: "Our Hamilton Township headquarters is just minutes from downtown Trenton. We typically respond to urgent calls within 30 minutes and provide same-day service for most requests in the Trenton area."
  },
  {
    question: "Can you secure large Trenton warehouses and industrial facilities?",
    answer: "Absolutely. We specialize in large-scale industrial security, protecting many warehouses along Route 130, Route 1, and the Delaware River industrial corridor. Our systems include perimeter detection, loading dock cameras, and asset tracking."
  },
  {
    question: "Do you understand Trenton's specific crime challenges?",
    answer: "With 40+ years serving Trenton, we understand the city's unique security needs. We design systems that address urban challenges like vandalism, break-ins, and employee theft while working closely with Trenton Police Department."
  },
  {
    question: "What types of Trenton businesses do you protect?",
    answer: "We secure diverse Trenton businesses including government offices, warehouses, medical facilities, retail stores, restaurants, professional offices, manufacturing plants, and non-profit organizations throughout the capital city."
  }
];

const breadcrumbs = [
  { name: 'Home', url: 'https://securitydynamicsinc.com' },
  { name: 'Locations', url: 'https://securitydynamicsinc.com/locations' },
  { name: 'New Jersey', url: 'https://securitydynamicsinc.com/service-areas/mercer-county-nj' },
  { name: 'Trenton', url: 'https://securitydynamicsinc.com/locations/trenton-nj' }
];

export const metadata: Metadata = {
  title: 'Commercial Security Systems Trenton NJ | Warehouse & Business Security',
  description: 'Professional security systems for Trenton businesses, warehouses & government buildings. 24/7 monitoring, access control, cameras. Local headquarters, rapid response.',
  keywords: 'Trenton security systems, commercial security Trenton NJ, warehouse security Trenton, Trenton business security, government building security, Trenton alarm monitoring',
  openGraph: {
    title: 'Trenton NJ Commercial Security Systems | Security Dynamics',
    description: 'Protecting Trenton businesses since 1984. Specializing in warehouse, industrial, and government building security. Local headquarters for rapid response.',
    url: 'https://securitydynamicsinc.com/locations/trenton-nj',
    images: [{ url: '/images/trenton-security-systems.jpg' }],
  },
  alternates: {
    canonical: 'https://securitydynamicsinc.com/locations/trenton-nj',
  },
};

export default function TrentonSecurityPage() {
  const localBusinessData = generateLocalBusinessSchema({
    name: 'Security Dynamics - Trenton Headquarters',
    city: 'Trenton',
    state: 'New Jersey',
    description: 'Commercial security systems headquarters serving Trenton businesses, warehouses, and government facilities with comprehensive security solutions since 1984.'
  });

  return (
    <>
      <StructuredData data={localBusinessData} />
      <StructuredData data={generateFAQSchema(trentonFAQs)} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbs)} />

      <HeroSection
        title="Commercial Security Systems in Trenton, NJ"
        subtitle="Headquarters in Hamilton Township - Protecting New Jersey's Capital Since 1984"
        backgroundImage="/images/trenton-skyline.jpg"
        ctaText="Get Free Security Assessment"
        ctaLink="/quote"
        height="medium"
      />

      {/* Local Authority Signals */}
      <section className="py-8 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">HQ</div>
              <div className="text-sm">Local Headquarters</div>
            </div>
            <div>
              <div className="text-3xl font-bold">1,000+</div>
              <div className="text-sm">Trenton Area Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold">30min</div>
              <div className="text-sm">Average Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm">Emergency Service</div>
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
              <h2 className="text-3xl font-bold mb-6">Trenton's Hometown Security Provider</h2>
              <p className="text-lg mb-6">
                With our headquarters just minutes from downtown Trenton in Hamilton Township, Security Dynamics has been the capital city's trusted security partner for over 40 years. We protect everything from state government buildings to Route 130 warehouses, downtown businesses to Delaware River industrial facilities.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Why Trenton Businesses Choose Local</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Rapid Response:</strong> Headquarters at 6 David Brainerd Dr means we're minutes away</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Urban Expertise:</strong> 40+ years understanding Trenton's unique security challenges</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Government Experience:</strong> Familiar with state and municipal requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Community Investment:</strong> We live here, work here, and protect here</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4">Industries We Protect in Trenton</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <TruckIcon className="h-10 w-10 text-navy mb-3" />
                  <h4 className="font-semibold mb-2">Warehouses & Distribution</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Large facilities along Route 130, Route 1, and the Delaware River industrial corridor.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Perimeter intrusion detection</li>
                    <li>• Loading dock cameras</li>
                    <li>• Inventory protection systems</li>
                    <li>• Employee access control</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <BuildingLibraryIcon className="h-10 w-10 text-navy mb-3" />
                  <h4 className="font-semibold mb-2">Government & Municipal</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    State buildings, city offices, and public facilities throughout the capital.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• High-security access control</li>
                    <li>• Visitor management systems</li>
                    <li>• Emergency lockdown capabilities</li>
                    <li>• Integration with law enforcement</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <BuildingOffice2Icon className="h-10 w-10 text-navy mb-3" />
                  <h4 className="font-semibold mb-2">Downtown Businesses</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Retail stores, restaurants, and offices in downtown Trenton and surrounding areas.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Vandalism deterrence</li>
                    <li>• After-hours protection</li>
                    <li>• Panic button systems</li>
                    <li>• Cash handling security</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <ChartBarIcon className="h-10 w-10 text-navy mb-3" />
                  <h4 className="font-semibold mb-2">Manufacturing & Industrial</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Manufacturing plants and industrial facilities throughout Trenton.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Equipment monitoring</li>
                    <li>• Environmental sensors</li>
                    <li>• Safety compliance systems</li>
                    <li>• 24/7 facility monitoring</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">Trenton Security Challenges We Solve</h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-red-50 border-l-4 border-red p-4">
                  <h4 className="font-semibold mb-2">Urban Crime Prevention</h4>
                  <p className="text-gray-700">
                    Trenton businesses face unique urban security challenges. Our systems are designed to deter vandalism, prevent break-ins, and reduce theft through visible deterrence and rapid police response coordination.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-navy p-4">
                  <h4 className="font-semibold mb-2">Large Facility Protection</h4>
                  <p className="text-gray-700">
                    Trenton's warehouses and industrial facilities require comprehensive coverage. We provide scalable solutions that protect vast spaces efficiently, from perimeter fencing to interior asset tracking.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <h4 className="font-semibold mb-2">Government Compliance</h4>
                  <p className="text-gray-700">
                    State and municipal buildings have strict security requirements. We ensure compliance with government standards while providing user-friendly systems for daily operations.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                  <h4 className="font-semibold mb-2">Employee Safety</h4>
                  <p className="text-gray-700">
                    Protecting employees in urban environments is crucial. Our systems include panic buttons, safe walk programs, parking lot monitoring, and emergency communication features.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">Trenton Neighborhoods We Serve</h3>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    Downtown Trenton
                  </li>
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    Mill Hill
                  </li>
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    Chambersburg
                  </li>
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    North Trenton
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    South Trenton
                  </li>
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    West Trenton
                  </li>
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    East Trenton
                  </li>
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    Cadwalader Heights
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    Route 1 Corridor
                  </li>
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    Route 130 Industrial
                  </li>
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    Delaware River Area
                  </li>
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red mr-2" />
                    State House District
                  </li>
                </ul>
              </div>

              {/* Crime Statistics Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Trenton Crime Prevention Impact</h3>
                <p className="mb-4">
                  According to recent statistics, businesses with professional security systems in Trenton experience:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">67%</div>
                    <div className="text-sm">Reduction in break-ins</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">45%</div>
                    <div className="text-sm">Less employee theft</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">80%</div>
                    <div className="text-sm">Faster police response</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-navy text-white p-6 rounded-lg mb-6 sticky top-4">
                <h3 className="text-xl font-bold mb-4">Trenton Headquarters</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPinIcon className="h-5 w-5 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">6 David Brainerd Dr</p>
                      <p className="text-sm">Hamilton Township, NJ 08690</p>
                      <p className="text-sm">(Minutes from Downtown)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 mr-3" />
                    <span>(609) 882-8988</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 mr-3" />
                    <span>Mon-Fri: 8:30 AM - 5:00 PM</span>
                  </div>
                </div>
                <Link
                  href="/quote"
                  className="block w-full bg-red text-white text-center py-3 rounded-lg font-semibold hover:bg-red-dark transition"
                >
                  Get Free Assessment
                </Link>
                <p className="text-sm mt-4 text-gray-200">
                  Emergency response available 24/7
                </p>
              </div>

              {/* Local Testimonial */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Trenton Business Owner</h4>
                <p className="text-gray-700 italic mb-3">
                  "After two break-ins, we called Security Dynamics. They understood our downtown location's challenges and installed a system that's prevented any incidents for 3 years now. Best investment we've made."
                </p>
                <p className="text-sm font-semibold">- Downtown Trenton Retailer</p>
              </div>

              {/* Crime Prevention Tips */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold mb-3">Trenton Security Tips</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Install visible cameras as deterrents</li>
                  <li>• Use motion-activated lighting</li>
                  <li>• Secure all ground-floor windows</li>
                  <li>• Remove cash nightly from registers</li>
                  <li>• Join Trenton Business Watch program</li>
                  <li>• Coordinate with neighboring businesses</li>
                  <li>• Register cameras with Trenton PD</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 border-t pt-12">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions - Trenton Security</h2>
            <div className="space-y-6">
              {trentonFAQs.map((faq, index) => (
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
          <h2 className="text-3xl font-bold text-center mb-12">Recent Trenton Projects</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="font-semibold mb-2">Route 130 Warehouse</h3>
                <p className="text-gray-600 mb-4">
                  Secured 100,000 sq ft distribution center with perimeter detection and 32 4K cameras.
                </p>
                <Link href="/case-studies/trenton-warehouse" className="text-red font-semibold hover:underline">
                  Read Case Study →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="font-semibold mb-2">Downtown Restaurant Group</h3>
                <p className="text-gray-600 mb-4">
                  Protected 5 downtown locations with integrated POS monitoring and panic buttons.
                </p>
                <Link href="/case-studies/trenton-restaurant" className="text-red font-semibold hover:underline">
                  Read Case Study →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="font-semibold mb-2">State Office Building</h3>
                <p className="text-gray-600 mb-4">
                  Upgraded government facility with biometric access and visitor management system.
                </p>
                <Link href="/case-studies/trenton-government" className="text-red font-semibold hover:underline">
                  Read Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Partnership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Proud Trenton Community Partner</h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <ShieldCheckIcon className="h-12 w-12 text-navy mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Trenton Business Association</h3>
              <p className="text-sm text-gray-600">Active Member</p>
            </div>
            <div>
              <ShieldCheckIcon className="h-12 w-12 text-navy mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Trenton Police Partnership</h3>
              <p className="text-sm text-gray-600">Registered Provider</p>
            </div>
            <div>
              <ShieldCheckIcon className="h-12 w-12 text-navy mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Greater Trenton</h3>
              <p className="text-sm text-gray-600">Economic Development</p>
            </div>
            <div>
              <ShieldCheckIcon className="h-12 w-12 text-navy mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Mercer County Chamber</h3>
              <p className="text-sm text-gray-600">40+ Year Member</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Secure Your Trenton Business with Local Experts"
        description="Join 1,000+ Trenton businesses protected by Security Dynamics. Get a free security assessment from your hometown security provider."
        primaryButtonText="Schedule Trenton Assessment"
        primaryButtonLink="/quote"
        secondaryButtonText="Visit Our Hamilton Office"
        secondaryButtonLink="/contact"
      />
    </>
  );
}