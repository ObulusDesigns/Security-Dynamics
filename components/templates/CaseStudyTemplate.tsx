import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircleIcon, 
  BuildingOfficeIcon,
  MapPinIcon,
  CalendarIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  LightBulbIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export interface CaseStudyData {
  title: string;
  client: string;
  industry: string;
  location: string;
  projectDate: string;
  heroImage?: string;
  summary: string;
  challenge: {
    description: string;
    points: string[];
  };
  solution: {
    description: string;
    components: Array<{
      name: string;
      description: string;
    }>;
  };
  implementation: {
    timeline: string;
    process: string[];
  };
  results: {
    description: string;
    metrics: Array<{
      value: string;
      label: string;
    }>;
    benefits: string[];
  };
  testimonial?: {
    quote: string;
    author: string;
    title: string;
    company: string;
  };
  technologies: string[];
  relatedCaseStudies?: Array<{
    title: string;
    slug: string;
    industry: string;
  }>;
}

interface CaseStudyTemplateProps {
  data: CaseStudyData;
}

export function CaseStudyTemplate({ data }: CaseStudyTemplateProps) {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy to-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-red font-semibold uppercase tracking-wide">Case Study</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-300">{data.industry}</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">{data.title}</h1>
              
              <p className="text-xl text-gray-200 mb-8">{data.summary}</p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <BuildingOfficeIcon className="h-5 w-5 text-red" />
                  <div>
                    <p className="text-sm text-gray-400">Client</p>
                    <p className="font-semibold">{data.client}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPinIcon className="h-5 w-5 text-red" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-semibold">{data.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarIcon className="h-5 w-5 text-red" />
                  <div>
                    <p className="text-sm text-gray-400">Completed</p>
                    <p className="font-semibold">{data.projectDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <WrenchScrewdriverIcon className="h-5 w-5 text-red" />
                  <div>
                    <p className="text-sm text-gray-400">Industry</p>
                    <p className="font-semibold">{data.industry}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {data.heroImage && (
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={data.heroImage}
                  alt={data.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red rounded-lg">
                  <LightBulbIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">The Challenge</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">{data.challenge.description}</p>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-4">Key Security Concerns:</h3>
                <ul className="space-y-3">
                  {data.challenge.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-red mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-navy text-white p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-300">Timeline:</span>
                    <span className="font-semibold">{data.implementation.timeline}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Industry:</span>
                    <span className="font-semibold">{data.industry}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Location:</span>
                    <span className="font-semibold">{data.location}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red rounded-lg">
              <ShieldCheckIcon className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Our Solution</h2>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">{data.solution.description}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {data.solution.components.map((component, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">{component.name}</h3>
                <p className="text-gray-600">{component.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-navy to-navy-light p-8 rounded-xl text-white">
            <h3 className="text-xl font-semibold mb-6">Implementation Process</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.implementation.process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-red rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    {index < data.implementation.process.length - 1 && (
                      <div className="hidden lg:block absolute left-full top-4 w-full h-0.5 bg-red opacity-50" />
                    )}
                  </div>
                  <p className="text-sm">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red rounded-lg">
              <ChartBarIcon className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold">The Results</h2>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">{data.results.description}</p>
          
          {/* Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {data.results.metrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-navy mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
          
          {/* Benefits */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6">Key Benefits Achieved</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {data.results.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {data.testimonial && (
        <section className="py-16 bg-navy text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl text-red mb-6">"</div>
            <blockquote className="text-2xl font-light mb-8 italic">
              {data.testimonial.quote}
            </blockquote>
            <div>
              <p className="font-semibold text-lg">{data.testimonial.author}</p>
              <p className="text-gray-300">
                {data.testimonial.title}, {data.testimonial.company}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Technologies Used */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold mb-6">Technologies & Systems Deployed</h3>
          <div className="flex flex-wrap gap-3">
            {data.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {data.relatedCaseStudies && data.relatedCaseStudies.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Related Case Studies</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {data.relatedCaseStudies.map((study, index) => (
                <Link
                  key={index}
                  href={`/case-studies/${study.slug}`}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition group"
                >
                  <div className="text-sm text-red font-semibold mb-2">{study.industry}</div>
                  <h3 className="font-semibold text-lg group-hover:text-red transition">
                    {study.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy to-navy-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Security?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how we can create a custom security solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-8 py-3 bg-red text-white font-semibold rounded-lg hover:bg-red-dark transition"
            >
              Get Your Free Assessment
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}