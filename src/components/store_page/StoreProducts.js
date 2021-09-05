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
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    product_image: {
        height: '150px',
        width: '150px',
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
{storeProducts.map((storeProduct) => (
    <div key={storeProduct.id}>
        <h2>{storeProduct.name}</h2>
        <p>{storeProduct.desc}</p>
      <p>
      <CardMedia className={classes.product_image}
          component="img"
          alt=""
          image={storeProduct.photo}
        />
      </p>
    </div>
))}           
</div>
    )
}
