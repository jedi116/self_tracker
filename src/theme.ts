'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: {
      main: '#65b8cb',
      dark: '#003d4d',
      light: '#83d0e2',
    },
    secondary: {
      main: '#003d4d',
      dark: '#002936',
      light: '#00526a',
    },
    background: {
      default: '#001f26',
      paper: '#002936',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Default font family for other elements
    h1: {
      fontFamily: 'SaiyanFont', // Apply SaiyanFont to H1
    },
    h2: {
      fontFamily: 'SaiyanFont', // Apply SaiyanFont to H2
    },
    h3: {
      fontFamily: 'SaiyanFont', // Apply SaiyanFont to H3
    },
    h4: {
      fontFamily: 'SaiyanFont', // Apply SaiyanFont to H4
    },
    h5: {
      fontFamily: 'SaiyanFont', // Apply SaiyanFont to H4
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined', // Ensure the default variant is outlined
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          transform: 'translate(15px, 19zpx) scale(1)', // Adjust label for unfocused state
          '&.MuiInputLabel-shrink': {
            transform: 'translate(12px, -6px) scale(0.75)', // Adjust label for focused state
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#003d4d', // Default background color
          color: 'white', // Default text color
          padding: '10px 20px',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#00526a',
          },
        },
      },
    },
  },
});

export default theme;
