import React, { useState, useEffect } from 'react';
import { useAuth } from '../../firebase/useAuth';
import {
    collection,
    where,
    orderBy,
    getFirestore,
    onSnapshot,
    query,
     } from "firebase/firestore";
import {
    Typography,
    Button,
    Grid,
    Box,
    CircularProgress
    } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        border:'1px solid black',
        borderRadius:'5%',
        width:'160px',
        marginBottom: '0.3rem',
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#bdbdbd'
    },
    btn_menu: {
        
    }
}))

export default function SortAllCategories() {
const classes = useStyles();
const [storeProducts, setStoreProducts] = useState([]);
const { user, app } = useAuth();
const [loading, setLoading] = useState(false);

const db = getFirestore(app);


if (loading) {
    return (
       <div style={{display:'flex', justifyContent:'center', paddingTop:'10rem'}}>
           <CircularProgress />
       </div> 
    )
};


    return (
<div style={{paddingTop:'0.5rem'}}>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="flex-start"
>

<Grid item xs={11}>
    <Box display="flex" alignItems="center">
<Typography style={{paddingRight:'0.3rem'}} variant="body2">Sort by:</Typography>
<Button href="/sort_low_to_high_price" size="small" variant="outlined" className={classes.btn_menu}>Low to high price</Button>
<Button size="small" variant="outlined" className={classes.btn_menu}>High to low price</Button> 
<Button size="small" variant="outlined" className={classes.btn_menu}>Name</Button> 
</Box> 
</Grid>

</Grid>
</div>
    )
}
