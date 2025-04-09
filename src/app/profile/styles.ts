export const profileStyles = {
  container: {
    height: 'auto',
    minHeight: '90vh',
    p: 4,
  },
  headerPaper: {
    p: 4,
    borderRadius: 2,
    mb: 4,
    backgroundColor: 'rgba(0, 41, 54, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  headerTitle: {
    mb: 1,
    fontSize: '2rem',
    fontFamily: 'SaiyanFont, sans-serif',
    color: '#fff',
    textShadow: '2px 2px 0 #003d4d',
  },
  headerSubtitle: {
    fontFamily: 'SaiyanFont, sans-serif',
    color: 'rgba(255,255,255,0.7)',
    fontSize: '1.1rem',
  },
  profileCard: {
    p: 3,
    borderRadius: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    border: '3px solid',
    borderColor: 'primary.main',
    mb: 1,
  },
  avatarContainer: {
    mb: 2,
  },
  username: {
    mb: 1,
  },
  levelChip: {
    mb: 3,
  },
  progressContainer: {
    width: '100%',
    mb: 3,
  },
  progressText: {
    mb: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  progressTrack: {
    width: '100%',
    height: '6px',
    bgcolor: 'rgba(0,0,0,0.1)',
    borderRadius: '3px',
    overflow: 'hidden',
    position: 'relative',
  },
  progressBar: (progress: number) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: `${Math.min(progress * 100, 100)}%`,
    bgcolor: 'primary.main',
    borderRadius: '3px',
  }),
  divider: {
    width: '100%',
    mb: 3,
  },
  userInfoContainer: {
    width: '100%',
    mb: 2,
  },
  userInfoText: {
    mb: 1,
  },
  editProfileBtn: {
    mt: 'auto',
  },
  achievementsSection: {
    p: 3,
    borderRadius: 2,
  },
  achievementTitle: {
    mb: 3,
  },
  achievementCard: (unlocked: boolean) => ({
    p: 2,
    borderRadius: 2,
    bgcolor: unlocked ? 'rgba(25, 118, 210, 0.05)' : 'transparent',
    borderColor: unlocked ? 'primary.main' : 'divider',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: unlocked ? 1 : 0.6,
    transition: 'all 0.3s ease',
  }),
  achievementIcon: (unlocked: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: '50%',
    bgcolor: unlocked ? 'primary.main' : 'action.disabledBackground',
    color: unlocked ? 'white' : 'text.disabled',
    fontSize: '1.5rem',
    mb: 2,
  }),
  achievementCardTitle: (unlocked: boolean) => ({
    fontWeight: 'medium',
    textAlign: 'center',
    mb: 1,
    color: unlocked ? 'text.primary' : 'text.disabled',
  }),
  achievementDescription: {
    textAlign: 'center',
    mb: 2,
    flexGrow: 1,
  },
  achievementDate: {
    mt: 'auto',
  },
  statsSection: {
    p: 3,
    borderRadius: 2,
  },
  statsTitle: {
    mb: 3,
  },
  statItem: {
    textAlign: 'center',
    p: 2,
  },
  statNumber: {
    mb: 1,
  },
  quoteDivider: {
    my: 3,
  },
  quoteContainer: {
    textAlign: 'center',
  },
  quoteText: {
    fontStyle: 'italic',
  },
  quoteAttribution: {
    mt: 1,
  },
};
