# Security Dynamics Web

This is the official website for Security Dynamics Inc., a leading security solutions provider serving businesses in New Jersey and Pennsylvania.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The development server will start on [http://localhost:3000](http://localhost:3000) (or another available port if 3000 is in use).

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Technology Stack

- **Framework**: Next.js 15.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Language**: TypeScript
- **Forms**: React Hook Form with Zod validation
- **Icons**: Heroicons & Lucide React
- **Animations**: Framer Motion

## Project Structure

```
security-dynamics-web/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── cities/            # City-specific pages
│   ├── industries/        # Industry pages
│   ├── learning-center/   # Blog & guides
│   ├── services/          # Service pages
│   └── ...               # Other pages
├── components/            # React components
│   ├── forms/            # Form components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   ├── templates/        # Page templates
│   └── ui/               # UI components
├── lib/                   # Utilities & data
│   ├── data/             # Static data
│   ├── seo/              # SEO utilities
│   ├── types/            # TypeScript types
│   └── utils/            # Helper functions
└── public/               # Static assets
```

## Features

- **SEO Optimized**: Comprehensive meta tags, schema markup, and sitemap
- **Local Search**: 50+ location-specific pages for local SEO
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance**: Optimized images, lazy loading, and caching
- **Forms**: Contact, quote, and newsletter forms with validation
- **Content**: Blog posts, guides, and educational resources

## Deployment

The site can be deployed to any platform that supports Next.js, including:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Self-hosted with Node.js

## Environment Variables

Create a `.env.local` file for local development:

```env
# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=your-ga-id

# Email Service (when implementing email sending)
EMAIL_SERVICE_API_KEY=your-api-key
```

## License

© 2024 Security Dynamics Inc. All rights reserved.