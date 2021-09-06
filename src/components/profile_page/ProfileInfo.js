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
const [name1, setName1] = useState('sdsd');
const { register, handleSubmit, control, formState: { errors } } = useForm();



const onSubmit = (data) => {
    const setName = {name1}
    updateProfile(auth.currentUser, {
      displayName: setName
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
      console.log((error))
    });
  }

  console.log(name1)

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

{/* <form>
<input value={setName1} onChange={setName1} name="goes"/>
<button onClick={updateName} type="submit">update</button>
</form> */}


<form onSubmit={handleSubmit(onSubmit)}>
      {/* register y the "register" function */}
      <input defaultValue="" onChange={setName1} {...register("userName")} />
      
      
      <input type="submit" />
    </form>


    {/* <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => <Input {...field} />}
      />

<input type="submit" />
      </form> */}

</Grid>


</div>
    )
}
