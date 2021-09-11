import React from 'react';
import { useAuth } from '../../../firebase/useAuth';
import NavbarLogin from '../../NavbarLogin';
import TermsOfUse from './TermsOfUse';
import NavbarLogout from '../../NavbarLogout';

export default function TermsOfUseGeneral() {
const { user } = useAuth();
    return (
<div>
{user?
<div>
<NavbarLogout />
<TermsOfUse />
</div>
:
<div>
<NavbarLogin />
<TermsOfUse />
</div>
}      
</div>
    )
}
