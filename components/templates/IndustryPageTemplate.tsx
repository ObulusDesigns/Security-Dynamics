import React from 'react';
import { Hero, CTA } from '@/components/sections';
import { 
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  BuildingOfficeIcon,
  ExclamationTriangleIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  ArrowRightIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import { darkSectionClasses, darkSectionPatternStyle, sectionPadding } from '@/lib/utils/sectionStyles';

interface IndustryPageProps {
  industry: {
    name: string;
    title: string;
    subtitle: string;
    description: string;
    image?: string;
    challenges: {
      title: string;
      description: string;
      icon?: React.ComponentType<{ className?: string }>;
    }[];
    solutions: {
      title: string;
      description: string;
      features?: string[];
    }[];
    securityFeatures: string[];
    facilityTypes?: {
      type: string;
      count?: string;
    }[];
    compliance?: {
      standard: string;
      description: string;
    }[];
    caseStudy?: {
      title: string;
      subtitle: string;
      challenge: string;
      solution: string;
      results: string[];
    };
    stats?: {
      value: string;
      label: string;
    }[];
    cta?: {
      title: string;
      description: string;
    };
  };
}

export default function IndustryPageTemplate({ industry }: IndustryPageProps) {
  return (
    <>
      {/* Hero Section */}
      <Hero 
        title={industry.title}
        subtitle={industry.subtitle}
        primaryCta={{
          text: 'Get Security Assessment',
          href: 'https://ocyrus.app.n8n.cloud/form/a96519af-6dc7-438a-a754-3d3eb830bdf7'
        }}
        secondaryCta={{
          text: 'View Services',
          href: '/services'
        }}
      />

      {/* Introduction Section */}
      <section className={sectionPadding}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Tailored Security for {industry.name}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {industry.description}
            </p>
          </div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className={`${darkSectionClasses} ${sectionPadding}`} style={darkSectionPatternStyle}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-6">
              {industry.name} Security Challenges We Solve
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Understanding the unique security challenges facing your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industry.challenges.map((challenge, index) => {
              const IconComponent = challenge.icon || ExclamationTriangleIcon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <IconComponent className="w-12 h-12 text-red-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comprehensive Solutions Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
                Comprehensive {industry.name} Security Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our integrated security systems are designed specifically for {industry.name.toLowerCase()} environments.
              </p>
              
              <div className="space-y-6">
                {industry.securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <ShieldCheckIcon className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {industry.facilityTypes && (
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{industry.name} Facility Types We Secure</h3>
                <div className="space-y-4">
                  {industry.facilityTypes.map((facility, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3">
                      <span className="text-gray-700">{facility.type}</span>
                      {facility.count && (
                        <span className="text-red-600 font-bold">{facility.count} Secured</span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Trusted by {industry.name.toLowerCase()} facilities across New Jersey and Pennsylvania</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Compliance & Standards Section (if applicable) */}
      {industry.compliance && (
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                Meeting {industry.name} Compliance Standards
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our security solutions meet or exceed all industry regulatory requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industry.compliance.map((item, index) => (
                <div key={index} className="bg-red-50 rounded-xl p-6 text-center">
                  <ClipboardDocumentCheckIcon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-red-600 mb-2">{item.standard}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Detailed Solutions Section */}
      <section className={`${darkSectionClasses} ${sectionPadding}`} style={darkSectionPatternStyle}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-6">
              Tailored Security Systems for {industry.name}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive solutions designed for your specific needs
            </p>
          </div>

          <div className="space-y-16">
            {industry.solutions.map((solution, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {solution.title}
                  </h3>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {solution.description}
                  </p>
                  {solution.features && (
                    <ul className="space-y-4">
                      {solution.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <CheckCircleIcon className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className={`bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <LightBulbIcon className="w-16 h-16 text-red-400 mb-6" />
                  <h4 className="text-2xl font-bold text-white mb-4">Key Benefits</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Our {solution.title.toLowerCase()} solutions provide comprehensive protection while maintaining operational efficiency.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section (if applicable) */}
      {industry.caseStudy && (
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{industry.name} Success Story</h2>
              <p className="text-xl text-gray-600">{industry.caseStudy.subtitle}</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.caseStudy.title}</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-red-600 mb-3">The Challenge</h4>
                  <p className="text-gray-700 leading-relaxed">{industry.caseStudy.challenge}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-red-600 mb-3">Our Solution</h4>
                  <p className="text-gray-700 leading-relaxed">{industry.caseStudy.solution}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-red-600 mb-3">The Results</h4>
                  <ul className="space-y-3">
                    {industry.caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Stats Section (if applicable) */}
      {industry.stats && (
        <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                {industry.name} Security By The Numbers
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our proven track record in the {industry.name.toLowerCase()} industry
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {industry.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl font-extrabold text-red-600 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Summary */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Why {industry.name} Chooses Security Dynamics
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience, expertise, and commitment to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BuildingOfficeIcon,
                title: 'Industry Expertise',
                description: `Deep understanding of ${industry.name.toLowerCase()} security requirements and best practices`
              },
              {
                icon: ClockIcon,
                title: '24/7 Support',
                description: 'Round-the-clock monitoring and emergency response services'
              },
              {
                icon: ShieldCheckIcon,
                title: 'Compliance Ready',
                description: 'Systems designed to meet all industry regulations and standards'
              },
              {
                icon: ChartBarIcon,
                title: 'Proven ROI',
                description: 'Reduced incidents, lower insurance costs, improved operations'
              },
              {
                icon: WrenchScrewdriverIcon,
                title: 'Expert Installation',
                description: 'Factory-trained technicians with industry-specific experience'
              },
              {
                icon: ArrowRightIcon,
                title: 'Future-Proof',
                description: 'Scalable solutions that grow with your business needs'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <benefit.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTA 
        title={industry.cta?.title || `Secure Your ${industry.name} Facility Today`}
        subtitle={industry.cta?.description || 'Get a professional security assessment tailored to your needs'}
        showFeatures={true}
      />
    </>
  );
}