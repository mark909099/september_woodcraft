import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding:'1rem'
    }
}))

export default function TermsOfUse() {
const classes = useStyles();
    return (
<div className={classes.root}>
<Typography variant="h3" style={{paddingBottom:'1rem'}}>Terms of use</Typography>
<Typography variant="h4">1. Introduction</Typography> 
<Typography variant="body1">
<p>This website is operated by September Woodcraft. The terms “we”, “us”, and “our” refer to September Woodcraft. The use of our website is subject to the following terms and conditions of use, as amended from time to time (the “Terms”). The Terms are to be read together by you with any terms, conditions or disclaimers provided in the pages of our website. Please review the Terms carefully. The Terms apply to all users of our website, including without limitation, users who are browsers, customers, merchants, vendors and/or contributors of content. If you access and use this website, you accept and agree to be bound by and comply with the Terms and our Privacy Policy. If you do not agree to the Terms or our Privacy Policy, you are not authorized to access our website, use any of our website’s services or place an order on our website.</p>
</Typography> 

<Typography variant="h4">2. Use of our website</Typography> 
<Typography variant="body1">

<p>You agree to use our website for legitimate purposes and not for any illegal or unauthorized purpose, including without limitation, in violation of any intellectual property or privacy law. By agreeing to the Terms, you represent and warrant that you are at least the age of majority in your state or province of residence and are legally capable of entering into a binding contract.</p>

<p>You agree to not use our website to conduct any activity that would constitute a civil or criminal offence or violate any law. You agree not to attempt to interfere with our website’s network or security features or to gain unauthorized access to our systems.</p>

<p>You agree to provide us with accurate personal information, such as your email address, mailing address and other contact details in order to complete your order or contact you as needed. You agree to promptly update your account and information. You authorize us to collect and use this information to contact you in accordance with our Privacy Policy.</p>

</Typography> 

<Typography variant="h4">3. General conditions</Typography> 
<Typography variant="body1">

<p>We reserve the right to refuse service to anyone, at any time, for any reason. We reserve the right to make any modifications to the website, including terminating, changing, suspending or discontinuing any aspect of the website at any time, without notice. We may impose additional rules or limits on the use of our website. You agree to review the Terms regularly and your continued access or use of our website will mean that you agree to any changes.</p>

<p>You agree that we will not be liable to you or any third party for any modification, suspension or discontinuance of our website or for any service, content, feature or product offered through our website.</p>
</Typography> 


<Typography variant="h4">4. Links to third party websites</Typography> 
<Typography variant="body1">

<p>Links from or to websites outside our website are meant for convenience only. We do not review, endorse, approve or control, and are not responsible for any sites linked from or to our website, the content of those sites, the third parties named therein, or their products and services. Linking to any other site is at your sole risk and we will not be responsible or liable for any damages in connection with linking. Links to downloadable software sites are for convenience only and we are not responsible or liable for any difficulties or consequences associated with downloading the software. Use of any downloaded software is governed by the terms of the license agreement, if any, which accompanies or is provided with the software.</p>

</Typography> 

<Typography variant="h4">5. Your personal information</Typography> 
<Typography variant="body1">

<p>Please see our Privacy Policy to learn about how we collect, use, and share your personal information.</p>

</Typography> 


<Typography variant="h4">6. Governing law</Typography> 
<Typography variant="body1">

<p>Any disputes arising out of or relating to the Terms, the Privacy Policy, use of our website, or our products or services offered on our website will be resolved in accordance with the laws of the state of Israel without regard to its conflict of law rules.</p>

</Typography> 

</div>
    )
}
