export interface Guide {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  author: string;
  publishedDate: string;
  lastUpdated: string;
  featuredImage: string;
  topics: string[];
  seoKeywords: string[];
}

export const guides: Guide[] = [
  {
    id: 'complete-guide-business-security-2024',
    slug: 'complete-guide-business-security-2024',
    title: 'The Complete Guide to Business Security Systems in 2024',
    description: 'Everything business owners need to know about modern security systems, from access control to video surveillance. Learn how to protect your assets and employees.',
    category: 'Business Security',
    readTime: '15 min',
    author: 'Security Dynamics Team',
    publishedDate: '2024-01-15',
    lastUpdated: '2024-01-15',
    featuredImage: '/images/guides/business-security-guide.jpg',
    topics: [
      'Access Control Systems',
      'Video Surveillance',
      'Intrusion Detection',
      'Integration Strategies',
      'ROI Calculation',
      'Compliance Requirements'
    ],
    seoKeywords: [
      'business security systems guide',
      'commercial security 2024',
      'office security best practices',
      'business alarm systems',
      'corporate security solutions'
    ]
  },
  {
    id: 'home-security-buyers-guide',
    slug: 'home-security-buyers-guide',
    title: 'Home Security Buyer\'s Guide: Choosing the Right System',
    description: 'A comprehensive guide to selecting the perfect home security system for your family. Compare technologies, features, and monitoring options.',
    category: 'Residential Security',
    readTime: '12 min',
    author: 'Security Dynamics Team',
    publishedDate: '2024-01-10',
    lastUpdated: '2024-01-10',
    featuredImage: '/images/guides/home-security-guide.jpg',
    topics: [
      'System Types Comparison',
      'Smart Home Integration',
      'DIY vs Professional Installation',
      'Monitoring Options',
      'Cost Considerations',
      'Insurance Benefits'
    ],
    seoKeywords: [
      'home security buyers guide',
      'residential alarm systems',
      'smart home security',
      'home security comparison',
      'best home security systems'
    ]
  },
  {
    id: 'security-compliance-regulations-guide',
    slug: 'security-compliance-regulations-guide',
    title: 'Security Compliance & Regulations Guide for NJ/PA Businesses',
    description: 'Navigate security compliance requirements for businesses in New Jersey and Pennsylvania. Understand regulations, standards, and best practices.',
    category: 'Compliance',
    readTime: '20 min',
    author: 'Security Dynamics Team',
    publishedDate: '2024-01-05',
    lastUpdated: '2024-01-05',
    featuredImage: '/images/guides/compliance-guide.jpg',
    topics: [
      'HIPAA Compliance',
      'PCI DSS Requirements',
      'Fire Code Regulations',
      'ADA Compliance',
      'Insurance Requirements',
      'Local Ordinances'
    ],
    seoKeywords: [
      'security compliance NJ PA',
      'business security regulations',
      'HIPAA security requirements',
      'PCI compliance security',
      'fire alarm regulations'
    ]
  }
];

export const getGuideBySlug = (slug: string): Guide | undefined => {
  return guides.find(guide => guide.slug === slug);
};

export const getGuidesByCategory = (category: string): Guide[] => {
  return guides.filter(guide => guide.category === category);
};