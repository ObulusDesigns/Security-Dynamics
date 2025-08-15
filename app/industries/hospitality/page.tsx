import { Metadata } from 'next';
import { Hero, CTA } from '@/components/sections';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
// Dark section imports removed as they are no longer used
import {
  BuildingStorefrontIcon,
  ShieldCheckIcon,
  KeyIcon,
  UserGroupIcon,
  VideoCameraIcon,
  CurrencyDollarIcon,
  ClockIcon,
  MapPinIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Hospitality Security Systems | Hotel & Restaurant Security | Security Dynamics',
  description: 'Security solutions for hotels, restaurants & entertainment venues in NJ & PA. Guest safety, asset protection, POS monitoring, VIP security.',
  keywords: 'hotel security systems, restaurant security, hospitality security, guest room access control, hotel surveillance, restaurant POS security, venue security systems',
  openGraph: {
    title: 'Hospitality Security Systems | Hotel & Restaurant Protection',
    description: 'Comprehensive security for hospitality businesses. Protect guests and assets while maintaining a welcoming atmosphere.',
    url: `${SITE_CONFIG.url}/industries/hospitality`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Hospitality Security Systems'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/industries/hospitality`}};

// Schema markup
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_CONFIG.url}/industries/hospitality#service`,
  name: 'Hospitality Security Systems',
  description: 'Comprehensive security solutions for hotels, restaurants, bars, and entertainment venues focusing on guest safety and asset protection.',
  provider: {
    '@type': 'SecuritySystemInstallationService',
    name: 'Security Dynamics Inc.',
    telephone: COMPANY_INFO.phone},
  areaServed: ['New Jersey', 'Pennsylvania'],
  serviceType: 'Hospitality Security'};

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
      name: 'Industries',
      item: `${SITE_CONFIG.url}/industries`
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Hospitality',
      item: `${SITE_CONFIG.url}/industries/hospitality`
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What security challenges do hotels face?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hotels face unique challenges including guest room security, protecting against theft, managing staff access to rooms, monitoring public areas, securing valuables, preventing unauthorized pool access, and maintaining guest privacy while ensuring safety.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do restaurant security systems prevent theft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Restaurant security combines POS transaction monitoring to catch employee theft, kitchen cameras to prevent food theft, cash handling oversight, after-hours intrusion detection, and delivery area monitoring. Systems typically reduce losses by 30-50%.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can security cameras monitor alcohol service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, strategically placed cameras help monitor responsible alcohol service, document incidents for liability protection, verify age checking procedures, and provide evidence in disputes. This protects against lawsuits and license violations.'
      }
    },
    {
      '@type': 'Question',
      name: 'What does hospitality security typically cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Costs vary by property size and needs. Small restaurants may invest $5,000-15,000, boutique hotels $25,000-75,000, and large hotels or entertainment venues $100,000+. Most see ROI within 12-18 months through loss reduction.'
      }
    }
  ]
};

