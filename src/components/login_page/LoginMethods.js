import React from 'react';
import LoginPasswordlessTotal from './LoginPasswordlessTotal';
import {
    Grid,
  } from '@material-ui/core';

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
<Grid item></Grid>

</Grid>
            
</div>
    )
}
