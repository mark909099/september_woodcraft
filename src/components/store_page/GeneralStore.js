import React from 'react';
import NavbarLogin from './../NavbarLogin';
import NavbarLogout from './../NavbarLogout';
import { useAuth } from './../../firebase/useAuth';
import StoreProducts from './StoreProducts';
import StoreHeader from './StoreHeader';
import NavigationCategories from './NavigationCategories';


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
