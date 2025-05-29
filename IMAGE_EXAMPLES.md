# 🖼️ Image Configuration Examples

Here are some ready-to-use image configurations you can copy into `/src/content/images.ts`:

## 🎯 Option 1: Placeholder Images (Perfect for Development)

```typescript
export const imageConfig: ImageConfig = {
  basePath: "https://via.placeholder.com",
  testimonials: {
    testimonial1: "150x150/0077B5/FFFFFF?text=Sarah+P",
    testimonial2: "150x150/0077B5/FFFFFF?text=Ahmad+R",
    testimonial3: "150x150/0077B5/FFFFFF?text=Diana+S",
    testimonial4: "150x150/0077B5/FFFFFF?text=Rio+P",
  },
  speaker: "200x200/0077B5/FFFFFF?text=Speaker",
  backgrounds: {
    cover: "1920x1080/F3F2EF/0077B5?text=LinkedIn+Workshop",
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
```

## 🌐 Option 2: Professional Stock Photos (Using Unsplash)

```typescript
export const imageConfig: ImageConfig = {
  basePath: "https://images.unsplash.com",
  testimonials: {
    testimonial1: "150x150/?business&person&1",
    testimonial2: "150x150/?business&person&2",
    testimonial3: "150x150/?business&person&3",
    testimonial4: "150x150/?business&person&4",
  },
  speaker: "200x200/?business&presenter",
  backgrounds: {
    cover: "1920x1080/?business&office",
    slide: "1920x1080/?minimal&white",
  },
  icons: {
    linkedin: "50x50/?linkedin&logo",
    personal: "50x50/?person&icon",
    branding: "50x50/?brand&icon",
    networking: "50x50/?network&icon",
    content: "50x50/?content&icon",
    professional: "50x50/?professional&icon",
    skills: "50x50/?skills&icon",
    action: "50x50/?action&icon",
  },
};
```

## 📁 Option 3: Local Images (Your Custom Photos)

```typescript
export const imageConfig: ImageConfig = {
  basePath: "/assets",
  testimonials: {
    testimonial1: "team/sarah-wijaya.jpg",
    testimonial2: "team/ahmad-rahman.jpg",
    testimonial3: "team/maria-santos.jpg",
    testimonial4: "team/david-chen.jpg",
  },
  speaker: "presenters/main-speaker.jpg",
  backgrounds: {
    cover: "backgrounds/linkedin-cover.jpg",
    slide: "backgrounds/clean-slide.jpg",
  },
  icons: {
    linkedin: "icons/linkedin.svg",
    personal: "icons/personal.svg",
    branding: "icons/branding.svg",
    networking: "icons/networking.svg",
    content: "icons/content.svg",
    professional: "icons/professional.svg",
    skills: "icons/skills.svg",
    action: "icons/action.svg",
  },
};
```

## 🎨 Option 4: Mixed Sources (Local + CDN)

```typescript
export const imageConfig: ImageConfig = {
  basePath: "/assets",
  testimonials: {
    testimonial1: "local-testimonial-1.jpg",
    testimonial2: "https://cdn.example.com/testimonial-2.jpg",
    testimonial3: "local-testimonial-3.jpg",
    testimonial4: "https://avatars.githubusercontent.com/u/example",
  },
  speaker: "https://your-website.com/speaker-photo.jpg",
  backgrounds: {
    cover: "https://cdn.example.com/cover-bg.jpg",
    slide: "slide-background.jpg",
  },
  icons: {
    linkedin: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
    personal: "icons/personal.svg",
    branding: "icons/branding.svg",
    networking: "icons/networking.svg",
    content: "icons/content.svg",
    professional: "icons/professional.svg",
    skills: "icons/skills.svg",
    action: "icons/action.svg",
  },
};
```

## 🚀 How to Switch Configurations

1. **Copy** one of the configurations above
2. **Open** `/src/content/images.ts`
3. **Replace** the existing `imageConfig` object
4. **Save** the file
5. **Refresh** your browser - images update automatically!

## 📝 Tips for Image URLs

### For Placeholder Images:

- Use `via.placeholder.com` for quick testing
- Format: `WIDTHxHEIGHT/BACKGROUND_COLOR/TEXT_COLOR?text=YOUR_TEXT`
- Example: `150x150/0077B5/FFFFFF?text=User`

### For Unsplash Images:

- Use `images.unsplash.com` for professional stock photos
- Format: `WIDTHxHEIGHT/?keyword&theme`
- Example: `200x200/?business&professional`

### For Local Images:

- Place images in `/public/assets/` directory
- Use relative paths starting with `/assets/`
- Example: `/assets/team/photo.jpg`

### For External URLs:

- Use full URLs starting with `https://`
- Ensure CORS is properly configured
- Consider using CDN for better performance

## 🎯 Quick Start

**Want to test immediately?** Copy this placeholder configuration:

```typescript
export const imageConfig: ImageConfig = {
  basePath: "https://via.placeholder.com",
  testimonials: {
    testimonial1: "150x150/0077B5/FFFFFF?text=Sarah",
    testimonial2: "150x150/28A745/FFFFFF?text=Ahmad",
    testimonial3: "150x150/DC3545/FFFFFF?text=Diana",
    testimonial4: "150x150/FFC107/000000?text=Rio",
  },
  speaker: "200x200/6F42C1/FFFFFF?text=Expert",
  backgrounds: {
    cover: "1920x1080/0077B5/FFFFFF?text=LinkedIn+Workshop",
    slide: "1920x1080/F8F9FA/0077B5?text=Slide",
  },
  icons: {
    linkedin: "50x50/0077B5/FFFFFF?text=LI",
    personal: "50x50/28A745/FFFFFF?text=P",
    branding: "50x50/DC3545/FFFFFF?text=B",
    networking: "50x50/FFC107/000000?text=N",
    content: "50x50/6F42C1/FFFFFF?text=C",
    professional: "50x50/17A2B8/FFFFFF?text=PR",
    skills: "50x50/FD7E14/FFFFFF?text=S",
    action: "50x50/20C997/FFFFFF?text=A",
  },
};
```

This will give you colorful placeholder images to see the system in action!
