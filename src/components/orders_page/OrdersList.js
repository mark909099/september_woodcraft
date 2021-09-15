import React, { useState, useEffect } from 'react';
import { useAuth } from '../../firebase/useAuth';
import {
    Grid, 
    Button,
    Typography,
    Box,
    CircularProgress
   } from '@material-ui/core';
   import {
    collection,
    query,
     where,
     orderBy,
    doc,
    getDocs,
    setDoc,
    deleteDoc,
    getFirestore,
    onSnapshot,
    increment,
    updateDoc,
    deleteField
     } from "firebase/firestore";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import './images.css';


const useStyles = makeStyles((theme) => ({
    root: {
    },
    single_order: {
        padding:'1rem',
        borderBottom:'1px solid black',
        paddingBottom:'1rem',
    }
}))

export default function OrdersList() {
const classes = useStyles();
const { user, app } = useAuth();
const db = getFirestore(app);
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);
const [orderStatus, setOrderStatus] = useState('in progress')

useEffect(() => {
    purchasedItems();
}, []);

const purchasedItems = async () => {
    setLoading(true);
    const q = query(collection(db, "purchase"), where("id_u", "==", user.uid), orderBy("time", "desc"));
    onSnapshot(q, (querySnapshot) => {
        const items = [];
    querySnapshot.forEach((doc1) => {
        items.push(doc1.data());
    })
    setProducts(items);
    setLoading(false);
    });
}

if (loading) {
    return(
        <div style={{display:"flex", justifyContent:"center"}}>
<CircularProgress />
        </div>
    )
     
}

    return (
<div className={classes.root}>
{products.map((product) => (
    <div key={product.order_id} className={classes.single_order}>
        <p>{product.name}</p>
        <img className='image1' src={`${product.photo}`} />
        <p>Quanitity: {product.qty}</p>
        <p>Delivery method: {product.delivery_method}</p>
        <p>Status: {orderStatus}</p>
        <p>Order date: {product.time_day}/{product.time_month}/{product.time_year}</p>
    </div>
))}


</div>
    )
}
