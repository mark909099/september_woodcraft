import React from 'react';
import { useAuth } from './../../firebase/useAuth';
import { useHistory } from 'react-router-dom';
import CartItems from './CartItems';
import NavbarLogout from './../NavbarLogout';
import CartHeader from './CartHeader';

export default function CartGeneral() {
const { user } = useAuth();
const history = useHistory();
    return (
<div>
{user?
<div>
<NavbarLogout />
<CartHeader />
<CartItems />
</div>
:
history.push('/')
}        
</div>
    )
}
