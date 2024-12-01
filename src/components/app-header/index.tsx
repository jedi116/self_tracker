'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import {Session} from "next-auth";
import {signOut} from "next-auth/react"
import {Button} from "@mui/material";
import {redirect} from "next/navigation";

export default function MenuAppBar(
    {session}:{ session: Session | null }
) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);


    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileClick = () => {
        setAnchorEl(null)
        redirect('/profile')
    };

    return (
            <AppBar position="static" sx={{backgroundColor: '#002936'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Image
                        src="/Kaizen.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        style={{ marginRight: 16 }}
                        onClick={() => redirect('/')}
                    />
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Kaizen(改善)
                    </Typography>
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
                                <Avatar alt="user image" src={session.user?.image || '/generic_user.jpg'} />
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
                                <MenuItem onClick={()=>signOut()}>Sign Out</MenuItem>
                            </Menu>
                        </div>
                    ): <Button onClick={() => {
                        redirect('/auth/signin')
                    }}>Sign In</Button>}
                </Toolbar>
            </AppBar>
    );
}