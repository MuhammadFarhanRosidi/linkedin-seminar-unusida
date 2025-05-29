# LinkedIn Workshop Content Management

## Content Structure

This presentation uses a modular content structure that makes it easy to edit and customize the workshop content.

### Main Content Files

1. **`/src/content/slides.ts`** - Main slide configuration and data

   - Slide definitions and order
   - Testimonials data
   - Quiz questions
   - Speaker information

2. **`/src/content/slideContent.ts`** - Core slide content

   - Agenda content
   - Importance of LinkedIn content
   - Personal branding definitions

3. **`/src/content/detailedContent.ts`** - Detailed section content
   - Profile optimization details
   - About section templates
   - Skills and networking strategies

## How to Edit Content

### Editing Speaker Information

In `/src/content/slides.ts`, update the `speakerInfo` object:

```typescript
export const speakerInfo: SpeakerInfo = {
  name: "Your Name Here",
  title: "Your Professional Title",
  company: "Your Company",
  image: "/assets/your-photo.jpg",
  socialMedia: {
    linkedin: "https://linkedin.com/in/yourprofile",
    instagram: "https://instagram.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "your.email@domain.com",
  },
};
```

### Adding/Editing Testimonials

In `/src/content/slides.ts`, modify the `testimonials` array:

```typescript
{
  name: "Person Name",
  role: "Job Title",
  company: "Company Name",
  story: "Their success story with LinkedIn",
  benefit: "Main benefit they gained",
  image: "/assets/their-photo.jpg"
}
```

### Editing Quiz Questions

In `/src/content/slides.ts`, modify the `quizQuestions` array:

```typescript
{
  id: "q1",
  question: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correctAnswer: 1, // Index of correct answer (0-based)
  explanation: "Explanation of the correct answer"
}
```

### Adding Images

1. Place image files in `/public/assets/` folder
2. Update image paths in the content files
3. Recommended formats: JPG, PNG, WebP
4. Recommended sizes:
   - Speaker photo: 400x400px minimum
   - Testimonial photos: 200x200px minimum
   - All images should be square (1:1 aspect ratio)

## Slide Types

The presentation supports these slide types:

- `cover` - Title slide with statistics
- `agenda` - Workshop agenda
- `importance` - Why LinkedIn matters
- `personal-branding` - Personal branding concepts
- `profile-optimization` - Profile optimization tips
- `about-experience` - About and experience sections
- `skills-networking` - Skills and networking
- `content-strategy` - Content creation strategy
- `testimonials` - Success stories
- `professional-perspective` - HR/Recruiter perspective
- `soft-skills` - Soft skills assessment
- `attitude-interaction` - Best practices
- `action-plan` - Implementation steps
- `quiz` - Interactive quiz
- `thank-you` - Closing slide with speaker info

## Features

### Interactive Quiz

- Multiple choice questions with instant feedback
- Toast notifications for correct/incorrect answers
- Progress tracking and scoring
- Retake functionality

### Navigation

- Keyboard arrow keys (left/right)
- Mouse navigation buttons
- Slide dots navigation
- Auto-play mode

### Responsive Design

- Mobile-friendly layout
- Touch-friendly navigation
- Optimized for presentation screens

## Customization Tips

1. **Colors**: The presentation uses a blue theme. To change colors, modify the Tailwind classes in the component files.

2. **Animations**: Slide transitions use CSS animations. Customize timing in the `animate-fade-in` style section.

3. **Content Layout**: Each slide type has its own layout. Modify the `renderSlideContent` function in `page.tsx` to customize layouts.

4. **Adding New Slides**:
   - Add slide definition to `slides` array
   - Create new case in `renderSlideContent` function
   - Add content to appropriate content files

## Development

To run the development server:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

## Dependencies

- Next.js 15
- React 19
- Tailwind CSS
- Lucide React (icons)
- React Hot Toast (notifications)
