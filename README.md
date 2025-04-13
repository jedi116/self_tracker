# Kaizen: A Self-Improvement Application

Kaizen is a comprehensive self-improvement tool built with Next.js, designed to help users track and improve multiple aspects of their lives while drawing inspiration from Dragon Ball Z's transformative journey.

## Overview

Kaizen helps users track and improve various aspects of their lives:

- **Workout Tracking**: Monitor your physical training progress like a Saiyan warrior
- **Meditation**: Develop Ultra Instinct-like focus through spiritual practice
- **NoFap**: Build discipline and channel your energy toward positive transformation
- **Meal Management**: Fuel your training with proper nutrition
- **Finance Management**: Master your finances like Goku mastered Ki control
- **Goal Setting**: Achieve personal goals to unlock your next power level

## Technology Stack

- **Frontend**: Next.js 15.x with React 19
- **UI Framework**: Material UI 6.x with custom Dragon Ball Z theme
- **Styling**: Tailwind CSS with custom configurations
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth for secure user authentication
- **State Management**: React Context API
- **Testing**: Jest and React Testing Library
- **Animation**: Motion library for fluid UI transitions

## Project Structure

- `/src/app`: Main application pages and API routes (Next.js App Router)
- `/src/components`: Reusable React components
- `/src/context`: React context providers for state management
- `/src/service`: Backend service functions
- `/src/types`: TypeScript type definitions
- `/src/tests`: Unit and integration tests
- `/prisma`: Database schema and migrations
- `/public`: Static assets including Dragon Ball Z images

## Getting Started

### Development Environment

- To run locally use `npx yarn dev`
- Don't use prisma migrations since the migrations folder only contains initialization script
- The workflow for updating schema is:
  - add the sql script to migrations
  - run the script and update the schema
  - run `npx prisma db pull` to update the schema.prisma file.
  - run `npx prisma generate` to update the prisma api

### Testing

Run tests with:
```bash
yarn test           # Run all tests
yarn test:watch     # Run tests in watch mode
yarn test:coverage  # Run tests with coverage report
yarn sonar          # Run tests with coverage and SonarCloud analysis
```

### Code Quality

The project uses SonarCloud for continuous code quality analysis:

- **Static Code Analysis**: Identifies code smells, bugs, and vulnerabilities
- **Test Coverage**: Tracks unit test coverage metrics
- **Duplications**: Detects code duplication
- **Complexity Analysis**: Monitors code complexity

SonarCloud analysis runs automatically on pull requests and pushes to the main branches.

## Features

### Authentication
- NextAuth integration for secure user authentication
- Sign-in page with custom styling
- Authentication failure handling

### Dashboard
- Main dashboard with feature cards
- Navigation to different self-improvement areas
- Power level indicators for progress visualization

### Workout Tracking
- Create, view and update workouts
- Set and track workout goals
- Configure workout types
- View progress summaries

### UI Components
- Responsive app header with session integration
- Sidebar navigation with Dragon Ball Z themed styling
- Landing page with hero section and transformation journey
- Feature cards with power level indicators

## Task Tracking

The `/tasks` directory contains documentation of implemented features and development history:

- `TASKS.md` - Main index file with links to chronological task files
- Date-based files (e.g., `2024-04-13.md`) - Detailed breakdown of features by date

Refer to these files at the beginning of each development session to maintain context.

## Future Enhancements

- Complete implementation of placeholder features (Finances, Meals, Meditation, NoFap)
- Add more Dragon Ball Z transformations and power levels
- Implement statistics dashboard with achievement badges
- Add mobile app support with responsive design
- Implement social sharing features

![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/jedi116/self_tracker?labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit%20Reviews)
