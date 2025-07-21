'use client';

import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/data/blog';
import { COMPANY_INFO } from '@/lib/utils/constants';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { 
  ClockIcon, 
  CalendarIcon, 
  TagIcon,
  ArrowRightIcon,
  UserIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

interface BlogPostTemplateProps {
  post: BlogPost;
  content: React.ReactNode;
  relatedPosts: BlogPost[];
}

export const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
  post,
  content,
  relatedPosts
}) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb items={breadcrumbItems} className="mb-6 text-white/80" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl mb-8 opacity-95">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <span className="flex items-center">
                <UserIcon className="mr-2 h-5 w-5" />
                {post.author}
              </span>
              <span className="flex items-center">
                <CalendarIcon className="mr-2 h-5 w-5" />
                <span suppressHydrationWarning>{new Date(post.publishedDate).toLocaleDateString()}</span>
              </span>
              <span className="flex items-center">
                <ClockIcon className="mr-2 h-5 w-5" />
                {post.readTime} read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tags Section */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 flex-wrap">
              <TagIcon className="h-5 w-5 text-gray-500" />
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            {content}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Ready to Enhance Your Security?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Our experts can help you implement the strategies discussed in this article.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" href={`tel:${COMPANY_INFO.phone}`}>
                <PhoneIcon className="mr-2 h-5 w-5" />
                Call {COMPANY_INFO.phone}
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" href="/contact">
                Get Expert Advice
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-lg border hover:border-primary transition-colors group"
                  >
                    <div className="p-6">
                      <span className="text-sm text-gray-500">{relatedPost.category}</span>
                      <h3 className="text-lg font-semibold mt-2 mb-3 group-hover:text-primary">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <span className="text-primary font-semibold text-sm flex items-center">
                        Read More <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};