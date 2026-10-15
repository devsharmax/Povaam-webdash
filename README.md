# Overview

This is a full-stack web application built with Express.js backend and React frontend, featuring a modern dashboard interface with data visualization capabilities. The application uses a monorepo structure with shared TypeScript schemas and includes 3D graphics support through React Three Fiber. It's configured for PostgreSQL database integration via Drizzle ORM and includes comprehensive UI components built with Radix UI and styled with Tailwind CSS.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development and building
- **UI Library**: Comprehensive component system using Radix UI primitives with custom styling
- **Styling**: Tailwind CSS with custom design tokens and dark mode support via CSS variables
- **3D Graphics**: React Three Fiber ecosystem (@react-three/fiber, @react-three/drei, @react-three/postprocessing) for 3D rendering capabilities
- **State Management**: Zustand stores for game state and audio management
- **Data Fetching**: TanStack Query (React Query) for server state management with custom API request utilities
- **Routing**: React Router v6 with nested layout structure
- **Build Tool**: Vite with GLSL shader support and custom asset handling for 3D models and audio files

## Backend Architecture
- **Framework**: Express.js with TypeScript in ESM format
- **Development**: Hot reloading with tsx and custom Vite integration for development mode
- **Error Handling**: Centralized error middleware with structured error responses
- **Logging**: Custom request logging middleware with response capture and duration tracking
- **Static Serving**: Development-time Vite middleware integration with production static file serving

## Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL with Neon Database serverless driver
- **Schema Management**: Shared TypeScript schemas between frontend and backend with Zod validation
- **Migrations**: Drizzle Kit for database migrations and schema synchronization
- **Development Storage**: In-memory storage implementation for development/testing with full CRUD interface
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

## Authentication & Authorization
- **Session-based**: Cookie-based sessions with PostgreSQL backing store
- **CRUD Interface**: Extensible storage interface for user management operations
- **Schema Validation**: Zod schemas for user input validation and type safety

## External Dependencies
- **Database**: PostgreSQL via Neon Database serverless (@neondatabase/serverless)
- **UI Components**: Radix UI component library for accessible, unstyled primitives
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **3D Graphics**: Three.js ecosystem through React Three Fiber
- **Development**: Replit-specific tooling including runtime error overlay plugin
- **Fonts**: Inter font family via Fontsource
- **Utilities**: Class variance authority for component variants, clsx for conditional classes, date-fns for date manipulation
