import React from 'react';
import { Grid, Typography } from '@mui/material';
import logo from '../assets/logo.png';

export const Footer = () => {
  return (
    <Grid item xs={12} sx={{minHeight:'100px', backgroundColor:'green', padding:'20px'}}>
      <img src={logo} height={50}/>
    </Grid>
  )
}
