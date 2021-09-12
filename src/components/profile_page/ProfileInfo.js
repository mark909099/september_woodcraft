import React, { useState, useEffect, useContext, createContext} from 'react';
import { useAuth } from '../../firebase/useAuth';
import { useHistory } from 'react-router-dom';
import {
    Grid,
    Typography,
    Button,
    TextField,
    CircularProgress
     } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    getAuth,
    sendSignInLinkToEmail,
    signInWithEmailLink,
    GoogleAuthProvider,
    signInWithRedirect,
    updateProfile,
    deleteUser,
    signOut,
    onAuthStateChanged,
  } from "firebase/auth";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const useStyles = makeStyles({
    root: {
      
    },
  });

const auth = getAuth();

export default function ProfileInfo() {
const classes = useStyles();
const { user } = useAuth();
const history = useHistory();
const { handleSubmit, control, formState: { errors } } = useForm();
const [name, setName] = useState("");
const [loading, setLoading] = useState(false);

const onSubmit = async (data) => {
  setLoading(true)
  updateProfile(auth.currentUser, {
    displayName: data.name
  }).then(() => {
    // Profile updated!
    window.location.reload();
  }).catch((error) => {
    console.log(error)
  });
}


const deleteUser1 = () => {
  const user = auth.currentUser;

deleteUser(user).then(() => {
  // User deleted.
}).catch((error) => {
  console.log(error)
});
}

// if (loading) {
//   return <h1>Loading...</h1>
// }


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

</Grid>


<form onSubmit={handleSubmit(onSubmit)}>
<Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField
        label="Name"
        InputProps={{className: classes.form_customer_text}}
         {...field} />}
      />

<Button variant="outlined" className={classes.submit_button} onClick={handleSubmit(onSubmit)}>{loading? <CircularProgress /> : "Submit1"}</Button>
</form>

<Button onClick={deleteUser1}>delete user</Button>
</div>
    )
}
