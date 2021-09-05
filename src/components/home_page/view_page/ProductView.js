import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Grid,
  } from '@material-ui/core';
import ChairView from './ChairView';
import TableView from './TableView';
import ClosetView from './ClosetView';
import { Fade } from 'react-reveal';

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
        paddingBottom:'1.5rem',
        [theme.breakpoints.up('xs')]: {
            fontSize:'3.2rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'4rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'5rem'
        },
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
<Fade duration={2000}>
<Typography variant="h3" className={classes.header}>Products</Typography>
</Fade>

<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
<ChairView />
<TableView />
<ClosetView />
</Grid>
</div>
    )
}
