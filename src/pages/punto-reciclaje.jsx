import React from 'react';
import {HomeLayout} from '../components/homeLayout';
import {Typography, Grid, Divider } from '@mui/material';
import { DataGrid, GridSelectionModel, GridToolbar } from '@mui/x-data-grid';

const PuntoReciclajePage = () => {

  var row = [
    {
      _id:1,
      ubicacion: "Av. no cacho una, esquina los buitres",
      horario: "Lunes a viernes 09:00 a 17:00",
      material: "Plástico y Cartones"
    },
    {
      _id:2,
      ubicacion: "Av.2 no cacho una, esquina los buitres",
      horario: "Lunes a viernes 09:00 a 17:00",
      material: "Plástico y Cartones"
    },
    {
      _id:3,
      ubicacion: "Av.3  no cacho una, esquina los buitres",
      horario: "Lunes a viernes 09:00 a 17:00",
      material: "Plástico y Cartones"
    },
    {
      _id:4,
      ubicacion: "Av.4  no cacho una, esquina los buitres",
      horario: "Lunes a viernes 09:00 a 17:00",
      material: "Plástico y Cartones"
    },
    {
      _id:5,
      ubicacion: "Av.5  no cacho una, esquina los buitres",
      horario: "Lunes a viernes 09:00 a 17:00",
      material: "Plástico y Cartones"
    },
    {
      _id:6,
      ubicacion: "Av.6  no cacho una, esquina los buitres",
      horario: "Lunes a viernes 09:00 a 17:00",
      material: "Plástico y Cartones"
    },
]

  return (
    <HomeLayout>
      
      {/*Titulo */}
      <Grid item xs={12} sx={{display:'flex', justifyContent:'center', padding:'20px'}}>
        <Typography variant='h3'> Puntos de reciclaje </Typography>
      </Grid>
      
      {/*Tabla */}
      <Grid item xs={12} sx={{display:'flex', justifyContent:'center', padding:'20px'}}>
        <DataGrid 
        sx={{
            border: 0,
            marginTop: "30px",
            //   minHeight: "400px",
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: 600,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
            "& .MuiDataGrid-footerContainer": {
              border: 0,
            },
            "& .MuiDataGrid-cell:focus-within, .MuiDataGrid-columnHeader:focus-within":
              {
                outline: "none",
              },
          }}
        columns={[
            {field:'ubicacion', headerName:'Ubicación', headerAlign:'center', align:'center', flex: 2, sortable:false},
            {field:'horario', headerName:'Horario', headerAlign:'center', align:'center', flex: 2, sortable:true},
            {field:'material', headerName:'Material', headerAlign:'center', align:'center', flex: 2, sortable:true},
        ]} 
        rows={row} 
        components={{ Toolbar: GridToolbar }}
        disableSelectionOnClick
        checkboxSelection={false}
        autoHeight
        //hideFooter
        getRowId={(row) => row._id}
        />


      </Grid>
    </HomeLayout>
  )
}

export default PuntoReciclajePage