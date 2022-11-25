import React, { Children } from 'react';
import { Grid, Typography } from '@mui/material';
import NavBar from '../components/nav_bar';
import { Footer } from './footer';

export const HomeLayout = (props) => {
  return (
    <Grid container sx={{display:'flex', justifyContent:'center', justifyItems:'center', flexWrap:'wrap'}}>
        <NavBar/>
        {props.children}
        <Footer/>
    </Grid>
  )
}
