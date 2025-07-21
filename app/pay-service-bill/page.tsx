import { Metadata } from 'next';
import Link from 'next/link';
import { WrenchScrewdriverIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Pay Service Bill | Security Dynamics Inc.',
  description: 'Pay your service bill online through our secure AlarmBiller payment portal.',
};

export default function PayServiceBillPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
            <WrenchScrewdriverIcon className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Pay Your Service Bill
          </h1>
          <p className="text-xl text-gray-600">
            Secure online payment through AlarmBiller
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="space-y-8">
            {/* Instructions */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Payment Instructions
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">1</span>
                    </div>
                  </div>
                  <p className="ml-4 text-gray-700">
                    Click the button below to access the AlarmBiller payment portal
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">2</span>
                    </div>
                  </div>
                  <p className="ml-4 text-gray-700">
                    Enter your invoice number or service ticket number
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">3</span>
                    </div>
                  </div>
                  <p className="ml-4 text-gray-700">
                    Follow the prompts to complete your secure payment
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 py-8 border-y border-gray-200">
              <div className="text-center">
                <ShieldCheckIcon className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-1">Secure Payment</h3>
                <p className="text-sm text-gray-600">
                  256-bit SSL encryption protects your information
                </p>
              </div>
              <div className="text-center">
                <ClockIcon className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-1">Instant Processing</h3>
                <p className="text-sm text-gray-600">
                  Payments are processed immediately
                </p>
              </div>
              <div className="text-center">
                <WrenchScrewdriverIcon className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-1">Service Records</h3>
                <p className="text-sm text-gray-600">
                  Access your service history anytime
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://alarmbiller.com/pay"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center btn-primary text-lg px-10 py-4"
              >
                Access Payment Portal
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <p className="mt-4 text-sm text-gray-600">
                You will be redirected to AlarmBiller's secure payment portal
              </p>
            </div>

            {/* Support */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-slate-900 mb-2">
                Questions About Your Service Bill?
              </h3>
              <p className="text-gray-600 mb-4">
                Our billing department is here to help
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:6093302287"
                  className="inline-flex items-center justify-center text-red-600 font-semibold hover:text-red-700"
                >
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Call (609) 330-2287
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center text-red-600 font-semibold hover:text-red-700"
                >
                  Email Support
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            Security Dynamics Inc. partners with AlarmBiller for secure payment processing.
          </p>
          <p className="mt-2">
            All transactions are encrypted and PCI compliant.
          </p>
        </div>
      </div>
    </div>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}