import React, { useState, useEffect } from 'react';
import NavbarLogin from './../NavbarLogin';
import NavbarLogout from './../NavbarLogout';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from './../../firebase/useAuth';
import {
   LinearProgress,
 } from '@material-ui/core';
import StoreProducts from './StoreProducts';


export default function GeneralStore() {
const [loading, setLoading] = useState(false);

const { user } = useAuth();

if (loading) {
    return <LinearProgress />
};

    return (
<div>
{user?
<div>
<NavbarLogout />
<h1>Products</h1>
<StoreProducts />
</div>
:
<div>
<NavbarLogin />
<StoreProducts />
</div>
}
            
</div>
    )
}
