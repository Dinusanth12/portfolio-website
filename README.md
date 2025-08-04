# Dinusanth Surendran - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS. Designed to showcase skills, projects, and experience for a student pursuing a career in AI/ML, software engineering, and quant research.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Responsive**: Fully responsive layout that works on all devices
- **Fast Performance**: Optimized for speed with Next.js and TailwindCSS
- **Smooth Animations**: Beautiful animations using Framer Motion
- **SEO Optimized**: Proper meta tags and structured data
- **Accessible**: Built with accessibility in mind

## 📋 Sections

- **Hero**: Eye-catching introduction with animated background
- **About**: Personal background and current work
- **Projects**: Showcase of technical projects with links
- **Experience**: Professional timeline and current roles
- **Goals & Timeline**: Career objectives and roadmap
- **Extracurriculars**: Non-profit work and community involvement
- **Contact**: Contact form and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   └── button.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Extracurriculars.tsx
│   ├── Goals.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   └── Projects.tsx
├── data/
│   └── portfolio.ts
└── lib/
    └── utils.ts
```

## 🎨 Customization

### Content Updates

All content is stored in `src/data/portfolio.ts`. You can easily update:

- Personal information
- Projects and links
- Experience details
- Goals and timeline
- Extracurricular activities

### Styling

The design uses a blue, grey, and black color scheme with gradients. You can customize colors in:

- `src/app/globals.css` - Global styles and CSS variables
- Individual component files for specific styling

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the component to `src/app/page.tsx`
3. Update navigation in `src/components/Navigation.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

The website includes a dark mode toggle in the navigation. The theme preference is managed client-side and persists across sessions.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please reach out through the contact form on the website.

---

Built with ❤️ using Next.js and TailwindCSS
