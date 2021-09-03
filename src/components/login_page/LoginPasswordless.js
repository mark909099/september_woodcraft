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
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
  

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
    }
}))

const startFade = true;

export default function LoginPasswordless() {
const classes = useStyles();
const {handleSubmit, control, register} = useForm();
const {sendMagicLink} = useAuth();

const [loading, setLoading] = useState(false);
const [isError, setIsError] = useState(false);

const onSubmit = async (data) => {
    try {
        await sendMagicLink(data.email)
    } catch (err) {
        console.log(err)
    }
}

    return (
<div className={classes.root}>

<form onSubmit={handleSubmit(onSubmit)}>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>

{/* input element */}
<Fade in={startFade} timeout={1000}>
<Grid>
    <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) =>
         <TextField className={classes.input} placeholder="Email" {...field} />}
    />
</Grid>
</Fade>

{/* button element */}
<Grid >
<Fade in={startFade} timeout={1000}>
    <Box style={{paddingLeft:'0.5rem', paddingTop:'0.5rem'}}>
    <Button className={classes.btn}
    variant="outlined"
    onClick={handleSubmit(onSubmit)}
    disabled={loading}>
    {loading ? <CircularProgress /> : "Send"}
        
    </Button>
    </Box>
    </Fade>
    </Grid>
    {/* <input name="email" type="email" placeholder="Email" {...register("email")}/>
    <input type="submit" /> */}

</Grid>
</form>   

</div>
    )
}
