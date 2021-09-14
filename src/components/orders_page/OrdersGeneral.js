import React from 'react';
import { useAuth } from '../../firebase/useAuth';
import { useHistory } from 'react-router-dom';
import {
    Grid, 
    Button,
    Typography,
    Box,
    CircularProgress
   } from '@material-ui/core';
import OrdersList from './OrdersList';
import NavbarLogout from '../NavbarLogout';

export default function OrdersGeneral() {
const history = useHistory();
const { user } = useAuth();

    return (
<div>
{user?
<div>
<NavbarLogout />
<OrdersList />   
</div>
:
history.push('/')
}
   
</div>
    )
}
