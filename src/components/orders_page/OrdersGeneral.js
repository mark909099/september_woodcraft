import React from 'react';
import { useAuth } from '../../firebase/useAuth';
import { useHistory } from 'react-router-dom';
import OrdersList from './OrdersList';
import NavbarLogout from '../NavbarLogout';
import OrdersHeader from './OrdersHeader';

export default function OrdersGeneral() {
const history = useHistory();
const { user } = useAuth();

    return (
<div>
{user?
<div>
<NavbarLogout />
<OrdersHeader />
<OrdersList />   
</div>
:
history.push('/')
}
   
</div>
    )
}
