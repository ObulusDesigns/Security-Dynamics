// Industry-specific data for Security Dynamics Inc.
import { Industry } from '@/lib/types/seo';

export const industries: Industry[] = [
  {
    id: 'healthcare-security',
    name: 'Healthcare Security',
    slug: 'healthcare-security',
    description: 'Comprehensive security solutions for medical facilities, hospitals, and healthcare providers. Protect patients, staff, and sensitive medical data while ensuring HIPAA compliance.',
    challenges: [
      'HIPAA compliance requirements',
      'Patient safety and infant protection',
      'Pharmaceutical security',
      'Emergency department violence',
      'Cyber-physical security threats',
      'After-hours facility access'
    ],
    solutions: [
      'Infant protection systems',
      'Restricted area access control',
      'Visitor management systems',
      'Duress alarm systems',
      'Environmental monitoring for labs',
      'Integration with nurse call systems'
    ],
    compliance: ['HIPAA', 'Joint Commission', 'CMS'],
    seoData: {
      primaryKeyword: 'security for medical offices',
      secondaryKeywords: [
        'healthcare security systems',
        'hospital security solutions',
        'medical facility security',
        'HIPAA compliant security'
      ],
      longTailVariations: [
        'infant protection systems for hospitals',
        'pharmaceutical security access control',
        'HIPAA compliant video surveillance medical offices',
        'emergency department security systems'
      ],
      localModifiers: [
        'healthcare security Mercer County',
        'medical office security Princeton',
        'hospital security Doylestown Health',
        'Capital Health security systems'
      ],
      commercialIntent: [
        'healthcare security system cost',
        'medical facility security quotes',
        'HIPAA compliant security pricing',
        'hospital security installation'
      ],
      emergency247: [
        '24/7 healthcare facility monitoring',
        'emergency medical security response',
        'after-hours healthcare security'
      ]
    }
  },
  {
    id: 'warehouse-security',
    name: 'Warehouse Security',
    slug: 'warehouse-security',
    description: 'Industrial-strength security solutions for warehouses, distribution centers, and logistics facilities. Protect inventory, control access, and monitor operations 24/7.',
    challenges: [
      'Large perimeter protection',
      'Loading dock security',
      'Inventory theft prevention',
      'Employee access management',
      'Fire and environmental hazards',
      'After-hours vulnerability'
    ],
    solutions: [
      'Perimeter intrusion detection',
      'Loading dock access control',
      'PTZ cameras for large areas',
      'Advanced fire suppression monitoring',
      'Inventory tracking integration',
      'Remote video verification'
    ],
    compliance: ['OSHA', 'Fire Code', 'Insurance Requirements'],
    seoData: {
      primaryKeyword: 'warehouse security systems',
      secondaryKeywords: [
        'distribution center security',
        'warehouse surveillance cameras',
        'industrial security systems',
        'logistics facility security'
      ],
      longTailVariations: [
        'loading dock access control systems',
        'warehouse perimeter security solutions',
        'inventory protection surveillance systems',
        'distribution center fire monitoring'
      ],
      localModifiers: [
        'warehouse security Trenton NJ',
        'industrial security Hamilton Township',
        'distribution security Bensalem PA',
        'logistics security Route 1 corridor'
      ],
      commercialIntent: [
        'warehouse security system cost',
        'industrial security quotes',
        'distribution center security pricing',
        'warehouse surveillance installation'
      ],
      emergency247: [
        '24/7 warehouse monitoring',
        'emergency industrial security',
        'after-hours warehouse protection'
      ]
    }
  },
  {
    id: 'retail-security',
    name: 'Retail Security',
    slug: 'retail-security',
    description: 'Comprehensive loss prevention and security solutions for retail stores, shopping centers, and boutiques. Deter theft, ensure customer safety, and protect your bottom line.',
    challenges: [
      'Shoplifting and organized retail crime',
      'Employee theft',
      'Customer and staff safety',
      'Point of sale security',
      'After-hours break-ins',
      'Liability protection'
    ],
    solutions: [
      'High-visibility dome cameras',
      'Electronic article surveillance (EAS)',
      'POS transaction monitoring',
      'Facial recognition for repeat offenders',
      'Public view monitors',
      'Panic buttons for staff'
    ],
    compliance: ['ADA', 'Local Privacy Laws', 'PCI DSS'],
    seoData: {
      primaryKeyword: 'retail loss prevention',
      secondaryKeywords: [
        'retail security systems',
        'store surveillance cameras',
        'retail theft prevention',
        'shopping center security'
      ],
      longTailVariations: [
        'retail loss prevention systems for small business',
        'boutique store security cameras',
        'shopping mall security solutions',
        'retail employee theft prevention'
      ],
      localModifiers: [
        'retail security Neshaminy Mall',
        'store security Princeton Shopping',
        'boutique security Doylestown PA',
        'retail security New Hope shops'
      ],
      commercialIntent: [
        'retail security system cost',
        'store surveillance pricing',
        'loss prevention system quotes',
        'retail security ROI calculator'
      ],
      emergency247: [
        '24/7 retail monitoring',
        'after-hours store security',
        'emergency retail response'
      ]
    }
  },
  {
    id: 'multi-family-residential',
    name: 'Multi-Family Residential',
    slug: 'multi-family-residential',
    description: 'Security solutions designed for apartment complexes, condominiums, and multi-family communities. Protect residents while managing access for visitors and service providers.',
    challenges: [
      'Controlled entry for multiple units',
      'Visitor and delivery management',
      'Common area security',
      'Parking lot safety',
      'Package theft prevention',
      'Resident privacy concerns'
    ],
    solutions: [
      'Video intercom entry systems',
      'Automated gate access',
      'Common area surveillance',
      'Package room security',
      'License plate recognition',
      'Mobile credentials for residents'
    ],
    compliance: ['Fair Housing Act', 'Local Privacy Laws', 'ADA'],
    seoData: {
      primaryKeyword: 'multi-family security systems',
      secondaryKeywords: [
        'apartment complex security',
        'condo security systems',
        'residential community security',
        'apartment building access control'
      ],
      longTailVariations: [
        'video intercom systems for apartments',
        'gated community access control',
        'package room security for condos',
        'apartment complex surveillance cameras'
      ],
      localModifiers: [
        'apartment security Princeton NJ',
        'condo security Doylestown PA',
        'multi-family security Levittown',
        'residential complex security Trenton'
      ],
      commercialIntent: [
        'apartment security system cost',
        'multi-family security quotes',
        'condo access control pricing',
        'community security packages'
      ],
      emergency247: [
        '24/7 apartment monitoring',
        'emergency residential security',
        'after-hours community protection'
      ]
    }
  },
  {
    id: 'commercial-office-security',
    name: 'Commercial Office Security',
    slug: 'commercial-office-security',
    description: 'Professional security systems for office buildings, corporate campuses, and business parks. Protect people and intellectual property while managing multi-tenant access.',
    challenges: [
      'Multi-tenant access management',
      'After-hours security',
      'Visitor and contractor access',
      'Emergency response coordination',
      'Executive protection',
      'Common area monitoring'
    ],
    solutions: [
      'Smart access control systems',
      'Touchless visitor management',
      'Elevator and floor restrictions',
      'Parking access control',
      'Mass notification systems',
      'Cloud-based management'
    ],
    compliance: ['Fire Code', 'ADA', 'Local Building Codes'],
    seoData: {
      primaryKeyword: 'commercial office security',
      secondaryKeywords: [
        'office building security systems',
        'corporate security solutions',
        'business park security',
        'commercial access control'
      ],
      longTailVariations: [
        'multi-tenant office building security',
        'corporate campus access control',
        'visitor management systems offices',
        'commercial building surveillance'
      ],
      localModifiers: [
        'office security Princeton NJ',
        'corporate security Trenton',
        'business park security Bensalem',
        'commercial security Doylestown'
      ],
      commercialIntent: [
        'office security system cost',
        'commercial security quotes',
        'building security pricing',
        'access control installation'
      ],
      emergency247: [
        '24/7 office monitoring',
        'after-hours building security',
        'emergency commercial response'
      ]
    }
  },
  {
    id: 'education-security',
    name: 'Education Security',
    slug: 'education-security',
    description: 'Campus-wide security solutions for schools, colleges, and universities. Create safer learning environments with emergency response systems and access control.',
    challenges: [
      'Active threat response',
      'Visitor and volunteer screening',
      'Emergency communications',
      'Campus-wide monitoring',
      'Access control management',
      'Bus and transport security'
    ],
    solutions: [
      'Emergency lockdown systems',
      'Visitor management with screening',
      'Panic buttons and duress alarms',
      'Weapons detection technology',
      'Reunification planning tools',
      'Mental health threat assessment'
    ],
    compliance: ['State School Safety Laws', 'Alyssa\'s Law', 'FERPA', 'Clery Act'],
    seoData: {
      primaryKeyword: 'school security systems',
      secondaryKeywords: [
        'campus security solutions',
        'education security systems',
        'school lockdown systems',
        'university security'
      ],
      longTailVariations: [
        'K-12 school security systems',
        'college campus access control',
        'emergency lockdown systems schools',
        'visitor management schools'
      ],
      localModifiers: [
        'school security Mercer County',
        'campus security Princeton University',
        'education security Bucks County',
        'school systems Burlington County'
      ],
      commercialIntent: [
        'school security system cost',
        'campus security pricing',
        'education security grants',
        'school safety funding'
      ],
      emergency247: [
        '24/7 campus monitoring',
        'emergency school response',
        'after-hours campus security'
      ]
    }
  },
  {
    id: 'financial-security',
    name: 'Financial Security',
    slug: 'financial-security',
    description: 'High-security solutions for banks, credit unions, and financial institutions. Meet regulatory requirements while protecting assets with vault monitoring and compliance systems.',
    challenges: [
      'Vault and safe protection',
      'ATM security',
      'Regulatory compliance',
      'Silent alarm systems',
      'Biometric access control',
      'Transaction surveillance'
    ],
    solutions: [
      'UL-listed monitoring',
      'Vault time delay systems',
      'Teller duress alarms',
      'ATM skimming detection',
      'Check fraud prevention',
      'Compliance reporting'
    ],
    compliance: ['Bank Protection Act', 'UL Standards', 'FDIC/NCUA', 'BSA/AML'],
    seoData: {
      primaryKeyword: 'bank security systems',
      secondaryKeywords: [
        'credit union security',
        'financial institution security',
        'bank vault monitoring',
        'ATM security systems'
      ],
      longTailVariations: [
        'bank vault security systems',
        'credit union access control',
        'financial compliance security',
        'ATM surveillance systems'
      ],
      localModifiers: [
        'bank security Trenton NJ',
        'credit union security Doylestown',
        'financial security Princeton',
        'bank systems Bensalem PA'
      ],
      commercialIntent: [
        'bank security system cost',
        'financial security pricing',
        'vault monitoring quotes',
        'compliance security costs'
      ],
      emergency247: [
        '24/7 bank monitoring',
        'vault alarm response',
        'after-hours financial security'
      ]
    }
  },
  {
    id: 'hospitality-security',
    name: 'Hospitality Security',
    slug: 'hospitality-security',
    description: 'Security systems for hotels, restaurants, and entertainment venues. Protect guests while maintaining welcoming atmosphere with discrete yet effective solutions.',
    challenges: [
      'Guest and staff safety',
      'Employee theft prevention',
      'Room and area access control',
      'Liability protection',
      'After-hours security',
      'VIP and event security'
    ],
    solutions: [
      'HD surveillance systems',
      'POS transaction monitoring',
      'Smart room access',
      'Kitchen and storage protection',
      'Parking and valet security',
      'Pool access management'
    ],
    compliance: ['Liquor License Requirements', 'Health Department', 'ADA'],
    seoData: {
      primaryKeyword: 'hospitality security systems',
      secondaryKeywords: [
        'hotel security systems',
        'restaurant security',
        'venue security solutions',
        'hospitality surveillance'
      ],
      longTailVariations: [
        'hotel guest room security',
        'restaurant POS monitoring',
        'bar security camera systems',
        'event venue protection'
      ],
      localModifiers: [
        'hotel security Atlantic City',
        'restaurant security Princeton',
        'hospitality security New Hope',
        'venue security Doylestown'
      ],
      commercialIntent: [
        'hotel security system cost',
        'restaurant security pricing',
        'hospitality security quotes',
        'venue protection costs'
      ],
      emergency247: [
        '24/7 hotel monitoring',
        'restaurant alarm response',
        'after-hours hospitality security'
      ]
    }
  }
];

// Helper functions
export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find(industry => industry.slug === slug);
};