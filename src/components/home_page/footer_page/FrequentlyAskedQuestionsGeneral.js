import React from 'react';
import { useAuth } from '../../../firebase/useAuth';
import NavbarLogin from '../../NavbarLogin';
import NavbarLogout from '../../NavbarLogout';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';

export default function FrequentlyAskedQuestionsGeneral() {
const { user } = useAuth();
    return (
<div>
{user?
<div>
<NavbarLogout />
<FrequentlyAskedQuestions />
</div>
:
<div>
<NavbarLogin />
<FrequentlyAskedQuestions />
</div>
}   
</div>
    )
}
