import React, { useState, useEffect } from 'react';
import {
    Typography,
    Button,
    Grid,
    } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        border:'1px solid black',
        borderRadius:'5%',
        width:'100px',
        margin: '0.3rem',
        display:'flex',
        justifyContent:'center'
    },
    button_clicked: {
        border:'1px solid black',
        borderRadius:'5%',
        width:'100px',
        margin: '0.3rem',
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#bdbdbd'
    },
    button_all_products: {
        border:'1px solid black',
        borderRadius:'5%',
        width:'160px',
        margin: '0.3rem',
        display:'flex',
        justifyContent:'center'
    },
    button_all_products_clicked: {
        border:'1px solid black',
        borderRadius:'5%',
        width:'160px',
        margin: '0.3rem',
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#bdbdbd'
    },
}))

export default function NavigationCategoriesTables() {
const classes = useStyles();
    return (
<div>

<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>

<Grid item><Button className={classes.button_all_products} href="/store">All products</Button></Grid>

<Grid item>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>

<Grid item>
    <Button className={classes.button} href="/store_tables">Tables</Button>
</Grid>

<Grid item>
    <Button className={classes.button} href="/store_chairs">Chairs</Button>
</Grid>

<Grid item>
    <Button className={classes.button_clicked} href="/store_closets">Closets</Button>
</Grid>

</Grid>
</Grid>

</Grid>
</div>
    )
}
