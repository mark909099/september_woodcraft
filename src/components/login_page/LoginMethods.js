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
  direction="column"
  justifyContent="center"
  alignItems="center"
>
<Grid item><LoginPasswordlessTotal /></Grid>
<Grid item><GoogleLogin /></Grid>
<Grid item><FacebookLogin /></Grid>

</Grid>
            
</div>
    )
}
