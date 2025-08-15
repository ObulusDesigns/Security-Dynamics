import Link from 'next/link';
import { Metadata } from 'next';
import { 
  ShieldExclamationIcon,
  HomeIcon,
  PhoneIcon,
  MagnifyingGlassIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: `Page Not Found | ${COMPANY_INFO.name}`,
  description: 'The page you are looking for could not be found. Explore our security solutions or contact us for assistance.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* 404 Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <ShieldExclamationIcon className="h-32 w-32 text-gray-300" />
                <span className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-primary">
                  404
                </span>
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We couldn't find the page you're looking for. It may have been moved, 
              deleted, or the URL might be incorrect.
            </p>

            {/* Search Suggestion */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
              <div className="flex items-start">
                <MagnifyingGlassIcon className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                <div className="text-left">
                  <h2 className="font-semibold text-gray-900 mb-2">
                    Were you looking for:
                  </h2>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <Link href="/services" className="text-primary hover:text-primary-dark">
                        Our Security Services
                      </Link>
                      {' - '}Access control, video surveillance, and monitoring
                    </li>
                    <li>
                      <Link href="/cities" className="text-primary hover:text-primary-dark">
                        Service Areas
                      </Link>
                      {' - '}Security solutions in NJ and PA
                    </li>
                    <li>
                      <Link href="/blog" className="text-primary hover:text-primary-dark">
                        Security Blog
                      </Link>
                      {' - '}Guides, tips, and industry insights
                    </li>
                    <li>
                      <Link href="https://ocyrus.app.n8n.cloud/form/a96519af-6dc7-438a-a754-3d3eb830bdf7" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                        Contact Us
                      </Link>
                      {' - '}Get in touch with our security experts
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" href="/">
                <HomeIcon className="mr-2 h-5 w-5" />
                Go to Homepage
              </Button>
              <Button size="lg" variant="outline" href={`tel:${COMPANY_INFO.phone}`}>
                <PhoneIcon className="mr-2 h-5 w-5" />
                Call {COMPANY_INFO.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Popular Pages
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                href="/services/security-systems"
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors group"
              >
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary">
                  Security Systems
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Complete security solutions for homes and businesses
                </p>
                <span className="text-primary font-semibold text-sm flex items-center">
                  Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
                </span>
              </Link>

              <Link 
                href="/services/24-7-central-station-monitoring"
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors group"
              >
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary">
                  24/7 Monitoring
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Professional monitoring with rapid emergency response
                </p>
                <span className="text-primary font-semibold text-sm flex items-center">
                  Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
                </span>
              </Link>

              <Link 
                href="/about"
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors group"
              >
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary">
                  About Us
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Trusted security provider since 1989
                </p>
                <span className="text-primary font-semibold text-sm flex items-center">
                  Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </div>

            {/* Service Areas */}
            <div className="mt-12 text-center">
              <h3 className="text-lg font-semibold mb-4">
                Looking for Security in Your Area?
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Link 
                  href="/cities/princeton-nj"
                  className="px-4 py-2 bg-white border rounded-full hover:border-primary hover:text-primary transition-colors"
                >
                  Princeton, NJ
                </Link>
                <Link 
                  href="/cities/trenton-nj"
                  className="px-4 py-2 bg-white border rounded-full hover:border-primary hover:text-primary transition-colors"
                >
                  Trenton, NJ
                </Link>
                <Link 
                  href="/cities/doylestown-pa"
                  className="px-4 py-2 bg-white border rounded-full hover:border-primary hover:text-primary transition-colors"
                >
                  Doylestown, PA
                </Link>
                <Link 
                  href="/cities/bensalem-pa"
                  className="px-4 py-2 bg-white border rounded-full hover:border-primary hover:text-primary transition-colors"
                >
                  Bensalem, PA
                </Link>
                <Link 
                  href="/cities"
                  className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                >
                  View All Locations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Help Finding What You're Looking For?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Our security experts are available 24/7 to help you find the right 
              security solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" href={`tel:${COMPANY_INFO.phone}`}>
                <PhoneIcon className="mr-2 h-5 w-5" />
                Call Now: {COMPANY_INFO.phone}
              </Button>
              <a
                href="https://ocyrus.app.n8n.cloud/form/a96519af-6dc7-438a-a754-3d3eb830bdf7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-primary transition-colors"
              >
                Contact Us Online
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}