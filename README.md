# NutriGold Enterprise - B2B Peanut Processing Website

![NutriGold Enterprise](https://img.shields.io/badge/Status-Ready%20to%20Deploy-green)
![License](https://img.shields.io/badge/License-Proprietary-blue)

Professional B2B website for NutriGold Enterprise, a peanut processing business based in West Bengal, India, specializing in cleaning, grading, and supplying high-quality peanuts.

## 🌐 Live Website

**Production URL**: https://kuntalkumarsamanta7890-boop.github.io/NutriGold-Enterprise/

## 🎯 Features

- **7 Professional Pages**
  - Home with hero section and key highlights
  - About Us with company story
  - Our Process showcasing advanced machinery
  - Products catalog
  - Why Choose Us highlighting competitive advantages
  - Gallery showcasing facilities
  - Contact page with inquiry form

- **Modern Tech Stack**
  - React 18 with TypeScript
  - React Router for navigation
  - Tailwind CSS for styling
  - Material-UI components
  - Lucide React icons
  - Motion animations

- **B2B Features**
  - WhatsApp integration for instant communication
  - Multiple inquiry forms
  - Mobile responsive design
  - Professional industrial design
  - SEO optimized

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and pnpm 8+
- GitHub account
- Git installed

### Local Development

```bash
# Clone the repository
git clone https://github.com/kuntalkumarsamanta7890-boop/NutriGold-Enterprise.git
cd NutriGold-Enterprise

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📦 Deployment

This project is configured for **GitHub Pages** deployment with automated workflows.

### Deploy to GitHub Pages

1. **Create Repository** on GitHub named `NutriGold-Enterprise`

2. **Push Code**:
```bash
git init
git add .
git commit -m "Initial commit: NutriGold Enterprise website"
git branch -M main
git remote add origin https://github.com/kuntalkumarsamanta7890-boop/NutriGold-Enterprise.git
git push -u origin main
```

3. **Configure GitHub Pages**:
   - Go to Settings → Pages
   - Source: Select **GitHub Actions**
   - Wait 2-3 minutes for deployment

4. **Your site will be live at**: https://kuntalkumarsamanta7890-boop.github.io/NutriGold-Enterprise/

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🛠️ Configuration

### Update WhatsApp Number

Edit `/src/app/components/WhatsAppButton.tsx`:
```typescript
const phoneNumber = "918250080395"; // Your actual WhatsApp number
```

### Update Contact Information

Edit these files with your business details:
- `/src/app/components/Footer.tsx`
- `/src/app/pages/Contact.tsx`

### Update Images

Replace placeholder images in `/src/app/pages/Gallery.tsx` with actual product and facility images.

## 📁 Project Structure

```
NutriGold-Enterprise/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── .nojekyll              # GitHub Pages config
│   └── 404.html               # Custom 404 page
├── src/
│   ├── app/
│   │   ├── components/        # React components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Layout.tsx
│   │   │   ├── InquiryForm.tsx
│   │   │   ├── WhatsAppButton.tsx
│   │   │   └── ui/           # UI components library
│   │   ├── pages/            # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── Gallery.tsx
│   │   │   └── Contact.tsx
│   │   ├── routes.ts         # React Router configuration
│   │   └── App.tsx           # Main app component
│   ├── styles/               # CSS and styling
│   └── main.tsx              # App entry point
├── DEPLOYMENT.md             # Detailed deployment guide
├── GITHUB_ACTIONS_TROUBLESHOOTING.md  # Troubleshooting guide
├── package.json              # Dependencies
└── vite.config.ts            # Vite configuration

```

## 🎨 Design System

**Color Palette** (Earthy, Industrial):
- Primary Brown: `#8B4513` (SaddleBrown)
- Secondary Green: `#228B22` (ForestGreen)
- Accent Beige: `#F5F5DC` (Beige)
- Background: Clean whites and light grays
- Text: Professional dark grays

**Typography**:
- Headings: System fonts optimized for readability
- Body: Clean, professional sans-serif

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technologies Used

- **Frontend Framework**: React 18.3.1
- **Routing**: React Router 7.13.0
- **Styling**: Tailwind CSS 4.1.12
- **UI Components**: Material-UI 7.3.5, Radix UI
- **Icons**: Lucide React 0.487.0
- **Animations**: Motion 12.23.24
- **Build Tool**: Vite 6.3.5
- **Package Manager**: pnpm 8+

## 📄 License

Copyright © 2026 NutriGold Enterprise. All rights reserved.

This is proprietary software for NutriGold Enterprise business use.

## 👥 Contact

**Business**: NutriGold Enterprise  
**Location**: West Bengal, India  
**Industry**: Peanut Processing & Supply  

**For Technical Support**:
- Create an issue in this repository
- Contact: Via WhatsApp button on the website

## 📚 Documentation

- [Deployment Guide](./DEPLOYMENT.md)
- [GitHub Actions Troubleshooting](./GITHUB_ACTIONS_TROUBLESHOOTING.md)

## ✅ Pre-Deployment Checklist

Before going live, ensure:

- [ ] Repository created on GitHub
- [ ] All code committed and pushed
- [ ] GitHub Pages enabled with GitHub Actions
- [ ] WhatsApp number updated in WhatsAppButton.tsx
- [ ] Contact information updated in Footer and Contact page
- [ ] All pages tested and working
- [ ] Mobile responsiveness verified
- [ ] Forms tested
- [ ] Gallery images updated with actual photos
- [ ] All navigation links working

---

**Status**: ✅ Ready to Deploy

All configurations are complete. Your website is ready to go live!

Just follow the deployment steps in [DEPLOYMENT.md](./DEPLOYMENT.md)
