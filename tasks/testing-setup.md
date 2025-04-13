# Testing Setup (2025-04-13)

## Jest and React Testing Library Integration

### Configuration Files

- `jest.config.ts` - Main Jest configuration with Next.js integration
- `jest/setup.ts` - Setup file for Jest globals and extensions
- `jest/__mocks__/fileMock.ts` - Mock for file imports
- `src/tests/utils/testUtils.tsx` - Custom render function with session provider

### Test Structure

- Tests are organized in `src/tests` directory
- Mirror structure of source code directories
- Example: `src/app/page.tsx` → `src/tests/app/page.test.tsx`

### Implemented Tests

- Landing page tests (`src/tests/app/page.test.tsx`)

  - Verifies title, description, and button rendering
  - Checks navigation behavior
  - Tests feature section rendering
  - Validates transformation section

- Dashboard page tests (`src/tests/app/dashboard/page.test.tsx`)

  - Verifies dashboard title and welcome message
  - Tests feature card rendering
  - Checks quote rendering

- Hero section component tests (`src/tests/components/landing/heroSection.test.tsx`)

  - Tests image rendering with correct props
  - Verifies heading text
  - Checks CSS class application

- Feature card component tests (`src/tests/app/dashboard/featureCard.test.tsx`)
  - Tests card rendering with title and description
  - Validates navigation when clicked
  - Checks power level display

### Running Tests

- `yarn test` - Run all tests
- `yarn test:watch` - Run tests in watch mode

### Mock Implementation

- Session data mock for authenticated user testing
- Navigation hooks mocked with jest.fn()
- Image components mocked for simplified testing
- Animation components (motion) mocked to prevent test issues

## Future Testing Improvements

- Add tests for all major components
- Implement API route testing
- Add integration tests for workflows
- Add end-to-end tests with Cypress or Playwright
