'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, Clock } from 'lucide-react';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, staggerItem, viewportSettings } from '@/lib/animations/variants';

const stats = [
  {
    icon: Clock,
    value: '40+',
    label: 'Years of Experience',
    description: 'Protecting businesses since 1985'
  },
  {
    icon: Shield,
    value: '500+',
    label: 'Businesses Protected',
    description: 'Across NJ & PA'
  },
  {
    icon: Users,
    value: '50+',
    label: 'Security Experts',
    description: 'Licensed professionals'
  },
  {
    icon: Award,
    value: '5/5',
    label: 'Customer Rating',
    description: 'Based on 127 reviews'
  }
];

const values = [
  {
    title: 'Local Expertise',
    description: 'Deep understanding of New Jersey and Pennsylvania security requirements and regulations.'
  },
  {
    title: 'Innovation First',
    description: 'Constantly evolving our technology stack to provide cutting-edge security solutions.'
  },
  {
    title: 'Customer Focus',
    description: 'Your security is our priority - 24/7 support and rapid response guaranteed.'
  },
  {
    title: 'Trusted Suppliers',
    description: 'Working with industry-leading manufacturers to deliver reliable, proven solutions.'
  }
];

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-wider uppercase">
            Your Trusted Security Partner Since 1985
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 lg:mb-0 tracking-wide">
            Security Dynamics has been protecting businesses across New Jersey and Pennsylvania 
            for over four decades, combining cutting-edge technology with unmatched local expertise.
          </p>
        </motion.div>

        {/* Stats Grid - Mobile Only */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-2 gap-4 mb-12 lg:hidden"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={staggerItem}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-full mb-4 shadow-lg">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-2xl font-semibold text-slate-900 mb-2 tracking-wider">{stat.value}</div>
              <div className="text-sm text-gray-600 tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 tracking-wider uppercase">
              Four Decades of Excellence
            </h3>
            <div className="space-y-4">
              <p className="leading-relaxed text-gray-700 tracking-wide">
                Founded in 1985, Security Dynamics began with a simple mission: provide businesses 
                with security solutions that actually work. What started as a small team serving 
                local businesses has grown into the region's most trusted security provider.
              </p>
              <p className="leading-relaxed text-gray-700 tracking-wide">
                Today, we protect over 500 businesses across Mercer and Bucks Counties, from small 
                retail shops to large healthcare facilities. Our success is built on understanding 
                that every business has unique security challenges that require tailored solutions.
              </p>
              <p className="leading-relaxed text-gray-700 tracking-wide">
                As technology has evolved, so have we. From basic alarm systems to AI-powered 
                surveillance and integrated access control, we've stayed at the forefront of security 
                innovation while maintaining the personal touch that sets us apart.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={staggerItem}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-full mb-4 shadow-lg">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-2xl font-semibold text-slate-900 mb-2 tracking-wider">{stat.value}</div>
                <div className="text-sm text-gray-600 tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>


        {/* Values Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <h3 className="text-2xl font-semibold text-slate-900 text-center mb-12 tracking-wider uppercase">
            What Sets Us Apart
          </h3>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg font-semibold">{value.title.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2 tracking-wider uppercase">{value.title}</h4>
                    <p className="text-gray-700 text-sm tracking-wide">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}