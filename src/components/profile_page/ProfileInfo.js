import React, { useState } from 'react';
import { useAuth } from '../../firebase/useAuth';
import { useHistory } from 'react-router-dom';
import {
    Grid,
    Typography,
    Button,
    TextField,
    CircularProgress,
    Box,
    DialogContentText,
    DialogContent,
    DialogTitle,
    Dialog,
     } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    getAuth,
    updateProfile,
    updateEmail,
    deleteUser,
  } from "firebase/auth";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const useStyles = makeStyles({
    root: {
      padding:'1rem'
    },
    info: {
      paddingTop:'0.2rem'
    },
    box_of_input: {
      paddingTop:'1rem'
    },
    submit_button: {
      marginLeft:'0.7rem'
    },
    dialog_header: {

    },
    dialog_text: {
      color:'red',
      textAlign:'center'
    }
  });

const auth = getAuth();


const schema = yup.object().shape({
  email: yup.string().email("not a valid email"),
});

export default function ProfileInfo() {
const classes = useStyles();
const { user } = useAuth();
const history = useHistory();
const { handleSubmit, control, formState:{ errors } } = useForm({
  resolver: yupResolver(schema)
 });

const [loading, setLoading] = useState(false);
const [loading2, setLoading2] = useState(false);
const [open, setOpen] = useState(false);

const handleClickOpen = () => {
    setOpen(true);
}

const handleClose = () => {
    setOpen(false);
}


const onSubmit = async (data) => {
  setLoading(true)
  updateProfile(auth.currentUser, {
    displayName: data.name
  }).then(() => {
    // Profile updated!
    window.location.reload();
  }).catch((error) => {
    console.log(error)
    if (error.code === 'auth/requires-recent-login') {
      setLoading2(false)
      window.alert("You must relogin to change name")
    }
  });
}

const onSubmit1 = async (data) => {
  setLoading2(true)
  updateEmail(auth.currentUser, data.email).then(() => {
    // Email updated!
    window.location.reload();
  }).catch((error) => {
    console.log(error)
    if (error.code === 'auth/requires-recent-login') {
      setLoading2(false)
      window.alert("You must relogin to change email")
    }
    // An error occurred

  });
}

const deleteUser1 = () => {
  const user = auth.currentUser;

deleteUser(user).then(() => {
  // User deleted.
}).catch((error) => {
  console.log(error)
  if (error.code === 'auth/requires-recent-login') {
    setLoading2(false)
    window.alert("You must relogin to delete this account")
  }
});
}

    return (
<div className={classes.root}>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="flex-start"
>
<Typography className={classes.info} variant="h3">Profile</Typography>
<Typography className={classes.info} variant="h6">Name: {user.displayName? user.displayName : "Name not defined"}</Typography>
<Typography className={classes.info} variant="h6">Email: {user.email? user.email : "Email not defined"}</Typography>




<form onSubmit={handleSubmit(onSubmit)}>
<Box className={classes.box_of_input} display="flex" flexDirection="row" alignItems="flex-end">
<Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField
        label="Name"
        InputProps={{className: classes.form_customer_text}}
         {...field} />}
      />
<Typography className={classes.error} variant="body2">{errors.name?.message}</Typography>
<Button variant="outlined" className={classes.submit_button} onClick={handleSubmit(onSubmit)}>{loading? <CircularProgress /> : "Update name"}</Button>
</Box>
</form>



<form onSubmit={handleSubmit(onSubmit1)}>
<Box className={classes.box_of_input} display="flex" flexDirection="row" alignItems="flex-end">
<Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField
        label="Email"
        InputProps={{className: classes.form_customer_text}}
         {...field} />}
      />

<Button variant="outlined" className={classes.submit_button} onClick={handleSubmit(onSubmit1)}>{loading2? <CircularProgress /> : "Update email"}</Button>
</Box>
<Typography className={classes.error} variant="body2">{errors.email?.message}</Typography>
</form>

<Button style={{marginTop:'1.5rem'}} variant="outlined" onClick={handleClickOpen}>Delete account</Button>

</Grid>

<Dialog
open={open}
onClose={handleClose}
>
<DialogTitle>{"Are you sure you want to delete this account?"}</DialogTitle>
<DialogContent>
          <DialogContentText className={classes.dialog_text}>
            <Button variant="outlined" style={{margin:'0.5rem'}} onClick={handleClose}>No</Button>
            <Button variant="outlined" style={{margin:'0.5rem'}} onClick={deleteUser1}>Yes, delete this account</Button>
          </DialogContentText>
        </DialogContent>
</Dialog>

</div>
    )
}
