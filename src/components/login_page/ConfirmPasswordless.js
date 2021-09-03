import React, { useState } from 'react';
import { useForm, Controller} from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../firebase/useAuth';
import {
    CircularProgress,
    Button,
    TextField,
    Typography,
    Grid,
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email("Not a valid email adress").required("Enter an email"),
  });

const useStyles = makeStyles((theme) => ({
    head: {
        textAlign: 'center',
        paddingTop:'0.7rem',
        paddingBottom:'1.5rem',
        fontFamily:'Tahoma'
    },
    email_error: {
        color:'red',
    }
}))


export default function ConfirmPasswordless() {
const classes = useStyles();
const {handleSubmit, control, formState: { errors }, setError} = useForm({
    resolver: yupResolver(schema)
});
const {signMagicLink} = useAuth();
const history = useHistory();
const [loading, setLoading] = useState(false);

const onSubmit = async (data) => {
    try {
        setLoading(true);
        await signMagicLink(data.email);
        history.push('/confirmed');
    } catch(err) {
        console.log(err)
    }
}

    return (

<div>
<Grid item><Typography variant="h3" className={classes.head}>Confirm email</Typography></Grid>
<form>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>

<Grid item>

<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="flex-start"
>
    
<Grid item>
<Controller
    name="email"
    control={control}
    defaultValue=""
    rules={{ required: true }}
    render={({ field }) =>
     <TextField placeholder="Enter email" {...field} />}
/>
</Grid>
<Grid item><Typography className={classes.email_error} variant="body2">{errors.email?.message}</Typography></Grid>

</Grid>

</Grid>

<Grid item>
<Button
    variant="outlined"
    onClick={handleSubmit(onSubmit)}
    >
    {loading ? <CircularProgress /> : "Send"}</Button>
</Grid>


</Grid>
</form>

</div>
    )
}
