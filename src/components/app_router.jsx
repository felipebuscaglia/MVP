import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home';
import MaterialesReciclarPage from '../pages/material-reciclar';
import PuntoReciclajePage from '../pages/punto-reciclaje';
import ServicioRetiroPage from '../pages/servicio-retiro';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/material-reciclar' element={<MaterialesReciclarPage />} />
        <Route path='/punto-reciclaje' element={<PuntoReciclajePage/>} />
        <Route path='/servicio-retiro' element={<ServicioRetiroPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
