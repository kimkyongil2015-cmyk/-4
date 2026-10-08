export type PageTab = 'home' | 'facilities' | 'programs' | 'pricing' | 'reviews' | 'location';

export interface FacilityItem {
  id: string;
  category: string;
  name: string;
  englishName: string;
  tagline: string;
  description: string;
  image: string;
  keySpecs: string[];
  equipmentList: string[];
  recommendedFor: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  englishTitle: string;
  level: string;
  duration: string;
  tagline: string;
  description: string;
  targetAudience: string[];
  keyEffects: string[];
  curriculum: string[];
}

export interface PricingPlan {
  id: string;
  category: 'membership' | 'pt';
  name: string;
  periodOrSessions: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  features: string[];
  recommendedFor: string;
}

export interface ReviewItem {
  id: string;
  authorName: string;
  authorRole: string;
  targetGoal: string;
  durationPeriod: string;
  rating: number;
  highlight: string;
  reviewText: string;
  satisfactionPoints: string[];
  isSample: boolean;
}

export interface ConsultationRequest {
  name: string;
  phone: string;
  goal: string;
  preferredTime: string;
  interestedProgram: string;
  memo: string;
}
