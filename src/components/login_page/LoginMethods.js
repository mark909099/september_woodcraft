import React from 'react';
import LoginPasswordlessTotal from './LoginPasswordlessTotal';
import {
    Grid,
  } from '@material-ui/core';
import ProvidersLogin from './ProvidersLogin';

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
<Grid item><ProvidersLogin /></Grid>

</Grid>
            
</div>
    )
}
