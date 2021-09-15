import React, { useState, useEffect } from 'react';
import { useAuth } from '../../firebase/useAuth';
import {
    Typography,
    CircularProgress
   } from '@material-ui/core';
   import {
    collection,
    query,
    where,
    orderBy,
    getFirestore,
    onSnapshot,
     } from "firebase/firestore";
import { makeStyles } from '@material-ui/core/styles';
import './images.css';


const useStyles = makeStyles((theme) => ({
    root: {
    },
    single_order: {
        padding:'1rem',
        borderBottom:'1px solid black',
        paddingBottom:'1rem',
    },
    header: {
        [theme.breakpoints.up('xs')]: {
            fontSize:'1.8rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'2.5rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'3rem'
        },
    },
    text: {
        [theme.breakpoints.up('xs')]: {
            fontSize:'1rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'1.2rem'
        },
    },
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
        <Typography className={classes.header}>{product.name}</Typography>
        <img className='image1' src={`${product.photo}`} />
        <Typography className={classes.text}>Quantity: {product.qty}</Typography>
        <Typography className={classes.text}>Price: {product.price*product.qty}</Typography>
        <Typography className={classes.text}>Delivery method: {product.delivery_method}</Typography>
        <Typography className={classes.text}>Status: {orderStatus}</Typography>
        <Typography className={classes.text}>Order date: {product.time_day}/{product.time_month}/{product.time_year}</Typography>
    </div>
))}


</div>
    )
}
