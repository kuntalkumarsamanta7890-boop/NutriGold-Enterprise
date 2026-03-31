# Deployment Guide for NutriGold Enterprise Website

## Quick Start: Deploy to GitHub Pages

Your website is fully configured and ready to deploy to GitHub Pages. Follow these steps:

---

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **+** icon in the top right → **New repository**
3. Repository settings:
   - **Name**: `NutriGold-Enterprise` (must match exactly)
   - **Description**: "Professional B2B website for peanut processing business"
   - **Visibility**: Public (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **Create repository**

---

## Step 2: Push Your Code to GitHub

Open your terminal in the project directory and run these commands:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: NutriGold Enterprise website"

# Rename branch to main
git branch -M main

# Add GitHub remote (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/NutriGold-Enterprise.git

# Push to GitHub
git push -u origin main
```

**Important:** Replace `yourusername` with your actual GitHub username!

---

## Step 3: Configure GitHub Pages

### Option A: Automatic Deployment (Recommended)

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select **GitHub Actions**
5. Go back to the main repository page
6. Click the **Actions** tab
7. You should see a workflow running (green dot)
8. Wait for it to complete (~2-3 minutes)
9. Your site will be live at: `https://yourusername.github.io/NutriGold-Enterprise/`

### Option B: Manual Deployment

If you prefer to deploy manually:

```bash
# Run this command in your project directory
npm run deploy
```

Then configure GitHub Pages:
1. Go to your repository → **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: gh-pages
   - **Folder**: / (root)
3. Click **Save**
4. Your site will be live at: `https://yourusername.github.io/NutriGold-Enterprise/`

---

## Step 4: Update Configuration (Important!)

After deployment, update these files with your actual information:

### 1. Update package.json
Replace `yourusername` with your GitHub username:
```json
"homepage": "https://YOUR-ACTUAL-USERNAME.github.io/NutriGold-Enterprise",
```

### 2. Update WhatsApp Number
Edit `src/app/components/WhatsAppButton.tsx`:
```typescript
const phoneNumber = "918250080395"; // Replace with your actual number
```

### 3. Update Contact Information
Edit `src/app/components/Footer.tsx` and `src/app/pages/Contact.tsx` with your actual business details.

### 4. Push updates
```bash
git add .
git commit -m "Update configuration with actual details"
git push
```

---

## Troubleshooting

### Site not loading / 404 error

1. **Check GitHub Pages is enabled:**
   - Settings → Pages → Source should be set

2. **Check the URL is correct:**
   - Should be: `https://yourusername.github.io/NutriGold-Enterprise/`
   - Note the trailing slash

3. **Wait a few minutes:**
   - First deployment can take 3-5 minutes

4. **Check Actions tab:**
   - Make sure the workflow completed successfully (green checkmark)

### Navigation not working

If clicking links shows 404:
1. Make sure you're using the full URL with `/NutriGold-Enterprise/` path
2. Check that `base` is set correctly in `vite.config.ts`
3. Clear your browser cache

### Images not loading

1. Make sure images are in the `public` folder or properly imported
2. Check browser console for errors (F12)
3. Ensure image paths don't start with absolute `/` without the base path

---

## Alternative Deployment Options

### Deploy to Vercel (Easier, No Configuration Needed)

1. Push your code to GitHub (follow Step 2 above)
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New** → **Project**
4. Import your `NutriGold-Enterprise` repository
5. **Important:** Add environment variable or update config:
   - Set `base` to `/` in `vite.config.ts`
   - Remove `basename` from `routes.ts`
6. Click **Deploy**
7. Your site will be live at: `https://nutrigold-enterprise.vercel.app`

### Deploy to Netlify

1. Push your code to GitHub (follow Step 2 above)
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click **Add new site** → **Import an existing project**
4. Connect to GitHub and select `NutriGold-Enterprise`
5. **Important:** Update config:
   - Set `base` to `/` in `vite.config.ts`
   - Remove `basename` from `routes.ts`
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click **Deploy**
8. Your site will be live at: `https://nutrigold-enterprise.netlify.app`

---

## Updating Your Website

Whenever you make changes:

```bash
# Make your changes to the code

# Add changes
git add .

# Commit with a message
git commit -m "Description of changes"

# Push to GitHub
git push

# If using GitHub Actions, it will automatically redeploy
# If using gh-pages package, run:
npm run deploy
```

---

## Need Help?

- **GitHub Pages Issues**: Check [GitHub Pages documentation](https://docs.github.com/en/pages)
- **Build Errors**: Check the Actions tab in your repository for error messages
- **General Questions**: Open an issue in your repository

---

## Checklist Before Going Live

- [ ] Repository created and code pushed
- [ ] GitHub Pages enabled in Settings
- [ ] Site is accessible at the GitHub Pages URL
- [ ] Updated `homepage` in package.json with your username
- [ ] Updated WhatsApp number in WhatsAppButton.tsx
- [ ] Updated contact information in Footer and Contact page
- [ ] Tested all pages and navigation
- [ ] Tested WhatsApp button
- [ ] Tested contact forms
- [ ] Checked on mobile devices
- [ ] Replaced placeholder content with real business information
- [ ] Added actual product images in Gallery

---

**Your website is ready to deploy! Follow the steps above and your professional B2B peanut processing website will be live in minutes.**
