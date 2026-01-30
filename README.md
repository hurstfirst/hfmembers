# Hurst First Members Portal

This is the **Hurst First Members / AMC Management Portal** - a Next.js web application for managing Annual Maintenance Contracts (AMC) and client information.

## Features

### Client Dashboard
- **Client Information Display**: View client name, email, install date, and ID
- **AMC Information**: 
  - AMC tier (Bronze, Silver, Gold, Platinum)
  - Contract status (Active, Expiring Soon, Expired, Pending)
  - Start and end dates
  - Days until expiry with visual warnings
- **Touchpoints Management**:
  - Quarterly review calls
  - 6-month on-site visits
  - Annual renewal milestones
  - Status tracking (upcoming, completed, overdue)

### AMC Registration (v1)
- Interest registration form with validation
- Tier selection (Bronze, Silver, Gold, Platinum)
- Contact information collection
- Form submission confirmation

### Future Features (v2)
- Online payment integration
- User authentication
- Real-time data from API
- Email notifications

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: Node.js

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hurstfirst/hfmembers.git
cd hfmembers
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
hfmembers/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Dashboard page
│   ├── globals.css        # Global styles
│   └── register/          # Registration page
│       └── page.tsx
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── ClientInfoCard.tsx      # Client info display
│   ├── AMCInfoCard.tsx         # AMC status display
│   ├── TouchpointsCard.tsx     # Touchpoints list
│   └── AMCRegistrationForm.tsx # Registration form
├── lib/                   # Utility functions
│   └── data.ts           # Mock data & helpers
├── types/                 # TypeScript type definitions
│   └── index.ts
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Design System

### Color Scheme
- Primary: Blue (#1e40af - blue-900)
- Background: Gray (#f9fafb - gray-50)
- Cards: White with shadow

### AMC Tiers
- **Bronze**: Orange accent
- **Silver**: Gray accent
- **Gold**: Yellow accent
- **Platinum**: Purple accent

### Status Colors
- **Active**: Green
- **Expiring Soon**: Yellow
- **Expired**: Red
- **Pending**: Blue

## Development Notes

- Currently uses mock data in `lib/data.ts`
- No backend API integration yet (v1)
- Form submissions are console-logged (not persisted)
- Authentication to be added in future version

## Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended): `vercel --prod`
- **Netlify**: Connect GitHub repo
- **AWS/Azure/GCP**: Use Docker or native deployment
- **Custom server**: Run `npm run build && npm run start`

### Domain Setup

Configure your domain to point to `members.hurst-first.com` (or your preferred subdomain).

## Contributing

This is a private repository for Hurst First. For questions or issues, contact the development team.

## License

Copyright © 2025 Hurst First. All rights reserved.
