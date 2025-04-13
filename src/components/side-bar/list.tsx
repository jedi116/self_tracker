'use client';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useRouter } from 'next/navigation';
import * as React from 'react';

type SideBarListProps = {
  name: string;
  icon: React.JSX.Element;
  link: string;
};

export default function SideBarList({ name, icon, link }: Readonly<SideBarListProps>) {
  const router = useRouter();

  const handleNavigation = () => {
    if (link && link !== '#') {
      router.push(link);
    }
  };

  return (
    <ListItem key={name} disablePadding>
      <ListItemButton onClick={handleNavigation}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}
