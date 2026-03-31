# Peanut Processing Business Website

A modern, professional B2B website for a peanut processing mill based in West Bengal, India. The website showcases our advanced processing capabilities, quality control measures, and product offerings to wholesalers, exporters, food manufacturers, and retailers.

## 🥜 About the Business

We operate a state-of-the-art peanut processing mill equipped with advanced machinery including:
- Color sorting technology
- Gravity separation equipment
- Quality grading systems

We specialize in cleaning, grading, and supplying high-quality peanuts to B2B clients across India and internationally.

## 🌟 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Professional B2B Focus**: Conversion-optimized for lead generation
- **Multi-page Structure**: Home, About Us, Our Process, Products, Why Choose Us, Gallery, and Contact
- **WhatsApp Integration**: Floating WhatsApp button for instant communication
- **Inquiry Forms**: Multiple contact forms throughout the site for lead capture
- **Gallery Showcase**: Visual presentation of facilities and products
- **Clean Industrial Design**: Earthy color palette (brown, green, beige) reflecting agricultural heritage

## 🚀 Tech Stack

- **React 18.3.1**: Modern UI library
- **Vite 6.3.5**: Fast build tool and dev server
- **TypeScript**: Type-safe development
- **Tailwind CSS 4.1.12**: Utility-first CSS framework
- **React Router 7.13.0**: Client-side routing
- **Lucide React**: Modern icon library
- **Radix UI**: Accessible component primitives

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/NutriGold-Enterprise.git
cd NutriGold-Enterprise
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── Footer.tsx       # Site footer with contact info
│   │   ├── Header.tsx       # Navigation header
│   │   ├── InquiryForm.tsx  # Lead capture form
│   │   ├── Layout.tsx       # Page layout wrapper
│   │   ├── ScrollToTop.tsx  # Scroll restoration
│   │   └── WhatsAppButton.tsx # Floating WhatsApp CTA
│   ├── pages/
│   │   ├── Home.tsx         # Homepage
│   │   ├── About.tsx        # About Us page
│   │   ├── Process.tsx      # Our Process page
│   │   ├── Products.tsx     # Products catalog
│   │   ├── WhyChooseUs.tsx  # Value propositions
│   │   ├── Gallery.tsx      # Photo gallery
│   │   ├── Contact.tsx      # Contact page
│   │   └── NotFound.tsx     # 404 page
│   ├── App.tsx              # Main app component
│   └── routes.ts            # Route configuration
├── styles/
│   ├── index.css            # Global styles
│   ├── tailwind.css         # Tailwind imports
│   ├── theme.css            # Theme tokens
│   └── fonts.css            # Font imports
```

## 🔧 Configuration

### WhatsApp Number
Update the phone number in `src/app/components/WhatsAppButton.tsx`:
```typescript
const phoneNumber = "918250080395"; // Replace with your number
```

### Contact Information
Update business details in `src/app/components/Footer.tsx` and `src/app/pages/Contact.tsx`

## 🌐 Deployment

### Deploy to GitHub Pages (Configured)

This project is pre-configured for GitHub Pages deployment. Follow these steps:

**Method 1: Using GitHub Actions (Automatic)**

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/NutriGold-Enterprise.git
git push -u origin main
```

2. Enable GitHub Pages in your repository:
   - Go to repository Settings → Pages
   - Under "Build and deployment", select Source: **GitHub Actions**
   - The workflow will automatically build and deploy your site

3. Your site will be live at: `https://yourusername.github.io/NutriGold-Enterprise/`

**Method 2: Using gh-pages package (Manual)**

1. Deploy directly from your local machine:
```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch.

2. Enable GitHub Pages in your repository:
   - Go to repository Settings → Pages
   - Under "Build and deployment", select Source: **Deploy from a branch**
   - Select branch: **gh-pages** and folder: **/ (root)**

3. Your site will be live at: `https://yourusername.github.io/NutriGold-Enterprise/`

**Important:** Replace `yourusername` with your actual GitHub username in:
- The repository URL when pushing
- The `homepage` field in `package.json`

### Deploy to Vercel (Alternative)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Override the base path setting to `/` (remove `/NutriGold-Enterprise/`)
6. Click "Deploy"

### Deploy to Netlify (Alternative)

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository
5. Override the base path setting to `/` (remove `/NutriGold-Enterprise/`)
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy"

**Note:** For Vercel or Netlify, you should update `vite.config.ts` and `routes.ts` to remove the base path configuration since these platforms don't require it.

## 📧 Contact

For inquiries about our peanut processing services:
- **Email**: info@yourcompany.com
- **Phone**: +91 82500 80395
- **Location**: West Bengal, India

## 📄 License

Copyright © 2026 [Your Company Name]. All rights reserved.

## 🤝 Contributing

This is a private business website. For any issues or suggestions, please contact the development team.