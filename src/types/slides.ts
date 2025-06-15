// Slide-related type definitions
export interface SlideData {
  id: string;
  title: string;
  subtitle?: string;
  headTitle?: string;
  subHeadTitle?: string;
  type: string;
}

export interface TestimonialData {
  name: string;
  role: string;
  company: string;
  story: string;
  benefit: string;
  image?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface SpeakerInfo {
  name: string;
  title: string;
  company: string;
  image?: string;
  socialMedia: {
    linkedin?: string;
    youtube?: string;
    github?: string;
    whatsapp?: string;
  };
}

export interface LinkedInBenefit {
  id: string;
  title: string;
  description: string;
  percentage: string;
  icon: string;
  color: string;
  stats: string;
}

export interface FreshgraduateStrategy {
  profileOptimization: {
    title: string;
    tips: string[];
  };
  jobSearchStrategy: {
    title: string;
    steps: string[];
  };
  applicationTips: {
    title: string;
    items: string[];
  };
  headhunterResponse: {
    title: string;
    strategies: string[];
  };
  commonMistakes: {
    title: string;
    mistakes: string[];
  };
  successMetrics: {
    title: string;
    metrics: string[];
  };
}
