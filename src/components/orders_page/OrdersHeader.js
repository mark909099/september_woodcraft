import React from 'react';
import {
    Typography,
    Box
   } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign:'flex-start',
        paddingLeft:'1rem',
        paddingTop:'0.5rem',
        [theme.breakpoints.up('xs')]: {
            fontSize:'3.5rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'6rem',
        },
    }
}))

export default function OrdersHeader() {
const classes = useStyles();
    return (
<div>
<Box letterSpacing={5}>
<Typography className={classes.header}>My orders</Typography>            
</Box>            
</div>
    )
}
