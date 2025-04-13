import React from 'react';
import { render, screen, fireEvent } from '../../utils/testUtils';
import HeroSection from '@/components/landing/heroSection';

// Only mock next/image as it's not available in the test environment
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height }: any) => (
    <img src={src} alt={alt} width={width} height={height} />
  ),
}));

describe('HeroSection Component', () => {
  const mockProps = {
    name: 'Test Hero',
    image: '/test-image.jpg' as any, // Cast to any to satisfy StaticImageData type
  };

  it('renders the hero image with correct props', () => {
    render(<HeroSection {...mockProps} />);

    // Find the image
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProps.image);
    expect(image).toHaveAttribute('alt', mockProps.name);
  });

  it('renders the hero name as heading', () => {
    render(<HeroSection {...mockProps} />);

    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
  });
});
