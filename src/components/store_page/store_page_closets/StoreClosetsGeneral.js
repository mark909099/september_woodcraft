import React, { useState } from 'react';
import StoreClosets from './StoreClosets';
import NavbarLogin from './../../NavbarLogin';
import NavbarLogout from './../../NavbarLogout';
import { useAuth } from './../../../firebase/useAuth';
import StoreHeader from './../StoreHeader';
import NavigationCategoriesClosets from './NavigationCategoriesClosets';


export default function StoreClosetsGeneral() {
const { user } = useAuth();
    return (
<div>
{user?
<div>
<NavbarLogout />
<StoreHeader />
<NavigationCategoriesClosets />
<StoreClosets />
</div>
:
<div>
<NavbarLogin />
<StoreHeader />
<NavigationCategoriesClosets />
<StoreClosets />
</div>
}                 
</div>
    )
}
