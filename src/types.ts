export type PageId = 'home' | 'services' | 'pricing' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'residential' | 'specialized' | 'commercial';
  shortDescription: string;
  fullDescription: string;
  image: string;
  startingPrice: string;
  includes: string[];
  recommendedAddons: string[];
  popularBadge?: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  startingPrice: number;
  priceNote: string;
  isPopular?: boolean;
  features: string[];
  notIncluded?: string[];
  bestFor: string;
  ctaText: string;
}

export interface AddonItem {
  id: string;
  name: string;
  price: number;
  description: string;
  iconName: string;
}

export interface ServiceAreaCity {
  name: string;
  county: string;
  driveTime: string;
  popularServices: string;
  zipCodes: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  neighborhood: string;
  serviceType: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'pricing' | 'service' | 'booking' | 'insurance' | 'process';
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyType: 'Home' | 'Apartment' | 'Office' | 'Commercial' | 'Airbnb' | 'Other';
  cleaningType: 'Standard' | 'Deep Clean' | 'Move-In' | 'Move-Out' | 'Recurring' | 'Commercial' | 'Post-Construction';
  frequency: 'One-Time' | 'Weekly' | 'Biweekly' | 'Monthly';
  propertySize: 'Under 1,000 sq ft' | '1,000–1,500 sq ft' | '1,500–2,000 sq ft' | '2,000–3,000 sq ft' | '3,000+ sq ft';
  preferredDate: string;
  preferredTime: 'Morning (8:00 AM – 12:00 PM)' | 'Afternoon (12:00 PM – 4:00 PM)' | 'Late Afternoon (4:00 PM – 7:00 PM)' | 'Flexible';
  bedrooms: number;
  bathrooms: number;
  addons: string[];
  message: string;
}
