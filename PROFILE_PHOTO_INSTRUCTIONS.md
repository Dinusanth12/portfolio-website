# Adding Your Profile Photo

## 📸 How to Add Your Photo

1. **Add your photo to the public folder:**
   - Place your photo in the `public/` folder
   - Name it `profile-photo.jpg` (or update the code to match your filename)
   - Recommended size: 400x400 pixels or larger (square aspect ratio)

2. **Update the Hero component:**
   - Open `src/components/Hero.tsx`
   - Find the commented section around line 150-160
   - Uncomment the Image component and update the src path:

```tsx
{/* Replace the placeholder with your actual image */}
<Image
  src="/profile-photo.jpg"  // Update this to match your filename
  alt="Dinusanth Surendran"
  fill
  className="object-cover"
  priority
/>
```

3. **Remove the placeholder:**
   - Delete or comment out the placeholder div with "DS" initials
   - Remove the "Add your photo here" text

## 🎨 Photo Recommendations

- **Format**: JPG or PNG
- **Size**: 400x400 pixels minimum (square)
- **Style**: Professional headshot or business casual
- **Background**: Clean, neutral background
- **Lighting**: Well-lit, clear image

## 🔧 Alternative: Use a Different Image Component

If you prefer a different approach, you can also use:

```tsx
<Image
  src="/your-photo.jpg"
  alt="Dinusanth Surendran"
  width={400}
  height={400}
  className="rounded-full object-cover"
  priority
/>
```

## 📱 Responsive Design

The photo will automatically scale for different screen sizes:
- Mobile: 320x320 pixels
- Desktop: 384x384 pixels (lg:w-96 lg:h-96)

The photo container includes beautiful decorative elements and animations that will work with any photo you add! 