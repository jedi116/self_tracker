'use client';
import { Box, Typography, Stack, Paper } from '@mui/material';
import { useAuthRedirect } from '@/hooks';
import { dashboardStyles } from './styles';
import FeatureCard from './featureCard';
import { features } from './features';

export default function Dashboard() {
  const { session } = useAuthRedirect();
  return (
    <Box sx={dashboardStyles.container}>
      <Paper elevation={1} sx={dashboardStyles.headerPaper}>
        <Typography sx={dashboardStyles.headerTitle}>Dashboard</Typography>
        <Typography sx={dashboardStyles.headerSubtitle}>
          Welcome, {session?.user?.name ?? 'User'}! Track your progress in all aspects of your life.
        </Typography>
      </Paper>

      <Stack direction="row" flexWrap="wrap" spacing={3} sx={dashboardStyles.featuresGrid}>
        {features.map((feature) => (
          <Box key={feature.title} sx={dashboardStyles.featureGridChild}>
            <FeatureCard
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              route={feature.route}
              powerLevel={feature.powerLevel}
            />
          </Box>
        ))}
      </Stack>

      <Paper elevation={1} sx={dashboardStyles.quoteContainer}>
        <Typography sx={dashboardStyles.quoteText}>
          &quot;Continuous improvement is better than delayed perfection.&quot;
        </Typography>
        <Typography sx={dashboardStyles.quoteSubtext}>
          Track your progress daily for best results
        </Typography>
      </Paper>
    </Box>
  );
}
