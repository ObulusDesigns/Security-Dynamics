'use client';

import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { darkSectionClasses, darkSectionPatternStyle, sectionPadding } from '@/lib/utils/sectionStyles';

const testimonials = [
  {
    id: 1,
    content: "Have been a customer for years. Great service. Jimmy (service technician) who has responded to any issue we have had with equipment several times, is the best! He is knowledgeable, friendly, always makes sure everything is working properly and cleans up any mess he makes while fixing things. 10/10",
    author: "Krista Montez",
    initials: "KM",
    timeAgo: "8 months ago",
    rating: 5,
    avatarColor: "bg-purple-500"
  },
  {
    id: 2,
    content: "I had the pleasure of working with Security Concepts, led by owner John De Verona, and it was an outstanding experience from start to finish. The workers were exceptionally knowledgeable, professional, and respectful throughout the process...",
    author: "Marla A",
    initials: "MA",
    timeAgo: "a year ago",
    rating: 5,
    avatarColor: "bg-green-500"
  },
  {
    id: 3,
    content: "John, the owner, was very patient and knowledgeable. He listened to my concerns and offered options to address my situation.",
    author: "Y O",
    initials: "YO",
    timeAgo: "a month ago",
    rating: 5,
    avatarColor: "bg-orange-500"
  }
];

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
}

export function Testimonials({ 
  title = "Trusted by Leading Businesses",
  subtitle = "See what our clients say about partnering with Security Dynamics"
}: TestimonialsProps) {
  return (
    <section className={`${sectionPadding} ${darkSectionClasses}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={darkSectionPatternStyle} />
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
          
          {/* Google Reviews Badge */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <Image
              src="/icons/google.webp"
              alt="Google Reviews"
              width={80}
              height={30}
              className="h-8 w-auto"
            />
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-white font-semibold">5/5 Rating</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Google Review Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  {/* Profile Avatar */}
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold shadow-lg"
                    style={{ backgroundColor: testimonial.id === 1 ? '#a855f7' : testimonial.id === 2 ? '#22c55e' : '#f97316' }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{testimonial.timeAgo}</span>
                    </div>
                  </div>
                </div>
                {/* Google Icon */}
                <Image
                  src="/icons/google.webp"
                  alt="Google"
                  width={36}
                  height={36}
                  className="h-9 w-auto opacity-80"
                />
              </div>
              
              {/* Content */}
              <p className="text-gray-700 leading-relaxed text-base">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>

        {/* Leave a Review Button */}
        <div className="mt-16 text-center">
          <a
            href="https://www.google.com/search?q=Security+Dynamics+Inc+Millstone+NJ&rlz=1C1CHBF_enUS&oq=Security+Dynamics+Inc+Millstone+NJ#lrd=0x89c3e7a8f9f9f9f9:0x1234567890abcdef,3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-red-600 border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-red-50 hover:border-red-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Image
              src="/icons/google.webp"
              alt="Google"
              width={28}
              height={28}
              className="h-7 w-auto"
            />
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
}