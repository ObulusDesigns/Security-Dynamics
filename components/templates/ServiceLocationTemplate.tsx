'use client';

import React from 'react';
import { Location, Service } from '@/lib/types/seo';
import { ServiceArea } from '@/lib/types';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  HomeModernIcon
} from '@heroicons/react/24/outline';

interface ServiceLocationTemplateProps {
  service: Service;
  location: Location;
  nearbyAreas: ServiceArea[];
  relatedServices: Service[];
  testimonials?: Array<{
    name: string;
    business?: string;
    content: string;
    rating: number;
  }>;
}

export const ServiceLocationTemplate: React.FC<ServiceLocationTemplateProps> = ({
  service,
  location,
  nearbyAreas,
  relatedServices,
  testimonials = []
}) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {service.name} in {location.name}, {location.stateCode}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Professional {service.shortDescription.toLowerCase()} for businesses and homes in {location.name}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" href="#quote">
                Get Custom Quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900" href={`tel:${COMPANY_INFO.phone}`}>
                <PhoneIcon className="mr-2 h-5 w-5" />
                {COMPANY_INFO.phone}
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <span className="flex items-center">
                <ClockIcon className="mr-2 h-5 w-5" />
                24/7 Emergency Service
              </span>
              <span className="flex items-center">
                <MapPinIcon className="mr-2 h-5 w-5" />
                Serving All of {location.county}
              </span>
              <span className="flex items-center">
                <ShieldCheckIcon className="mr-2 h-5 w-5" />
                Licensed & Insured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section - White Background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Expert {service.name} Installation & Service
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                {service.description} Our local team in {location.name} provides fast, reliable installation 
                and ongoing support for all your security needs.
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <BuildingOfficeIcon className="h-8 w-8 text-red-600 mb-2" />
                  <CardTitle>Commercial Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.industries.slice(0, 4).map((industry, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{industry} Security</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <HomeModernIcon className="h-8 w-8 text-red-600 mb-2" />
                  <CardTitle>Residential Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Smart Home Integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Family-Friendly Options</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Pet-Immune Sensors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Affordable Packages</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details Section - Dark Background */}
      <section className="py-16 bg-dark text-white bg-[url('/images/circuit-pattern.svg')] bg-repeat bg-opacity-5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Advanced Technology & Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.technicalDetails?.map((detail, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-200">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section - Dark Background */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Serving {location.name} and Surrounding Areas
            </h2>
            <p className="text-center text-xl mb-8 opacity-90">
              Fast response times throughout {location.county}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {nearbyAreas.map((area, index) => (
                <Card key={index} className="bg-white/10 border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">{area.name}</CardTitle>
                    <CardDescription className="text-gray-300">ZIP: {area.zip}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {area.features.map((feature: string, idx: number) => (
                        <li key={idx} className="text-sm text-gray-300">• {feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - White Background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Choose Security Dynamics for {service.name}?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Service Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Local Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span>Local {location.name} technicians</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span>Same-day service available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span>Understanding of local regulations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span>Community-trusted since 1989</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Dark Background (if available) */}
      {testimonials.length > 0 && (
        <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-repeat" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                What {location.name} Customers Say
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-white/10 border-white/20">
                    <CardContent className="pt-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                      <div className="text-sm">
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        {testimonial.business && (
                          <p className="text-gray-400">{testimonial.business}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other Services Section - White Background */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Other Services in {location.name}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((relatedService, index) => (
                <Card 
                  key={index} 
                  href={`/services/${relatedService.slug}/${location.state?.toLowerCase().replace(' ', '-')}/${location.county?.toLowerCase().replace(' ', '-')}/${location.slug}`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{relatedService.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{relatedService.shortDescription}</p>
                    <span className="text-red-600 font-semibold text-sm flex items-center">
                      Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="quote" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Get Your {service.name} Quote Today
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Protect your {location.name} property with professional security solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" href={`tel:${COMPANY_INFO.phone}`}>
                <PhoneIcon className="mr-2 h-5 w-5" />
                Call {COMPANY_INFO.phone}
              </Button>
              <a
                href="https://ocyrus.app.n8n.cloud/form/a96519af-6dc7-438a-a754-3d3eb830bdf7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-gray-900 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Request Online Quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};