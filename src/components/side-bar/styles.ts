import { SxProps, Theme } from '@mui/material';

export const sidebarStyles = {
  drawer: {
    width: 250,
  },
  box: {
    width: 250,
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '20%',
  },
  logo: {
    marginRight: 16,
    cursor: 'pointer',
  },
  title: {
    flexGrow: 1,
    marginTop: '10px',
  },
};

export const getTabTextStyles = (): SxProps<Theme> => ({
  fontSize: {
    xs: '0.8em !important',
    sm: '1.2em !important',
    md: '1.5em !important',
    lg: '2em !important',
  },
  marginLeft: {
    xs: '0.1% !important',
    sm: '2% !important',
    md: '5% !important',
    lg: '5% !important',
  },
  fontFamily: 'SaiyanFont, sans-serif',
  color: '#fff',
});
