'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { FAQ } from '@/lib/types/seo';

interface FAQAccordionProps {
  faqs: FAQ[];
  variant?: 'light' | 'dark';
}

export function FAQAccordion({ faqs, variant = 'dark' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const baseClasses = variant === 'dark' 
    ? 'bg-white/10 backdrop-blur-sm border-white/20'
    : 'bg-gray-50 border-gray-200';
    
  const textClasses = variant === 'dark'
    ? {
        question: 'text-white',
        answer: 'text-gray-300',
        icon: 'text-gray-400'
      }
    : {
        question: 'text-gray-900',
        answer: 'text-gray-600',
        icon: 'text-gray-500'
      };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`${baseClasses} rounded-xl border overflow-hidden transition-all duration-200 hover:shadow-lg`}
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-8 py-6 text-left flex items-center justify-between group"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <h3 className={`text-lg font-semibold ${textClasses.question} pr-4`}>
              {faq.question}
            </h3>
            <span className={`${textClasses.icon} flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
              <ChevronDownIcon className="w-5 h-5" />
            </span>
          </button>
          
          <div
            id={`faq-answer-${index}`}
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <div className="px-8 pb-6">
              <p className={`${textClasses.answer} leading-relaxed`}>
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}