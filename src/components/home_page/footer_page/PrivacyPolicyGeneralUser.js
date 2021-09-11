import React from 'react';
import { useAuth } from '../../../firebase/useAuth';
import NavbarLogin from '../../NavbarLogin';
import NavbarLogout from '../../NavbarLogout';
import PrivacyPolicyGeneral from './PrivacyPolicyGeneral';

export default function PrivacyPolicyGeneralUser() {
const { user } = useAuth();
    return (
<div>
{user?
<div>
<NavbarLogout />
<PrivacyPolicyGeneral />
</div>
:
<div>
<NavbarLogin />
<PrivacyPolicyGeneral />
</div>
}    
</div>
    )
}
