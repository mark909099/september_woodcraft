import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
} from '@material-ui/core';
import Company from './Company';
import Customer from './Customer';
import Contact from './Contact';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    paper1: {
        borderTop:'2px solid white',
        [theme.breakpoints.up('xs')]: {
            paddingTop:'2rem',
            paddingBottom:'1rem'
        },
        [theme.breakpoints.up('md')]: {
            paddingTop:'4rem',
            paddingBottom:'1rem'
        }
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
            fontSize:'1.5rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'2rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'3rem'
        },
    }
}))

export default function Footer() {
const classes = useStyles();
    return (
<div className={classes.paper1}>
<Fade duration={500}>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="baseline"
>
<Grid item xs={4}><Company /></Grid>
<Grid item xs={4}><Customer /></Grid>  
<Grid item xs={4}><Contact /></Grid>  
</Grid>   
</Fade>       
</div>
    )
}
