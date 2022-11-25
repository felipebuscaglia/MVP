import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Typography,Box,Grid,
Card,CardHeader,Avatar,CardMedia,CardContent } from '@mui/material';
import Reciclaje1 from '../assets/reciclajeHome/reciclaje1.jpg';
import Reciclaje2 from '../assets/reciclajeHome/reciclaje2.jpg';
import Reciclaje3 from '../assets/reciclajeHome/reciclaje3.jpg';

export const SlideHome = ()=>{
    var items = [
        {
            name: "IMPORTANCIA DEL RECICLAJE",
            description: "¿Que podemos hacer para salvar el planeta?",
            img: Reciclaje1
        },
        {
            name: "JUNTOS POR EL RECICLAJE",
            description: "En reciclApp ayudamos a unir voluntades",
            img: Reciclaje2
        },
        {
            name: "EL FUTURO DEL RECICLAJE",
            description: "Enseña a tus hijos sobre el mundo del reciclaje",
            img: Reciclaje3
        }
    ]
    
    return(
        <Carousel sx={{width:'100%'}}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Grid item sx={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
            {/* <Typography variant='h2'> {props.item.name} </Typography>
            <Typography variant='body1'> {props.item.description} </Typography>
            <img src={Reciclaje1} height='100%'/> */}
            <Card>
            <CardHeader
                title={<Typography variant='h5' color={'green'} sx={{fontWeight: 'bold'}}> {props.item.name} </Typography>}
            />
            <CardMedia
                component="img"
                height={'500px'}
                image={props.item.img}
                alt={'img reciclaje'}
            />
            <CardContent>
                <Typography variant='body1'> {props.item.description} </Typography>
            </CardContent>
            </Card>
        </Grid>
    )
}

export default SlideHome