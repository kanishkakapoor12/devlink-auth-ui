# DevLink - Professional Network Authentication UI

A complete, production-ready Next.js 14 application with Google OAuth authentication and a LinkedIn-inspired login page.

## Features

- **Next.js 14** with App Router and TypeScript
- **NextAuth.js v5** for authentication with Google OAuth2
- **Material-UI (MUI)** for beautiful, responsive UI components
- **JWT Session Strategy** (no database required)
- **LinkedIn-inspired Design** with professional styling
- **Protected Routes** with automatic redirection
- **Google OAuth Integration** with proper branding

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Authentication**: NextAuth.js v5 (Auth.js)
- **UI Library**: Material-UI (MUI)
- **Styling**: Emotion (CSS-in-JS)
- **Session Management**: JWT (JSON Web Tokens)

## Project Structure

```
devlink-auth-ui/
├── app/
│   ├── api/auth/[...nextauth]/
│   │   └── route.ts          # NextAuth.js API route
│   ├── dashboard/
│   │   └── page.tsx          # Protected dashboard page
│   ├── layout.tsx            # Root layout with providers
│   └── page.tsx              # Login page (root)
├── types/
│   └── next-auth.d.ts        # NextAuth.js type declarations
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
├── env.local.example         # Environment variables template
└── README.md                 # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Google OAuth2 credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd devlink-auth-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.local.example .env.local
   ```

4. **Configure Google OAuth2**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
   - Copy Client ID and Client Secret

5. **Update environment variables**
   ```bash
   # .env.local
   NEXTAUTH_SECRET=your-nextauth-secret-key-here
   NEXTAUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your-google-client-id-here
   GOOGLE_CLIENT_SECRET=your-google-client-secret-here
   ```

6. **Generate NEXTAUTH_SECRET**
   ```bash
   openssl rand -base64 32
   ```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
npm start
```

## Authentication Flow

1. **Public Access**: Users visit `/` and see the LinkedIn-inspired login page
2. **Google Sign-in**: Click "Sign in with Google" to authenticate via OAuth2
3. **Automatic Redirect**: Authenticated users are redirected to `/dashboard`
4. **Protected Dashboard**: Shows user profile, email, and sign-out option
5. **Session Management**: Uses JWT tokens for stateless authentication

## Key Features

### Login Page (`/`)
- LinkedIn-inspired design with light gray background
- Google OAuth sign-in button with proper branding
- Responsive Material-UI components
- Automatic redirection for authenticated users
- Professional typography and spacing

### Dashboard Page (`/dashboard`)
- Protected route (redirects unauthenticated users)
- Displays user profile picture, name, and email
- Sign-out functionality with NextAuth.js
- Professional layout with Material-UI cards
- Responsive design

### Authentication Configuration
- JWT session strategy (no database required)
- Google OAuth2 provider
- Custom session callbacks
- Type-safe with TypeScript declarations

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXTAUTH_SECRET` | Secret key for JWT encryption | Yes |
| `NEXTAUTH_URL` | Base URL of your application | Yes |
| `GOOGLE_CLIENT_ID` | Google OAuth2 Client ID | Yes |
| `GOOGLE_CLIENT_SECRET` | Google OAuth2 Client Secret | Yes |

## Customization

### Styling
- Modify the Material-UI theme in `app/layout.tsx`
- Update colors, typography, and spacing
- LinkedIn blue: `#0a66c2`
- Background: `#f4f2ee`

### Authentication
- Add more OAuth providers in `app/api/auth/[...nextauth]/route.ts`
- Customize session callbacks
- Modify redirect URLs

### Pages
- Add new protected routes in `app/` directory
- Use `useSession()` hook for authentication checks
- Implement middleware for route protection
