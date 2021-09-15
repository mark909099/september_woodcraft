import React from 'react';
import {
    Grid,
} from '@material-ui/core';
import { useAuth } from '../../firebase/useAuth';
import NavbarLogout from '../NavbarLogout';
import NavbarLogin from '../NavbarLogin';
import ContactForm from './ContactForm';
import DirectContact from './DirectContact';
import ContactFormHeader from './ContactFormHeader';


export default function ContactGeneral() {
const { user } = useAuth();
    return (
<div>
{user?
<div>
<NavbarLogout />
<ContactFormHeader />
<Grid
  container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
>
<Grid md={12} lg={6}><ContactForm /></Grid>
<Grid md={12} lg={6}><DirectContact /></Grid>
</Grid>
<div style={{paddingTop:'3rem'}}></div>
</div>
:

<div>
<NavbarLogin />
<ContactFormHeader />
<Grid
  container
  direction="row"
  justifyContent="flex-start"
  alignItems="flex-start"
>
<Grid md={12} lg={6}><ContactForm /></Grid>
<Grid md={12} lg={6}><DirectContact /></Grid>
</Grid>
<div style={{paddingTop:'3rem'}}></div>
</div>

}



</div>
    )
}
