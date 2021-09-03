import React from 'react';
import {
    Typography,
    Fade,
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop:'2rem'
    },
    header: {
        textAlign:'center',
        paddingTop:'1rem',
        fontFamily:'Verdana',
        fontWeight:'600',
        [theme.breakpoints.up('xs')]: {
            fontSize: '2.5rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem'
        },
    },
    btn: {
        padding:'0.2rem'
    }
}))

const startFade = true;

export default function LoginPasswordlessHeader() {
const classes = useStyles();
    return (
<div>
<Fade in={startFade} timeout={1000}>
<Typography className={classes.root}
variant="h3" className={classes.header}>
    Passwordless
</Typography>
</Fade>            
</div>
    )
}
