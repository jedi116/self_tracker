'use client';

import { Box, Typography, Paper, Avatar, Stack, Divider, Button, Chip } from '@mui/material';
import { motion } from 'motion/react';
import { profileStyles } from './styles';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';

// Placeholder achievement data
const achievements = [
  {
    id: 1,
    title: 'First Workout',
    description: 'Completed your first workout',
    icon: '🏋️',
    unlockedAt: '2024-01-15',
  },
  {
    id: 2,
    title: '7-Day Streak',
    description: 'Worked out for 7 days in a row',
    icon: '🔥',
    unlockedAt: '2024-01-22',
  },
  {
    id: 3,
    title: 'Goal Crusher',
    description: 'Completed 5 workout goals',
    icon: '🏆',
    unlockedAt: '2024-02-05',
  },
  {
    id: 4,
    title: 'Iron Will',
    description: 'Maintained a 30-day streak',
    icon: '⚡',
    unlockedAt: null,
  },
  {
    id: 5,
    title: 'Balanced Lifestyle',
    description: 'Used all app features in one week',
    icon: '⚖️',
    unlockedAt: null,
  },
  {
    id: 6,
    title: 'True Master',
    description: '100 total workouts completed',
    icon: '👑',
    unlockedAt: null,
  },
  {
    id: 7,
    title: 'Kaizen Master',
    description: 'Used the app daily for one year',
    icon: '🌟',
    unlockedAt: null,
  },
];

export default function Profile() {
  const { session } = useAuthRedirect();

  // Get unlocked achievements
  const unlockedAchievements = achievements.filter(a => a.unlockedAt !== null);
  const achievementLevel = `Level ${unlockedAchievements.length + 1}`;

  return (
    <Box sx={profileStyles.container}>
      <Paper elevation={1} sx={profileStyles.headerPaper}>
        <Typography sx={profileStyles.headerTitle}>User Profile</Typography>
        <Typography sx={{...profileStyles.headerSubtitle, mb: 2}}>
          View and manage your personal information, achievements, and progress.
        </Typography>
      </Paper>

      <Stack direction="row" spacing={3} flexWrap={{ xs: 'wrap', md: 'nowrap' }}>
        {/* User Profile Card */}
        <Box sx={{ width: { xs: '100%', md: '33.33%' } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Paper
              elevation={1}
              sx={{
                p: 3,
                borderRadius: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Avatar
                  src={session?.user?.image ?? ''}
                  alt={session?.user?.name ?? 'User'}
                  sx={{
                    width: 100,
                    height: 100,
                    border: '3px solid',
                    borderColor: 'primary.main',
                    mb: 1,
                  }}
                />
              </Box>

              <Typography variant="h5" sx={{ mb: 1 }}>
                {session?.user?.name ?? 'User'}
              </Typography>

              <Chip label={achievementLevel} color="primary" sx={{ mb: 3 }} />

              <Box sx={{ width: '100%', mb: 3 }}>
                <Typography
                  variant="body2"
                  sx={{ mb: 1, display: 'flex', justifyContent: 'space-between' }}
                >
                  <span>Progress:</span>{' '}
                  <span>
                    {unlockedAchievements.length} / {achievements.length}
                  </span>
                </Typography>
                <Box
                  sx={{
                    width: '100%',
                    height: '6px',
                    bgcolor: 'rgba(0,0,0,0.1)',
                    borderRadius: '3px',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: `${Math.min((unlockedAchievements.length / achievements.length) * 100, 100)}%`,
                      bgcolor: 'primary.main',
                      borderRadius: '3px',
                    }}
                  />
                </Box>
              </Box>

              <Divider sx={{ width: '100%', mb: 3 }} />

              <Box sx={{ width: '100%', mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Email: {session?.user?.email ?? 'user@example.com'}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Joined: January 1, 2024
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Achievements: {unlockedAchievements.length} / {achievements.length}
                </Typography>
              </Box>

              <Button variant="contained" fullWidth sx={{ mt: 'auto' }}>
                Edit Profile
              </Button>
            </Paper>
          </motion.div>
        </Box>

        {/* Achievements Section */}
        <Box sx={{ width: { xs: '100%', md: '66.67%' } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Paper
              elevation={1}
              sx={{
                p: 3,
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" sx={{ mb: 3 }}>
                Achievements
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {achievements.map((achievement, index) => (
                  <Box
                    key={achievement.id}
                    sx={{
                      width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.33% - 11px)' },
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Paper
                        elevation={1}
                        variant="outlined"
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          bgcolor: achievement.unlockedAt
                            ? 'rgba(25, 118, 210, 0.05)'
                            : 'transparent',
                          borderColor: achievement.unlockedAt ? 'primary.main' : 'divider',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          opacity: achievement.unlockedAt ? 1 : 0.6,
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            bgcolor: achievement.unlockedAt
                              ? 'primary.main'
                              : 'action.disabledBackground',
                            color: achievement.unlockedAt ? 'white' : 'text.disabled',
                            fontSize: '1.5rem',
                            mb: 2,
                          }}
                        >
                          {achievement.unlockedAt ? achievement.icon : '?'}
                        </Box>

                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 'medium',
                            textAlign: 'center',
                            mb: 1,
                            color: achievement.unlockedAt ? 'text.primary' : 'text.disabled',
                          }}
                        >
                          {achievement.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            textAlign: 'center',
                            mb: 2,
                            flexGrow: 1,
                          }}
                        >
                          {achievement.description}
                        </Typography>

                        {achievement.unlockedAt && (
                          <Typography variant="caption" color="primary" sx={{ mt: 'auto' }}>
                            Unlocked: {achievement.unlockedAt}
                          </Typography>
                        )}
                      </Paper>
                    </motion.div>
                  </Box>
                ))}
              </Box>
            </Paper>
          </motion.div>
        </Box>
      </Stack>

      {/* Stats Section */}
      <Box sx={{ width: '100%', mt: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Paper
            elevation={1}
            sx={{
              p: 3,
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" sx={{ mb: 3 }}>
              Activity Summary
            </Typography>

            <Stack
              direction="row"
              spacing={3}
              flexWrap={{ xs: 'wrap', md: 'nowrap' }}
              sx={{ mb: 3 }}
            >
              <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 'calc(50% - 12px)', md: '25%' } }}>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="h2" color="primary.main" sx={{ mb: 1 }}>
                    12
                  </Typography>
                  <Typography variant="body1">Workouts Completed</Typography>
                </Box>
              </Box>
              <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 'calc(50% - 12px)', md: '25%' } }}>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="h2" color="primary.main" sx={{ mb: 1 }}>
                    3
                  </Typography>
                  <Typography variant="body1">Meditation Sessions</Typography>
                </Box>
              </Box>
              <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 'calc(50% - 12px)', md: '25%' } }}>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="h2" color="primary.main" sx={{ mb: 1 }}>
                    7
                  </Typography>
                  <Typography variant="body1">Days Streak</Typography>
                </Box>
              </Box>
              <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 'calc(50% - 12px)', md: '25%' } }}>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="h2" color="primary.main" sx={{ mb: 1 }}>
                    5
                  </Typography>
                  <Typography variant="body1">Goals Completed</Typography>
                </Box>
              </Box>
            </Stack>

            <Divider sx={{ my: 3 }} />

            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                "Continuous improvement is better than delayed perfection."
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Keep pushing your limits, {session?.user?.name?.split(' ')[0] ?? 'User'}!
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </Box>
  );
}
