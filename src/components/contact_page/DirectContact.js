import React from 'react';
import {
     Grid, 
     Button,
     TextField,
     Typography,
    } from '@material-ui/core';
    import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop:'2rem',
        paddingLeft:'1rem'
    },
    header: {
      [theme.breakpoints.up('xs')]: {
        fontSize:'2rem'
      },
      [theme.breakpoints.up('sm')]: {
        fontSize:'3rem'
      },
      [theme.breakpoints.up('md')]: {
        fontSize:'4rem'
      },
    },
    header_sales: {
      paddingTop:'2rem',
      [theme.breakpoints.up('xs')]: {
        fontSize:'2rem'
      },
      [theme.breakpoints.up('sm')]: {
        fontSize:'3rem'
      },
      [theme.breakpoints.up('md')]: {
        fontSize:'4rem'
      },
    },
    sub_header: {
      [theme.breakpoints.up('xs')]: {
        fontSize:'1.2rem'
      },
      [theme.breakpoints.up('sm')]: {
        fontSize:'1.5rem'
      },
      [theme.breakpoints.up('md')]: {
        fontSize:'2rem'
      },
    },
    text: {
        textAlign:'flex-start',
        [theme.breakpoints.up('xs')]: {
            fontSize:'1rem'
          },
          [theme.breakpoints.up('sm')]: {
            fontSize:'1.2rem'
          },
          [theme.breakpoints.up('md')]: {
            fontSize:'1.5rem'
          },
    },
    text_phone: {
      textAlign:'flex-start',
      paddingTop:'1rem',
      [theme.breakpoints.up('xs')]: {
          fontSize:'1rem'
        },
        [theme.breakpoints.up('sm')]: {
          fontSize:'1.2rem'
        },
        [theme.breakpoints.up('md')]: {
          fontSize:'1.5rem'
        },
  },
    text_email: {
      textAlign:'flex-start',
      [theme.breakpoints.up('xs')]: {
          fontSize:'1rem',
          paddingBottom:'1rem',
        },
        [theme.breakpoints.up('sm')]: {
          fontSize:'1.2rem',
          paddingBottom:'1rem',
        },
        [theme.breakpoints.up('md')]: {
          fontSize:'1.5rem',
          paddingBottom:'1.2rem',
        },
  }
}))

export default function DirectContact() {
const classes = useStyles();
    return (
<div className={classes.root}>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="flex-start"
>
<Grid item>
<Typography className={classes.header}>Shop</Typography>        
</Grid> 
<Grid item>
<Typography className={classes.text}>Adress: Israel, Haifa, random St. 42</Typography>        
</Grid>
<Grid item>
<Typography className={classes.sub_header}>Opening hours:</Typography>        
</Grid>
<Grid item>
<Typography className={classes.text}>Sunday-Thursday: 9:00-21:00</Typography>        
</Grid>
<Grid item>
<Typography className={classes.text}>Friday: 8:00-14:00</Typography>        
</Grid>
<Grid item>
<Typography className={classes.text}>Saturday: 9:00-22:00</Typography>        
</Grid>
<Grid item>
<Typography className={classes.text_phone}>Phone: 777-123-321-777</Typography>        
</Grid>
<Grid item>
<Typography className={classes.text_email}>Email: september-woodcraft@gmail.com</Typography>        
</Grid>



<Grid item>
<Typography className={classes.header_sales}>Office</Typography>        
</Grid>
<Grid item>
<Typography className={classes.text}>Adress: Israel, Haifa, random St. 43 </Typography>        
</Grid>
<Grid item>
<Typography className={classes.sub_header}>Opening hours:</Typography>        
</Grid>
<Grid item>
<Typography className={classes.text}>Sunday-Thursday: 8:00-16:00</Typography>        
</Grid>
<Grid item>
<Typography className={classes.text_phone}>Phone: 888-123-321-888</Typography>        
</Grid>
<Grid item>
<Typography className={classes.text_email}>Email: september-woodcraft-of@gmail.com</Typography>        
</Grid>


<Grid item>
<Typography className={classes.header_sales}>Sales</Typography>        
</Grid>
<Grid item>
<Typography className={classes.text}>Adress: Haifa, Israel, random St. 44 </Typography>        
</Grid>
<Grid item>
<Typography className={classes.sub_header}>Opening hours:</Typography>        
</Grid>
<Grid item>
<Typography className={classes.text}>Sunday-Thursday: 8:00-16:00</Typography>        
</Grid>
<Grid item>
<Typography className={classes.text_phone}>Phone: 999-123-321-999</Typography>        
</Grid>
<Grid item>
<Typography className={classes.text_email}>Email: september-woodcraft-sales@gmail.com</Typography>        
</Grid>


</Grid>

</div>
    )
}
