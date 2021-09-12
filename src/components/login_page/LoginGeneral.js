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
        paddingTop:'1.5rem',
        paddingBottom:'1.5rem',
        [theme.breakpoints.up('xs')]: {
            fontSize:'1.4rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'2.5rem'
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
<Typography className={classes.header} variant="h2">Login to September Woodcraft</Typography>
<LoginMethods />
</div>
}
</div>
    )
}
