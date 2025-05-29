# Image Management System

This system allows you to easily manage and configure all image paths used in the LinkedIn workshop presentation from a centralized location.

## How It Works

All image configurations are stored in `/src/content/images.ts`. This file contains:

1. **Base path configuration** - Set the root directory for all images
2. **Individual image paths** - Specific filenames for each image type
3. **Helper functions** - Easy-to-use functions to get image URLs
4. **Alternative configurations** - Pre-configured image sets you can switch between

## Quick Start

### 1. Change Image Paths

Edit `/src/content/images.ts`:

```typescript
export const imageConfig: ImageConfig = {
  basePath: "/assets", // Change this to your image directory
  testimonials: {
    testimonial1: "your-testimonial-1.jpg", // Your image filenames
    testimonial2: "your-testimonial-2.jpg",
    testimonial3: "your-testimonial-3.jpg",
    testimonial4: "your-testimonial-4.jpg",
  },
  speaker: "your-speaker-photo.jpg",
  // ... other configurations
};
```

### 2. Switch to CDN or External Images

Uncomment and modify one of the alternative configurations:

```typescript
// For CDN images
export const imageConfig: ImageConfig = {
  basePath: "https://your-cdn.com/images",
  testimonials: {
    testimonial1: "user1.jpg",
    // ...
  },
  // ...
};
```

### 3. Use Placeholder Images

For development or testing, switch to the placeholder configuration:

```typescript
// Copy the imageConfigPlaceholder configuration to imageConfig
```

## Available Image Types

### Testimonials

- `testimonial1`, `testimonial2`, `testimonial3`, `testimonial4`
- Used for user testimonial photos

### Speaker

- `speaker` - Photo of the workshop presenter

### Backgrounds

- `cover` - Cover slide background
- `slide` - General slide background

### Icons

- `linkedin`, `personal`, `branding`, `networking`, `content`, `professional`, `skills`, `action`
- Icons for different slide sections

## Helper Functions

The system provides convenient functions to get image URLs:

```typescript
// Get testimonial images
getTestimonialImage("testimonial1"); // Returns full URL

// Get speaker image
getSpeakerImage(); // Returns full URL

// Get background images
getBackgroundImage("cover"); // Returns full URL

// Get icon images
getIconImage("linkedin"); // Returns full URL

// Generic image URL builder
getImageUrl("custom-image.jpg"); // Returns full URL with base path
```

## File Structure

```
/src/content/
├── images.ts          # ← Image configuration (edit this!)
├── slides.ts          # Uses image functions
├── slideContent.ts    # Slide content
└── detailedContent.ts # Detailed content

/public/assets/        # ← Place your actual images here
├── testimonial-1.jpg
├── testimonial-2.jpg
├── testimonial-3.jpg
├── testimonial-4.jpg
├── speaker.jpg
└── ... (other images)
```

## Examples

### Example 1: Using Local Images

```typescript
export const imageConfig: ImageConfig = {
  basePath: "/assets",
  testimonials: {
    testimonial1: "sarah.jpg",
    testimonial2: "ahmad.jpg",
    testimonial3: "diana.jpg",
    testimonial4: "rio.jpg",
  },
  speaker: "presenter.jpg",
};
```

### Example 2: Using External URLs

```typescript
export const imageConfig: ImageConfig = {
  basePath: "https://images.unsplash.com",
  testimonials: {
    testimonial1: "200x200/?random=1",
    testimonial2: "200x200/?random=2",
    testimonial3: "200x200/?random=3",
    testimonial4: "200x200/?random=4",
  },
  speaker: "300x300/?business",
};
```

### Example 3: Mixed Sources

```typescript
export const imageConfig: ImageConfig = {
  basePath: "/assets",
  testimonials: {
    testimonial1: "local-user1.jpg",
    testimonial2: "local-user2.jpg",
    testimonial3: "https://example.com/external-user3.jpg", // External URL
    testimonial4: "local-user4.jpg",
  },
  speaker: "https://cdn.example.com/speaker.jpg", // External URL
};
```

## Benefits

1. **Centralized Management** - Change all image paths from one file
2. **Easy Switching** - Switch between different image sets quickly
3. **Environment Flexibility** - Different images for dev/staging/production
4. **External URLs** - Support for CDN and external image services
5. **Type Safety** - TypeScript ensures you use valid image keys
6. **No Code Changes** - Update images without touching component code

## Tips

1. **Image Naming**: Use descriptive names for easy identification
2. **Image Sizes**: Ensure consistent dimensions for better UI
3. **File Formats**: Use web-optimized formats (WebP, JPEG, PNG)
4. **Alt Text**: Consider adding alt text configurations for accessibility
5. **Loading**: Consider lazy loading for better performance

## Troubleshooting

### Images Not Loading

1. Check the `basePath` is correct
2. Verify image filenames match exactly
3. Ensure images exist in the specified directory
4. Check browser console for 404 errors

### TypeScript Errors

1. Ensure image keys match the interface definition
2. Import helper functions properly
3. Check for typos in image key names

### Performance Issues

1. Optimize image sizes
2. Use appropriate image formats
3. Consider implementing lazy loading
4. Use CDN for better performance
