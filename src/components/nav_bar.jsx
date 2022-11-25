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
      
      <Grid item xs={3} sx={{display:'flex', justifyContent:'center'}}>
        <img src={logo} height={50}/>
      </Grid>
      
      <Grid item xs={9}>
        <Button 
          variant="text"
          startIcon={<HomeIcon />}
          component={Link} to="/">
          Volver a inicio
        </Button>

        <Button 
          variant="text" 
          startIcon={<LocationOnIcon />}
          component={Link} to="/punto-reciclaje">
          Puntos de reciclaje
        </Button>

        <Button 
          variant="text" 
          startIcon={<AccessibilityNewIcon />}
          component={Link} to="/material-reciclar">
          ¿Qué reciclar?
        </Button>

        <Button 
          variant="text" 
          startIcon={<DeleteIcon />}
          component={Link} to="/servicio-retiro">
          Servicio de retiro
        </Button>

      </Grid>
    </Grid>

    // <nav className='nav-bar'>
    //   <NavLink
    //     className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
    //     to='/'
    //   >
    //     Puntos de reciclaje
    //   </NavLink>
    //   <NavLink
    //     className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
    //     to='/internal'
    //   >
    //     Que reciclar
    //   </NavLink>

    //   <NavLink
    //     className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
    //     to='/internal'
    //   >
    //     Servicio de retiro
    //   </NavLink>
    // </nav>
  )
}

export default NavBar
