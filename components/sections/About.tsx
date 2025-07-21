'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, Clock } from 'lucide-react';

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Your Trusted Security Partner Since 1985
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 lg:mb-0">
            Security Dynamics has been protecting businesses across New Jersey and Pennsylvania 
            for over four decades, combining cutting-edge technology with unmatched local expertise.
          </p>
        </motion.div>

        {/* Stats Grid - Mobile Only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 gap-4 mb-12 lg:hidden"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-full mb-4 shadow-lg">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-semibold text-slate-900 mb-6">
              Four Decades of Excellence
            </h3>
            <div className="space-y-4">
              <p className="leading-relaxed text-gray-700">
                Founded in 1985, Security Dynamics began with a simple mission: provide businesses 
                with security solutions that actually work. What started as a small team serving 
                local businesses has grown into the region's most trusted security provider.
              </p>
              <p className="leading-relaxed text-gray-700">
                Today, we protect over 500 businesses across Mercer and Bucks Counties, from small 
                retail shops to large healthcare facilities. Our success is built on understanding 
                that every business has unique security challenges that require tailored solutions.
              </p>
              <p className="leading-relaxed text-gray-700">
                As technology has evolved, so have we. From basic alarm systems to AI-powered 
                surveillance and integrated access control, we've stayed at the forefront of security 
                innovation while maintaining the personal touch that sets us apart.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-full mb-4 shadow-lg">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>


        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-slate-900 text-center mb-12">
            What Sets Us Apart
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl font-bold">{value.title.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h4>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}