import { Metadata } from 'next';
import { Hero } from '@/components/sections';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import { 
  ClipboardDocumentCheckIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { darkSectionClasses, darkSectionPatternStyle } from '@/lib/utils/sectionStyles';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Get Free Security System Quote | Security Dynamics Inc. | NJ & PA',
  description: 'Get a free custom security system quote for your business. Professional installation in Mercer County NJ & Bucks County PA. No obligation consultation.',
  keywords: 'security system quote, free security consultation, business security pricing, security system cost, commercial security quote',
  openGraph: {
    title: 'Get Your Free Security System Quote | Security Dynamics Inc.',
    description: 'Custom security solutions for businesses in NJ & PA. Get your free quote today. Professional installation and 24/7 monitoring available.',
    url: `${SITE_CONFIG.url}/quote`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Get a Security Quote from Security Dynamics Inc.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Security System Quote | Security Dynamics',
    description: 'Custom security solutions for businesses. Free consultation and competitive pricing.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/quote`,
  },
};

export default function QuotePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero title="Get Your Free Security System Quote"
        subtitle="Custom solutions tailored to your business needs and budget"
        
        
      primaryCta={{
          text: "Skip to Form",
          href: "#quote-form"
        }}
      />

      {/* Benefits Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Security Dynamics?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide transparent pricing and custom solutions that fit your specific security needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CurrencyDollarIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">
                Fair, transparent pricing with no hidden fees or surprise charges
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardDocumentCheckIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored security systems designed for your specific property
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
              <p className="text-gray-600">
                Get your detailed quote within 24 hours of submission
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No Obligation</h3>
              <p className="text-gray-600">
                Free consultation with no pressure to purchase
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section - Dark Blue Background */}
      <section id="quote-form" className={`py-16 md:py-24 ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Request Your Custom Quote
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and our security specialists will prepare a detailed proposal
              </p>
            </div>

            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Process Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Happens Next?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Review Your Needs</h3>
              <p className="text-gray-600">
                Our security experts analyze your requirements and property details
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Proposal</h3>
              <p className="text-gray-600">
                We create a detailed proposal with equipment, installation, and monitoring options
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Schedule Consultation</h3>
              <p className="text-gray-600">
                Review the proposal with our team and schedule your installation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Alternative - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Our security specialists are available 24/7 to answer your questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center justify-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Call Now: {COMPANY_INFO.phone}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors"
            >
              Visit Our Office
            </a>
          </div>
        </div>
      </section>
    </>
  );
}