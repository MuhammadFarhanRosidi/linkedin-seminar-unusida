// Common utility types and enums

// Base types
export type ColorVariant =
  | "blue"
  | "green"
  | "purple"
  | "orange"
  | "red"
  | "teal"
  | "emerald";

export type SlideType =
  | "cover"
  | "introduction"
  | "agenda"
  | "linkedin-statistics"
  | "importance"
  | "common-mistakes"
  | "personal-branding"
  | "profile-optimization"
  | "headline-masterclass"
  | "about-experience"
  | "photo-banner-tips"
  | "skills-networking"
  | "content-strategy"
  | "content-calendar"
  | "engagement-hacks"
  | "benefits"
  | "success-stories"
  | "freshgraduate-strategy"
  | "job-search-tips"
  | "professional-perspective"
  | "recruiter-insights"
  | "soft-skills"
  | "linkedin-premium"
  | "networking-masterclass"
  | "industry-insights"
  | "attitude-interaction"
  | "linkedin-analytics"
  | "future-trends"
  | "action-plan"
  | "tools-resources"
  | "quiz"
  | "thank-you"
  | "testimonials";

export type TipBoxType = "tip" | "warning" | "info";

export type IconType =
  | "briefcase"
  | "eye"
  | "users"
  | "trending-up"
  | "brain"
  | "dollar-sign"
  | "linkedin"
  | "personal"
  | "branding"
  | "networking"
  | "content"
  | "professional"
  | "skills"
  | "action";

// Utility types
export interface BaseContent {
  title: string;
  items: string[];
}

export interface ContentWithDescription extends BaseContent {
  description?: string;
}

export interface SocialMediaLinks {
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  github?: string;
  whatsapp?: string;
  email?: string;
}

// Animation and timing constants
export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.5,
  slow: 0.8,
  slideTransition: 0.6,
  autoPlay: 10000, // 10 seconds
} as const;

export const ANIMATION_DELAYS = {
  stagger: 0.1,
  itemDelay: 0.3,
  slideDelay: 0.2,
} as const;

// Common animation easing
export const ANIMATION_EASING = {
  easeOut: "easeOut",
  easeIn: "easeIn",
  easeInOut: "easeInOut",
  spring: "spring",
} as const;

// Breakpoints for responsive design
export const BREAKPOINTS = {
  mobile: "640px",
  tablet: "768px",
  desktop: "1024px",
  xl: "1280px",
} as const;
