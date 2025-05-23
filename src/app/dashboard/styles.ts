export const dashboardStyles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    p: { xs: 2, sm: 4 },
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
    fontSize: '2.5rem',
    fontFamily: 'SaiyanFont, sans-serif',
    color: '#ffffff',
    textShadow: '2px 2px 0 #003d4d',
  },
  headerSubtitle: {
    mb: 2,
    fontSize: '1.2rem',
    fontFamily: 'SaiyanFont, sans-serif',
    color: 'rgba(255,255,255,0.7)',
  },
  featuresGrid: {
    flex: 1,
    mb: 4,
  },
  featureGridChild: {
    width: {
      xs: '100%',
      sm: '50%',
      md: '33.333%',
    },
  },
  quoteContainer: {
    p: 3,
    borderRadius: 2,
    mt: 4,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 41, 54, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  quoteText: {
    fontStyle: 'italic',
    fontSize: '1.3rem',
    fontFamily: 'SaiyanFont, sans-serif',
  },
  quoteSubtext: {
    display: 'block',
    mt: 1,
    fontSize: '1rem',
    fontFamily: 'SaiyanFont, sans-serif',
    color: 'rgba(255,255,255,0.7)',
  },
  // Feature Card Styles
  featureCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    overflow: 'hidden',
    bgcolor: 'rgba(0, 41, 54, 0.7)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 2,
  },
  featureCardAction: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    p: 2,
  },
  featureCardContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    p: 2,
  },
  featureHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 2,
  },
  featureTitle: {
    mb: 0,
    fontSize: '1.6rem',
    fontFamily: 'SaiyanFont, sans-serif',
  },
  featureIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 40,
    height: 40,
    borderRadius: '50%',
    bgcolor: '#65b8cb',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  featureDescription: {
    mb: 3,
    flexGrow: 1,
    fontSize: '1.15rem',
    lineHeight: 1.5,
    fontFamily: 'SaiyanFont, sans-serif',
    color: 'rgba(255,255,255,0.7)',
  },
  priorityContainer: {
    mt: 'auto',
  },
  priorityLabel: {
    display: 'block',
    mb: 1,
    fontSize: '0.95rem',
    fontFamily: 'SaiyanFont, sans-serif',
    color: 'rgba(255,255,255,0.6)',
  },
  priorityBar: {
    width: '100%',
    height: '4px',
    bgcolor: 'rgba(0,0,0,0.1)',
    borderRadius: '2px',
    overflow: 'hidden',
    position: 'relative',
  },
  priorityProgress: (powerLevel: number) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: `${powerLevel * 10}%`,
    bgcolor: '#65b8cb',
    borderRadius: '2px',
  }),
};
