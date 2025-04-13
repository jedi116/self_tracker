'use client';

import { Box, Typography, Paper, Divider, Stack } from '@mui/material';
import { pageStyles } from '@/app/shared/styles';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';

export default function MealsPage() {
  useAuthRedirect();

  return (
    <Box sx={pageStyles.container}>
      <Paper elevation={1} sx={pageStyles.headerPaper}>
        <Typography component="h1" variant="h4" sx={pageStyles.pageTitle}>
          Meal Planner
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Plan and track your meals for optimal nutrition and health.
        </Typography>
      </Paper>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
        <Box sx={{ width: { xs: '100%', md: '66.67%' } }}>
          <Paper elevation={1} sx={pageStyles.mainContent}>
            <Typography variant="h5" sx={pageStyles.subtitle}>
              Coming Soon
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              This feature is currently under development and will be available in a future update.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              The Meal Planner will allow you to:
            </Typography>
            <ul>
              <li>Create weekly meal plans</li>
              <li>Track calories and macronutrients</li>
              <li>Build a personalized recipe collection</li>
              <li>Generate shopping lists</li>
              <li>Monitor your nutritional goals</li>
            </ul>
          </Paper>
        </Box>

        <Box sx={{ width: { xs: '100%', md: '33.33%' } }}>
          <Paper elevation={1} sx={pageStyles.sideContent}>
            <Typography variant="h6" sx={pageStyles.subtitle}>
              Nutrition Tips
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              While waiting for the full feature, consider these basics:
            </Typography>
            <ul>
              <li>Prioritize whole, unprocessed foods</li>
              <li>Eat adequate protein for muscle recovery</li>
              <li>Stay hydrated throughout the day</li>
              <li>Include a variety of fruits and vegetables</li>
              <li>Plan meals ahead to avoid unhealthy choices</li>
            </ul>
            <Divider sx={pageStyles.divider} />
            <Typography variant="body2" sx={pageStyles.quoteText}>
              &quot;You can&apos;t train on an empty stomach! Proper nutrition is as important as
              proper training.&quot;
            </Typography>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
}
