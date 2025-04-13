import React from 'react';
import { render, screen, fireEvent } from '../utils/testUtils';
import { useRouter } from 'next/navigation';
import { useAuthSession } from '@/context/auth';
import Home from '@/app/page';

// Mock dependencies that the Home component uses, not the component itself
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/context/auth', () => ({
  useAuthSession: jest.fn(),
}));

// Mock the next-auth/react module
jest.mock('next-auth/react', () => ({
  signOut: jest.fn(),
}));

// Mock next/image for tests
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height, ...props }: any) => (
    <img src={src} alt={alt} width={width || 100} height={height || 100} {...props} />
  ),
}));

// Mock motion/react for animations
jest.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('Home Page', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useAuthSession as jest.Mock).mockReturnValue({ session: null });
  });

  it('renders the landing page title and description', () => {
    render(<Home />);

    expect(screen.getByText('Level Up Your Life')).toBeInTheDocument();
    expect(
      screen.getByText('The ultimate self-improvement tool to transform like a Saiyan warrior')
    ).toBeInTheDocument();
  });

  it('renders the transformation button for non-authenticated users', () => {
    render(<Home />);

    const button = screen.getByText('Begin Your Transformation');
    expect(button).toBeInTheDocument();

    // Test button click navigation
    fireEvent.click(button);
    expect(mockPush).toHaveBeenCalledWith('/auth/signin');
  });

  it('renders dashboard button for authenticated users', () => {
    // Mock authenticated session
    (useAuthSession as jest.Mock).mockReturnValue({
      session: { user: { name: 'Test User', image: '/test-image.jpg' } },
    });

    render(<Home />);

    const button = screen.queryAllByText('Go to Dashboard');
    expect(button[0]).toBeInTheDocument();

    // Test button click navigation
    fireEvent.click(button[0]);
    expect(mockPush).toHaveBeenCalledWith('/dashboard');
  });

  it('renders features section', () => {
    render(<Home />);

    expect(screen.getByText('Master All Aspects of Life')).toBeInTheDocument();
    expect(screen.getByText('Workout Tracker')).toBeInTheDocument();
    expect(screen.getByText('Spiritual Growth')).toBeInTheDocument();
    expect(screen.getByText('NoFap Tracker')).toBeInTheDocument();
    expect(screen.getByText('Meal Management')).toBeInTheDocument();
    expect(screen.getByText('Money Management')).toBeInTheDocument();
    expect(screen.getByText('Self-Improvement Goals')).toBeInTheDocument();
  });

  it('renders transformation section with forms', () => {
    render(<Home />);

    // Check for the Super Saiyan form title
    expect(screen.getByText('Super Saiyan')).toBeInTheDocument();

    // Check description is present
    expect(screen.getByText(/The first transformation/)).toBeInTheDocument();
  });
});
