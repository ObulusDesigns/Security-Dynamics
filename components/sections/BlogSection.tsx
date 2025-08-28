'use client'

import Link from 'next/link'
import Image from 'next/image'
import { getLatestPosts, isNewPost } from '@/lib/data/blog'
import { 
  ArrowRightIcon, 
  CalendarIcon, 
  ClockIcon,
  BookOpenIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export function BlogSection() {
  const latestPosts = getLatestPosts(3)

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpenIcon className="w-8 h-8 text-red-600" />
            <span className="text-red-600 font-semibold uppercase tracking-wide">Security Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest Security Articles & Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with expert insights on security trends, best practices, and compliance requirements for New Jersey and Pennsylvania businesses
          </p>
        </div>

        {/* Featured Post (First/Newest Post) */}
        {latestPosts[0] && (
          <div className="mb-12">
            <Link href={`/blog/${latestPosts[0].slug}`}>
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-[300px] md:h-full bg-gray-200">
                    <Image
                      src={latestPosts[0].featuredImage || '/images/security-default.jpg'}
                      alt={latestPosts[0].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    {latestPosts[0].featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <SparklesIcon className="w-3 h-3" />
                          FEATURED
                        </span>
                      </div>
                    )}
                    {isNewPost(latestPosts[0].publishedDate) && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          NEW
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                        {latestPosts[0].category}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <ClockIcon className="w-4 h-4" />
                        <span>{latestPosts[0].readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                      {latestPosts[0].title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {latestPosts[0].excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <CalendarIcon className="w-4 h-4" />
                        <span>
                          {new Date(latestPosts[0].publishedDate).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-red-600 font-semibold group-hover:gap-3 transition-all">
                        Read Article
                        <ArrowRightIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        )}

        {/* Other Recent Posts */}
        {latestPosts.length > 1 && (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {latestPosts.slice(1, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group h-full">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <Image
                      src={post.featuredImage || '/images/security-default.jpg'}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {isNewPost(post.publishedDate) && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          NEW
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <ClockIcon className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {new Date(post.publishedDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <div className="flex items-center gap-1 text-red-600 font-semibold">
                        Read More
                        <ArrowRightIcon className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* CTA to Blog Page */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors transform hover:scale-105"
          >
            <BookOpenIcon className="w-5 h-5" />
            View All Articles
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}