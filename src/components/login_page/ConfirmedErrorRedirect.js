import React, { useState, useEffect } from 'react';
import {
    Button,
    TextField,
    Box,
    Grid,
    Typography,
    Fade,
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign:'center',
        paddingTop:'1rem',
    }
}))

export default function ConfirmedErrorRedirect() {
const classes = useStyles();
const [fade, setFade] = useState(false)

useEffect(() => {
    setTimeout(() => {
        setFade(true)
    }, 4000);
    return () => console.log('cleared') 
}, [])


    return (
<div className={classes.root}>
<Grid spacing={2}
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>

<Grid item>
<Fade in={fade} timeout={1000}>
<Typography style={{color:'red'}}>Error. . .</Typography> 
</Fade>
</Grid>

<Grid item>
<Fade in={fade} timeout={1000}>
<Typography>Your login link has expired</Typography> 
</Fade>
</Grid>

<Grid item>
<Fade in={fade} timeout={1000}>
<Typography>OR</Typography> 
</Fade>
</Grid>

<Grid item>
<Fade in={fade} timeout={1000}>
<Typography>you have entered a wrong email</Typography> 
</Fade>
</Grid>


<Grid item style={{paddingTop:'1.5rem'}}>
<Fade in={fade} timeout={3000}>
<Typography>Send a new login link to your email and try again.</Typography>
</Fade>
</Grid>

<Grid item>
<Fade in={fade} timeout={5000}>
<Button variant="outlined" href="/login">LOGIN PAGE</Button>
</Fade>
</Grid>


</Grid>
</div>
    )
}
