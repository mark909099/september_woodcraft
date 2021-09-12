import React from 'react';
import LoginPasswordlessTotal from './LoginPasswordlessTotal';
import {
    Grid,
  } from '@material-ui/core';
import GoogleLogin from './GoogleLogin';
import FacebookLogin from './FacebookLogin';

export default function LoginMethods() {
    return (
<div>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
<Grid item style={{padding:'0.6rem'}}><GoogleLogin /></Grid>
<Grid item style={{padding:'0.6rem'}}><FacebookLogin /></Grid>

</Grid>
            
</div>
    )
}
