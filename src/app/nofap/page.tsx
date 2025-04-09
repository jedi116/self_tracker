'use client';

import { Box, Typography, Paper, Divider, Grid } from '@mui/material';
import { pageStyles } from '@/app/shared/styles';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';

export default function NoFapPage() {
  useAuthRedirect();

  return (
    <Box sx={pageStyles.container}>
      <Paper elevation={1} sx={pageStyles.headerPaper}>
        <Typography component="h1" variant="h4" sx={pageStyles.pageTitle}>
          NoFap Tracker
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Build inner strength and channel your energy toward positive transformation.
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
              The NoFap Tracker will help you:
            </Typography>
            <ul>
              <li>Track your daily progress and streaks</li>
              <li>Set personal goals and challenges</li>
              <li>Access motivational resources</li>
              <li>Monitor mood and energy changes</li>
              <li>Join a supportive community</li>
            </ul>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={1} sx={pageStyles.sideContent}>
            <Typography variant="h6" sx={pageStyles.subtitle}>
              Benefits of NoFap
            </Typography>
            <Typography variant="body2" paragraph>
              Many practitioners report benefits such as:
            </Typography>
            <ul>
              <li>Increased energy and motivation</li>
              <li>Improved focus and clarity</li>
              <li>Reduced anxiety and depression</li>
              <li>Better self-control and discipline</li>
              <li>More productive use of time</li>
            </ul>
            <Divider sx={pageStyles.divider} />
            <Typography variant="body2" sx={pageStyles.quoteText}>
              &quot;True power comes from self-control and discipline. Mastering yourself is the
              first step to mastering your potential.&quot;
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
