import React from 'react';
import { useAuth } from '../../firebase/useAuth';
import { GoogleLoginButton } from "react-social-login-buttons";

export default function GoogleLogin() {

const { signGoogle } = useAuth();

    return (
<div>
<GoogleLoginButton style={{width:'260px'}} onClick={signGoogle} />
</div>
    )
}
