import React from 'react';
import {
    Grid,
    Typography,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign:'center',
        paddingBottom:'1.5rem',
        color:'white',
        fontWeight:'bold',
        [theme.breakpoints.up('xs')]: {
            fontSize:'1rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'1.5rem'
        },
    },
    btn: {
        color:'white',
        paddingBottom:'1.5rem',
        [theme.breakpoints.up('xs')]: {
            fontSize:'0.7rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'1rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'1.5rem'
        },
    }
}))

export default function Navigation() {
const classes = useStyles();
    return (
<div>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
<Grid item xs={12}><Typography className={classes.header}>Navigation</Typography></Grid> 
<Grid item xs={12}><Button disableRipple='true' className={classes.btn} href="/cart">My cart</Button></Grid>
<Grid item xs={12}><Button disableRipple='true' className={classes.btn} href="/contact">Contact</Button></Grid>
<Grid item xs={12}><Button disableRipple='true' className={classes.btn} href="/about">About</Button></Grid>           

</Grid>             
</div>
    )
}
