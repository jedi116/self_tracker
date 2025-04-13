import React from 'react';
import { render, screen, fireEvent } from '../../utils/testUtils';
import Dashboard from '@/app/dashboard/page';
import { features } from '@/app/dashboard/features';
import { useAuthRedirect } from '@/hooks';

// Only mock what's absolutely necessary - dependencies, not the component
jest.mock('@/hooks', () => ({
  useAuthRedirect: jest.fn()
}));

// Mock motion for animations
jest.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>
  }
}));

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn()
  })
}));

describe('Dashboard Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useAuthRedirect as jest.Mock).mockReturnValue({
      session: { user: { name: 'Test User', image: '/test-image.jpg' } }
    });
  });

  it('renders the dashboard title', () => {
    render(<Dashboard />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('displays welcome message with user name', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Welcome, Test User!/)).toBeInTheDocument();
  });

  it('renders all feature cards from features array', () => {
    render(<Dashboard />);
    
    // Check each feature is rendered
    features.forEach(feature => {
      expect(screen.getByText(feature.title)).toBeInTheDocument();
      expect(screen.getByText(feature.description)).toBeInTheDocument();
    });
  });

  it('renders the quote section', () => {
    render(<Dashboard />);
    
    expect(screen.getByText('"Continuous improvement is better than delayed perfection."')).toBeInTheDocument();
    expect(screen.getByText('Track your progress daily for best results')).toBeInTheDocument();
  });
});