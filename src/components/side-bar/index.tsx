'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Divider, Drawer, List } from '@mui/material';
import { useRouter } from 'next/navigation';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ChurchIcon from '@mui/icons-material/Church';
import WcIcon from '@mui/icons-material/Wc';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import SideBarList from '@/components/side-bar/list';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { sidebarStyles } from './styles';

type SideBarProps = {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const sideBarFirstItems = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    name: 'Dashboard',
    icon: <DashboardIcon />,
    link: '/dashboard',
  },
  {
    name: 'Workout',
    icon: <FitnessCenterIcon />,
    link: '/workout',
  },
  {
    name: 'Meditation',
    icon: <ChurchIcon />,
    link: '/meditation',
  },
  {
    name: 'No Fap',
    icon: <WcIcon />,
    link: '/nofap',
  },
  {
    name: 'Meal Management',
    icon: <FoodBankIcon />,
    link: '/meals',
  },
  {
    name: 'Finances',
    icon: <AttachMoneyIcon />,
    link: '/finances',
  },
];

const sideBarSecondaryList = [
  {
    name: 'Profile',
    icon: <AccountBoxIcon />,
    link: '/profile',
  },
];

export default function SideBar({ drawerOpen, setDrawerOpen }: Readonly<SideBarProps>) {
  const router = useRouter();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent drawer from closing
    router.push('/');
    setDrawerOpen(false);
  };

  return (
    <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} sx={sidebarStyles.drawer}>
      {
        <Box sx={sidebarStyles.box} onClick={() => setDrawerOpen(false)}>
          <List>
            <Box sx={sidebarStyles.logoContainer}>
              <Image
                src="/Kaizen.png"
                alt="Logo"
                width={40}
                height={40}
                style={sidebarStyles.logo}
                onClick={handleLogoClick}
              />
              <Typography variant="h5" component="div" sx={sidebarStyles.title}>
                Kaizen(改善)
              </Typography>
            </Box>
            {sideBarFirstItems.map(({ name, icon, link }) => (
              <SideBarList name={name} icon={icon} link={link} key={name} />
            ))}
          </List>
          <Divider />
          <List>
            {sideBarSecondaryList.map(({ name, icon, link }) => (
              <SideBarList name={name} icon={icon} link={link} key={name} />
            ))}
          </List>
        </Box>
      }
    </Drawer>
  );
}
