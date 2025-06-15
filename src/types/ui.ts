// UI component prop types and styling types

import { ReactNode, ElementType } from "react";

// Basic UI component prop types
export interface StatCardProps {
  number: string;
  label: string;
  icon: ElementType;
}

export interface FeatureCardProps {
  title: string;
  items: string[];
  icon: ElementType;
  color?: string;
}

export interface TipBoxProps {
  title: ReactNode;
  content: ReactNode;
  type?: "tip" | "warning" | "info";
}

// Animation variant types
export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      staggerChildren?: number;
      ease?: string;
    };
  };
}

export interface CardHoverVariants {
  hover: {
    scale: number;
    y: number;
    transition: {
      duration: number;
      ease: string;
    };
  };
}

export interface SlideVariants {
  enter: (direction: number) => {
    x: number;
    opacity: number;
    scale: number;
  };
  center: {
    zIndex: number;
    x: number;
    opacity: number;
    scale: number;
  };
  exit: (direction: number) => {
    zIndex: number;
    x: number;
    opacity: number;
    scale: number;
  };
}

// Color theme types
export interface ColorClasses {
  bg: string;
  border: string;
  text: string;
  accent: string;
  badge: string;
}

// Style theme types
export interface TipBoxStyles {
  tip: string;
  warning: string;
  info: string;
}

// Component state types
export interface QuizAnswers {
  [key: string]: number;
}

export interface ShowAnswers {
  [key: string]: boolean;
}

// Image configuration types (from images.ts)
export interface ImageConfig {
  basePath: string;
  testimonials: {
    testimonial1: string;
    testimonial2: string;
    testimonial3: string;
    testimonial4: string;
  };
  speaker: string;
  backgrounds: {
    cover: string;
    slide: string;
  };
  icons: {
    linkedin: string;
    personal: string;
    branding: string;
    networking: string;
    content: string;
    professional: string;
    skills: string;
    action: string;
  };
}
