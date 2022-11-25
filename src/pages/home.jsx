import { Grid, Typography } from '@mui/material';
import React from 'react';
import SlideHome from '../components/slideHome';
import { HomeLayout } from '../components/homeLayout';

export const HomePage = () => {
  return (
    <HomeLayout>
      <Grid item xs={12} sx={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
        
        <Grid xs={6} sx={{padding:'50px'}}>
          <Typography variant='h1'> Bienvenido a ReciclApp! </Typography>
          <Typography variant='body1' color={'green'} textAlign='left'> 
            Conectamos a las personas con el mundo reciclaje 
            generando un mundo más limpio y sustentable
          </Typography>
        </Grid>

        <Grid xs={6} sx={{padding:'50px'}}>
          <SlideHome/>
        </Grid>
      </Grid>
    </HomeLayout>
  )
}

export default HomePage
