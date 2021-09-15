import React from 'react';
import {
    Typography,
    Box,
    Button
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
        },
        text: {
            paddingBottom:'1rem',
            [theme.breakpoints.up('xs')]: {
                fontSize:'1.2rem',
            },
            [theme.breakpoints.up('sm')]: {
                fontSize:'1.2rem',
            },

        },
        button: {
            width:'90px',
            border:'1px solid black',
            fontSize:'1rem',
        },
}))

export default function CartHeader() {
const classes = useStyles();
    return (
<div>
<Box letterSpacing={15}>
    <Typography className={classes.header}>Cart</Typography>            
</Box>

<Box display="flex" justifyContent='center'>
    <Typography className={classes.text}>Go to <Button className={classes.button} variant="outlined" href="/store">Store</Button></Typography>
</Box>
</div>
    )
}
