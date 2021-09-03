import React, { useState } from 'react';
import { useForm, Controller} from 'react-hook-form';
import { useHistory } from 'react-router-dom';
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
const {handleSubmit, control, formState: { errors }, setError} = useForm();
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
<form>
{errors.email && <h1>error occured</h1>}
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
    >
    {loading ? <CircularProgress /> : "Send1"}
        
    </Button>

</form>

{/* <form onSubmit={handleSubmit(onSubmit)}>
            <input name="email" type="email" placeholder="Email" {...register("email")}/>
            <input type="submit" />
        </form>         */}
</div>
    )
}
