import React, { useState, useEffect, useContext, createContext} from 'react';
import { useAuth } from '../../firebase/useAuth';
import { useHistory } from 'react-router-dom';
import {
    Grid,
    Typography,
    Button,
    Input
     } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    getAuth,
    sendSignInLinkToEmail,
    signInWithEmailLink,
    GoogleAuthProvider,
    signInWithRedirect,
    updateProfile,
    signOut,
    onAuthStateChanged,
  } from "firebase/auth";
  import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles({
    root: {
      
    },
  });


  const AuthContext = createContext();





    const auth = getAuth();







export default function ProfileInfo() {
const classes = useStyles();
const { user } = useAuth();
const history = useHistory();
const { register, handleSubmit, control, formState: { errors } } = useForm();
const [state, setState] = ('')
const [name, setName] = useState("");

updateProfile(auth.currentUser, {
  displayName: name,
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});


const changeName = ({target}) => {
  setName(target.value)
}
const showValue = () => console.log(name)

  console.log(state)



    return (
<div className={classes.root}>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="flex-start"
>
<Typography variant="h3">Profile</Typography>
<Typography variant="body1">Name: {user.displayName}</Typography>
<Typography variant="body1">Email: {user.email}</Typography>
{/* <button onClick={async () => go()}>goog</button> */}
</Grid>
<form>
<input type="text" value={name} onChange={changeName} />
<button onClick={showValue} type="submit">change name</button>
</form>


</div>
    )
}
