'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { Button } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import SideBar from '@/components/side-bar';
import { useAuthSession } from '@/context/auth';
import { headerStyles } from './styles';

type AppBarProps = {
  session: Session | null;
};

export default function MenuAppBar({ session }: AppBarProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const router = useRouter();

  const handleProfileClick = () => {
    setAnchorEl(null);
    router.push('/profile');
  };

  const { setSessionValue } = useAuthSession();
  const pathname = usePathname();

  React.useEffect(() => {
    setSessionValue(session);
  }, [session, setSessionValue]);

  return pathname === '/auth/signin' || pathname === '/' ? (
    <div />
  ) : (
    <AppBar position="static" sx={headerStyles.appBar}>
      <SideBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <Toolbar>
        {session && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={headerStyles.menuButton}
          >
            <MenuIcon onClick={() => setDrawerOpen(true)} />
          </IconButton>
        )}
        <div className="wave-container">
          <h1 className="wave-text">
            <span>
              <Image
                src="/Kaizen.png"
                alt="Logo"
                width={40}
                height={40}
                style={headerStyles.logo}
                onClick={() => router.push('/')}
              />
            </span>
            <span>K</span>
            <span>A</span>
            <span>I</span>
            <span>Z</span>
            <span>E</span>
            <span>N</span>
          </h1>
        </div>
        {session ? (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar alt="user image" src={session.user?.image ?? '/generic_user.jpg'} />
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
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
              <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
            </Menu>
          </div>
        ) : (
          <Button
            onClick={() => {
              router.push('/auth/signin');
            }}
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
