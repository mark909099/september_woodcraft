import React from 'react';
import {
    Grid,
  } from '@material-ui/core';
  import { Fade } from 'react-reveal';

export default function ChairView() {
    return (
<div>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>

<Grid item>
<Fade left>
          <h1>React Reveal</h1>
</Fade>
</Grid>
<Grid item></Grid>  
</Grid>            
</div>
    )
}
