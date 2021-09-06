import React, { useState, useEffect } from 'react';
import { useAuth } from '../../firebase/useAuth';
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    setDoc,
    getFirestore,
    onSnapshot,
    query,
     } from "firebase/firestore";
import {
    CardMedia,
    Typography,
    Box,
    Grid,
    Button
    } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    product_image: {
        height: '150px',
        width: '150px',
        justifyContent:'center'
    },
    item: {
        border:'1px solid black',
        borderRadius:'5%',
    },
    grid_container: {
        padding:'1rem',
    }
}))

export default function StoreProducts() {
const classes = useStyles();
const [storeProducts, setStoreProducts] = useState([]);
const [loading, setLoading] = useState(false);

const { user, app } = useAuth();
const db = getFirestore(app);

useEffect(() => {
    getAllStoreProducts()
}, []);

const getAllStoreProducts = async () => {
    setLoading(true);
    const q = query(collection(db, "store"));
    onSnapshot(q, (querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc2) => {
            items.push(doc2.data())
        })
        setStoreProducts(items);
        setLoading(false);
    })
}

    return (
<div>
<Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
{storeProducts.map((storeProduct) => (
    
      <Grid className={classes.grid_container} key={storeProduct.id} item xs={12} sm={6} md={4} lg={3}>
        <Box className={classes.item}>
        <Box display="flex" flexDirection="column" alignContent="center">
        <Typography variant="h6">{storeProduct.name}</Typography>
        <Typography variant="body1">{storeProduct.desc}</Typography>
        <Box display="flex" justifyContent="center">
      <CardMedia className={classes.product_image}
          component="img"
          alt=""
          image={storeProduct.photo}
        />
        </Box>
        <Typography variant="body2">Price: {storeProduct.price}</Typography>
        <Box display="flex" justifyContent="center" style={{border:'1px solid black', borderRadius:'20%'}}>
        <Button fullWidth="true">Add to cart</Button>
        </Box>
        </Box>
        </Box>
    </Grid>
))}      
</Grid>     
</div>

    )
}
