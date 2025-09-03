# Overview

This is a personal portfolio website for Adarsh Dubey, a Full Stack Developer and first-year Integrated MSc Mathematics student. The portfolio showcases his projects, skills, and experience using modern web technologies. The website features a professional dark-themed design with smooth animations and a contact form for potential collaborations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built with **React 18** using **TypeScript** for type safety. The application uses a component-based architecture with the following key decisions:

- **Vite** as the build tool for fast development and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router
- **Tailwind CSS** with custom design tokens for consistent styling and theming
- **Framer Motion** for smooth animations and micro-interactions
- **shadcn/ui** component library for professional UI components
- **TanStack Query** for efficient state management and API calls

The project follows a modular structure with components organized by feature:
- Page components handle route-level logic
- UI components provide reusable design elements
- Section components organize content areas (hero, about, projects, etc.)

## Backend Architecture

The backend uses **Express.js** with TypeScript running on Node.js:

- **Express server** handles API routes and serves the React application
- **In-memory storage** with interfaces designed for easy database migration
- **Zod schemas** for request validation and type safety
- **CORS and security middleware** for production readiness

The server architecture supports both development (with Vite integration) and production deployment patterns.

## Data Storage Solutions

Currently implements an **in-memory storage system** with a well-defined interface:

- **IStorage interface** abstracts data operations for easy swapping
- **MemStorage implementation** provides development functionality
- **Prepared for PostgreSQL** migration using Drizzle ORM
- **Database schemas** already defined for users and contact messages

## Authentication and Authorization

The system includes foundational user management:

- **User schema** with username/password authentication ready
- **Session management** prepared with connect-pg-simple
- **No current authentication flow** - focused on portfolio content

## External Dependencies

- **Neon Database** (@neondatabase/serverless) - Serverless PostgreSQL for production
- **Drizzle ORM** - Type-safe database operations and migrations
- **Radix UI** - Headless component primitives for accessibility
- **React Hook Form** - Form state management and validation
- **date-fns** - Date utility functions
- **Lucide React** - Icon library
- **React Icons** - Additional icon sets for technology logos

## Development and Build Tools

- **TypeScript** with strict configuration for type safety
- **ESLint and Prettier** for code quality (implicit)
- **Vite plugins** for development experience and error handling
- **esbuild** for fast server-side bundling
- **PostCSS and Autoprefixer** for CSS processing

The architecture prioritizes type safety, performance, and developer experience while maintaining flexibility for future enhancements like authentication, database integration, and additional features.