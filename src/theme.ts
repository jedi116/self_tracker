'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    cssVariables: true,
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: `SaiyanFont` , // , ${roboto.style.fontFamily}
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
                    backgroundColor: 'blue', // Default background color
                    color: 'white', // Default text color
                    padding: '10px 20px',
                    borderRadius: '8px',
                    '&:hover': {
                        backgroundColor: 'darkblue',
                    },
                },
            },
        },
    },
});

export default theme;