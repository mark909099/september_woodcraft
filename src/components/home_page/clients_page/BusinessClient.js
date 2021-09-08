import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Box,
    CardMedia,
    Divider
} from '@material-ui/core';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign:'center',
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

export default function BusinessClient() {
const classes = useStyles();
    return (
<div className={classes.paper1}>
<Box letterSpacing={5}>
<Fade duration={1000}>
<Typography className={classes.header}>Business</Typography>            
</Fade>
</Box>

<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>

<Grid item xs={6} sm={4}>
<Fade duration={2000}>
<CardMedia className={classes.home_image}
          component="img"
          alt="home_furniture3"
          image="/images/home_page/business_client_2.jpg"
        />
</Fade>
</Grid>

<Grid item xs={6} sm={4}>
<Fade delay={500} duration={2000}>
<CardMedia className={classes.home_image}
          component="img"
          alt="home_furniture1"
          image="images/home_page/business_client_1.jpg"
        />
</Fade>
</Grid>

<Grid item xs={6} sm={4}>
<Fade delay={1000} duration={2000}>
<CardMedia className={classes.home_image}
          component="img"
          alt="home_furniture2"
          image="images/home_page/business_client_3.jpg"
        />
</Fade>
</Grid>

</Grid>
<Fade duration={2500}>
<Typography className={classes.text}>Business can recieve great positive impact from good furniture and design. Our team will assist you in choosing the most fitting design for your place.</Typography> 
</Fade>

<Divider className={classes.divider} />
</div>
    )
}
