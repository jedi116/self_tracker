import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import { AppHeaderWithSession } from '@/components/app-header/indexWithSession';
import Footer from '@/components/footer';
import '@/app/globals.css';
import { AuthProvider } from '@/context/auth';
import { Box } from '@mui/material';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <AuthProvider>
              <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <AppHeaderWithSession />
                <Box sx={{ flexGrow: 1, overflow: 'auto' }}>{props.children}</Box>{' '}
                {/* Expands to fit content */}
                <Footer />
              </Box>
            </AuthProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
