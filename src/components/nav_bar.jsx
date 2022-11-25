import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Button,Grid,Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import logo from '../assets/logo.png';

export const NavBar = () => {
  return (
    <Grid item xs={12} sx={{display:'flex', justifyContent:'center', alignContent:'center', backgroundColor:'green', height:'100px', flexWrap:'wrap'}}>     
      <Grid item xs={3} sx={{display:'flex', justifyContent:'left', paddingLeft:'20px'}}>
        <img src={logo} height={50}/>
      </Grid>
      
      <Grid item xs={9} sx={{display:'flex', justifyContent:'right', paddingRight:'20px'}}>
        <Button 
          variant="contained"
          startIcon={<HomeIcon />}
          component={Link} to="/"
          sx={{margin:'10px'}}
          color='success'>
          Volver a inicio
          
        </Button>

        <Button 
          variant="contained" 
          startIcon={<LocationOnIcon />}
          component={Link} to="/punto-reciclaje"
          sx={{margin:'10px'}}
          color='success'>
          Puntos de reciclaje
        </Button>

        <Button 
          variant="contained" 
          startIcon={<AccessibilityNewIcon />}
          component={Link} to="/material-reciclar"
          sx={{margin:'10px'}}
          color='success'>
          ¿Qué reciclar?
        </Button>

        <Button 
          variant="contained" 
          startIcon={<DeleteIcon />}
          component={Link} to="/servicio-retiro"
          sx={{margin:'10px'}}
          color='success'>
          Servicio de retiro
        </Button>

      </Grid>
    </Grid>
  )
}

export default NavBar
