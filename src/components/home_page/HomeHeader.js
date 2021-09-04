import React from 'react';
import {
    Typography,
    Fade,
  } from '@material-ui/core';

export default function HomeHeader() {
const fadeStart=true;

    return (
<div>
<Fade in={fadeStart} timeout={4000}>
<Typography variant="h3" style={{textAlign:'center', paddingTop:'1rem'}}>September Woodcraft</Typography>          
</Fade>
</div>
    )
}
