// Image configuration file - easily manage all image paths from here
// You can change the base path or individual image paths as needed

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

// Default configuration - you can easily switch between different image sets
export const imageConfig: ImageConfig = {
  basePath: "/assets",
  testimonials: {
    testimonial1: "testimonial-1.jpg",
    testimonial2: "testimonial-2.jpg",
    testimonial3: "testimonial-3.jpg",
    testimonial4: "testimonial-4.jpg",
  },
  speaker: "speaker.jpg",
  backgrounds: {
    cover: "cover-bg.jpg",
    slide: "slide-bg.jpg",
  },
  icons: {
    linkedin: "linkedin-icon.svg",
    personal: "personal-icon.svg",
    branding: "branding-icon.svg",
    networking: "networking-icon.svg",
    content: "content-icon.svg",
    professional: "professional-icon.svg",
    skills: "skills-icon.svg",
    action: "action-icon.svg",
  },
};

// Helper function to get full image URL
export const getImageUrl = (imagePath: string): string => {
  if (imagePath.startsWith("http")) {
    return imagePath; // Return external URLs as-is
  }
  return `${imageConfig.basePath}/${imagePath}`;
};

// Convenience functions for commonly used images
export const getTestimonialImage = (
  testimonialKey: keyof typeof imageConfig.testimonials
): string => {
  return getImageUrl(imageConfig.testimonials[testimonialKey]);
};

export const getSpeakerImage = (): string => {
  return getImageUrl(imageConfig.speaker);
};

export const getBackgroundImage = (
  backgroundKey: keyof typeof imageConfig.backgrounds
): string => {
  return getImageUrl(imageConfig.backgrounds[backgroundKey]);
};

export const getIconImage = (
  iconKey: keyof typeof imageConfig.icons
): string => {
  return getImageUrl(imageConfig.icons[iconKey]);
};

// Alternative image configurations - uncomment to use different image sets
/*
// Alternative 1: Using external CDN
export const imageConfigCDN: ImageConfig = {
  basePath: "https://your-cdn.com/images",
  testimonials: {
    testimonial1: "user1.jpg",
    testimonial2: "user2.jpg", 
    testimonial3: "user3.jpg",
    testimonial4: "user4.jpg",
  },
  speaker: "speaker-photo.jpg",
  backgrounds: {
    cover: "hero-background.jpg",
    slide: "presentation-bg.jpg",
  },
  icons: {
    linkedin: "li-icon.svg",
    personal: "person-icon.svg", 
    branding: "brand-icon.svg",
    networking: "network-icon.svg",
    content: "content-icon.svg",
    professional: "pro-icon.svg",
    skills: "skill-icon.svg",
    action: "action-icon.svg",
  },
};

// Alternative 2: Using placeholder service
export const imageConfigPlaceholder: ImageConfig = {
  basePath: "https://via.placeholder.com",
  testimonials: {
    testimonial1: "150x150/0077B5/FFFFFF?text=T1",
    testimonial2: "150x150/0077B5/FFFFFF?text=T2", 
    testimonial3: "150x150/0077B5/FFFFFF?text=T3",
    testimonial4: "150x150/0077B5/FFFFFF?text=T4",
  },
  speaker: "200x200/0077B5/FFFFFF?text=Speaker",
  backgrounds: {
    cover: "1920x1080/F3F2EF/333333?text=LinkedIn+Workshop",
    slide: "1920x1080/FFFFFF/0077B5?text=Slide+Background",
  },
  icons: {
    linkedin: "50x50/0077B5/FFFFFF?text=LI",
    personal: "50x50/0077B5/FFFFFF?text=P", 
    branding: "50x50/0077B5/FFFFFF?text=B",
    networking: "50x50/0077B5/FFFFFF?text=N",
    content: "50x50/0077B5/FFFFFF?text=C",
    professional: "50x50/0077B5/FFFFFF?text=PR",
    skills: "50x50/0077B5/FFFFFF?text=S",
    action: "50x50/0077B5/FFFFFF?text=A",
  },
};
*/
