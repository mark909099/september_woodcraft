import React from 'react';
import {
    Grid,
    Typography,
    Box,
    CardMedia,
    Divider,
    Button,
} from '@material-ui/core';
import { useAuth } from '../../firebase/useAuth';
import NavbarLogout from '../NavbarLogout';
import NavbarLogin from '../NavbarLogin';
import ContactForm from './ContactForm';


export default function ContactGeneral() {
const { user } = useAuth();
    return (
<div>
{user?
<div>
<NavbarLogout />
<ContactForm />
</div>
:

<div>
<NavbarLogin />
<ContactForm />
</div>

}



</div>
    )
}
