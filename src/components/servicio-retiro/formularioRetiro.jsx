import React from 'react';
import { Typography,CardContent,Grid, Card ,TextField, CardActions, Button} from '@mui/material';

export const FormularioRetiro = () => {
  return (
    <Grid item xs={12} sx={{display:'flex', justifyContent:'center', padding:'20px'}}>
        <Card sx={{width:'100%'}}>
            <CardContent>
                <TextField label="Nombre" variant="filled" fullWidth={true}/>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'center', flex:2}}>
                <Button >
                    Enviar
                </Button>
                <Button >
                    Cancelar
                </Button>
            </CardActions>
        </Card>
    </Grid>
  )
}
