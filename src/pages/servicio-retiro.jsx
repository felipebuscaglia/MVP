import React from 'react';
import {HomeLayout} from '../components/homeLayout';
import { FormularioRetiro } from '../components/servicio-retiro/formularioRetiro';
import { Typography,Grid } from '@mui/material';

const ServicioRetiroPage = () => {
  return (
    <HomeLayout>
      <Grid item xs={12} sx={{display:'flex', justifyContent:'center', padding:'20px'}}>
        <Typography variant='h3'> Formulario para servicio de retiro </Typography>
      </Grid>
      <FormularioRetiro/>
    </HomeLayout>
  )
}

export default ServicioRetiroPage