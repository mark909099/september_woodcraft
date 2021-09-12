import React, { useState } from 'react';
import { useAuth } from '../../firebase/useAuth';
import {
    Grid,
    CardMedia,
    Button,
    Box,
    Fade
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop:'0.5rem'
    },
    grid_item: {
      paddingTop:'1rem'
    },
    provider_login: {
        width:'150px',
    },
}))

export default function FacebookLogin() {
const classes = useStyles();

const { signFacebook } = useAuth();

    return (
<div style={{paddingTop:'5rem'}}>
<Button onClick={signFacebook}>Login with Facebook</Button>            
</div>
    )
}
