// Company constants for Security Dynamics Inc.

export const COMPANY_INFO = {
  name: 'Security Dynamics Inc.',
  shortName: 'Security Dynamics',
  tagline: 'Safe. Secure. Seamless.',
  phone: '(609) 394-8800',
  emergencyPhone: '(609) 394-8800',
  email: 'sdynamicsnj@gmail.com',
  address: {
    street: '520 Route 33',
    city: 'Millstone',
    state: 'New Jersey',
    stateCode: 'NJ',
    zip: '08535',
    country: 'US'
  },
  serviceAreas: ['Mercer County, NJ', 'Bucks County, PA'],
  hours: {
    regular: {
      'Monday-Friday': '9:00 AM - 5:00 PM',
      'Saturday': 'By Appointment',
      'Sunday': 'Emergency Service Only'
    },
    emergency: '24/7 Emergency Response Available'
  },
  socialMedia: {
    facebook: 'https://www.facebook.com/SecurityDynamicsNJ',
    linkedin: 'https://www.linkedin.com/company/security-dynamics-nj',
    youtube: 'https://www.youtube.com/channel/SecurityDynamicsNJ'
  },
  certifications: [
    'Fire New Jersey P00747',
    'Burglar New Jersey 34BA00089500',
    'Licensed & Insured',
    'UL-Listed Central Station'
  ],
  usp: 'Proudly Protecting Businesses Throughout New Jersey and Eastern Pennsylvania'
};

export const SITE_CONFIG = {
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://securitydynamicsinc.com',
  defaultTitle: 'Security Dynamics Inc. - Advanced Security Systems NJ & PA',
  defaultDescription: 'Professional security systems installation and 24/7 monitoring in Mercer County NJ and Bucks County PA. Access control, video surveillance, intrusion detection, and more.',
  defaultKeywords: [
    'security systems',
    'commercial security',
    'access control',
    'video surveillance',
    'Mercer County security',
    'Bucks County security',
    'NJ PA security company'
  ],
  ogImage: '/images/og-default.jpg'
};

export const TRACKING = {
  googleAnalytics: process.env.NEXT_PUBLIC_GA_ID || '',
  googleTagManager: process.env.NEXT_PUBLIC_GTM_ID || '',
  facebookPixel: process.env.NEXT_PUBLIC_FB_PIXEL || ''
};

export const FORMS = {
  contactEndpoint: '/api/contact',
  quoteEndpoint: '/api/quote',
  newsletterEndpoint: '/api/newsletter',
  recaptchaSiteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''
};