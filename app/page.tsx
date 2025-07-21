import { Metadata } from 'next';
import Script from 'next/script';
import { Hero, About, Services, Stats, Testimonials, Industries, CTA } from '@/components/sections';
import { SITE_CONFIG } from '@/lib/utils/constants';

export const metadata: Metadata = {
  title: 'Security Dynamics Inc. | Commercial Security Systems NJ & PA | 24/7 Monitoring',
  description: 'Leading provider of commercial security systems in Mercer County NJ & Bucks County PA. Access control, video surveillance, intrusion detection & 24/7 monitoring. Get free assessment!',
  keywords: 'security systems NJ, security systems PA, commercial security Mercer County, business security Bucks County, access control systems, video surveillance, 24/7 monitoring, security company near me',
  openGraph: {
    title: 'Security Dynamics Inc. | Commercial Security Systems NJ & PA',
    description: 'Protect your business with advanced security solutions. 24/7 monitoring, rapid response, and local expertise in Mercer & Bucks Counties.',
    url: SITE_CONFIG.url,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Dynamics Inc. - Advanced Commercial Security Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Dynamics Inc. | Commercial Security Systems',
    description: 'Leading security provider in NJ & PA. 24/7 monitoring & rapid response.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

// Schema markup for homepage
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Security Dynamics Inc.',
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logo-1.webp`,
  telephone: '+1-609-330-2287',
  email: 'info@securitydynamicsinc.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '520 Route 33',
    addressLocality: 'Millstone',
    addressRegion: 'NJ',
    postalCode: '08535',
    addressCountry: 'US'
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'New Jersey'
    },
    {
      '@type': 'State', 
      name: 'Pennsylvania'
    }
  ],
  sameAs: [
    'https://www.facebook.com/securitydynamicsinc',
    'https://www.linkedin.com/company/security-dynamics-inc',
    'https://twitter.com/securitydynamics'
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday', 
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    opens: '00:00',
    closes: '23:59'
  }
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SecuritySystemInstallationService',
  '@id': `${SITE_CONFIG.url}#business`,
  name: 'Security Dynamics Inc.',
  image: `${SITE_CONFIG.url}/logo-1.webp`,
  priceRange: '$$',
  telephone: '+1-609-330-2287',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '520 Route 33',
    addressLocality: 'Millstone',
    addressRegion: 'NJ',
    postalCode: '08535',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '40.1934',
    longitude: '-74.4229'
  },
  url: SITE_CONFIG.url,
  areaServed: [
    {
      '@type': 'AdministrativeArea',
      name: 'Mercer County',
      containedIn: {
        '@type': 'State',
        name: 'New Jersey'
      }
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Bucks County',
      containedIn: {
        '@type': 'State',
        name: 'Pennsylvania'
      }
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127'
  }
};

export default function HomePage() {
  return (
    <>

      {/* Page Sections updated order:
          Hero (dark) → Services (white) → About (white) → Industries (dark) → 
          Stats (dark) → Testimonials (dark) → CTA (white) */}
      
      {/* Hero Section - Dark Background */}
      <Hero 
        title="Advanced Security Solutions & for NJ & PA Businesses"
        description="Experience next-generation security technology with local expertise. We're not just installing systems—we're protecting what matters most with cutting-edge solutions and 24/7 monitoring."
        primaryCta={{
          text: "Get Free Security Assessment",
          href: "/contact"
        }}
        secondaryCta={{
          text: "Call Now",
          href: "tel:6093302287"
        }}
        features={[
          "24/7 Professional Monitoring",
          "Rapid Emergency Response",
          "Licensed & Insured",
          "Local Expertise Since 1985"
        ]}
      />

      {/* Services Section - White Background (Moved to 2nd) */}
      <Services 
        title="Comprehensive Security Solutions"
        subtitle="Advanced technology combined with local expertise to protect what matters most"
        showAllServices={true}
      />

      {/* About Section - White Background */}
      <About />

      {/* Industries Section - Dark Blue Background with Pattern (Moved after About) */}
      <Industries 
        title="Industry-Specific Security Solutions"
        subtitle="Tailored protection for your unique business challenges"
      />

      {/* Stats Section - Dark Blue Background with Pattern */}
      <Stats />

      {/* Testimonials Section - Dark Blue Background with Pattern */}
      <Testimonials 
        title="Trusted by Leading Businesses"
        subtitle="See what our clients say about partnering with Security Dynamics"
      />

      {/* CTA Section - White Background (Last section before footer) */}
      <CTA 
        title="Ready to Secure Your Business?"
        subtitle="Join 500+ businesses that trust Security Dynamics for their protection"
        showFeatures={true}
      />

      {/* Schema Markup using Next.js Script component */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}