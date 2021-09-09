import React from 'react';
import { useAuth } from '../../firebase/useAuth';
import {
    Grid,
    Typography,
    Box,
    CardMedia,
    Divider,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavbarLogout from '../NavbarLogout';
import NavbarLogin from '../NavbarLogin';

const useStyles = makeStyles((theme) => ({
    grid_container: {
        paddingLeft:'2rem',
        paddingTop:'1rem'
    },
    header: {
        paddingBottom:'1.8rem',
        fontWeight:'bold',
        fontFamily:'Verdana',
    },
    text: {
        fontFamily:'Verdana',
    }
}))

export default function AboutGeneral() {
const classes = useStyles();
const { user } = useAuth();
    return (
<div>
{user?
<div>
<NavbarLogout />
<Grid className={classes.grid_container}
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
<Grid item xs={12}><Typography className={classes.header} variant="h3">About</Typography></Grid>   
<Grid item xs={12}><Typography className={classes.text} variant="body1">September Woodcraft is a demo project, Developed by Mark Lapin. This site does NOT constitue a real company or real products, it is built for demo purposes only.</Typography></Grid>  
<Grid item xs={12}><Typography className={classes.text} variant="body1">You are free to browse and enjoy the website.</Typography></Grid> 
</Grid> 

</div>
:
<div>
<NavbarLogin />
<Grid className={classes.grid_container}
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
<Grid item xs={12}><Typography className={classes.header} variant="h3">About</Typography></Grid>   
<Grid item xs={12}><Typography className={classes.text} variant="body1">September Woodcraft is a demo project, Developed by Mark Lapin. This site does NOT constitue a real company or real products, it is built for demo purposes only.</Typography></Grid>  
<Grid item xs={12}><Typography className={classes.text} variant="body1">You are free to browse and enjoy the website.</Typography></Grid> 
</Grid> 
</div>
}           
</div>
    )
}
