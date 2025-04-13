import React from 'react';
import { render, screen, fireEvent } from '../../utils/testUtils';
import FeatureCard from '@/app/dashboard/featureCard';
import { useRouter } from 'next/navigation';

// Only mock the dependencies, not the component itself
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn()
  }))
}));

// Mock motion library for animations
jest.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>
  }
}));

describe('FeatureCard Component', () => {
  const mockProps = {
    title: 'Test Feature',
    description: 'Test Description',
    icon: '💪',
    route: '/test-route',
    powerLevel: 3
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the feature title and description', () => {
    render(<FeatureCard {...mockProps} />);
    
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  it('displays the icon', () => {
    render(<FeatureCard {...mockProps} />);
    
    expect(screen.getByText(mockProps.icon)).toBeInTheDocument();
  });

  it('shows development priority label', () => {
    render(<FeatureCard {...mockProps} />);
    
    expect(screen.getByText('Development Priority')).toBeInTheDocument();
  });

  it('navigates to the correct route when clicked', () => {
    const mockRouter = { push: jest.fn() };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    
    render(<FeatureCard {...mockProps} />);
    
    // Find and click the clickable element
    const card = screen.getByRole('button');
    fireEvent.click(card);
    
    expect(mockRouter.push).toHaveBeenCalledWith(mockProps.route);
  });
});