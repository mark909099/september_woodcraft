import React from 'react';
import NavbarLogin from './../NavbarLogin';
import LoginMethods from './LoginMethods';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { useAuth } from '../../firebase/useAuth';
import {
    Typography,
  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: 'center',
        paddingTop:'0.7rem',
        paddingBottom:'1.5rem',
        textUnderlinePosition: 'under',
        textDecoration: 'underline',
        [theme.breakpoints.up('xs')]: {
            fontSize:'4rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'5rem'
        },
    },
}))

export default function LoginGeneral() {
const classes = useStyles();

const { user } = useAuth();
const history = useHistory();
    return (
<div>
{user?
history.push('/')
:
<div>
<NavbarLogin />
<Typography className={classes.header} variant="h2">Login</Typography>
<LoginMethods />   
</div>
}
</div>
    )
}
