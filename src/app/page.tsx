'use client';
import { Box, Button, Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import SuperSaiyan from '@/../public/Super_Saiyan_1.png';
import SuperSaiyan2 from '@/../public/Super_Saiyan_2.png';
import SuperSaiyan3 from '@/../public/Super_Saiyan_3.png';
import SuperSaiyan4 from '@/../public/Super_Saiyan_4.png';
import SuperSaiyanGod from '@/../public/Super_Saiyan_god.png';
import SuperSaiyanBlue from '@/../public/Goku-Super-Saiyan-Blue.png';
import MasteredUltraInstinct from '@/../public/mastered-ultra-instinct.png';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { useAuthSession } from '@/context/auth';
import { signOut } from 'next-auth/react';

export default function Home() {
  const router = useRouter();
  const [currentForm, setCurrentForm] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { session } = useAuthSession();

  // Define actual app features with Dragon Ball Z theme
  const features = [
    {
      title: 'Workout Tracker',
      description: 'Track your physical training progress and power up like a true Saiyan warrior',
    },
    {
      title: 'Spiritual Growth',
      description: 'Meditate and improve your mental clarity to achieve Ultra Instinct-like focus',
    },
    {
      title: 'NoFap Tracker',
      description: 'Build inner strength and channel your energy toward positive transformation',
    },
    {
      title: 'Meal Management',
      description: 'Fuel your training with proper nutrition, worthy of a Saiyan appetite',
    },
    {
      title: 'Money Management',
      description: 'Master your finances like Goku mastered Ki control',
    },
    {
      title: 'Self-Improvement Goals',
      description: 'Set and achieve personal goals to unlock your next power level',
    },
  ];

  // Hardcoded forms to prevent any potential undefined errors
  const forms = [
    {
      id: 1,
      title: 'Super Saiyan',
      image: SuperSaiyan,
      description:
        'The first transformation, unleashing 50x base power. Begin your self-improvement journey by building healthy habits and tracking your workouts.',
    },
    {
      id: 2,
      title: 'Super Saiyan 2',
      image: SuperSaiyan2,
      description:
        'Double the power of Super Saiyan. Achieve this form by maintaining discipline with your NoFap and spiritual growth practices.',
    },
    {
      id: 3,
      title: 'Super Saiyan 3',
      image: SuperSaiyan3,
      description:
        'Four times stronger than Super Saiyan 2. Reach this level through consistency in your meal planning and workout routines.',
    },
    {
      id: 4,
      title: 'Super Saiyan 4',
      image: SuperSaiyan4,
      description:
        'A different evolution path combining power with primal instinct. Unlocked when you overcome financial challenges and build wealth.',
    },
    {
      id: 5,
      title: 'Super Saiyan God',
      image: SuperSaiyanGod,
      description:
        'Divine power beyond mortal limits. Your transformation when mastering work-life balance and spiritual growth milestones.',
    },
    {
      id: 6,
      title: 'Super Saiyan Blue',
      image: SuperSaiyanBlue,
      description:
        'Perfect ki control with godly power. The form you take when all aspects of self-improvement work in harmony.',
    },
    {
      id: 7,
      title: 'Ultra Instinct',
      image: MasteredUltraInstinct,
      description:
        'The ultimate state where movement happens without thinking. The pinnacle of your self-improvement journey with perfect balance in all areas of life.',
    },
  ];

  // Auto transition with smooth animation
  useEffect(() => {
    const timer = setInterval(() => {
      // Smooth transition to next form
      setCurrentForm(prev => (prev + 1) % forms.length);
    }, 5000); // Change every 5 seconds

    return () => {
      clearInterval(timer);
    };
  }, []);

  // User menu handlers
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    setAnchorEl(null);
    router.push('/profile');
  };

  // Scroll to section functions
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentFormData = forms[currentForm] || forms[0];

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        overflow: 'visible',
        // Goku-themed colors - blue and orange color scheme
        background: 'linear-gradient(135deg, #002936 0%, #003d4d 50%, #002936 100%)',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Simple Auth Info Bar */}
      <Box
        position="fixed"
        sx={{
          top: 20,
          right: 20,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          padding: '8px 16px',
          borderRadius: '50px',
          backgroundColor: 'rgba(0, 41, 54, 0.8)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/Kaizen.png"
            alt="Logo"
            width={40}
            height={40}
            style={{
              cursor: 'pointer',
              display: 'inline-block',
              verticalAlign: 'middle',
            }}
            onClick={() => router.push('/')}
          />
          <Typography
            variant="h5"
            sx={{
              ml: 2,
              fontWeight: 'bold',
              color: '#65b8cb',
              textShadow: '0 0 5px rgba(0,165,255,0.5)',
            }}
          >
            KAIZEN
          </Typography>
        </Box>

        {session ? (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              sx={{ ml: 2 }}
            >
              <Avatar
                alt="user image"
                src={session.user?.image || '/generic_user.jpg'}
                sx={{ width: 40, height: 40 }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseMenu();
                  router.push('/dashboard');
                }}
              >
                Dashboard
              </MenuItem>
              <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
            </Menu>
          </div>
        ) : (
          <Button
            variant="contained"
            onClick={() => router.push('/auth/signin')}
            sx={{
              backgroundColor: '#003d4d !important',
              '&:hover': { backgroundColor: '#00526a !important' },
              fontSize: '1rem',
              px: 3,
              py: 1,
            }}
          >
            Sign In
          </Button>
        )}
      </Box>

      {/* Background accent */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          background:
            'radial-gradient(circle at right top, rgba(101, 184, 203, 0.15) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '40%',
          height: '100%',
          background:
            'radial-gradient(circle at left bottom, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      {/* Hero Section */}
      <Box
        component="section"
        id="hero-section"
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          mt: 0,
          pt: 0,
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ textAlign: 'center', maxWidth: '800px', padding: '0 20px' }}
        >
          <Typography
            sx={{
              fontSize: '4.5rem',
              mb: 4,
              fontFamily: 'SaiyanFont, sans-serif',
              color: '#fff',
              textShadow: '5px 5px 0 #003d4d, 10px 10px 0 #65b8cb',
            }}
          >
            Level Up Your Life
          </Typography>

          <Typography
            sx={{
              mt: 4,
              mb: 6,
              color: '#f5f5f5',
              fontSize: '2rem',
              lineHeight: 1.4,
              fontFamily: 'SaiyanFont, sans-serif',
            }}
          >
            The ultimate self-improvement tool to transform like a Saiyan warrior
          </Typography>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="large"
              sx={{
                backgroundColor: '#003d4d !important',
                color: 'white !important',
                '&.MuiButton-root:hover': { backgroundColor: '#00526a !important' },
                borderRadius: '4px !important',
                padding: '16px 36px !important',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 20px rgba(0, 61, 77, 0.6)',
              }}
              onClick={() => (session ? router.push('/dashboard') : router.push('/auth/signin'))}
            >
              {session ? 'Go to Dashboard' : 'Begin Your Transformation'}
            </Button>
          </motion.div>
        </motion.div>

        <div className="scroll-down-indicator">
          <div className="scroll-down-arrow"></div>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Scroll down to see transformations
          </Typography>
        </div>
      </Box>

      {/* Transformation Journey Section */}
      <Box
        component="section"
        id="transformation-section"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 8,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '1200px',
            gap: 8,
            padding: 4,
            zIndex: 2,
            position: 'relative',
          }}
        >
          {/* Transformation Visualization */}
          <Box
            sx={{
              flex: 1,
              position: 'relative',
              height: '500px',
              width: '100%',
              maxWidth: '500px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ position: 'relative', width: '300px', height: '400px' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFormData.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="power-aura"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src={currentFormData.image}
                    alt={currentFormData.title}
                    width={300}
                    height={400}
                    style={{
                      objectFit: 'contain',
                      maxHeight: '100%',
                      maxWidth: '100%',
                    }}
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </Box>
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Typography
                sx={{
                  fontSize: '2.5rem',
                  fontFamily: 'SaiyanFont, sans-serif',
                  color: '#fff',
                  textShadow: '3px 3px 0 #003d4d, 6px 6px 0 #65b8cb',
                }}
              >
                {currentFormData.title}
              </Typography>
            </Box>
          </Box>

          {/* Transformation Description */}
          <Box sx={{ flex: 1, maxWidth: '500px' }}>
            <motion.div
              key={`desc-${currentFormData.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                sx={{
                  fontSize: '1.4rem',
                  mb: 4,
                  lineHeight: 1.8,
                  fontFamily: 'SaiyanFont, sans-serif',
                }}
              >
                {currentFormData.description}
              </Typography>

              <Typography
                sx={{
                  fontSize: '1.2rem',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontFamily: 'SaiyanFont, sans-serif',
                }}
              >
                {`Power Level ${currentForm + 1} / ${forms.length}`}
              </Typography>

              <Box sx={{ mt: 2, mb: 6, width: '100%' }}>
                <div
                  className="power-level-progress"
                  style={
                    {
                      '--power-width': `${((currentForm + 1) / forms.length) * 100}%`,
                      '--power-color-start': '#ffffff',
                      '--power-color-end': '#65b8cb',
                    } as React.CSSProperties
                  }
                ></div>
              </Box>

              <Typography
                sx={{
                  color: '#f5f5f5',
                  opacity: 0.8,
                  fontStyle: 'italic',
                  fontSize: '1.1rem',
                  mt: 2,
                  fontFamily: 'SaiyanFont, sans-serif',
                }}
              >
                Watch as the transformation automatically cycles through power levels...
              </Typography>
            </motion.div>
          </Box>
        </Box>
      </Box>

      {/* Features Section */}
      <Box
        component="section"
        id="features-section"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          py: 10,
          px: 4,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Typography
            sx={{
              mb: 8,
              textAlign: 'center',
              fontSize: '3.5rem',
              fontFamily: 'SaiyanFont, sans-serif',
              color: '#fff',
              textShadow: '4px 4px 0 #003d4d, 8px 8px 0 #65b8cb',
            }}
          >
            Master All Aspects of Life
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' },
            gap: 6,
            maxWidth: '1200px',
            width: '100%',
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Box className="feature-card">
                <Typography
                  sx={{
                    mb: 2,
                    color: '#ffffff',
                    fontSize: '2rem',
                    fontFamily: 'SaiyanFont, sans-serif',
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{ fontSize: '1.3rem', lineHeight: 1.6, fontFamily: 'SaiyanFont, sans-serif' }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>

      {/* Call to Action Section */}
      <Box
        component="section"
        id="cta-section"
        sx={{
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          py: 10,
          px: 4,
          background: 'linear-gradient(rgba(0, 41, 54, 0.9), rgba(0, 61, 77, 0.95))',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'url(/powering_up_goku.png) no-repeat center center',
            backgroundSize: 'cover',
            opacity: 0.1,
            zIndex: 0,
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}
        >
          <Typography
            sx={{
              mb: 4,
              fontSize: '2.5rem',
              lineHeight: 1.4,
              fontFamily: 'SaiyanFont, sans-serif',
            }}
          >
            "Power comes in response to a need, not a desire. You have to create that need."
          </Typography>

          <Typography
            sx={{ mb: 6, opacity: 0.9, fontSize: '1.5rem', fontFamily: 'SaiyanFont, sans-serif' }}
          >
            Start your transformation journey today and surpass your limits
          </Typography>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="large"
              sx={{
                backgroundColor: '#65b8cb !important',
                color: 'white !important',
                '&.MuiButton-root:hover': { backgroundColor: '#4a98ab !important' },
                borderRadius: '4px !important',
                padding: '16px 36px !important',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 20px rgba(101, 184, 203, 0.5)',
              }}
              onClick={() => (session ? router.push('/dashboard') : router.push('/auth/signin'))}
            >
              {session ? 'Go to Dashboard' : 'Get Started'}
            </Button>
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
}
