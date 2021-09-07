import NavbarLogin from './../NavbarLogin';
import NavbarLogout from './../NavbarLogout';
import {
     Typography,
     } from '@material-ui/core';
import { useAuth } from '../../firebase/useAuth';
import HomeHeader from './HomeHeader';
import { Fade } from 'react-reveal';
import ProductView from './view_page/ProductView';
import OurStoryGeneral from './our_story_page/OurStoryGeneral';
import ExtraPadding from './our_story_page/ExtraPadding';

export default function Homepage() {
const { user } = useAuth();
    return (
<div>
{user?
<div>
<Fade delay={250} duration={1000}>
<NavbarLogout />
<HomeHeader />
</Fade>
<ProductView />
<ExtraPadding />
<Fade duration={5000}>
<OurStoryGeneral />
</Fade>
</div>
:
<div>
<Fade delay={250} duration={250}>
<NavbarLogin />
<HomeHeader />
</Fade>
<ProductView />
<ExtraPadding />
<Fade duration={5000}>
<OurStoryGeneral />
</Fade>
</div>
}
     
</div>
    )
}
