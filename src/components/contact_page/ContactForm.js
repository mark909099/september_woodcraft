import React, { useState } from 'react';
import {
     Grid, 
     Button,
     TextField,
     Typography,
     CircularProgress,
     Snackbar,
    } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert'
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useAuth } from '../../firebase/useAuth';
import ContactFormHeader from './ContactFormHeader';
import { uuid }  from 'uuidv4';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const schema = yup.object().shape({
    title: yup.string().required("title is a required field"),
    message1: yup.string().required("message is a required field"),
    name: yup.string().required("name is a required field"),
    email: yup.string().email("not a valid email").required('email is a required field'),
  });

const useStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.up('xs')]: {
        paddingTop:'2rem',
        paddingLeft:'1rem'
      },
      [theme.breakpoints.up('md')]: {
        paddingTop:'3rem',
        paddingLeft:'3rem'
      },
    },
    customer_support: {
      [theme.breakpoints.up('xs')]: {
        fontSize:'2rem'
      },
      [theme.breakpoints.up('sm')]: {
        fontSize:'3rem'
      },
      [theme.breakpoints.up('md')]: {
        fontSize:'4rem'
      },
    },
    form_customer: {
      paddingBottom:"1.5rem",
      [theme.breakpoints.up('xs')]: {
        fontSize:'2rem'
      },
      [theme.breakpoints.up('sm')]: {
        fontSize:'3rem'
      },
      [theme.breakpoints.up('md')]: {
        fontSize:'4rem'
      },
    },
    form_customer_text: {
      [theme.breakpoints.up('xs')]: {
        fontSize:'1rem',
        width:'45vw',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize:'1.2rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize:'1.2rem',
        width:'320px',
      },
    },
    form_customer_message: {
      [theme.breakpoints.up('xs')]: {
        fontSize:'1rem',
        width:'70vw',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize:'1.2rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize:'1.2rem',
        width:'450px',
      },
    },
    error: {
      color:'red'
    },
    submit_button: {
        fontFamily:'Verdana',
    }
}))

export default function ContactForm() {
 const { handleSubmit, control, formState:{ errors } } = useForm({
  resolver: yupResolver(schema)
 });
const classes = useStyles();
const { app } = useAuth();
const db = getFirestore(app);

const [loading, setLoading] = useState(false);
const [open, setOpen] = useState(false);

const onSubmit =async (data) => {
const d = new Date().toString();
  try {
    setLoading(true);
    await setDoc(doc(db, "contact", (d + uuid())), {data});
    setLoading(false)
    setOpen(true)
  } catch (err) {
    console.log(err)
  }
};


const handleClose = (reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};

    return (
<div>
<Grid className={classes.root}
  container
  direction="column"
  justifyContent="center"
  alignItems="flex-start"
>

<Grid item className={classes.form_customer}><Typography className={classes.customer_support} variant="h3">Customer support</Typography></Grid>

<form onSubmit={handleSubmit(onSubmit)}>
{/* name field */}
<Grid item className={classes.form_customer}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField
        label="Name *"
        InputProps={{className: classes.form_customer_text}}
         {...field} />}
      />
<Typography className={classes.error} variant="body2">{errors.name?.message}</Typography>
</Grid> 

{/* email field */}
<Grid item className={classes.form_customer}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField
        label="Email *"
        InputProps={{className: classes.form_customer_text}}
         {...field} />}
      />
<Typography className={classes.error} variant="body2">{errors.email?.message}</Typography>
</Grid> 

{/* title field */}
<Grid item className={classes.form_customer}>
      <Controller
        name="title"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField
        label="Title *"
        InputLabelProps={{className: classes.form_label}}
        InputProps={{className: classes.form_customer_text}}
         {...field} />}
      />
<Typography className={classes.error} variant="body2">{errors.title?.message}</Typography>
</Grid> 

{/* message field */}
<Grid item className={classes.form_customer}>
      <Controller
        name="message1"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField
        multiline="true"
        label="Message *"
        minRows="15"
        variant="outlined"
        InputProps={{className: classes.form_customer_message}}
         {...field} />}
      />
<Typography className={classes.error} variant="body2">{errors.message1?.message}</Typography>
</Grid> 

<Grid item>
<Button variant="outlined" className={classes.submit_button} onClick={handleSubmit(onSubmit)}>{loading? <CircularProgress /> : "Submit"}</Button>
</Grid>  
</form>
</Grid>  

<Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success">
    Message sent successfully
  </Alert>
</Snackbar>

</div>
    )
}

