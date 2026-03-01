# GBAAST Official Website

<div align="center">
  
  ![GBAAST Logo](https://img.shields.io/badge/GBAAST-Official%20Website-001A3A?style=for-the-badge)
  [![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  
  **Official website for the Government Bilingual Anglophone Secondary School of Arts, Sciences & Technology**
  
  [Live Website](https://www.gbaast.com) • [Report Bug](https://github.com/kelvintawe12/gbaast_website_original/issues) • [Request Feature](https://github.com/kelvintawe12/gbaast_website_original/issues)

</div>

---

## Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [SEO & PWA](#seo--pwa)
- [Admin Panel](#admin-panel)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## About The Project

The GBAAST Official Website is a comprehensive web platform designed to showcase the excellence of the Government Bilingual Anglophone Secondary School of Arts, Sciences & Technology. This modern, responsive website serves as the primary digital presence for the institution, providing information to prospective students, current students, parents, alumni, and the broader community.

### Mission

To provide a world-class digital experience that reflects the institution's commitment to bilingual education excellence and academic achievement, with a proven 98% exam success rate.

### What is GBAAST?

GBAAST is a premier bilingual dormitory school in Cameroon offering quality secondary education in:
- **Arts** - Humanities, Languages, and Creative Studies
- **Sciences** - Natural Sciences, Mathematics, and Research
- **Technology** - Technical Education and Innovation

---

## Key Features

### Public Website
- Dynamic Homepage - Hero carousel showcasing school highlights
- Programs & Academics - Comprehensive program information
- Statistics Dashboard - Real-time student success metrics
- News & Events - Latest updates and upcoming events
- Photo Gallery - Campus life and activities
- Blog - Educational content and insights
- Student Spotlight - Celebrating student achievements
- Alumni Network - Connect with graduates
- Scholarships - Financial aid information
- Online Application - Streamlined admissions process
- Contact & Location - Easy communication channels

### Admin Dashboard
- Analytics Dashboard - Student and application metrics with charts
- Content Management - Blog, news, and gallery management
- Student Records - Comprehensive student database
- Application Review - Process and manage applications
- Spotlight Management - Feature outstanding students
- Settings - Configure site parameters

### Technical Features
- Lightning Fast - Built with Vite for optimal performance
- Fully Responsive - Mobile-first design approach
- Modern UI/UX - Beautiful interface with Tailwind CSS
- SEO Optimized - Comprehensive meta tags and sitemap
- PWA Ready - Progressive Web App capabilities
- Accessible - WCAG compliance
- Bilingual Support - English and French content ready

---

## Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern UI library
- **TypeScript 5.5.4** - Type-safe JavaScript
- **React Router DOM 6.26.2** - Client-side routing

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **Lucide React 0.522.0** - Beautiful icons
- **Emotion React 11.13.3** - CSS-in-JS library

### Build Tools
- **Vite 5.2.0** - Next-generation frontend tooling
- **@vitejs/plugin-react** - React support for Vite

### Data Visualization
- **Recharts 2.12.7** - Composable charting library

### Code Quality
- **ESLint** - Linting utility
- **TypeScript ESLint** - TypeScript linting rules

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

Check your versions:

```bash
node --version
npm --version
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/kelvintawe12/gbaast_website_original.git
cd gbaast_website_original
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to `http://localhost:5173` to view the website.

### Development

The development server supports:
- Hot Module Replacement (HMR)
- Fast refresh
- Error overlay
- TypeScript type checking

---

## Project Structure

```
gbaast_website_original/
├── public/                    # Static assets
│   ├── robots.txt            # SEO crawler instructions
│   └── sitemap.xml           # SEO sitemap
├── src/
│   ├── components/           # Reusable components
│   │   ├── admin/           # Admin-specific components
│   │   │   └── AdminLayout.tsx
│   │   ├── AboutSection.tsx
│   │   ├── AdmissionsSection.tsx
│   │   ├── AlumniSection.tsx
│   │   ├── BackToTop.tsx
│   │   ├── CampusLifeSection.tsx
│   │   ├── CTABanner.tsx
│   │   ├── DegreePrograms.tsx
│   │   ├── FAQSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── NewsEventsSection.tsx
│   │   ├── NewsletterSection.tsx
│   │   ├── PartnersSection.tsx
│   │   ├── ProgramsSection.tsx
│   │   ├── ResearchSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── StoriesSection.tsx
│   │   └── TestimonialsSection.tsx
│   ├── pages/               # Page components
│   │   ├── admin/          # Admin pages
│   │   │   ├── AdminApplicationsPage.tsx
│   │   │   ├── AdminBlogPage.tsx
│   │   │   ├── AdminDashboardPage.tsx
│   │   │   ├── AdminGalleryPage.tsx
│   │   │   ├── AdminLoginPage.tsx
│   │   │   ├── AdminNewsPage.tsx
│   │   │   ├── AdminSettingsPage.tsx
│   │   │   ├── AdminSpotlightPage.tsx
│   │   │   └── AdminStudentsPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── AdmissionsPage.tsx
│   │   ├── AlumniPage.tsx
│   │   ├── ApplicationPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── CampusLifePage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── CookiePolicyPage.tsx
│   │   ├── EventsPage.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── NewsPage.tsx
│   │   ├── PrivacyPolicyPage.tsx
│   │   ├── ProgramsPage.tsx
│   │   ├── ScholarshipsPage.tsx
│   │   ├── StudentSpotlightPage.tsx
│   │   └── TermsPage.tsx
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Application entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── manifest.json           # PWA manifest
├── package.json            # Dependencies & scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── tsconfig.node.json      # TypeScript config for Node
├── vite.config.ts          # Vite configuration
└── README.md              # This file
```

---

## Available Scripts

### Development

```bash
npm run dev
```
Starts the development server with hot module replacement at `http://localhost:5173`

### Production Build

```bash
npm run build
```
Creates an optimized production build in the `dist/` directory

### Preview Production Build

```bash
npm run preview
```
Preview the production build locally before deployment

### Linting

```bash
npm run lint
```
Run ESLint to check code quality and catch errors

---

## Deployment

### Build for Production

1. **Create production build**

```bash
npm run build
```

2. **Test production build locally**

```bash
npm run preview
```

### Deployment Options

The site can be deployed to various platforms:

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### GitHub Pages
- Build command: `npm run build`
- Publish directory: `dist`

#### Traditional Hosting
- Upload the contents of `dist/` folder to your web server
- Configure server to serve `index.html` for all routes

---

## SEO & PWA

### SEO Features
- Comprehensive meta tags
- Open Graph tags for social sharing
- Twitter Card support
- Structured sitemap.xml
- Optimized robots.txt
- Semantic HTML structure
- Fast page load times

### PWA Features
- Web App Manifest (`manifest.json`)
- Installable on mobile devices
- Offline-ready architecture
- App-like experience

---

## Admin Panel

### Accessing the Admin Dashboard

Navigate to `/#/admin/login` to access the admin panel.

### Admin Features

- **Dashboard** - Overview of applications, students, and analytics
- **Blog Management** - Create, edit, and publish blog posts
- **News Management** - Manage news articles
- **Gallery** - Upload and organize photos
- **Student Spotlight** - Feature outstanding students
- **Applications** - Review and process student applications
- **Student Records** - Manage enrolled students
- **Settings** - Configure site settings

### Security Note

WARNING: The admin routes are excluded from search engine indexing via `robots.txt`

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Update documentation as needed
- Test your changes thoroughly
- Ensure TypeScript type safety
- Keep components small and focused

---

## License

This project is **proprietary and confidential**. 

**Copyright © 2026 Government Bilingual Anglophone Secondary School of Arts, Sciences & Technology (GBAAST)**

All rights reserved. Unauthorized copying, distribution, modification, or use of this software, via any medium, is strictly prohibited without explicit written permission from GBAAST.

### Usage Rights

This software is developed exclusively for GBAAST. No part of this project may be:
- Reproduced or distributed
- Modified or adapted
- Used for commercial purposes
- Reverse-engineered or decompiled

For licensing inquiries or permissions, please contact the institution directly.

---

## Contact

**Developer:** Kelvin Tawe  
**Email:** kelvintawe12@gmail.com  
**GitHub:** [@kelvintawe12](https://github.com/kelvintawe12)

**Institution:** GBAAST  
**Website:** [www.gbaast.com](https://www.gbaast.com)  
**Repository:** [github.com/kelvintawe12/gbaast_website_original](https://github.com/kelvintawe12/gbaast_website_original)

---

## Acknowledgments

Special thanks to:

- **GBAAST Administration** - For the opportunity and trust
- **React Team** - For the amazing framework
- **Vite Team** - For the blazing-fast build tool
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide Icons** - For the beautiful icon set
- **Unsplash** - For high-quality stock images
- **Open Source Community** - For the incredible tools and libraries

---

<div align="center">
  
  **Made with Love for GBAAST**
  
  *Shaping Tomorrow's Leaders Through Bilingual Excellence*

  [![Website](https://img.shields.io/badge/Website-gbaast.com-001A3A?style=for-the-badge)](https://www.gbaast.com)
  [![GitHub](https://img.shields.io/badge/GitHub-kelvintawe12-181717?style=for-the-badge&logo=github)](https://github.com/kelvintawe12)

</div>
