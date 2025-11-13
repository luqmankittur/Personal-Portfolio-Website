# Portfolio Website

Deployed Here: https://luqman.co.in/

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a dynamic blog system, project showcase, and contact functionality.

## Features

- **Responsive Design** - Fully responsive across all devices
- **Dynamic Blog** - Integrated blog system with Supabase backend
- **Project Showcase** - Portfolio gallery with filtering capabilities
- **Contact Form** - Get in touch functionality
- **SEO Optimized** - Comprehensive meta tags and sitemap generation

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, shadcn-ui components
- **Backend**: Supabase
- **Routing**: React Router v6
- **State Management**: TanStack Query
- **Animations**: Framer Motion

## Installation

```bash
# Clone the repository
git clone https://github.com/luqmankittur/Personal-Portfolio-Website

# Navigate to project directory
cd Personal-Portfolio-Website

# Install dependencies
npm install

# Start development server
npm run dev
```

## Environment Variables

Create a `.env` file in the root directory:

```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## Project Structure

```
src/
├── components/       # React components
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and configurations
├── integrations/     # Third-party integrations
└── styles/           # Global styles and Tailwind config
```

## Key Features

### Blog System
- Dynamic blog posts with Supabase
- Search and tag filtering
- Featured posts
- Related articles

### Portfolio Gallery
- Project showcase with images
- Responsive grid layout
- Detailed project information

### SEO
- Dynamic meta tags
- Open Graph support
- Sitemap generation
- Robots.txt configuration

## About the Author  
**Luqman Kittur** – Developer & Designer at Luqman Graphics.  
You can contact me at: [kitturluqman007@gmail.com](mailto:kitturluqman007@gmail.com)

---

*Thank you for checking out this project. I hope it helps you build a great personal website!*  
