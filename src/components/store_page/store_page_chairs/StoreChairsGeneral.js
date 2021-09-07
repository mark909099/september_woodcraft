import React, { useState } from 'react';
import StoreChairs from './StoreChairs';
import NavbarLogin from './../../NavbarLogin';
import NavbarLogout from './../../NavbarLogout';
import { useAuth } from './../../../firebase/useAuth';
import StoreHeader from './../StoreHeader';
import NavigationCategoriesChairs from './NavigationCategoriesChairs';


export default function StoreChairsGeneral() {
const { user } = useAuth();
    return (
<div>
{user?
<div>
<NavbarLogout />
<StoreHeader />
<NavigationCategoriesChairs />
<StoreChairs />
</div>
:
<div>
<NavbarLogin />
<StoreHeader />
<NavigationCategoriesChairs />
<StoreChairs />
</div>
}                 
</div>
    )
}
