export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  tags: string[];
  author: string;
  publishedDate: string;
  lastUpdated: string;
  featuredImage: string;
  readTime: string;
  seoKeywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'security-trends-2024',
    slug: 'security-trends-2024-ai-smart-technology',
    title: 'Top Security Trends for 2024: AI, Smart Integration, and Beyond',
    excerpt: 'Discover the latest innovations in security technology, from AI-powered threat detection to seamless smart home integration. Stay ahead of emerging threats.',
    category: 'Industry Trends',
    tags: ['AI Security', 'Smart Technology', 'Innovation', '2024 Trends'],
    author: 'Security Dynamics Team',
    publishedDate: '2024-01-20',
    lastUpdated: '2024-01-20',
    featuredImage: '/images/blog/security-trends-2024.jpg',
    readTime: '8 min',
    seoKeywords: [
      'security trends 2024',
      'AI security systems',
      'smart security technology',
      'future of security',
      'security innovations'
    ]
  },
  {
    id: 'prevent-false-alarms',
    slug: 'how-to-prevent-false-alarms-save-money',
    title: 'How to Prevent False Alarms and Save Money on Fines',
    excerpt: 'False alarms cost businesses thousands in fines and wasted resources. Learn proven strategies to reduce false alarms by up to 90%.',
    category: 'Tips & Advice',
    tags: ['False Alarms', 'Cost Savings', 'Best Practices', 'Maintenance'],
    author: 'Security Dynamics Team',
    publishedDate: '2024-01-18',
    lastUpdated: '2024-01-18',
    featuredImage: '/images/blog/prevent-false-alarms.jpg',
    readTime: '6 min',
    seoKeywords: [
      'prevent false alarms',
      'reduce false alarm fines',
      'alarm system maintenance',
      'false alarm prevention tips',
      'security system best practices'
    ]
  },
  {
    id: 'cannabis-security-requirements',
    slug: 'cannabis-business-security-requirements-nj-pa',
    title: 'Cannabis Business Security Requirements in NJ and PA',
    excerpt: 'Navigate the complex security regulations for cannabis businesses. Comprehensive guide to compliance in New Jersey and Pennsylvania.',
    category: 'Compliance',
    tags: ['Cannabis Security', 'Compliance', 'NJ Regulations', 'PA Regulations'],
    author: 'Security Dynamics Team',
    publishedDate: '2024-01-15',
    lastUpdated: '2024-01-15',
    featuredImage: '/images/blog/cannabis-security.jpg',
    readTime: '10 min',
    seoKeywords: [
      'cannabis security requirements',
      'NJ cannabis security',
      'PA cannabis regulations',
      'dispensary security systems',
      'cannabis compliance'
    ]
  },
  {
    id: 'retail-loss-prevention',
    slug: 'retail-loss-prevention-strategies-2024',
    title: 'Retail Loss Prevention: Modern Strategies That Actually Work',
    excerpt: 'Retail shrinkage costs billions annually. Discover proven loss prevention strategies using modern security technology and smart analytics.',
    category: 'Industry Solutions',
    tags: ['Retail Security', 'Loss Prevention', 'Video Analytics', 'ROI'],
    author: 'Security Dynamics Team',
    publishedDate: '2024-01-12',
    lastUpdated: '2024-01-12',
    featuredImage: '/images/blog/retail-loss-prevention.jpg',
    readTime: '7 min',
    seoKeywords: [
      'retail loss prevention',
      'retail security strategies',
      'prevent shoplifting',
      'retail shrinkage solutions',
      'store security systems'
    ]
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

export const getRecentBlogPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, limit);
};