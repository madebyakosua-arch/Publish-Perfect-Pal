export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface BenefitItem {
  id: number;
  title: string;
  description: string;
  iconName: 'clock' | 'shield' | 'search' | 'check';
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  iconName: 'scan' | 'fix' | 'page' | 'cover' | 'eye' | 'history';
}