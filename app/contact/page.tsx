import { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import { ContactForm } from '@/components/forms/ContactForm';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';
import { darkSectionClasses, darkSectionPatternStyle, sectionPadding } from '@/lib/utils/sectionStyles';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Contact Security Dynamics | Free Security Assessment | NJ & PA',
  description: 'Contact Security Dynamics for business security systems in Mercer County NJ & Bucks County PA. Free assessments, 24/7 support. Call (609) 394-8800.',
  keywords: 'contact Security Dynamics, security company near me, security assessment NJ, security assessment PA, business security consultation',
  openGraph: {
    title: 'Contact Security Dynamics Inc. | Get Your Free Security Assessment',
    description: 'Expert security solutions for NJ & PA businesses. Free on-site assessment. 24/7 support. Call (609) 394-8800.',
    url: `${SITE_CONFIG.url}/contact`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Contact Security Dynamics Inc.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Security Dynamics | Free Security Assessment',
    description: 'Get expert security solutions for your business. Free assessment. 24/7 support.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
};

// Schema markup
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}/contact#business`,
  name: 'Security Dynamics Inc.',
  image: `${SITE_CONFIG.url}/logo-1.webp`,
  telephone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_INFO.address.street,
    addressLocality: COMPANY_INFO.address.city,
    addressRegion: COMPANY_INFO.address.state,
    postalCode: COMPANY_INFO.address.zip,
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '40.3573',
    longitude: '-74.6672'
  },
  url: SITE_CONFIG.url,
  areaServed: [
    {
      '@type': 'AdministrativeArea',
      name: 'Mercer County, NJ'
    },
    {
      '@type': 'AdministrativeArea', 
      name: 'Bucks County, PA'
    }
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00'
    }
  ],
  priceRange: '$$',
  paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Invoice'],
  currenciesAccepted: 'USD'
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
      name: 'Contact',
      item: `${SITE_CONFIG.url}/contact`
    }
  ]
};

