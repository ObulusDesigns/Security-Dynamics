'use client'

import Link from 'next/link'
import { useState } from 'react'
import { 
  CalendarIcon, 
  ClockIcon, 
  ArrowRightIcon, 
  BookOpenIcon, 
  FunnelIcon,
  ShieldCheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { blogPosts, categories, isNewPost, getFeaturedPosts } from '@/lib/data/blog'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showAllPosts, setShowAllPosts] = useState(false)

  const featuredPosts = getFeaturedPosts()
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const displayedPosts = showAllPosts ? filteredPosts : filteredPosts.slice(0, 6)

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[300px] bg-slate-900">
        <div className="absolute inset-0">
          <img
            src="/images/security-blog-hero.jpg"
            alt="Security Blog"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="relative z-10 container h-full flex items-center">
          <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              SECURITY BLOG
            </h1>
            <p className="text-lg sm:text-xl text-white mb-4">
              Expert insights on security systems, compliance, and protection strategies for businesses
            </p>
            <Link 
              href="/blog/all-articles" 
              className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold"
            >
              <BookOpenIcon className="w-5 h-5" />
              Browse All Articles
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
            <span className="text-sm text-gray-500">Must-read content for security professionals</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Featured Post */}
            <div className="lg:col-span-2">
              {featuredPosts[0] && (
                <Link href={`/blog/${featuredPosts[0].slug}`}>
                  <article className="relative h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                      <img
                        src={featuredPosts[0].featuredImage || '/images/security-default.jpg'}
                        alt={featuredPosts[0].title}
                        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          FEATURED
                        </span>
                        {isNewPost(featuredPosts[0].publishedDate) && (
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            NEW
                          </span>
                        )}
                        <span className="text-sm">{featuredPosts[0].category}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-red-400 transition-colors">
                        {featuredPosts[0].title}
                      </h3>
                      <p className="text-gray-200 mb-4 line-clamp-2">
                        {featuredPosts[0].excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{new Date(featuredPosts[0].publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ClockIcon className="w-4 h-4" />
                          <span>{featuredPosts[0].readTime}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              )}
            </div>

            {/* Secondary Featured Posts */}
            <div className="space-y-6">
              {featuredPosts.slice(1, 3).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all group">
                    <div className="flex">
                      <img
                        src={post.featuredImage || '/images/security-default.jpg'}
                        alt={post.title}
                        className="w-32 h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="flex-1 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs font-semibold">
                            {post.category}
                          </span>
                          {isNewPost(post.publishedDate) && (
                            <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs font-semibold">
                              NEW
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 mb-2">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter and Recent Posts */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Browse by Category</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FunnelIcon className="w-4 h-4" />
                <span>Filter articles by topic</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayedPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    <img
                      src={post.featuredImage || '/images/security-default.jpg'}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold">
                        {post.category}
                      </span>
                      {isNewPost(post.publishedDate) && (
                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-semibold">
                          NEW
                        </span>
                      )}
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold mb-3 text-gray-900 hover:text-red-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <div className="flex items-center text-red-600 font-semibold hover:gap-2 transition-all">
                        Read More
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Load More / View All */}
          {filteredPosts.length > 6 && (
            <div className="mt-12 text-center">
              {!showAllPosts ? (
                <button
                  onClick={() => setShowAllPosts(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
                >
                  Load More Articles
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              ) : (
                <div className="space-y-4">
                  <button
                    onClick={() => setShowAllPosts(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Show Less
                  </button>
                  <div className="text-sm text-gray-600">
                    Showing {displayedPosts.length} of {filteredPosts.length} articles
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Archive Link */}
          <div className="mt-12 p-8 bg-white rounded-lg text-center border-2 border-gray-200">
            <ShieldCheckIcon className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Looking for Something Specific?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Browse our complete archive of security articles, guides, and compliance resources sorted by date, category, or search for specific topics.
            </p>
            <Link
              href="/blog/all-articles"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              <BookOpenIcon className="w-5 h-5" />
              View Complete Archive
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <SparklesIcon className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Stay Ahead of Security Threats</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Get the latest security insights, compliance updates, and protection strategies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <button className="px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}