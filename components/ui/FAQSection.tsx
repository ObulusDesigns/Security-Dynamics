import React from 'react';
import { FAQAccordion } from './FAQAccordion';
import { darkSectionClasses, darkSectionPatternStyle, sectionPadding } from '@/lib/utils/sectionStyles';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  variant?: 'light' | 'dark';
  className?: string;
}

export function FAQSection({ 
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know',
  faqs,
  variant = 'dark',
  className = ''
}: FAQSectionProps) {
  if (variant === 'dark') {
    return (
      <section className={`${darkSectionClasses} ${sectionPadding} ${className}`} style={darkSectionPatternStyle}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-6">
              {title}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {subtitle}
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    );
  }

  return (
    <section className={`bg-gray-50 ${sectionPadding} ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {subtitle}
          </p>
        </div>
        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
}