import React, {useState} from 'react';
import {
    Typography,
  } from '@material-ui/core';
import { Fade, Flip } from 'react-reveal';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper1: {
        height:'100vh',
        backgroundImage:'url(images/home1.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    text_header: {
        color:'#eeeeee',
        textAlign:'center',
        paddingTop:'1rem',
        fontFamily:'Impact',
        [theme.breakpoints.up('xs')]: {
            fontSize:'2rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'4rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'6rem',
        },
    },
    text_subheader: {
        color:'#eeeeee',
        textAlign:'center',
        paddingTop:'1rem',
        [theme.breakpoints.up('xs')]: {
            fontSize:'1.5rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'2.8rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'4.5rem',
        },
    }
}))

export default function HomeHeader() {
const classes = useStyles();
    return (

<div className={classes.paper1}>
<Fade delay={500} duration={1500}>
<Typography variant="h2" className={classes.text_header}>September Woodcraft</Typography>  
</Fade>

<Typography variant="h4" className={classes.text_subheader}>
<Flip left cascade delay={1500} duration={2000}>   
Furniture that fits your needs
</Flip>
</Typography>        


</div>
    )
}
