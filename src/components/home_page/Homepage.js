import NavbarLogin from './../NavbarLogin';
import NavbarLogout from './../NavbarLogout';
import {
     Typography,
     } from '@material-ui/core';
import { useAuth } from '../../firebase/useAuth';
import HomeHeader from './HomeHeader';


export default function Homepage() {
const { user } = useAuth()
    return (
<div>
{user?
<div> 
<NavbarLogout />
<HomeHeader />
</div>
:
<div>
<NavbarLogin />
<HomeHeader />
</div>
}
     
</div>
    )
}
