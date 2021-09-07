import React, { useState, useEffect } from 'react';
import {
    Typography,
    Button,
    Grid,
    } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavigationCategories from './NavigationCategories';

const useStyles = makeStyles((theme) => ({
    button: {
        border:'1px solid black',
        borderRadius:'5%',
        width:'160px',
        marginBottom: '0.3rem',
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#bdbdbd'
    }
}))

export default function Navigation() {
const classes = useStyles();
    return (
<div>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>

<Grid item>
    <Button className={classes.button} fullWidth="true" size="large" href="/store">All products</Button>
</Grid>

</Grid>
</div>
    )
}
