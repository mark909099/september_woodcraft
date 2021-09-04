import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    TextField,
    Typography,
    Grid,
  } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    header_providers: {
        textAlign:'center',
        fontWeight:'700',
        [theme.breakpoints.up('xs')]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '3rem',
        },
    },

}))



export default function ProvidersHeader() {
const classes = useStyles();

    return (
<div>
<Fade left cascade>
<Typography className={classes.header_providers} variant="h3">With our trusted providers</Typography>      
</Fade>
</div>
    )
}
