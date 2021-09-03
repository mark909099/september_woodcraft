import React from 'react';
import {
    Grid,
    CardMedia
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop:'2rem'
    },
    google_login: {
        width:'140px',
    }
}))

export default function ProvidersMethods() {
const classes = useStyles();
    return (
<div>
<Grid spacing={3}
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>

<Grid item xs={12} sm={4}>
<CardMedia className={classes.google_login}
        component="img"
          image="/images/google_login.png"
          title="Contemplative Reptile"
        />
</Grid>
<Grid item xs={12} sm={4}>Facebook</Grid>
<Grid item xs={12} sm={4}>Microsoft</Grid>

</Grid>           
</div>
    )
}
