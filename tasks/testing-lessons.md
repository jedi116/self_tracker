# Testing Best Practices and Lessons Learned

## Issues Identified

1. **Testing Mock Components Instead of Real Ones**
   - Initially created fake/mock components to pass tests
   - This approach doesn't test the actual code and defeats the purpose of unit tests
   - Unit tests should verify the real components work as expected

2. **Excessive Mocking**
   - Mocked too many dependencies including Material UI components
   - Excessive mocking creates tests that don't reflect real-world behavior
   - Tests should use the actual components whenever possible

3. **Mocking the Component Under Test**
   - Repeatedly mocked the actual component being tested
   - This defeats the entire purpose of unit testing
   - Should only mock dependencies, never the component being tested

4. **Not Verifying Syntax Correctness**
   - Failed to check for basic syntax errors in test files
   - Extra closing brackets and syntax issues prevented tests from running
   - Always verify tests actually compile and run

5. **Looking for Shortcuts**
   - Attempted to find quick fixes rather than understanding the root problem
   - Created workarounds that didn't properly test the actual components

6. **Failing to Import FireEvent Consistently**
   - Forgot to import fireEvent in some test files
   - Inconsistent imports across test files

## The Correct Approach to Testing React Components

1. **Test Actual Components, Never Mock Them**
   - Always test the real component, never create fake/mock versions
   - Import the component directly: `import Component from '@/path/to/component'`
   - Use the real component in tests: `render(<Component {...props} />)`

2. **Only Mock Dependencies, Never Components**
   - Mock hooks, navigation, auth, API calls, etc.
   - Mock next/image (required for Next.js)
   - Mock animation libraries
   - Example:
   ```javascript
   // Mock dependencies
   jest.mock('next/navigation', () => ({
     useRouter: jest.fn()
   }));
   
   jest.mock('@/context/auth', () => ({
     useAuthSession: jest.fn()
   }));
   
   // Test the actual component
   import MyComponent from '@/components/MyComponent';
   
   it('tests the real component', () => {
     render(<MyComponent />);
     // Assertions...
   });
   ```

3. **Properly Set Up Auth State for Testing**
   - Mock auth hooks to provide both authenticated and unauthenticated states
   - Test component behavior in both states
   - Example:
   ```javascript
   // Test unauthenticated state
   (useAuthSession as jest.Mock).mockReturnValue({ session: null });
   render(<Component />);
   expect(screen.getByText('Sign In')).toBeInTheDocument();
   
   // Test authenticated state
   (useAuthSession as jest.Mock).mockReturnValue({
     session: { user: { name: 'Test User' } }
   });
   render(<Component />);
   expect(screen.getByText('Dashboard')).toBeInTheDocument();
   ```

4. **Test User Interactions and State Changes**
   - Use fireEvent to simulate user interactions
   - Verify state changes and UI updates
   - Example:
   ```javascript
   const button = screen.getByText('Click Me');
   fireEvent.click(button);
   expect(mockFunction).toHaveBeenCalled();
   ```

5. **Handle Next.js-Specific Components**
   - Mock next/image which doesn't work in test environment
   - Mock other Next.js components as needed
   - Example:
   ```javascript
   jest.mock('next/image', () => ({
     __esModule: true,
     default: ({ src, alt, width, height, ...props }) => (
       <img src={src} alt={alt} width={width} height={height} {...props} />
     )
   }));
   ```

## Setup Test Utilities Properly

```javascript
// src/tests/utils/testUtils.tsx
import React from 'react';
import { render as rtlRender, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Custom render with proper setup for our components
const render = (ui: React.ReactElement) => {
  return {
    ...rtlRender(ui),
    user: userEvent.setup()
  };
};

// Export all necessary testing utilities
export { screen, render, fireEvent };
```

## Example of Proper Component Test

```javascript
import React from 'react';
import { render, screen, fireEvent } from '../utils/testUtils';
import Home from '@/app/page';  // Import the actual component
import { useRouter } from 'next/navigation';
import { useAuthSession } from '@/context/auth';

// Mock dependencies only
jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));

jest.mock('@/context/auth', () => ({
  useAuthSession: jest.fn()
}));

// Mock external dependencies that don't work in test environment
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height, ...props }) => (
    <img src={src} alt={alt} width={width} height={height} {...props} />
  )
}));

jest.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>
  },
  AnimatePresence: ({ children }) => <>{children}</>
}));

describe('Home Page', () => {
  const mockPush = jest.fn();
  
  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useAuthSession as jest.Mock).mockReturnValue({ session: null });
  });

  it('renders correctly for unauthenticated users', () => {
    render(<Home />);
    
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    
    const button = screen.getByText('Sign In');
    fireEvent.click(button);
    expect(mockPush).toHaveBeenCalledWith('/auth/signin');
  });

  it('renders correctly for authenticated users', () => {
    (useAuthSession as jest.Mock).mockReturnValue({
      session: { user: { name: 'Test User' } }
    });
    
    render(<Home />);
    
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});
```

## Common Mistakes to Avoid

1. **Never mock the component under test**
   - Always test the actual component
   - Only mock dependencies, never the component itself

2. **Don't create fake versions of components**
   - Testing fake components provides zero value
   - If you're testing a fake version, you're not testing your actual code

3. **Don't use excessive mocks**
   - Only mock what's absolutely necessary
   - Document why each mock is needed

4. **Avoid testing implementation details**
   - Focus on behavior, not implementation
   - Test from the user's perspective
   - Test what the component does, not how it does it

5. **Always include fireEvent in imports**
   - Import fireEvent consistently in all test files
   - Use it to test user interactions

6. **Verify your tests run**
   - Check for syntax errors
   - Run tests to ensure they pass
   - Don't just assume your changes work

Remember: The purpose of unit tests is to verify that your actual components work as expected. Tests should give confidence that the real components will work correctly for users.