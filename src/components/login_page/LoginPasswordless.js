import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../../firebase/useAuth';
import {
    CircularProgress,
    Button,
    TextField,
    Box,
    Grid,
    Fade,
    Snackbar,
    Typography,
  } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop:'0.7rem'
    },
    header: {
        [theme.breakpoints.up('xs')]: {
            fontSize: '2rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem'
        },
    },
    input: {
        width:'250px' 
    },
    btn: {
        padding:'0.2rem'
    },
    email_error: {
        color: 'red',

    }
}))

const startFade = true;

const schema = yup.object().shape({
    email: yup.string().email("Not a valid email adress").required("Enter an email"),
  });

export default function LoginPasswordless() {
const classes = useStyles();
const {handleSubmit, control, formState:{ errors }} = useForm({
    resolver: yupResolver(schema)
});
const {sendMagicLink} = useAuth();

const [loading, setLoading] = useState(false);
const [open, setOpen] = useState(false);


const onSubmit = async (data) => {
    try {
        await sendMagicLink(data.email)
        setOpen(true)
    } catch (err) {
        console.log(err)
    }
}

const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

    return (
<div className={classes.root}>

<form>
{/* general grid: A:(input + error.message), B: (submit button) */}
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>

{/* general grid item A: input + error.message element */}
<Fade in={startFade} timeout={600}>
<Grid item>

{/* sub grid: A1:(input), A2:(error.message) */}
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="flex-start"
>
{/* sub grid item A1 */}
<Grid item>
    <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) =>
         <TextField className={classes.input} placeholder="Email" {...field} />}
    />
</Grid>

{/* sub grid item A1 */}
<Grid item><Typography className={classes.email_error} variant="body2">{errors.email?.message}</Typography></Grid>

</Grid>
</Grid>

{/* general grid item B: submit button */}
</Fade>
{/* button element */}
<Grid item>
<Fade in={startFade} timeout={3000}>
    <Box style={{paddingLeft:'0.5rem', paddingTop:'0.5rem'}}>
    <Button className={classes.btn}
    variant="outlined"
    onClick={handleSubmit(onSubmit)}
    >
    {loading ? <CircularProgress /> : "Send"}   
    </Button>
    </Box>
    </Fade>
    </Grid>

</Grid>
</form>  


<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info">
          Login link sent to email.
        </Alert>
</Snackbar>

</div>
    )
}
