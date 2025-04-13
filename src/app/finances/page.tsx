'use client';
import { Box, Typography, Paper, Divider, Stack } from '@mui/material';
import { useAuthRedirect } from '@/hooks';
import { pageStyles } from '@/app/shared/styles';

export default function FinancesPage() {
  useAuthRedirect();

  return (
    <Box sx={pageStyles.container}>
      <Paper elevation={1} sx={pageStyles.headerPaper}>
        <Typography component="h1" variant="h4" sx={pageStyles.pageTitle}>
          Finance Manager
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Track your expenses, manage your budget, and build wealth.
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
              The Finance Manager will help you:
            </Typography>
            <ul>
              <li>Track income and expenses</li>
              <li>Create and manage budgets</li>
              <li>Set financial goals and savings targets</li>
              <li>Monitor investments and net worth</li>
              <li>Generate financial reports and insights</li>
            </ul>
          </Paper>
        </Box>

        <Box sx={{ width: { xs: '100%', md: '33.33%' } }}>
          <Paper elevation={1} sx={pageStyles.sideContent}>
            <Typography variant="h6" sx={pageStyles.subtitle}>
              Financial Tips
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              While waiting for the full feature, consider these basics:
            </Typography>
            <ul>
              <li>Follow the 50/30/20 rule (needs/wants/savings)</li>
              <li>Build an emergency fund (3-6 months expenses)</li>
              <li>Pay off high-interest debt first</li>
              <li>Automate your savings and investments</li>
              <li>Review your spending regularly</li>
            </ul>
            <Divider sx={pageStyles.divider} />
            <Typography variant="body2" sx={pageStyles.quoteText}>
              &quot;Wealth is not about having money, it&apos;s about having options. Master your
              finances to master your destiny.&quot;
            </Typography>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
}
