import React from 'react';
import { render as rtlRender, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Custom render with proper setup for our components
const render = (ui: React.ReactElement) => {
  return {
    ...rtlRender(ui),
    user: userEvent.setup(),
  };
};

// Export all necessary testing utilities
export { screen, render, fireEvent };
