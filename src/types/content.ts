// Content structure type definitions

// Profile optimization content types
export interface ProfileOptimizationContent {
  profilePhoto: {
    title: string;
    items: string[];
  };
  headline: {
    title: string;
    items: string[];
  };
  headlineExample: {
    title: string;
    lessEffective: string;
    moreEffective: string;
  };
}

// About and experience content types
export interface AboutExperienceContent {
  aboutSection: {
    title: string;
    items: string[];
  };
  experienceSection: {
    title: string;
    items: string[];
  };
  aboutTemplate: {
    title: string;
    paragraphs: string[];
  };
}

// Skills and networking content types
export interface SkillsNetworkingContent {
  skillsEndorsements: {
    title: string;
    items: string[];
  };
  recommendations: {
    title: string;
    items: string[];
  };
  networkingStrategy: {
    title: string;
    items: string[];
  };
  mobileOptimization: {
    title: string;
    items: string[];
  };
}

// Content strategy types
export interface ContentStrategyContent {
  contentTypes: {
    title: string;
    items: string[];
  };
  postingSchedule: {
    title: string;
    items: string[];
  };
  engagementTips: {
    title: string;
    items: string[];
  };
  viralFormula: {
    title: string;
    content: string;
  };
}

// Professional perspective content types
export interface ProfessionalPerspectiveContent {
  firstImpression: {
    title: string;
    items: string[];
  };
  deepAssessment: {
    title: string;
    items: string[];
  };
  recruiterStats: {
    title: string;
    stats: string[];
  };
  redFlags: {
    title: string;
    items: string[];
  };
}

// Soft skills content types
export interface SoftSkillsContent {
  communicationSkills: {
    title: string;
    items: string[];
  };
  criticalThinking: {
    title: string;
    items: string[];
  };
  emotionalIntelligence: {
    title: string;
    items: string[];
  };
  leadershipPotential: {
    title: string;
    items: string[];
  };
}

// Attitude and interaction content types
export interface AttitudeInteractionContent {
  dosAndDonts: {
    dos: {
      title: string;
      items: string[];
    };
    donts: {
      title: string;
      items: string[];
    };
  };
  goldenRule: {
    title: string;
    content: string;
  };
}

// Action plan content types
export interface ActionPlanContent {
  week1to2: {
    title: string;
    items: string[];
  };
  week3to4: {
    title: string;
    items: string[];
  };
  successMetrics: {
    title: string;
    items: string[];
  };
  longTermGoals: {
    title: string;
    items: string[];
  };
  supportInfo: {
    title: string;
    content: string;
  };
}

// Basic content types
export interface AgendaContent {
  session1: {
    title: string;
    items: string[];
  };
  session2: {
    title: string;
    items: string[];
  };
  session3: {
    title: string;
    items: string[];
  };
}

export interface ImportanceContent {
  statistics: {
    title: string;
    items: string[];
  };
  benefits: {
    title: string;
    items: string[];
  };
  hiddenJobMarket: {
    title: string;
    content: string;
  };
}

export interface PersonalBrandingContent {
  definition: {
    title: string;
    content: string;
  };
  components: {
    title: string;
    items: string[];
  };
  benefits: {
    title: string;
    items: string[];
  };
}

// New slide content types for detailed content
export interface IntroductionContent {
  statistics: {
    title: string;
    items: string[];
  };
  importance: {
    title: string;
    items: string[];
  };
  opportunity: {
    title: string;
    content: string;
  };
}

export interface LinkedinStatisticsContent {
  globalStats: {
    title: string;
    items: string[];
  };
  indonesiaStats: {
    title: string;
    items: string[];
  };
  impactStats: {
    title: string;
    items: string[];
  };
}

export interface CommonMistakesContent {
  profileMistakes: {
    title: string;
    items: string[];
  };
  contentMistakes: {
    title: string;
    items: string[];
  };
  networkingMistakes: {
    title: string;
    items: string[];
  };
  consequencesWarning: {
    content: string;
  };
}

export interface HeadlineMasterclassContent {
  badExamples: {
    title: string;
    items: string[];
  };
  goodExamples: {
    title: string;
    items: string[];
  };
  headlineFormula: {
    content: string;
  };
  tips: {
    title: string;
    items: string[];
  };
}

export interface PhotoBannerContent {
  profilePhotoTips: {
    title: string;
    items: string[];
  };
  bannerDesign: {
    title: string;
    items: string[];
  };
  commonPhotoMistakes: {
    title: string;
    items: string[];
  };
  psychologyTips: {
    content: string;
  };
}

export interface ContentCalendarContent {
  weeklyPlan: {
    title: string;
    items: string[];
  };
  contentTypes: {
    title: string;
    items: string[];
  };
  postingTimes: {
    title: string;
    items: string[];
  };
  contentIdeas: {
    title: string;
    items: string[];
  };
}

export interface EngagementHacksContent {
  algorithmSecrets: {
    title: string;
    items: string[];
  };
  engagementTactics: {
    title: string;
    items: string[];
  };
  commentStrategy: {
    title: string;
    items: string[];
  };
  networkingHacks: {
    title: string;
    items: string[];
  };
}

export interface SuccessStoriesContent {
  stories: Array<{
    name: string;
    position: string;
    strategy: string;
    keyTakeaway: string;
  }>;
}

export interface JobSearchTipsContent {
  salaryNegotiation: {
    title: string;
    items: string[];
  };
  redFlags: {
    title: string;
    items: string[];
  };
}

export interface RecruiterInsightsContent {
  quotes: Array<{
    quote: string;
    recruiter: string;
  }>;
}

export interface LinkedinPremiumContent {
  freeVsPremium: {
    title: string;
    items: string[];
  };
  worthItScenarios: {
    title: string;
    items: string[];
  };
  premiumTips: {
    title: string;
    items: string[];
  };
  alternatives: {
    title: string;
    items: string[];
  };
}

export interface NetworkingMasterclassContent {
  networkingStrategy: {
    title: string;
    items: string[];
  };
  connectionMessage: {
    title: string;
    items: string[];
  };
  followUpStrategy: {
    title: string;
    items: string[];
  };
  networkingEvents: {
    title: string;
    items: string[];
  };
}

export interface IndustryInsightsContent {
  techIndustry: {
    title: string;
    items: string[];
  };
  financeIndustry: {
    title: string;
    items: string[];
  };
  marketingIndustry: {
    title: string;
    items: string[];
  };
  consultingIndustry: {
    title: string;
    items: string[];
  };
  startupEcosystem: {
    title: string;
    items: string[];
  };
}

export interface LinkedinAnalyticsContent {
  profileAnalytics: {
    title: string;
    items: string[];
  };
  contentAnalytics: {
    title: string;
    items: string[];
  };
  optimizationTips: {
    title: string;
    items: string[];
  };
  toolsRecommendation: {
    title: string;
    items: string[];
  };
}

export interface FutureTrendsContent {
  platformEvolution: {
    title: string;
    items: string[];
  };
  workTrends: {
    title: string;
    items: string[];
  };
  preparationTips: {
    title: string;
    items: string[];
  };
  skillsPrediction: {
    title: string;
    items: string[];
  };
}

export interface ToolsResourcesContent {
  linkedinTools: {
    title: string;
    items: string[];
  };
  contentCreationTools: {
    title: string;
    items: string[];
  };
  learningResources: {
    title: string;
    items: string[];
  };
  networkingResources: {
    title: string;
    items: string[];
  };
}
