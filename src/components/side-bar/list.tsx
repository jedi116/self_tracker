'use client'
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import {redirect} from "next/navigation";
import * as React from "react";

type SideBarListProps = {
    name: string,
    icon: React.JSX.Element,
    link: string
}

export default function SideBarList({name, icon, link}: SideBarListProps) {

    return (
        <ListItem key={name} disablePadding>
            <ListItemButton onClick={() => redirect(link)}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>
    );
}
