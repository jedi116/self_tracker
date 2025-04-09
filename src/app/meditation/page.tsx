'use client';

import { Box, Typography, Paper, Divider, Grid } from '@mui/material';
import { pageStyles } from '@/app/shared/styles';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';

export default function MeditationPage() {
  useAuthRedirect();

  return (
    <Box sx={pageStyles.container}>
      <Paper elevation={1} sx={pageStyles.headerPaper}>
        <Typography component="h1" variant="h4" sx={pageStyles.pageTitle}>
          Meditation Tracker
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Track your meditation sessions, build mental clarity, and maintain focus.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper elevation={1} sx={pageStyles.mainContent}>
            <Typography variant="h5" sx={pageStyles.subtitle}>
              Coming Soon
            </Typography>
            <Typography variant="body1" paragraph>
              This feature is currently under development and will be available in a future update.
            </Typography>
            <Typography variant="body1" paragraph>
              The Meditation Tracker will allow you to:
            </Typography>
            <ul>
              <li>Record daily meditation sessions</li>
              <li>Track meditation duration and techniques</li>
              <li>Set goals for regular practice</li>
              <li>View progress and streaks</li>
              <li>Access guided meditation resources</li>
            </ul>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={1} sx={pageStyles.sideContent}>
            <Typography variant="h6" sx={pageStyles.subtitle}>
              Benefits of Meditation
            </Typography>
            <Typography variant="body2" paragraph>
              Regular meditation practice can help:
            </Typography>
            <ul>
              <li>Reduce stress and anxiety</li>
              <li>Improve concentration and focus</li>
              <li>Enhance self-awareness</li>
              <li>Promote emotional health</li>
              <li>Improve sleep quality</li>
            </ul>
            <Divider sx={pageStyles.divider} />
            <Typography variant="body2" sx={pageStyles.quoteText}>
              &quot;Meditation is not about stopping thoughts, but recognizing that we are more than
              our thoughts and our feelings.&quot;
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
