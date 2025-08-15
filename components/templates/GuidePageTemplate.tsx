import React from 'react';
import Link from 'next/link';
import { Hero, CTA } from '@/components/sections';
import { darkSectionClasses, darkSectionPatternStyle, sectionPadding } from '@/lib/utils/sectionStyles';
import { 
  BookOpenIcon,
  ClockIcon,
  CheckCircleIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

interface GuideSection {
  title: string;
  content: string | React.ReactNode;
  icon?: React.ElementType;
}

interface GuidePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  readTime: string;
  lastUpdated: string;
  sections: GuideSection[];
  relatedGuides?: {
    title: string;
    href: string;
    description: string;
  }[];
}

export function GuidePageTemplate({
  title,
  subtitle,
  description,
  readTime,
  lastUpdated,
  sections,
  relatedGuides = []
}: GuidePageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <Hero title={title}
        subtitle={subtitle}
        description={description}
        
        
      primaryCta={{
          text: "Get Professional Consultation",
          href: "https://ocyrus.app.n8n.cloud/form/a96519af-6dc7-438a-a754-3d3eb830bdf7"
        }}
      />

      {/* Guide Content - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Meta */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 mb-12 pb-8 border-b border-gray-200">
            <div className="flex items-center">
              <ClockIcon className="w-4 h-4 mr-2" />
              <span>{readTime} read</span>
            </div>
            <div className="flex items-center">
              <BookOpenIcon className="w-4 h-4 mr-2" />
              <span>Updated {lastUpdated}</span>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <BookOpenIcon className="w-5 h-5 mr-2 text-primary" />
              Table of Contents
            </h2>
            <nav className="space-y-2">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#section-${index}`}
                  className="block text-gray-700 hover:text-primary transition-colors pl-4 border-l-2 border-gray-300 hover:border-primary"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Guide Sections */}
          <div className="prose prose-lg max-w-none">
            {sections.map((section, index) => (
              <div key={index} id={`section-${index}`} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  {section.icon && <section.icon className="w-8 h-8 mr-3 text-primary" />}
                  {section.title}
                </h2>
                {typeof section.content === 'string' ? (
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                ) : (
                  section.content
                )}
              </div>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="bg-gray-50 rounded-xl p-8 mt-16 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <LightBulbIcon className="w-6 h-6 mr-2 text-red-600" />
              Key Takeaways
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 mr-3 text-success mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Professional security systems are an investment that pays for itself through loss prevention and insurance savings</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 mr-3 text-success mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">The right security solution depends on your specific business type, location, and risk factors</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 mr-3 text-success mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Local expertise and rapid response are crucial for effective security protection</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related Guides - Dark Section */}
      {relatedGuides.length > 0 && (
        <section className={`${sectionPadding} ${darkSectionClasses}`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0" style={darkSectionPatternStyle} />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Continue Learning
              </h2>
              <p className="text-xl text-gray-300">
                Explore more guides to make informed security decisions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedGuides.map((guide, index) => (
                <Link
                  key={index}
                  href={guide.href}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{guide.description}</p>
                  <div className="flex items-center text-white font-semibold group-hover:text-red-400 transition-colors">
                    <span>Read Guide</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTA 
        title="Ready to Secure Your Business?"
        subtitle="Get expert advice and a custom security solution"
        showFeatures={true}
      />
    </>
  );
}