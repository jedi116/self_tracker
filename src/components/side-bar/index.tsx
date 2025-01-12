'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Image from "next/image";
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {redirect} from "next/navigation";
import DashboardIcon from '@mui/icons-material/Dashboard';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ChurchIcon from '@mui/icons-material/Church';
import WcIcon from '@mui/icons-material/Wc';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import SideBarList from "@/components/side-bar/list";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

type SideBarProps = {
    drawerOpen: boolean,
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const sideBarFirstItems = [
    {
        name: 'Dashboard',
        icon: <DashboardIcon />,
        link: '/dashboard'
    },
    {
        name: 'Workout',
        icon: <FitnessCenterIcon />,
        link: '/workout'
    },
    {
        name: 'Spiritual Growth',
        icon: <ChurchIcon />,
        link: '#'
    },
    {
        name: 'No Fap',
        icon: <WcIcon />,
        link: '#'
    },
    {
        name: 'Meal management',
        icon: <FoodBankIcon />,
        link: '#'
    }
]

const sideBarSecondaryList = [
    {
        name: 'Profile',
        icon: <AccountBoxIcon />,
        link: '/profile'
    }
]

export default function SideBar({drawerOpen, setDrawerOpen}: SideBarProps) {

    return (
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            {
                <Box sx={{ width: 250 }} role="presentation" onClick={() => setDrawerOpen(false)}>
                    <List>
                        <Box sx={{display: 'flex', flexDirection: 'row', marginTop: '20%'}}>
                            <Image
                                src="/Kaizen.png"
                                alt="Logo"
                                width={40}
                                height={40}
                                style={{ marginRight: 16 }}
                                onClick={() => redirect('/')}
                            />
                            <Typography variant="h5" component="div" sx={{ flexGrow: 1, marginTop: '10px' }}>
                                Kaizen(改善)
                            </Typography>
                        </Box>
                        {sideBarFirstItems.map(({name, icon, link}, index) => (
                            <SideBarList name={name} icon={icon} link={link}  key={name}/>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {sideBarSecondaryList.map(({name, icon, link}, index) => (
                            <SideBarList name={name} icon={icon} link={link}  key={name}/>
                        ))}
                    </List>
                </Box>}
        </Drawer>
    )
}