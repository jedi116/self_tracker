'use client';
import * as React from 'react';
import { Box, Button, ButtonGroup, Modal, Typography } from '@mui/material';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import AddTaskIcon from '@mui/icons-material/AddTask';
import WorkoutModal from '@/app/workout/modal';
import { useHeader } from '@/app/workout/hooks/header.hook';
import { styles } from './styles';

export default function Header() {
  const { openModal, getModalName, closeModal, modalOpen } = useHeader();
  return (
    <Box sx={styles.header.container}>
      <Typography sx={styles.header.title}>Workout</Typography>
      <Box sx={styles.header.imageContainer}>
        <Image src={'/powering_up_goku.png'} alt={'powering up goku'} width={80} height={80} />
      </Box>
      <ButtonGroup
        size="large"
        aria-label="Large button group"
        sx={styles.header.buttonGroup}
        variant="contained"
        disableElevation
      >
        <Button sx={styles.header.button} onClick={() => openModal('create workout goal')}>
          <AddTaskIcon sx={styles.header.buttonIcon} />
          <span>Create workout goal</span>
        </Button>
        <Button sx={styles.header.button} onClick={() => openModal('add workout')}>
          <AddIcon sx={styles.header.buttonIcon} />
          <span>Add workout</span>
        </Button>
      </ButtonGroup>
      <Modal
        open={modalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <WorkoutModal name={getModalName()} />
      </Modal>
    </Box>
  );
}
