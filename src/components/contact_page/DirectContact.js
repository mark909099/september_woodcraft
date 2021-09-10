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
        fontSize:'1rem'
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
    text_email: {
      textAlign:'flex-start',
      paddingBottom:'1rem',
      [theme.breakpoints.up('xs')]: {
          fontSize:'1rem'
        },
        [theme.breakpoints.up('sm')]: {
          fontSize:'1.2rem'
        },
        [theme.breakpoints.up('md')]: {
          fontSize:'1.5rem'
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
<Typography className={classes.header}>Office</Typography>        
</Grid> 
<Grid item>
<Typography className={classes.text}>Adress: Israel, Haifa, random St. 42</Typography>        
</Grid>
<Grid item>
<Typography className={classes.text}>Phone: 777-123-321-777</Typography>        
</Grid>
<Grid item>
<Typography className={classes.text_email}>Email: september-woodcraft@gmail.com</Typography>        
</Grid>

<Grid item>
<Typography className={classes.header_sales}>Sales</Typography>        
</Grid>
<Grid item>
<Typography className={classes.sub_header}>USA</Typography>        
</Grid>  
<Grid item>
<Typography className={classes.text}>Adress: KY, Hopkinsvile, Southwind St. 105 </Typography>        
</Grid>
<Grid item>
<Typography className={classes.text}>Phone: 888-123-321-888</Typography>        
</Grid>
<Grid item>
<Typography className={classes.text_email}>Email: september-woodcraft-usa@gmail.com</Typography>        
</Grid>


<Grid item>
<Typography className={classes.sub_header}>China</Typography>        
</Grid>  
<Grid item>
<Typography className={classes.text}>Adress: Shanghai, Jiading District, Little Chinatown St. 555 </Typography>        
</Grid>
<Grid item>
<Typography className={classes.text}>Phone: 999-123-321-999</Typography>        
</Grid>
<Grid item>
<Typography className={classes.text_email}>Email: september-woodcraft-china@gmail.com</Typography>        
</Grid>


<Grid item>
<Typography className={classes.sub_header}>Europe</Typography>        
</Grid>  
<Grid item>
<Typography className={classes.text}>Adress: Italy, Rome, Ristretto St. 22 </Typography>        
</Grid>
<Grid item>
<Typography className={classes.text}>Phone: 101-123-321-909</Typography>        
</Grid>
<Grid item>
<Typography className={classes.text_email}>Email: september-woodcraft-eu@gmail.com</Typography>        
</Grid>

</Grid>

</div>
    )
}
