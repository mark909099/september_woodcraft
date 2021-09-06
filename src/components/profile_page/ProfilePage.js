import React from 'react';
import { useAuth } from '../../firebase/useAuth';
import { useHistory } from 'react-router-dom';
import ProfileInfo from './ProfileInfo';
import { makeStyles } from '@material-ui/core/styles';
import NavbarLogout from './../NavbarLogout';
import ProfileInfoStructure from './ProfileInfoStructure';

const useStyles = makeStyles({
    list: {
      width: '150px',
    },
    paper: {
      backgroundColor:'#212121'
    },
    item: {
      color:'white',
      fontSize:'1.5rem',
      fontWeight:'700'
    }
  });

export default function ProfilePage() {
const classes = useStyles();
const { user } = useAuth();
const history = useHistory();


    return (
<div>
{user?
<>
<NavbarLogout />
<ProfileInfoStructure />
</>
:
history.push('/')
}    
</div>
    )
}
