import React, { useState } from 'react';
import { useAuth } from '../../firebase/useAuth';
import { FacebookLoginButton } from "react-social-login-buttons";

export default function FacebookLogin() {
const { signFacebook } = useAuth();

    return (
<div>
<FacebookLoginButton style={{width:'260px'}} onClick={signFacebook} />           
</div>
    )
}
