//
// ***NOT IN PRODUCTION***
//

import React from 'react';
import {
    Typography,
    Fade,
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign:'center',
        paddingTop:'1rem',
        fontFamily:'Verdana',
        fontWeight:'600',
        [theme.breakpoints.up('xs')]: {
            fontSize: '2rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '3rem'
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
<Fade in={startFade} timeout={400}>
<Typography
variant="h3" className={classes.header}>
    Passwordless
</Typography>
</Fade>            
</div>
    )
}
