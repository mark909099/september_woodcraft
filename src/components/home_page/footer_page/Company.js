import React from 'react';
import {
    Grid,
    Typography,
    Box,
    CardMedia,
    Divider,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CompanyPartners from './CompanyPartners';

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign:'center',
        paddingBottom:'1.5rem',
        color:'white',
        fontWeight:'bold',
        [theme.breakpoints.up('xs')]: {
            fontSize:'1rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'1.5rem'
        },
    },
    btn: {
        color:'white',
        paddingBottom:'1.5rem',
        [theme.breakpoints.up('xs')]: {
            fontSize:'0.7rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'1rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'1.5rem'
        },
    }
}))

export default function Company() {
const classes = useStyles();
    return (
<div>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
<Grid item xs={12}><Typography className={classes.header}>Company</Typography></Grid> 
<Grid item xs={12}><Button href="/about" className={classes.btn} disableRipple='true'>About</Button></Grid>
<Grid item xs={12}><CompanyPartners /></Grid>
<Grid item xs={12}><Button onClick={()=> window.open('https://www.google.com/search?q=september+woodcraft+press&sxsrf=AOaemvJPbCNmAZ4t2rE7wtaSTcjWiWfbbg%3A1631166368083&source=hp&ei=oJ85YYaqAu2P9u8P4Lyb6As&iflsig=ALs-wAMAAAAAYTmtsB2aChJpKwOJqYtKUqW1uHe2qXJK&oq=setptember&gs_lcp=Cgdnd3Mtd2l6EAMYADIHCCMQsAIQJzIKCC4QsQMQgwEQDTIECAAQDTIECAAQDTIECAAQDTIECAAQDTIECC4QDTIECAAQDTIECAAQDTIECAAQDToHCCMQ6gIQJzoECCMQJzoRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAEIAEELEDOgsIABCABBCxAxCDAToOCC4QgAQQsQMQxwEQ0QM6BAgAEEM6BwgAELEDEEM6BQgAEIAEOgUILhCABDoLCC4QgAQQsQMQgwE6CgguEAoQywEQkwI6BQgAEMsBOgcIABAKEMsBOg0ILhDHARDRAxAKEMsBOg0ILhDHARCvARANEJMCOgkIABDJAxANEAo6BggAEA0QCjoKCC4QxwEQrwEQDVCnlAJYtqkCYLqxAmgBcAB4AIABmQGIAdEKkgEEMC4xMJgBAKABAbABCg&sclient=gws-wiz')} disableRipple='true' className={classes.btn}>Press</Button></Grid>           
</Grid>            
</div>
    )
}
