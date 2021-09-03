import NavbarLogin from './../NavbarLogin';
import NavbarLogout from './../NavbarLogout';
import {
     Typography,
     } from '@material-ui/core';
import { useAuth } from '../../firebase/useAuth';

export default function Homepage() {
const { user } = useAuth()
    return (
<div>
{user?
<div> 
<NavbarLogout />
</div>
:
<div>
<NavbarLogin />
</div>
}
     
</div>
    )
}
