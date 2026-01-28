# Niraah Digi Connect - Marketing Agency Website

A modern, responsive marketing agency website built with Next.js 14, TypeScript, Tailwind CSS, and Firebase.

## Features

- 🎨 Modern, clean design inspired by professional marketing agencies
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 14 App Router for optimal performance
- 🎯 Sections include:
  - Hero with stats
  - Who We Work With
  - Services (Meta Ads, Social Media, GMB, Web Development)
  - Results & Insights
  - Testimonials Carousel
  - How We Work Process
  - Online Workshops
  - Why Choose Us
  - Team Section
  - Call-to-Action
  - Footer with Contact Info

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Firebase Firestore
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd niraah
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
   - Copy `.env.local.example` to `.env.local`
   - Add your Firebase configuration values to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Firebase Setup

1. Go to Firebase Console
2. Create a new project
3. Enable Firestore Database
4. Get your configuration from Project Settings
5. Add the values to `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Project Structure

```
niraah/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx     # Hero with stats
│   ├── WhoWeWorkWith.tsx   # About section
│   ├── ServicesSection.tsx # Services grid
│   ├── ResultsSection.tsx  # Results showcase
│   ├── TestimonialsSection.tsx # Client testimonials
│   ├── HowWeWorkSection.tsx    # Process steps
│   ├── WorkshopsSection.tsx    # Training programs
│   ├── WhyNiraahSection.tsx    # Why choose us
│   ├── TeamSection.tsx     # Team showcase
│   ├── CTASection.tsx      # Final call-to-action
│   └── Footer.tsx          # Footer with links
├── lib/
│   └── firebase.ts         # Firebase configuration
└── public/                 # Static assets
```

## Customization

### Colors

The main brand colors are defined in `tailwind.config.ts`:
- Primary: Yellow (#FFC107)
- Secondary: Dark Gray (#1F2937)
- Accent: Orange (#F59E0B)

### Content

Update the content in each component file located in the `components/` directory.

### Images

Replace placeholder emojis with actual images by:
1. Adding images to the `public/` folder
2. Using Next.js `Image` component for optimization

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

## License

MIT License - feel free to use this for your projects!

## Support

For support, email hello@niraah.com or open an issue in the repository.

