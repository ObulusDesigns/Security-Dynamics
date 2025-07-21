import React from 'react';
import Link from 'next/link';
import { 
  BuildingOffice2Icon,
  HeartIcon,
  ShoppingBagIcon,
  HomeModernIcon
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const industries = [
  {
    name: 'Healthcare Security',
    description: 'HIPAA-compliant solutions protecting patients, staff, and sensitive medical data 24/7',
    icon: HeartIcon,
    href: '/industries/healthcare-security',
    features: [
      'Patient & Staff Safety',
      'Drug Storage Protection', 
      'Emergency Lockdown',
      'HIPAA Compliance'
    ],
    stats: {
      label: 'Medical Facilities',
      value: '50+'
    }
  },
  {
    name: 'Warehouse Security',
    description: 'Comprehensive perimeter protection and inventory monitoring for logistics operations',
    icon: BuildingOffice2Icon,
    href: '/industries/warehouse-security',
    features: [
      'Perimeter Detection',
      'Loading Dock Cameras',
      'Inventory Protection',
      'Employee Access Control'
    ],
    stats: {
      label: 'Sq Ft Protected',
      value: '2M+'
    }
  },
  {
    name: 'Retail Security',
    description: 'Loss prevention and customer safety solutions that protect your bottom line',
    icon: ShoppingBagIcon,
    href: '/industries/retail-security',
    features: [
      'Loss Prevention',
      'POS Integration',
      'Customer Analytics',
      'After-Hours Protection'
    ],
    stats: {
      label: 'Shrinkage Reduction',
      value: '73%'
    }
  },
  {
    name: 'Multi-Family Residential',
    description: 'Creating safer communities with integrated access control and surveillance',
    icon: HomeModernIcon,
    href: '/industries/multi-family-residential',
    features: [
      'Resident Access Control',
      'Common Area Monitoring',
      'Package Security',
      'Visitor Management'
    ],
    stats: {
      label: 'Units Protected',
      value: '1,200+'
    }
  }
];

interface IndustriesProps {
  title?: string;
  subtitle?: string;
}

export function Industries({ 
  title = "Industry-Specific Security Solutions",
  subtitle = "Tailored protection for your unique business challenges"
}: IndustriesProps) {
  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              href={industry.href}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.02]"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/0 group-hover:from-red-50 group-hover:to-transparent transition-all duration-300" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {industry.name}
                    </h3>
                    <div className="inline-flex items-center bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                      <span className="text-red-800">{industry.stats.value}</span>
                      <span className="ml-2">{industry.stats.label}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  {industry.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {industry.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <CheckIcon className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                  <span>Explore Solutions</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300">
            Don't see your industry? We provide custom security solutions for any business type.
          </p>
        </div>
      </div>
    </section>
  );
}

// Check Icon
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}