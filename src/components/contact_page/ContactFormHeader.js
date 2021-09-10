import React from 'react';
import {
     Typography,
     Box
    } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop:'2rem',
        paddingLeft:'2rem'
    },
    header: {
       textAlign:'center',
       [theme.breakpoints.up('xs')]: {
           fontSize:'3rem',
       },
       [theme.breakpoints.up('sm')]: {
        fontSize:'6rem',
        },
       [theme.breakpoints.up('md')]: {
        fontSize:'8rem',
        },
    }
}))

export default function ContactFormHeader() {
const classes = useStyles()
    return (
<div>
<Box letterSpacing={3}>
<Typography className={classes.header}>Contact Us</Typography>         
</Box>
</div>
    )
}
