import React, { useState, useEffect } from 'react';
import NavbarLogin from './../NavbarLogin';
import NavbarLogout from './../NavbarLogout';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from './../../firebase/useAuth';
import {
   LinearProgress,
 } from '@material-ui/core';
import StoreProducts from './StoreProducts';
import StoreHeader from './StoreHeader';
import NavigationCategories from './NavigationCategories';
import SortAllCategories from './SortAllCategories';

export default function GeneralStore() {

const { user } = useAuth();



    return (
<div>
{user?
<div>
<NavbarLogout />
<StoreHeader />
<NavigationCategories />
<StoreProducts />
</div>
:
<div>
<NavbarLogin />
<StoreHeader />
<NavigationCategories />
<StoreProducts />
</div>
}
            
</div>
    )
}
