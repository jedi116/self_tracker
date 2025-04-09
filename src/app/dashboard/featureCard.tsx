import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { dashboardStyles } from '@/app/dashboard/styles';

// Feature card component for each functionality
interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  route: string;
  powerLevel: number;
}

const FeatureCard = ({ title, description, icon, route, powerLevel }: FeatureCardProps) => {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card sx={dashboardStyles.featureCard}>
        <CardActionArea onClick={() => router.push(route)} sx={dashboardStyles.featureCardAction}>
          <CardContent sx={dashboardStyles.featureCardContent}>
            <Box sx={dashboardStyles.featureHeader}>
              <Typography sx={dashboardStyles.featureTitle}>{title}</Typography>
              <Box sx={dashboardStyles.featureIcon}>{icon}</Box>
            </Box>

            <Typography sx={dashboardStyles.featureDescription}>{description}</Typography>

            <Box sx={dashboardStyles.priorityContainer}>
              <Typography sx={dashboardStyles.priorityLabel}>Development Priority</Typography>
              <Box sx={dashboardStyles.priorityBar}>
                <Box sx={dashboardStyles.priorityProgress(powerLevel)} />
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
