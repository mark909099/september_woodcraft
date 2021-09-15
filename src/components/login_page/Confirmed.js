// **NOT IN PRODUCTION**

import React from 'react';
import { useAuth } from '../../firebase/useAuth';
import { useHistory } from 'react-router-dom';
import ConfirmedError from './ConfirmedError';

export default function Confirmed() {
const {user} = useAuth();
const history = useHistory();

    return (
<div>
{user?
history.push('/')
:
<ConfirmedError />
}           
</div>
    )
}
