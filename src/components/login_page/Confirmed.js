import React from 'react';
import { useAuth } from '../../firebase/useAuth';
import { useHistory } from 'react-router-dom';
import ConfirmedSuccess from './ConfirmedSuccess';
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
