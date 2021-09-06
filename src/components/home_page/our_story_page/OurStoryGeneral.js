import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Fade } from 'react-reveal';

const useStyles = makeStyles((theme) => ({
    paper1: {
        height:'100vh',
        backgroundImage:'url(images/home_page/bg2.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    header: {
        textAlign:'center',
        color:'#eeeeee',
        paddingTop:'1rem',
        paddingBottom:'1.5rem',
        fontFamily:'Impact',
        [theme.breakpoints.up('xs')]: {
            fontSize:'4rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'6rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'7rem'
        },
    },
    subheader: {
        textAlign:'center',
        paddingTop:'1rem'
    }
}))

export default function OurStoryGeneral() {
const classes = useStyles();
    return (
<div className={classes.paper1}>
<Fade right duration={3000}>
<Typography className={classes.header}>Our Story</Typography>  
</Fade>
</div>
    )
}
