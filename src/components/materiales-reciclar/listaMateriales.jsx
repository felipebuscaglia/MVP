import React from 'react';
import { Typography,Grid,
Card,CardHeader,CardMedia,CardContent } from '@mui/material';
import Aluminio from '../../assets/reciclajeMateriales/aluminio.jpg';
import Carton from '../../assets/reciclajeMateriales/carton.jpg';
import Pet from '../../assets/reciclajeMateriales/pet.jpg';


export const ListaMateriales = () => {
    var items = [
        {
            material: "Plásticos",
            descripcion: "PET, HDPE, PVC, LDPE ,PP, PS",
            img: Pet
        },
        {
            material: "Papeles y Cartones",
            descripcion: "Papel blanco de impresora, hojas de cuaderno, boletas, facturas, guías, sobres, libros sin tapa, diarios y revistas, sin importar si está impreso o escrito,",
            img: Carton
        },
        {
            material: "Otros",
            descripcion: "Aluminios y Metales ferrosos ",
            img: Aluminio
        },
    ]

    return (
        <>
        {
            items.map( (item, i) => <Item key={i} item={item} /> )
        }
        </>
    
  )
}


function Item(props)
{
    return (
    <Grid item xs={4}  sx={{display:'flex', justifyContent:'center', flexDirection:'row', padding:'20px'}}>
        <Card>
            <CardHeader
                title={<Typography variant='h5' color={'green'} sx={{fontWeight: 'bold'}}> {props.item.material} </Typography>}
            />
            <CardMedia
                component="img"
                height={'500px'}
                image={props.item.img}
                alt={'img reciclaje'}
            />
            <CardContent>
                <Typography variant='body1'> {props.item.descripcion} </Typography>
            </CardContent>
        </Card>
    </Grid>
    )
}