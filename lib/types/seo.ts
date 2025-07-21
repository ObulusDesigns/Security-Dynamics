// SEO Data Types for Security Dynamics Inc.

export interface ServiceArea {
  name: string;
  zip: string;
  features: string[];
}

export interface SEOData {
  primaryKeyword: string;
  secondaryKeywords: string[];
  longTailVariations: string[];
  localModifiers: string[];
  commercialIntent: string[];
  emergency247?: string[];
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  county: string;
  state: string;
  stateCode: string;
  zipCodes: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  population?: number;
  crimeRate?: number | string;
  messaging: 'crime-focused' | 'tech-focused' | 'commercial-focused' | 'historic-focused' | 'suburban';
  landmarks?: string[];
  businessSectors?: string[];
  demographics?: {
    medianIncome?: number;
    safetyPerception?: string;
  };
  seoData: SEOData;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  shortDescription: string;
  technicalDetails?: string[];
  benefits: string[];
  industries: string[];
  seoData: SEOData;
  faqs?: FAQ[];
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
  challenges: string[];
  solutions: string[];
  compliance?: string[];
  seoData: SEOData;
}

export interface CountyHub {
  id: string;
  name: string;
  slug: string;
  state: string;
  stateCode: string;
  description: string;
  cities: Location[];
  seoData: SEOData;
}