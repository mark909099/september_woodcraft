import React from 'react';
import {
     Grid, 
     Button,
     Input,
     Select,
     TextField,
     Checkbox,
     FormControlLabel
    } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    title: yup.string().required(),
    message: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().required(),
  });

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop:'2rem',
        paddingLeft:'2rem'
    },
    submit_button: {
        paddingTop:'1rem'
    }
}))

export default function ContactForm() {
 const { handleSubmit, control } = useForm();
const classes = useStyles();


const onSubmit = data => console.log(data);

    return (
<div className={classes.root}>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="flex-start"
>

<Grid item>
{/* <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form> */}
    </Grid>  
<Grid item>
    
 <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => <TextField {...field} />}
      />
      <input type="submit" />
    </form>
    
    </Grid> 
<Grid item className={classes.submit_button}></Grid>  

</Grid>      
</div>
    )
}

