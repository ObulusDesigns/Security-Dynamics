import { Metadata } from 'next';
import { CaseStudyTemplate, CaseStudyData } from '@/components/templates/CaseStudyTemplate';
import StructuredData from '@/components/seo/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/utils/structured-data';

const caseStudyData: CaseStudyData = {
  title: "Securing a Historic Princeton Law Firm",
  client: "Princeton Legal Associates",
  industry: "Legal Services",
  location: "Princeton, NJ",
  projectDate: "September 2024",
  heroImage: "/images/case-studies/princeton-law-firm.jpg",
  summary: "How we protected sensitive client data and secured a historic Nassau Street building without compromising its architectural integrity.",
  
  challenge: {
    description: "This prestigious law firm, located in a 1920s historic building on Nassau Street, needed a comprehensive security upgrade to protect confidential client information and valuable assets. The challenge was implementing modern security without damaging the building's historic features or disrupting daily operations.",
    points: [
      "Historic building restrictions prevented traditional wiring installation",
      "Multiple entry points including a public-facing reception area",
      "Need to protect confidential client files and sensitive legal documents",
      "After-hours access required for partners and senior associates",
      "Compliance with legal industry security standards and client requirements"
    ]
  },
  
  solution: {
    description: "We designed a hybrid wireless/wired security solution that preserved the building's historic character while providing state-of-the-art protection. Our team worked closely with Princeton's Historic Preservation Commission to ensure compliance.",
    components: [
      {
        name: "Wireless Access Control",
        description: "Installed wireless card readers on all office doors with role-based access permissions for partners, associates, and staff."
      },
      {
        name: "Discrete HD Cameras",
        description: "Deployed 12 miniaturized 4K cameras in period-appropriate housings that blend with the historic architecture."
      },
      {
        name: "Document Protection",
        description: "Secured file rooms with biometric locks and motion sensors, with audit trails for compliance."
      },
      {
        name: "Silent Alarms",
        description: "Installed panic buttons at reception and in partner offices for discrete emergency alerts."
      },
      {
        name: "After-Hours System",
        description: "Implemented time-based access control allowing authorized after-hours entry with full audit logging."
      },
      {
        name: "Cloud Management",
        description: "Deployed cloud-based system management for remote monitoring and access control changes."
      }
    ]
  },
  
  implementation: {
    timeline: "3 weeks",
    process: [
      "Historic building assessment and preservation planning",
      "Wireless infrastructure installation during off-hours",
      "Camera and sensor deployment with minimal drilling",
      "System integration and staff training"
    ]
  },
  
  results: {
    description: "The new security system has provided comprehensive protection while maintaining the firm's prestigious image. The partners report increased peace of mind, and the firm has successfully passed several client security audits.",
    metrics: [
      {
        value: "100%",
        label: "Compliance Achievement"
      },
      {
        value: "Zero",
        label: "Security Incidents"
      },
      {
        value: "95%",
        label: "Staff Satisfaction"
      },
      {
        value: "3 Weeks",
        label: "Installation Time"
      }
    ],
    benefits: [
      "Complete protection without compromising historic architecture",
      "Enhanced client confidence through visible security measures",
      "Simplified compliance with legal industry security standards",
      "Reduced insurance premiums by 15% due to upgraded security",
      "Improved after-hours access management for partners",
      "Full audit trail for all access events and system changes"
    ]
  },
  
  testimonial: {
    quote: "Security Dynamics understood our unique challenges as a law firm in a historic building. They found creative solutions that protected our clients' confidential information without damaging our beautiful 1920s architecture. The system has been flawless, and our clients appreciate the visible commitment to security.",
    author: "Jennifer Matthews",
    title: "Managing Partner",
    company: "Princeton Legal Associates"
  },
  
  technologies: [
    "Honeywell Access Control",
    "Hikvision 4K Cameras",
    "Bosch Wireless Sensors",
    "Alarm.com Cloud Platform",
    "HID Mobile Credentials",
    "Biometric Readers",
    "Environmental Monitoring"
  ],
  
  relatedCaseStudies: [
    {
      title: "Protecting Palmer Square Luxury Retail",
      slug: "palmer-square-retail",
      industry: "Retail"
    },
    {
      title: "Securing Princeton Medical Practice",
      slug: "princeton-medical",
      industry: "Healthcare"
    },
    {
      title: "Route 1 Tech Campus Protection",
      slug: "princeton-tech-campus",
      industry: "Technology"
    }
  ]
};

const breadcrumbs = [
  { name: 'Home', url: 'https://securitydynamicsnj.com' },
  { name: 'Case Studies', url: 'https://securitydynamicsnj.com/case-studies' },
  { name: 'Princeton Law Firm Security', url: 'https://securitydynamicsnj.com/case-studies/princeton-law-firm' }
];

export const metadata: Metadata = {
  title: 'Case Study: Princeton Law Firm Security System | Security Dynamics',
  description: 'Learn how we secured a historic Princeton law firm with wireless access control and HD cameras while preserving the building\'s 1920s architecture.',
  keywords: 'Princeton law firm security, legal office security system, historic building security, Nassau Street security',
  openGraph: {
    title: 'Case Study: Securing a Historic Princeton Law Firm',
    description: 'How Security Dynamics protected sensitive client data in a 1920s Nassau Street building.',
    url: 'https://securitydynamicsnj.com/case-studies/princeton-law-firm',
    images: [{ url: '/images/case-studies/princeton-law-firm-og.jpg' }],
    type: 'article',
  },
  alternates: {
    canonical: 'https://securitydynamicsnj.com/case-studies/princeton-law-firm',
  },
};

export default function PrincetonLawFirmCaseStudy() {
  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(breadcrumbs)} />
      <CaseStudyTemplate data={caseStudyData} />
    </>
  );
}