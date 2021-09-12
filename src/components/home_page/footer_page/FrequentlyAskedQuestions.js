import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding:'1rem'
    }
}))

export default function FrequentlyAskedQuestions() {
const classes = useStyles();
    return (
<div className={classes.root}>

<Typography variant="h3" style={{paddingBottom:'1rem'}}>Frequently Asked Questions</Typography>
<Typography variant="h4">Is this website real?</Typography> 
<Typography variant="body1">

<p>This is a demo website, it does not represent real company or products.</p>

</Typography> 

</div>
    )
}
