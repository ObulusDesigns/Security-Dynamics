import { Location, Service } from '@/lib/types/seo';
import { ServiceArea } from '@/lib/types';
import { COMPANY_INFO } from '@/lib/utils/constants';

// City Schema Generator
export function generateCitySchema(
  city: Location,
  serviceAreas: ServiceArea[]
) {
  const baseUrl = 'https://securitydynamicsnj.com';
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/cities/${city.slug}#localbusiness`,
        name: `${COMPANY_INFO.name} - ${city.name}, ${city.stateCode}`,
        description: `Professional security systems installation and monitoring in ${city.name}, ${city.stateCode}. Serving ${city.county} with 24/7 emergency response.`,
        url: `${baseUrl}/cities/${city.slug}`,
        telephone: COMPANY_INFO.phone,
        email: COMPANY_INFO.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: COMPANY_INFO.address.street,
          addressLocality: city.name,
          addressRegion: city.stateCode,
          postalCode: city.zipCodes?.[0] || COMPANY_INFO.address.zip,
          addressCountry: COMPANY_INFO.address.country
        },
        geo: city.coordinates && {
          '@type': 'GeoCoordinates',
          latitude: city.coordinates.lat,
          longitude: city.coordinates.lng
        },
        areaServed: [
          {
            '@type': 'City',
            name: city.name
          },
          ...serviceAreas.map(area => ({
            '@type': 'PostalCodeRange',
            postalCodeBegin: area.zip,
            postalCodeEnd: area.zip,
            name: area.name
          }))
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '00:00',
            closes: '00:00',
            description: 'By Appointment'
          }
        ],
        priceRange: '$$',
        image: '/images/logo.png',
        sameAs: Object.values(COMPANY_INFO.socialMedia || {})
      },
      {
        '@type': 'Service',
        '@id': `${baseUrl}/cities/${city.slug}#service`,
        name: `Security Systems Installation ${city.name}`,
        provider: {
          '@id': `${baseUrl}/cities/${city.slug}#localbusiness`
        },
        areaServed: {
          '@type': 'City',
          name: city.name,
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: city.county
          }
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Security Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Home Security Systems'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Business Security Systems'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '24/7 Monitoring'
              }
            }
          ]
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Cities',
            item: `${baseUrl}/cities`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `${city.name}, ${city.stateCode}`
          }
        ]
      }
    ]
  };
}

// Service + Location Schema Generator
export function generateServiceLocationSchema(
  service: Service,
  location: Location,
  serviceAreas: ServiceArea[]
) {
  const baseUrl = 'https://securitydynamicsnj.com';
  const state = location.state?.toLowerCase().replace(' ', '-');
  const county = location.county?.toLowerCase().replace(' ', '-');
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${baseUrl}/services/${service.slug}/${state}/${county}/${location.slug}#service`,
        name: `${service.name} in ${location.name}, ${location.stateCode}`,
        description: `${service.description} Serving ${location.name} and surrounding areas in ${location.county}.`,
        provider: {
          '@type': 'LocalBusiness',
          '@id': `${baseUrl}#organization`,
          name: COMPANY_INFO.name,
          telephone: COMPANY_INFO.phone,
          email: COMPANY_INFO.email,
          address: COMPANY_INFO.address
        },
        areaServed: [
          {
            '@type': 'City',
            name: location.name,
            containedInPlace: {
              '@type': 'AdministrativeArea',
              name: location.county
            }
          },
          ...serviceAreas.map(area => ({
            '@type': 'PostalCodeRange',
            postalCodeBegin: area.zip,
            postalCodeEnd: area.zip
          }))
        ],
        serviceType: service.category,
        category: service.category,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${service.name} Packages`,
          itemListElement: service.industries.map((industry, index) => ({
            '@type': 'Offer',
            position: index + 1,
            name: `${service.name} for ${industry}`,
            description: `Specialized ${service.name.toLowerCase()} solutions for ${industry.toLowerCase()} in ${location.name}`
          }))
        }
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/services/${service.slug}/${state}/${county}/${location.slug}#localbusiness`,
        name: `${COMPANY_INFO.name} - ${service.name} ${location.name}`,
        description: `Professional ${service.name.toLowerCase()} installation and service in ${location.name}, ${location.stateCode}. ${COMPANY_INFO.tagline}`,
        url: `${baseUrl}/services/${service.slug}/${state}/${county}/${location.slug}`,
        telephone: COMPANY_INFO.phone,
        email: COMPANY_INFO.email,
        address: {
          ...COMPANY_INFO.address,
          addressLocality: location.name,
          addressRegion: location.stateCode
        },
        geo: location.coordinates && {
          '@type': 'GeoCoordinates',
          latitude: location.coordinates.lat,
          longitude: location.coordinates.lng
        },
        areaServed: {
          '@type': 'GeoCircle',
          geoMidpoint: location.coordinates && {
            '@type': 'GeoCoordinates',
            latitude: location.coordinates.lat,
            longitude: location.coordinates.lng
          },
          geoRadius: '20mi'
        },
        makesOffer: {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description
          },
          priceRange: '$$',
          availableAtOrFrom: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressLocality: location.name,
              addressRegion: location.stateCode
            }
          }
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${baseUrl}/services`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.name,
            item: `${baseUrl}/services/${service.slug}`
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: location.state,
            item: `${baseUrl}/services/${service.slug}/${state}`
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: location.county,
            item: `${baseUrl}/services/${service.slug}/${state}/${county}`
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: `${location.name}, ${location.stateCode}`
          }
        ]
      }
    ]
  };
}

// Organization Schema Generator
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://securitydynamicsnj.com#organization',
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.shortName,
    url: 'https://securitydynamicsnj.com',
    logo: '/images/logo.png',
    description: COMPANY_INFO.usp,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      ...COMPANY_INFO.address
    },
    sameAs: Object.values(COMPANY_INFO.socialMedia || {}),
    foundingDate: '1989',
    areaServed: [
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
    ]
  };
}

// FAQ Schema Generator
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
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

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(items: Array<{ name: string; url?: string }>) {
  const baseUrl = 'https://securitydynamicsnj.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${baseUrl}${item.url}` : undefined
    }))
  };
}

// Article Schema Generator
export function generateArticleSchema(article: {
  title: string;
  description: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Organization',
      name: COMPANY_INFO.name
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: '/images/logo.png'
      }
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    image: article.image || '/images/logo.png',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url
    }
  };
}

// Local Business Schema Generator
export function generateLocalBusinessSchema(params?: {
  name?: string;
  description?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  geo?: { lat: number; lng: number };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://securitydynamicsnj.com#localbusiness',
    name: params?.name || COMPANY_INFO.name,
    description: params?.description || COMPANY_INFO.usp,
    url: 'https://securitydynamicsnj.com',
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      ...(params?.address || COMPANY_INFO.address)
    },
    geo: params?.geo && {
      '@type': 'GeoCoordinates',
      latitude: params.geo.lat,
      longitude: params.geo.lng
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '00:00',
        closes: '00:00',
        description: 'By Appointment'
      }
    ],
    priceRange: '$$',
    image: '/images/logo.png',
    sameAs: Object.values(COMPANY_INFO.socialMedia || {})
  };
}