import { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/utils/constants';
import { darkSectionClasses, darkSectionPatternStyle, sectionPadding } from '@/lib/utils/sectionStyles';
import { 
  BookOpenIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ArrowRightIcon,
  ClockIcon,
  CalendarIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import Script from 'next/script';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Security Blog | Business Security Tips & Industry News | Security Dynamics',
  description: 'Expert insights on business security systems, technology trends, and best practices. Stay informed with our security blog covering NJ & PA businesses.',
  keywords: 'security blog, business security tips, security system maintenance, security technology trends, alarm system guides, video surveillance tips',
  openGraph: {
    title: 'Security Blog | Expert Tips & Industry Updates',
    description: 'Stay informed with the latest security tips, technology trends, and best practices for protecting your business.',
    url: `${SITE_CONFIG.url}/blog`,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Dynamics Blog'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`}};

// Blog posts data - Now includes all 7 posts
const blogPosts = [
  {
    id: 'signs-security-system-needs-upgrade',
    title: '7 Signs Your Business Security System Needs an Upgrade',
    slug: 'signs-security-system-needs-upgrade',
    excerpt: 'Is your security system outdated? Learn the warning signs: frequent false alarms, grainy footage, integration issues & more.',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Security Tips',
    tags: ['Security Upgrade', 'Business Security', 'Technology'],
    featured: true
  },
  {
    id: 'security-system-maintenance-checklist',
    title: 'The Complete Security System Maintenance Checklist for 2025',
    slug: 'security-system-maintenance-checklist',
    excerpt: 'Keep your security system running at peak performance with this comprehensive maintenance guide. Prevent failures before they happen.',
    date: '2025-01-10',
    readTime: '7 min read',
    category: 'Maintenance',
    tags: ['Maintenance', 'Security Tips', 'Best Practices'],
    featured: true
  },
  {
    id: 'cannabis-business-security-requirements',
    title: 'Cannabis Business Security Requirements: NJ & PA Compliance Guide',
    slug: 'cannabis-business-security-requirements-nj-pa',
    excerpt: 'Navigate the complex security requirements for cannabis businesses in New Jersey and Pennsylvania with this comprehensive guide.',
    date: '2025-01-08',
    readTime: '10 min read',
    category: 'Compliance',
    tags: ['Cannabis Security', 'Compliance', 'NJ Regulations', 'PA Regulations'],
    featured: true
  },
  {
    id: 'security-technology-trends-2025',
    title: 'Top Security Technology Trends for 2025: What Businesses Need to Know',
    slug: 'security-technology-trends-2025',
    excerpt: 'Stay ahead with the latest security innovations: AI-powered analytics, cloud integration, biometric access control, and more.',
    date: '2025-01-05',
    readTime: '6 min read',
    category: 'Technology',
    tags: ['Technology Trends', 'AI Security', 'Innovation'],
    featured: false
  },
  {
    id: 'retail-loss-prevention-strategies',
    title: 'Retail Loss Prevention Strategies: Security Technology That Works',
    slug: 'retail-loss-prevention-strategies-2024',
    excerpt: 'Discover proven security strategies and technologies that help retailers reduce shrinkage and protect their bottom line.',
    date: '2024-12-20',
    readTime: '8 min read',
    category: 'Industry Insights',
    tags: ['Retail Security', 'Loss Prevention', 'Business Strategy'],
    featured: false
  },
  {
    id: 'how-to-prevent-false-alarms',
    title: 'How to Prevent False Alarms and Save Money on Security',
    slug: 'how-to-prevent-false-alarms-save-money',
    excerpt: 'False alarms cost businesses time and money. Learn practical strategies to reduce false alarms and avoid costly fines.',
    date: '2024-12-15',
    readTime: '6 min read',
    category: 'Best Practices',
    tags: ['False Alarms', 'Cost Savings', 'Security Tips'],
    featured: false
  },
  {
    id: 'security-trends-2024-ai',
    title: 'Security Trends 2024: AI and Smart Technology Transform Business Protection',
    slug: 'security-trends-2024-ai-smart-technology',
    excerpt: 'Explore how artificial intelligence and smart technology are revolutionizing business security systems in 2024.',
    date: '2024-12-10',
    readTime: '7 min read',
    category: 'Technology',
    tags: ['AI', 'Smart Security', 'Future Trends'],
    featured: false
  }
];

// Schema markup
const blogListingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${SITE_CONFIG.url}/blog#blog`,
  name: 'Security Dynamics Blog',
  description: 'Expert insights on business security systems, technology trends, and best practices',
  url: `${SITE_CONFIG.url}/blog`,
  publisher: {
    '@type': 'Organization',
    name: 'Security Dynamics Inc.',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/logo-1.webp`
    }
  },
  blogPost: blogPosts.map(post => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    author: {
      '@type': 'Organization',
      name: 'Security Dynamics Inc.'
    }
  }))
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_CONFIG.url
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: `${SITE_CONFIG.url}/blog`
    }
  ]
};

// Featured guides data
const featuredGuides = [
  {
    title: 'Complete Guide to Business Security',
    description: 'Everything you need to know about protecting your business, from basic concepts to advanced strategies.',
    link: '/learning-center/guides/complete-guide-business-security-2024',
    readTime: '15 min',
    category: 'Comprehensive Guide',
    icon: BookOpenIcon
  },
  {
    title: 'Home Security Buyer\'s Guide',
    description: 'A comprehensive guide to choosing the right security system for your home.',
    link: '/learning-center/guides/home-security-buyers-guide',
    readTime: '12 min',
    category: 'Buyer\'s Guide',
    icon: DocumentTextIcon
  },
  {
    title: 'Security Compliance & Regulations Guide',
    description: 'Navigate security compliance requirements for your business.',
    link: '/learning-center/guides/security-compliance-regulations-guide',
    readTime: '10 min',
    category: 'Compliance',
    icon: DocumentTextIcon
  }
];

export default function BlogPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script
        id="schema-blog-listing"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogListingSchema)}}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)}}
      />

      {/* Hero Section */}
      <Hero
        title="Security Blog & Resources"
        subtitle="Expert Insights for Business Protection"
        description="Stay informed with the latest security tips, technology trends, comprehensive guides, and best practices for protecting your business."
        showEmergencyBadge={false}
      />

      {/* Introduction - Dark Background */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-red-900/20 border border-red-800/30 rounded-full px-6 py-2 mb-6">
              <AcademicCapIcon className="w-5 h-5 mr-2 text-red-400" />
              <span className="text-red-400 text-xs font-semibold tracking-widest uppercase">
                Knowledge Hub
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Your Security Education Resource
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Expert insights, comprehensive guides, and the latest security trends. 
              Everything you need to make smart security decisions for your business.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300">Articles & Guides</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-300">Industry Topics</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">Free</div>
                <div className="text-gray-300">All Resources</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">Access Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Expert guidance to help you make informed security decisions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).slice(0, 4).map((post) => (
              <article 
                key={post.id}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs text-gray-500">
                        #{tag.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group"
                  >
                    Read More
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles - Dark Background */}
      <section className={`${sectionPadding} ${darkSectionClasses}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={darkSectionPatternStyle} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Browse our complete collection of security insights and guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center bg-red-600/20 text-red-400 text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div className="text-sm text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-red-400 hover:text-red-300 font-semibold text-sm group"
                  >
                    Read Article
                    <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Security Guides Section - White Background */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Comprehensive Security Guides
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              In-depth guides to help you understand and implement effective security solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredGuides.map((guide, index) => (
              <Link
                key={index}
                href={guide.link}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <guide.icon className="w-10 h-10 text-red-600 mb-4" />
                
                <span className="inline-block text-xs font-semibold text-red-600 mb-3">
                  {guide.category}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {guide.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {guide.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{guide.readTime} read</span>
                  <ArrowRightIcon className="w-5 h-5 text-red-600 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      

      {/* Bottom CTA - White Background */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <TrophyIcon className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Turn your knowledge into action. Get a professional security assessment from our experts and discover 
            the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Get Security Assessment
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}