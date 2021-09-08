import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
} from '@material-ui/core';
import { Fade } from 'react-reveal';
import OurStoryText from './OurStoryText';

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
<Fade duration={3000}>
<div>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>

<Grid item xs={12} sm={8} md={6} lg={5}><OurStoryText /></Grid>
<Grid item xs={12} sm={4} md={6} lg={7}></Grid>

</Grid>
</div>
</Fade>
</div>
    )
}
