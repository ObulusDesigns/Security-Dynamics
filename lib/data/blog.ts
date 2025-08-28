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
  featured?: boolean;
}

// Security industry specific categories
export const categories = [
  'All',
  'Industry Trends',
  'Tips & Advice',
  'Compliance',
  'Industry Solutions',
  'Technology',
  'Case Studies',
  'Best Practices'
];


export const blogPosts: BlogPost[] = [
  {
    id: 'security-vulnerabilities-2025',
    slug: 'security-vulnerabilities-nj-businesses-2025',
    title: '7 Critical Security Vulnerabilities Every New Jersey Business Must Address in 2025',
    excerpt: 'Protect your New Jersey business from critical security threats. Expert solutions for access control, surveillance, fire protection & 24/7 monitoring.',
    category: 'Best Practices',
    tags: ['Security Vulnerabilities', 'Business Security', 'Access Control', 'Surveillance', 'Fire Protection'],
    author: 'Security Dynamics Team',
    publishedDate: '2025-01-15',
    lastUpdated: '2025-01-15',
    featuredImage: '/images/blog/security-vulnerabilities.jpg',
    readTime: '15 min',
    featured: true,
    seoKeywords: [
      'security vulnerabilities business',
      'commercial security systems NJ',
      'business security New Jersey',
      'access control systems',
      'surveillance cameras NJ',
      'fire protection systems',
      '24/7 monitoring NJ',
      'Security Dynamics Hamilton Township'
    ]
  },
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
    featured: false,
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
    featured: false,
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
    featured: false,
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

// Get featured posts
export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);

// Get regular posts  
export const getRegularPosts = () => blogPosts.filter(post => !post.featured);

// Check if post is new (less than 30 days old)
export const isNewPost = (date: string) => {
  const postDate = new Date(date);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - postDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 30;
};

// Get posts by category
export const getPostsByCategory = (category: string) => {
  if (category === 'All') return blogPosts;
  return blogPosts.filter(post => post.category === category);
};

// Get latest posts
export const getLatestPosts = (count: number = 3) => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, count);
};