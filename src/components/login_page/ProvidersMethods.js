import React, { useState, useEffect} from 'react';
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



export default function ProvidersMethods() {
const classes = useStyles();

const [fadeGoogle, setFadeGoogle] = useState(false);
const [fadeFacebook, setFadeFacebook] = useState(false);
const [fadeMicrosoft, setFadeMicrosoft] = useState(false);

const {signGoogle, signFacebook, signMicrosoft} = useAuth();

setTimeout(() => {
  setFadeGoogle(true);
}, 600);
setTimeout(() => {
  setFadeFacebook(true);
}, 800);
setTimeout(() => {
  setFadeMicrosoft(true);
}, 1000);

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

<Fade in={fadeFacebook} timeout={1000}>
<Grid className={classes.grid_item} item xs={12} sm={4}>
<Box display="flex" justifyContent="center">
<Button
 style={{ backgroundColor: 'transparent'}}
 onClick={signFacebook}
 >
<CardMedia className={classes.provider_login}
          component="img"
          image="/images/facebook_login.png"
          alt="Facebook login"
        />
</Button>
</Box>
</Grid>
</Fade>

<Fade in={fadeMicrosoft} timeout={1000}>
<Grid className={classes.grid_item} item xs={12} sm={4}>
<Box display="flex" justifyContent="center">
<Button
 style={{ backgroundColor: 'transparent'}}
 onClick={signMicrosoft}
 >
<CardMedia className={classes.provider_login}
          component="img"
          image="/images/microsoft_login.png"
          alt="Microsoft login"
        />
</Button>
</Box>
</Grid>
</Fade>

</Grid>           
</div>
    )
}
