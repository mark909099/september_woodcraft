import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Box,
    CardMedia,
    Divider,
} from '@material-ui/core';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign:'center',
        paddingTop:'1rem',
        paddingBottom:'1.5rem',
        [theme.breakpoints.up('xs')]: {
            fontSize:'4rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'6rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'7rem'
        },
    },
    text: {
        textAlign:'flex-start',
        fontFamily:'David',
        paddingTop:'1rem',
        paddingBottom:'1.5rem',
        paddingLeft:'2rem',
        [theme.breakpoints.up('xs')]: {
            fontSize:'2rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'2rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'3rem'
        },
    },
    home_image: {
        paddingLeft:'1rem',
        paddingRight:'1rem',
        paddingBottom:'1rem',
        borderRadius:'15%',
        [theme.breakpoints.up('xs')]: {
            height:'170px',
        },
        [theme.breakpoints.up('sm')]: {
            height:'210px',
        },
        [theme.breakpoints.up('md')]: {
            height:'270px',
        },
        [theme.breakpoints.up('lg')]: {
            height:'400px',
        },
    },
    divider: {
        marginTop:'4rem',
        marginBottom:'4rem',
      }
}))

export default function HomeClient() {
const classes = useStyles();
    return (
<div className={classes.paper1}>
<Box letterSpacing={5}>
<Fade duration={1000}>
<Typography className={classes.header}>Home</Typography>            
</Fade>
</Box>

<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>

<Grid item xs={6} sm={4}>
<Fade left cascade>
<CardMedia className={classes.home_image}
          component="img"
          alt="home_furniture3"
          image="/images/home_page/home_client_3.jpg"
        />
</Fade>
</Grid>

<Grid item xs={6} sm={4}>
<Fade delay={2000} duration={2500}>
<CardMedia className={classes.home_image}
          component="img"
          alt="home_furniture1"
          image="images/home_page/home_client_1.jpg"
        />
</Fade>
</Grid>

<Grid item xs={6} sm={4}>
<Fade delay={2000} duration={2500}>
<CardMedia className={classes.home_image}
          component="img"
          alt="home_furniture2"
          image="images/home_page/home_client_2.jpg"
        />
</Fade>
</Grid>

</Grid>
<Fade duration={2500}>
<Typography className={classes.text}>The home segment is the heart of our product line, providing wide ranges of furniture to every corner of your house.</Typography> 
</Fade>

<Divider className={classes.divider} />
</div>
    )
}
