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

const useStyles = makeStyles((theme) => ({
    root: {

    }
}))

export default function OrdersList() {
const classes = useStyles();
const { user, app } = useAuth();
const db = getFirestore(app);
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);


useEffect(() => {
    purchasedItems();
}, []);

const purchasedItems = async () => {
    setLoading(true);
    const q = query(collection(db, "purchase"), where("id_u", "==", user.uid));
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
    return <CircularProgress />
}

    return (
<div>
{products.map((product) => (
    <div key={product.name}>
        <p>{product.name}</p>
        <p>{product.desc}</p>
    </div>
))}


</div>
    )
}
