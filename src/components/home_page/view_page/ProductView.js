import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fade } from 'react-reveal';
import {
    Typography,
  } from '@material-ui/core';
import ChairView from './ChairView';

  const useStyles = makeStyles((theme) => ({
    paper1: {
        height:'100vh',
        backgroundImage:'url(images/home1.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    header: {
        textAlign:'center',
        paddingTop:'1rem',
    },
    subheader: {
        textAlign:'center',
        paddingTop:'1rem'
    }
}))

export default function ProductView() {
const classes = useStyles();
    return (
<div style={{height:'100vh'}}>
<Typography variant="h3" className={classes.header}>Products</Typography>

<ChairView />

</div>
    )
}
