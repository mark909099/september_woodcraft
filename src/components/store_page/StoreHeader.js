import React, { useState, useEffect } from 'react';
import {
    Typography,
    Button,
    } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign:'center',
        paddingTop:'0.5rem',
        paddingBottom:'0.3rem',
        [theme.breakpoints.up('xs')]: {
            fontSize:'4rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'6rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'8rem'
        },
    }
}))

export default function StoreHeader() {
const classes = useStyles();
    return (
<div>
<Typography variant="h3" className={classes.header}>Store</Typography>          
</div>
    )
}
