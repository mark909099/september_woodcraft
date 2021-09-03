import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../firebase/useAuth';
import {
    CircularProgress,
    Button,
    TextField,
    Box,
    Grid,
    Fade,
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function ConfirmPasswordless() {
// const classes = useStyles();
const {handleSubmit, control, register} = useForm();
const {signMagicLink} = useAuth();
const location = useLocation();
const history = useHistory();
const [loading, setLoading] = useState(false);

const onSubmit = async (data) => {
    try {
        await signMagicLink(data.email, location.search)
        history.push('/')
    } catch(err) {
        console.log(err)
    }
}

    return (

<div>
<form>

    <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) =>
         <TextField placeholder="Enter email" {...field} />}
    />

<Button
    variant="outlined"
    onClick={handleSubmit(onSubmit)}
    disabled={loading}>
    {loading ? <CircularProgress /> : "Send"}
        
    </Button>

</form>

{/* <form onSubmit={handleSubmit(onSubmit)}>
            <input name="email" type="email" placeholder="Email" {...register("email")}/>
            <input type="submit" />
        </form>         */}
</div>
    )
}
