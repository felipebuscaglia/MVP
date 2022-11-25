import React from 'react';
import { Typography, Grid, Divider } from '@mui/material';
import { HomeLayout } from '../components/homeLayout'; 
import { ListaMateriales } from '../components/materiales-reciclar/listaMateriales';

export const MaterialesReciclarPage = () => {
  return (
    <HomeLayout>
      <Grid xs={12} sx={{display:'flex', justifyContent:'center', padding:'20px'}}>
        <Typography variant='h3'> Lista de Materiales reciclables </Typography>
      </Grid>
      <ListaMateriales/>
    </HomeLayout>
  )
}

export default MaterialesReciclarPage