export default function HospitalitySecurityPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script id="schema-1" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)}}
      />
      <Script id="schema-2" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)}}
      />
      <Script id="schema-3" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)}}
      />

      {/* Hero Section */}
      <Hero title="Hospitality Security Systems"
        subtitle="Protecting Guests, Staff & Revenue"
        description="Discrete yet effective security solutions for hotels, restaurants, bars, and entertainment venues. Maintain a welcoming atmosphere while protecting guests, employees, and your bottom line."
        
        
        primaryCta={{
          text: "Get Hospitality Security Assessment",
          href: "https://ocyrus.app.n8n.cloud/form/a96519af-6dc7-438a-a754-3d3eb830bdf7"
        }}
      />

      {/* Hospitality Security Challenges Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Hospitality Security Challenges We Solve
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Balance security needs with guest experience and operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: UserGroupIcon,
                title: 'Guest & Staff Safety',
                description: 'Protect guests and employees from theft, assault, and other incidents while maintaining a welcoming environment.'
              },
              {
                icon: CurrencyDollarIcon,
                title: 'Employee Theft Prevention',
                description: 'Monitor cash handling, inventory, and POS transactions to reduce internal theft and shrinkage.'
              },
              {
                icon: KeyIcon,
                title: 'Room & Area Access Control',
                description: 'Manage guest room access, restrict staff areas, and control access to pools, gyms, and other amenities.'
              },
              {
                icon: VideoCameraIcon,
                title: 'Liability Protection',
                description: 'Document incidents, verify claims, and protect against false accusations with comprehensive video coverage.'
              },
              {
                icon: ClockIcon,
                title: 'After-Hours Security',
                description: 'Secure premises during closed hours, monitor late-night activity, and protect against break-ins.'
              },
              {
                icon: StarIcon,
                title: 'VIP & Event Security',
                description: 'Enhanced protection for high-profile guests, special events, and valuable assets like artwork or equipment.'
              }
            ].map((challenge, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <challenge.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitality Solutions Section - Light Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
                Integrated Hospitality Security Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive security that enhances guest experience while protecting your business from losses and liability.
              </p>
              
              <div className="space-y-6">
                {[
                  'HD Surveillance with Low-Light Performance',
                  'POS Transaction Monitoring & Analytics',
                  'Smart Access Control for Guest Rooms',
                  'Kitchen & Storage Area Protection',
                  'Parking Lot & Valet Security',
                  'Pool & Amenity Access Management',
                  'Mobile Alerts for Managers',
                  'Cloud Storage with Easy Retrieval'
                ].map((solution, index) => (
                  <div key={index} className="flex items-center">
                    <ShieldCheckIcon className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Hospitality Security ROI</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Employee Theft Reduction</span>
                    <span className="text-red-400 font-bold">40-60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Liability Claim Defense</span>
                    <span className="text-red-400 font-bold">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Guest Satisfaction</span>
                    <span className="text-red-400 font-bold">+25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Insurance Savings</span>
                    <span className="text-red-400 font-bold">15-20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '18%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">Average ROI: 12-18 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Types Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Solutions by Hospitality Type
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Customized security approaches for different hospitality environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: 'Hotels & Motels',
                features: ['Guest room access control', 'Lobby & corridor monitoring', 'Pool area security', 'Parking surveillance']
              },
              {
                type: 'Restaurants',
                features: ['POS transaction matching', 'Kitchen monitoring', 'Bar oversight', 'Delivery area security']
              },
              {
                type: 'Bars & Nightclubs',
                features: ['ID verification systems', 'Crowd monitoring', 'VIP area protection', 'Incident documentation']
              },
              {
                type: 'Event Venues',
                features: ['Perimeter control', 'Ticket fraud prevention', 'Backstage security', 'Equipment protection']
              },
              {
                type: 'Casinos & Gaming',
                features: ['Table game monitoring', 'Slot surveillance', 'Cash room security', 'Facial recognition']
              },
              {
                type: 'Resorts & Spas',
                features: ['Multi-building coverage', 'Beach/pool monitoring', 'Spa privacy protection', 'Activity tracking']
              }
            ].map((venue, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <BuildingStorefrontIcon className="w-10 h-10 text-red-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{venue.type}</h3>
                <ul className="space-y-2">
                  {venue.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section - Light Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
              Hospitality Security Success Story
            </h2>
            <p className="text-xl text-gray-600">
              How we helped a restaurant group reduce losses by 55%
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Regional Restaurant Chain - 15 Locations</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-600">Challenges:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• High employee turnover & theft</li>
                  <li>• No POS oversight</li>
                  <li>• Frequent dine-and-dash</li>
                  <li>• Liability concerns</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-600">Solutions Implemented:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• POS-integrated cameras</li>
                  <li>• Kitchen & bar monitoring</li>
                  <li>• Exit/entrance coverage</li>
                  <li>• Cloud-based platform</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-lg font-semibold mb-4 text-red-600">Results After 6 Months:</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">55%</div>
                  <p className="text-sm text-gray-600">Loss reduction</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">$180K</div>
                  <p className="text-sm text-gray-600">Annual savings</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">90%</div>
                  <p className="text-sm text-gray-600">Incident resolution</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">8 mo</div>
                  <p className="text-sm text-gray-600">ROI achieved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Hospitality Security Best Practices
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Proven strategies to maximize security while maintaining guest comfort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <MapPinIcon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Camera Placement</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Cover all entrances and exits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Monitor cash handling areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Protect high-value inventory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Document common areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Respect guest privacy</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <ShieldCheckIcon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Staff Training & Procedures</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Regular security awareness training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Clear incident response protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Proper system usage guidelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Guest interaction procedures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Emergency communication plans</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Light Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
              Hospitality Security FAQs
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about securing hospitality businesses
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: 'What security challenges do hotels face?',
                answer: 'Hotels face unique challenges including guest room security, protecting against theft, managing staff access to rooms, monitoring public areas, securing valuables, preventing unauthorized pool access, and maintaining guest privacy while ensuring safety.'
              },
              {
                question: 'How do restaurant security systems prevent theft?',
                answer: 'Restaurant security combines POS transaction monitoring to catch employee theft, kitchen cameras to prevent food theft, cash handling oversight, after-hours intrusion detection, and delivery area monitoring. Systems typically reduce losses by 30-50%.'
              },
              {
                question: 'Can security cameras monitor alcohol service?',
                answer: 'Yes, strategically placed cameras help monitor responsible alcohol service, document incidents for liability protection, verify age checking procedures, and provide evidence in disputes. This protects against lawsuits and license violations.'
              },
              {
                question: 'What does hospitality security typically cost?',
                answer: 'Costs vary by property size and needs. Small restaurants may invest $5,000-15,000, boutique hotels $25,000-75,000, and large hotels or entertainment venues $100,000+. Most see ROI within 12-18 months through loss reduction.'
              },
              {
                question: 'How can security improve guest experience?',
                answer: 'Modern security systems enhance guest experience by reducing wait times with efficient access control, providing safer environments, enabling faster incident resolution, and allowing staff to focus on service rather than security concerns.'
              },
              {
                question: 'What about protecting guest privacy?',
                answer: 'Professional systems balance security with privacy through strategic camera placement avoiding private areas, secure data storage with limited access, clear privacy policies, and compliance with applicable privacy laws and regulations.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Secure Your Hospitality Business Today"
        subtitle="Get a professional security assessment tailored to your venue"
        showFeatures={true}
      />
    </>
  );
}