export default function ContactPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script id="schema-1" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script id="schema-2" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <Hero
        title="Contact Security Dynamics"
        subtitle="Get Your Free Security Assessment Today"
        description="Ready to protect your business? Contact our security experts for a comprehensive assessment and customized solution. Available 24/7 for emergencies."
        showEmergencyBadge={true}
      />

      {/* Contact Options Section - Dark Background */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-6">
              Choose How to Connect
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Multiple ways to reach us for immediate assistance or to schedule a consultation
            </p>
          </div>

          {/* Contact Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Emergency Call */}
            <div className="bg-gradient-to-br from-red-600/20 to-red-600/10 backdrop-blur-sm rounded-2xl p-8 border border-red-600/20 text-center group hover:border-red-600/40 transition-all duration-300">
              <PhoneIcon className="w-16 h-16 text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-2">Emergency Support</h3>
              <p className="text-gray-300 mb-6">24/7 immediate response for urgent security needs</p>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 w-full"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call {COMPANY_INFO.phone}
              </a>
              <p className="text-sm text-gray-400 mt-4">Average response: 15 minutes</p>
            </div>

            {/* Schedule Assessment */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center group hover:border-white/40 transition-all duration-300">
              <BuildingOfficeIcon className="w-16 h-16 text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-2">Free Assessment</h3>
              <p className="text-gray-300 mb-6">Get a comprehensive security evaluation at no cost</p>
              <Link
                href="#contact-form"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-200 w-full"
              >
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                Schedule Now
              </Link>
              <p className="text-sm text-gray-400 mt-4">Response within 24 hours</p>
            </div>

            {/* Live Chat */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center group hover:border-white/40 transition-all duration-300">
              <ChatBubbleLeftRightIcon className="w-16 h-16 text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-2">Live Chat</h3>
              <p className="text-gray-300 mb-6">Instant answers from our security experts</p>
              <button
                className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 w-full"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                Start Chat
              </button>
              <p className="text-sm text-gray-400 mt-4">Available business hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white" id="contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Column 1 - Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Request Your Free Security Assessment
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Complete the form below and our security experts will contact you within 24 hours
              </p>

              <ContactForm />
              
              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">35+</div>
                    <div className="text-sm text-gray-600">Years in Business</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">5,000+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 - Contact Information & Map */}
            <div>
              {/* Contact Info Cards */}
              <div className="space-y-6 mb-8">
                {/* Office Location */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start">
                    <MapPinIcon className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">Headquarters</h3>
                      <p className="text-gray-700">
                        {COMPANY_INFO.address.street}<br />
                        {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                      </p>
                      <a 
                        href="https://maps.google.com/?q=520+Route+33+Millstone+NJ+08535"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-700 text-sm mt-2 inline-block font-semibold"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
                  >
                    <PhoneIcon className="w-6 h-6 text-red-600 mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-red-600 font-semibold">{COMPANY_INFO.phone}</p>
                    <p className="text-xs text-gray-600 mt-1">24/7 Emergency Line</p>
                  </a>

                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
                  >
                    <EnvelopeIcon className="w-6 h-6 text-red-600 mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-red-600 font-semibold text-sm break-all">{COMPANY_INFO.email}</p>
                    <p className="text-xs text-gray-600 mt-1">We'll respond within 24hrs</p>
                  </a>
                </div>

                {/* Business Hours */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                      <div className="space-y-1 text-gray-700">
                        <div className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span className="font-medium">9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday - Sunday:</span>
                          <span className="font-medium">Emergency Only</span>
                        </div>
                      </div>
                      <p className="text-sm text-red-600 mt-3 font-semibold">
                        24/7 Emergency Response Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-100 rounded-2xl p-2" style={{ height: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.123456789!2d-74.5089!3d40.2543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3d1234567890%3A0x1234567890abcdef!2s520+NJ-33%2C+Millstone+Township%2C+NJ+08535!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Security Dynamics Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas - Dark Blue Background */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-6">
              Service Areas
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              We provide rapid response throughout Mercer County, NJ and Bucks County, PA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Mercer County, NJ</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Trenton', 'Princeton', 'Hamilton Township', 'Lawrence Township', 'Ewing', 'West Windsor', 'East Windsor', 'Hopewell'].map((city) => (
                  <Link
                    key={city}
                    href={`/locations/${city.toLowerCase().replace(' ', '-')}-nj`}
                    className="text-gray-300 hover:text-red-400 transition-colors"
                  >
                    • {city}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Bucks County, PA</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Doylestown', 'Bensalem', 'Levittown', 'Newtown', 'Yardley', 'New Hope', 'Bristol', 'Langhorne'].map((city) => (
                  <Link
                    key={city}
                    href={`/locations/${city.toLowerCase().replace(' ', '-')}-pa`}
                    className="text-gray-300 hover:text-red-400 transition-colors"
                  >
                    • {city}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our security services and process
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How quickly can you respond to emergencies?',
                answer: 'Our average emergency response time is 15 minutes within our service areas. We have technicians on-call 24/7 throughout Mercer County, NJ and Bucks County, PA.'
              },
              {
                question: 'What does the free security assessment include?',
                answer: 'Our comprehensive assessment includes a full site evaluation, vulnerability analysis, camera placement planning, access control recommendations, and a detailed quote with multiple options to fit your budget.'
              },
              {
                question: 'Do you offer monitoring services?',
                answer: 'Yes, we provide 24/7 professional monitoring through our UL-listed central station. Our monitoring services include intrusion detection, fire alarm monitoring, video verification, and emergency dispatch coordination.'
              },
              {
                question: 'How long does installation typically take?',
                answer: 'Most commercial installations are completed within 1-3 days, depending on the system size. We work around your business hours to minimize disruption and can perform installations during evenings or weekends if needed.'
              },
              {
                question: 'What makes Security Dynamics different?',
                answer: 'As a family-owned local company for 35+ years, we combine enterprise-level technology with personalized service. You\'ll always speak with someone who knows your business, and we guarantee the fastest response times in the area.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
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

      {/* CTA Section - Dark Background */}
      <section className={`py-16 ${darkSectionClasses}`}>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BuildingOfficeIcon className="w-16 h-16 text-red-400 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join over 5,000 businesses that trust Security Dynamics to protect what matters most
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call {COMPANY_INFO.phone}
            </a>
            <Link
              href="#contact-form"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Schedule Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}