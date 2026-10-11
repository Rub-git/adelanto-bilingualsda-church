# Adelanto Bilingual SDA Church Website

## Overview

This is a bilingual church website for Adelanto Bilingual Seventh-day Adventist Church. The application is a full-stack web app with a React frontend and Express backend, designed to serve a multicultural church community with features like contact forms, ministry information, and service schedules.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library (New York style)
- **Animations**: Framer Motion for page transitions and scroll animations
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints defined in `shared/routes.ts`
- **Build Tool**: Vite for frontend, esbuild for backend bundling

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` contains all database tables
- **Migrations**: Managed via `drizzle-kit push`

### Project Structure
```
├── client/           # React frontend
│   └── src/
│       ├── components/   # UI components including shadcn/ui
│       ├── pages/        # Route pages (Home, About, Ministries, Contact)
│       ├── hooks/        # Custom React hooks
│       └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route definitions with Zod schemas
└── migrations/       # Database migrations
```

### Design Patterns
- **Type-Safe API**: Route definitions in `shared/routes.ts` include input/output schemas for compile-time safety
- **Shared Validation**: Zod schemas are shared between frontend and backend
- **Component Architecture**: Reusable Section component with scroll animations
- **Form Submission**: Mutations handled via React Query with toast notifications

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage (available but not currently used)

### Third-Party UI Libraries
- **Radix UI**: Primitives for accessible UI components
- **Embla Carousel**: Carousel functionality
- **Lucide React**: Icon library
- **Google Fonts**: Playfair Display (display) and Lato (body) fonts

### Development Tools
- **Vite**: Development server with HMR
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner (Replit-specific)

### Key NPM Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run db:push`: Push schema changes to database