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


export default function GoogleLogin() {
const classes = useStyles();

const [fadeGoogle, setFadeGoogle] = useState(false);

const { signGoogle } = useAuth();

setTimeout(() => {
  setFadeGoogle(true);
}, 600);

    return (
<div className={classes.root}>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>

<Fade in={fadeGoogle} timeout={1000}>
<Grid className={classes.grid_item} item xs={12} sm={4}>
<Box display="flex" justifyContent="center">
<Button
 style={{ backgroundColor: 'transparent'}}
 onClick={signGoogle}
 >
<CardMedia className={classes.provider_login}
          component="img"
          image="/images/google_login.png"
          alt="Google login"
        />
</Button>
</Box>
</Grid>
</Fade>


</Grid>           
</div>
    )
}
