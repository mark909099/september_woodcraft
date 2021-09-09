import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Box,
    CardMedia,
    Divider,
    Button
} from '@material-ui/core';
import { Fade } from 'react-reveal';
import Footer from '../footer_page/Footer';

const useStyles = makeStyles((theme) => ({
    paper1: {
        backgroundImage:'url(images/home_page/bg1.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    header: {
        textAlign:'center',
        paddingLeft:'1rem',
        paddingTop:'2rem',
        paddingBottom:'1.5rem',
        color:'#eeeeee',
        [theme.breakpoints.up('xs')]: {
            fontSize:'2rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'3rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'4rem'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize:'6rem'
        },
    },
    text: {
        textAlign:'flex-start',
        paddingBottom:'1.5rem',
        paddingLeft:'1.5rem',
        paddingRight:'1.5rem',
        color:'#eeeeee',
        [theme.breakpoints.up('xs')]: {
            fontSize:'1.5rem',
            paddingTop:'6rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'2rem',
            paddingTop:'8rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'3rem',
            paddingTop:'12rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize:'4rem',
            paddingTop:'15rem',
        },
    },
    store_button: {
        fontFamily:'Impact',
        color:'white',
        border:'3px solid white',
        [theme.breakpoints.up('xs')]: {
            fontSize:'1.5rem',
            marginBottom:'15rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'2rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'3rem',
            marginBottom:'30rem'
        },
    }
}))

export default function GoToStorePage() {
const classes = useStyles();
    return (
<div className={classes.paper1}>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
<Grid item xs={12}>
<Box display="flex" justifyContent="flex-start">

<Typography className={classes.header} variant-="h3">
<Fade right cascade duration={1000}>    
Explore our products,
</Fade>    
</Typography>  
</Box>
</Grid>

<Grid item xs={12}>
<Box display="flex" justifyContent="center">
<Fade delay={1000} duration={3000}>
<Typography className={classes.text} variant-="h3">Choose your furniture now.</Typography>  
</Fade>
</Box>
</Grid>
<Grid item xs={12}>
<Box letterSpacing={1} display="flex" justifyContent="center">
<Fade delay={1000} duration={2000}>
<Button href="/store" variant="outlined" className={classes.store_button}>Go to store</Button>
</Fade>
</Box>
</Grid>
 </Grid>

<Footer />        
</div>
    )
}
