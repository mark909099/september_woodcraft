import React, { useState, useEffect } from 'react';
import { useAuth } from './../../firebase/useAuth';
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

export default function CartItems() {
const { user } = useAuth();

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);

const { app } = useAuth()
const db = getFirestore(app);

useEffect(() => {
    q3() 
 }, []);

 const q3 = async () => {
    setLoading(true);
    const q = query(collection(db, "cart"), where("id_u", "==", user.uid));
    onSnapshot(q, (querySnapshot) => {
    const items = [];
    querySnapshot.forEach((doc1) => {
        items.push(doc1.data());
    })
    setProducts(items);
    setLoading(false); 
    });  
}


let sum1 = products.map((product) => 

    product.price * product.qty
    
).reduce((a,b) => a + b, 0)
    return (
<div>
<h1>cart</h1>
{products.map((product) => (
    <div key={product.name}>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>quantity: {product.qty}</p>

        <button onClick={async () => {

await setDoc(doc(db, "cart", (user.uid + product.name)), {
    qty: increment(1)
  }, {merge:true});

        }}>
            +
        </button>

        <button onClick={async () => {

await setDoc(doc(db, "cart", (user.uid + product.name)), {
    qty: increment(-1)
  }, {merge:true});

        }}>
            -
        </button>

        <button onClick={async () => {

await deleteDoc(doc(db, "cart", (user.uid + product.name)));

        }}>Delete</button>
</div>

))}
<p>Total price:{sum1}</p>
</div>
    )
}
