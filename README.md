# User Management System

A modern user management system built with Next.js, Shadcn, TanStack Query, and TanStack Table.

## Features

- Data fetching with TanStack Query
- Sortable columns
- Global search functionality
- Pagination with URL sync
- Responsive design
- Loading states and error handling
- Dark mode support

## Tech Stack

- Next.js
- Shadcn/UI
- TanStack Query
- TanStack Table
- TypeScript
- Tailwind CSS

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/app` - Next.js app router pages
- `/components` - React components
- `/lib` - Utility functions and types
- `/public` - Static assets

## Development Approach

1. **Architecture**: Used Next.js with App Router for modern React features and optimal performance
2. **Data Management**: Implemented TanStack Query for efficient data fetching and caching
3. **UI Components**: Utilized Shadcn/UI for a consistent and beautiful design system
4. **Table Management**: Integrated TanStack Table for advanced table features
5. **Type Safety**: Leveraged TypeScript for better development experience and code quality

## Challenges and Solutions

1. **State Management**: Implemented URL-based state management for pagination to enable sharing and bookmarking
2. **Performance**: Utilized TanStack Query's caching capabilities to minimize API calls
3. **Responsive Design**: Created a mobile-friendly layout using Tailwind CSS
4. **Type Safety**: Developed comprehensive TypeScript interfaces for API responses

## Future Improvements

1. Add more advanced filtering options
2. Implement server-side pagination
3. Add user details view
4. Implement data export functionality
5. Add more interactive features like row selection