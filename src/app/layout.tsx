import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import {AppHeaderWithSession} from "@/components/app-header/indexWithSession";
import Footer from "@/components/footer";
import '@/app/globals.css'

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <AppHeaderWithSession />
          {props.children}
          <Footer/>
        </ThemeProvider>
      </AppRouterCacheProvider>
      </body>
      </html>
  );
}