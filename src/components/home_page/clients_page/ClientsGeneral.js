import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Grid,
    Box,
} from '@material-ui/core';
import { Fade } from 'react-reveal';
import HomeClient from './HomeClient';
import BusinessClient from './BusinessClient';

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign:'center',
        paddingTop:'0.5rem',
        fontFamily:'Times new roman',
        [theme.breakpoints.up('xs')]: {
            fontSize:'6rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'8rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'10rem'
        },
    },
    subheader: {
        textAlign:'center',
        paddingTop:'1rem'
    }
}))

export default function ClientsGeneral() {
const classes = useStyles();
    return (
<div className={classes.paper1}>
<Box letterSpacing={11}>
<Typography className={classes.header}>Clients</Typography>
</Box>
<HomeClient />  
<BusinessClient />        
</div>
    )
}
