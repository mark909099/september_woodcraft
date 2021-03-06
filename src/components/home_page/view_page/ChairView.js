import React from 'react';
import {
    Grid,
    CardMedia,
    Typography,
    Box,
    Divider,
    Hidden
  } from '@material-ui/core';
import { Fade } from 'react-reveal';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  text: {
    textAlign:'flex-start',
  },
  item_text: {
    paddingTop:'1rem'
  },
  desc: {
    paddingBottom:'0.5rem'
  },
  photo: {
    [theme.breakpoints.up('xs')]: {
      height: '160px',
      width: '240px',
      borderRadius:'15%' 
    },
    [theme.breakpoints.up('md')]: {
      height: '198px',
      width: '300px',
      borderRadius:'15%' 
    },
  },
  divider: {
    marginTop:'2rem',
    marginBottom:'2rem',
  }
}));

export default function ChairView() {
const classes = useStyles();
    return (

<div>

<Hidden xsDown>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="flex-start"
>

<Grid item xs={12} sm={6}>
<Fade left duration={2500}>
<Box display="flex" justifyContent="center">
<CardMedia className={classes.photo}
          component="img"
          alt="September Woodcraft"
          image="/images/home_page/chair_view.jpg"
        />
</Box>
</Fade>
</Grid>


<Grid item xs={10} sm={5} className={classes.item_text}>
<Box>
<Fade duration={4000}>
 <Typography className={classes.desc}
 variant="body1">
   Chairs of different sizes and metrics, For adults and children. Comes with various leg and back designes.
   </Typography>
</Fade>
</Box>
</Grid>  

<Grid item xs={0} sm={1}></Grid>

</Grid> 
</Hidden>



<Hidden smUp>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="flex-start"
>

<Grid item xs={10} sm={5} className={classes.item_text}>
<Box>
<Fade duration={4000}>
 <Typography className={classes.desc}
 variant="body1">
   Chairs of different sizes and metrics, For adults and children. Comes with various leg and back designes.
   </Typography>
</Fade>
</Box>
</Grid>  

<Grid item xs={12} sm={6}>
<Fade left duration={2500}>
<Box display="flex" justifyContent="center">
<CardMedia className={classes.photo}
          component="img"
          alt="September Woodcraft"
          image="/images/home_page/chair_view.jpg"
        />
</Box>
</Fade>
</Grid>

<Grid item xs={0} sm={1}></Grid>

</Grid> 
</Hidden>

<Divider className={classes.divider}
/>
</div>
    )
}
