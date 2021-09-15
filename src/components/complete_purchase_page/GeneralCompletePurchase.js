import React from 'react';
import { useAuth } from './../../firebase/useAuth';
import {
    Grid, 
    Button,
    Typography,
    Box,
    CircularProgress,
    CardMedia
   } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import NavbarLogout from './../NavbarLogout';
import { Fade } from 'react-reveal';


const useStyles = makeStyles((theme) => ({
    root: {
        height:'100vh',
        backgroundImage:'url(images/complete_purchase.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    box: {
        paddingTop:'1rem',
        textAlign:'center',
    },
    header: {
        [theme.breakpoints.up('xs')]: {
            fontSize: '2.6rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '4rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '5rem',
        },
    },
    sub_header: {
        paddingBottom:'1.5rem',
        [theme.breakpoints.up('xs')]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '3rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem',
        },
    },
    text_my_order: {
        [theme.breakpoints.up('xs')]: {
            fontSize:'0.9rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'1.7rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'2rem',
        },
    },
    btn_my_order: {
        fontWeight:'700',
        border:'1px solid black',
        [theme.breakpoints.up('xs')]: {
            fontSize:'0.9rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'1.7rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'2rem',
        },
    },
    homepage: {
        fontFamily:'Impact',
        paddingTop:'0.4rem', 
        paddingBottom:'0.4rem', 
        paddingLeft:'2.5rem', 
        paddingRight:'2.5rem',
        fontSize:'2rem',
        fontWeight:'700',
        border:'2px solid black',
        [theme.breakpoints.up('xs')]: {
            marginTop:'10rem',
        },
        [theme.breakpoints.up('sm')]: {
            marginTop:'6rem',
        },
        [theme.breakpoints.up('md')]: {
            marginTop:'10rem',
        },
        [theme.breakpoints.up('lg')]: {
            marginTop:'10rem',
        },
    }
}))

export default function GeneralCompletePurchase() {
const classes = useStyles();
const { user } = useAuth();
const history = useHistory();
    return (
<div>
{user?
<Fade duration={3000}>
<div className={classes.root}>
<NavbarLogout />
<Box className={classes.box}>
<Typography className={classes.header}>Purchase complete</Typography>
<Typography className={classes.sub_header}>Thank you</Typography>
<Typography className={classes.text_my_order} variant="h6">You can view your purchase at <Button className={classes.btn_my_order} href="/my_orders" variant="outlined">My orders</Button> page</Typography>
<Button size="large" href="/" variant="outlined" className={classes.homepage}>Homepage</Button>
</Box>
</div>
</Fade>
:
history.push('/')
}        
</div>
    )
}
