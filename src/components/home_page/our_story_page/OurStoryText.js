import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Typography,
    Grid,

    } from '@material-ui/core';
import { Fade } from 'react-reveal';

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign:'center',
        color:'#eeeeee',
        paddingTop:'1rem',
        paddingBottom:'1.5rem',
        paddingLeft:'1rem',
        fontFamily:'Impact',
        [theme.breakpoints.up('xs')]: {
            fontSize:'3.5rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'4.8rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'7rem'
        },
    },
    text: {
        textAlign:'flex-start',
        color:'#eeeeee',
        paddingLeft:'1rem',
        fontFamily:'Tahoma',
        [theme.breakpoints.up('xs')]: {
            fontSize:'2rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'2.5rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'3rem'
        },
    }
}))

export default function OurStoryHeader() {
const classes = useStyles();
    return (
<div>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="baseline"
>

<Grid item xs={12}>
<Fade right duration={3000}>
<Typography className={classes.header}>
Our goal
</Typography>
</Fade>
</Grid>

<Grid item xs={12}>
<Fade duration={3000}>
<Typography variant="body1" className={classes.text}>
Founded in 1998, September Woodcraft put its main goal as providing high quality furniture for people at their homes, work, and leisure places. 
</Typography>
</Fade>
</Grid>

</Grid>
</div>
    )
}
