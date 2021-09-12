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
            fontSize:'0.7rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'1rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'1.5rem'
        },
    }
}))

export default function Customer() {
const classes = useStyles();
    return (
<div>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
<Grid item xs={12}><Typography className={classes.header}>Customer</Typography></Grid> 
<Grid item xs={12}><Button disableRipple='true' href="/terms_of_use" className={classes.btn} disableRipple='true'>Terms of use</Button></Grid>
<Grid item xs={12}><Button disableRipple='true' href="/privacy_policy" className={classes.btn}>Privacy policy</Button></Grid>
<Grid item xs={12}><Button disableRipple='true' href="/frequently_asked_questions" className={classes.btn}>FAQ</Button></Grid>           
</Grid>             
</div>
    )
}
