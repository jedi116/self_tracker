'use client';

import { Box, Typography, Paper, Divider, Stack } from '@mui/material';
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
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Build inner strength and channel your energy toward positive transformation.
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
        </Box>

        <Box sx={{ width: { xs: '100%', md: '33.33%' } }}>
          <Paper elevation={1} sx={pageStyles.sideContent}>
            <Typography variant="h6" sx={pageStyles.subtitle}>
              Benefits of NoFap
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
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
        </Box>
      </Stack>
    </Box>
  );
}
