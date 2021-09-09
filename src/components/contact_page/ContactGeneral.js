import React from 'react';
import {
    Grid,
    Typography,
    Box,
    CardMedia,
    Divider,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        paddingBottom:'1.8rem',
        color:'white',
        fontWeight:'bold',
        [theme.breakpoints.up('xs')]: {
            fontSize:'1rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'1.5rem'
        },
    },
    text: {
        color:'white',
        fontFamily:'Verdana',
        [theme.breakpoints.up('xs')]: {
            fontSize:'0.8rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'1.5rem'
        },
    }
}))

export default function ContactGeneral() {
const classes = useStyles();
    return (
<div>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
<Grid item xs={12}><Typography className={classes.header}>Contact</Typography></Grid> 
<Grid item xs={12}><Typography className={classes.text}>Adress: Israel, Haifa, Random St. 42</Typography></Grid>
<Grid item xs={12}><Typography className={classes.text}>Phone: 777-321-123-777</Typography></Grid>
<Grid item xs={12}><Typography className={classes.text}>E-Mail: september-woodcraft@captainjack.com</Typography></Grid>           

</Grid>             
</div>
    )
}
