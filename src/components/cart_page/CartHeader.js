import React from 'react';
import {
    Typography,
    Box
   } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign:'center',
        [theme.breakpoints.up('xs')]: {
            fontSize:'6rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'8rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'10rem',
        },
    }
}))

export default function CartHeader() {
const classes = useStyles();
    return (
<div>
    <Box letterSpacing={15}>
<Typography className={classes.header}>Cart</Typography>            
</Box>
</div>
    )
}
