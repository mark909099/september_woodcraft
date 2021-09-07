import React, { useState } from 'react';
import StoreTables from './StoreTables';
import NavbarLogin from './../../NavbarLogin';
import NavbarLogout from './../../NavbarLogout';
import { useAuth } from './../../../firebase/useAuth';
import StoreHeader from './../StoreHeader';
import NavigationCategoriesTables from './NavigationCategoriesTables';


export default function StoreTablesGeneral() {
const { user } = useAuth();
    return (
<div>
{user?
<div>
<NavbarLogout />
<StoreHeader />
<NavigationCategoriesTables />
<StoreTables />
</div>
:
<div>
<NavbarLogin />
<StoreHeader />
<NavigationCategoriesTables />
<StoreTables />
</div>
}         
</div>
    )
}

