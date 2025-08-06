import { Service, FAQPage, WithContext, LocalBusiness, Product, BreadcrumbList, ItemAvailability } from 'schema-dts';

export const organizationSchema: WithContext<LocalBusiness> = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://securitydynamicsinc.com/#organization',
  name: 'Security Dynamics Inc.',
  alternateName: 'SDI Security',
  url: 'https://securitydynamicsinc.com',
  logo: 'https://securitydynamicsinc.com/images/logo/security-dynamics-logo.png',
  image: 'https://securitydynamicsinc.com/images/office.jpg',
  description: 'Professional commercial security systems, fire alarms, and 24/7 monitoring services in Mercer County NJ and Bucks County PA. Over 40 years of protecting businesses.',
  telephone: '+1-609-882-8988',
  faxNumber: '+1-609-882-8959',
  email: 'info@securitydynamicsinc.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6 David Brainerd Dr',
    addressLocality: 'Hamilton Township',
    addressRegion: 'NJ',
    postalCode: '08690',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.2677,
    longitude: -74.7424
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '17:00'
    }
  ],
  priceRange: '$$',
  paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Invoice'],
  currenciesAccepted: 'USD',
  areaServed: [
    {
      '@type': 'City',
      name: 'Trenton',
      '@id': 'https://en.wikipedia.org/wiki/Trenton,_New_Jersey'
    },
    {
      '@type': 'City', 
      name: 'Princeton',
      '@id': 'https://en.wikipedia.org/wiki/Princeton,_New_Jersey'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Mercer County',
      containedInPlace: {
        '@type': 'State',
        name: 'New Jersey'
      }
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Bucks County',
      containedInPlace: {
        '@type': 'State',
        name: 'Pennsylvania'
      }
    }
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 40.2677,
      longitude: -74.7424
    },
    geoRadius: '30 miles'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Security Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Access Control Systems',
          description: 'Card readers, keypads, biometric scanners'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Video Surveillance',
          description: '4K cameras, AI-powered analytics, cloud storage'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fire Alarm Monitoring',
          description: 'UL-Listed 24/7 fire alarm monitoring'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Intrusion Detection',
          description: 'Motion sensors, glass break detectors, perimeter protection'
        }
      }
    ]
  },
  foundingDate: '1984',
  founder: {
    '@type': 'Person',
    name: 'Security Dynamics Founder'
  },
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 10,
    maxValue: 50
  },
  slogan: 'Protecting What Matters Most Since 1984',
  award: [
    'Angi Super Service Award',
    'BBB A+ Rating',
    'NJFAA Member'
  ],
  memberOf: [
    {
      '@type': 'Organization',
      name: 'National Fire Protection Association'
    },
    {
      '@type': 'Organization',
      name: 'New Jersey Fire Alarm Association'
    },
    {
      '@type': 'Organization',
      name: 'Electronic Security Association'
    }
  ],
  sameAs: [
    'https://www.facebook.com/securitydynamicsinc',
    'https://www.linkedin.com/company/security-dynamics-inc',
    'https://www.angi.com/companylist/us/nj/trenton/security-dynamics-inc-reviews-123456.htm'
  ],
  review: {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5'
    },
    author: {
      '@type': 'Organization',
      name: 'Angi'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1'
  }
};

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider?: string;
  areaServed?: string[];
  offers?: {
    price?: string;
    priceCurrency?: string;
  };
}): WithContext<Service> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    image: service.image,
    provider: {
      '@type': 'LocalBusiness',
      name: service.provider || 'Security Dynamics Inc.',
      '@id': 'https://securitydynamicsinc.com/#organization'
    },
    areaServed: service.areaServed?.map(area => ({
      '@type': 'Place',
      name: area
    })),
    serviceType: service.name,
    termsOfService: 'https://securitydynamicsinc.com/terms',
    category: 'Commercial Security Services',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name + ' Packages',
      itemListElement: []
    }
  };
}

export function generateFAQSchema(faqs: Array<{
  question: string;
  answer: string;
}>): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
}): WithContext<Product> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: product.brand || 'Security Dynamics Inc.'
    },
    offers: product.offers ? {
      '@type': 'Offer' as const,
      price: product.offers.price,
      priceCurrency: product.offers.priceCurrency || 'USD',
      availability: (product.offers.availability || 'https://schema.org/InStock') as ItemAvailability,
      seller: {
        '@type': 'LocalBusiness' as const,
        name: 'Security Dynamics Inc.',
        '@id': 'https://securitydynamicsinc.com/#organization'
      }
    } : undefined
  };
}

export function generateBreadcrumbSchema(items: Array<{
  name: string;
  url: string;
}>): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function generateLocalBusinessSchema(location: {
  name: string;
  city: string;
  state: string;
  description: string;
}): WithContext<LocalBusiness> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://securitydynamicsinc.com/locations/${location.city.toLowerCase().replace(/\s+/g, '-')}-${location.state.toLowerCase()}/#location`,
    name: `Security Dynamics Inc. - ${location.name}`,
    description: location.description,
    parentOrganization: {
      '@type': 'Organization',
      '@id': 'https://securitydynamicsinc.com/#organization'
    },
    areaServed: {
      '@type': 'City',
      name: location.city,
      containedInPlace: {
        '@type': 'State',
        name: location.state
      }
    }
  };
}