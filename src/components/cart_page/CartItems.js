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
import {
   Grid, 
   Button,
   Typography,
   Box
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './buttons.css';

const useStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.up('xs')]: {
        paddingTop:'2rem',
        paddingLeft:'1rem'
      },
      [theme.breakpoints.up('md')]: {
        paddingTop:'3rem',
        paddingLeft:'3rem'
      },
    },
    name: {
        paddingTop:'1rem',
        paddingBottom:'0.2rem',
      [theme.breakpoints.up('xs')]: {
        fontSize:'1.2rem'
      },
      [theme.breakpoints.up('sm')]: {
        fontSize:'1.5rem'
      },
      [theme.breakpoints.up('md')]: {
        fontSize:'2rem'
      },
    },
    price: {
        paddingBottom:'0.1rem',
        [theme.breakpoints.up('xs')]: {
          fontSize:'0.9rem'
        },
        [theme.breakpoints.up('sm')]: {
          fontSize:'1.1rem'
        },
        [theme.breakpoints.up('md')]: {
          fontSize:'1.3rem'
        },
      },
    quantity: {
        paddingBottom:'0.4rem',
      [theme.breakpoints.up('xs')]: {
        fontSize:'0.9rem'
      },
      [theme.breakpoints.up('sm')]: {
        fontSize:'1.1rem'
      },
      [theme.breakpoints.up('md')]: {
        fontSize:'1.3rem'
      },
    },
    delete_button_box: {
        paddingTop:'0.6rem',
    },
    delete_button: {
        paddingTop:'0.5rem',
        borderColor:'#9e9e9e',
        fontFamily:'David',
        width:'70px',
        height:'32px',
      [theme.breakpoints.up('xs')]: {
        fontSize:'0.9rem',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize:'0.9rem'
      },
      [theme.breakpoints.up('md')]: {
        fontSize:'1.1rem'
      },
    },
    total_price: {
        [theme.breakpoints.up('xs')]: {
          fontSize:'1.1rem'
        },
        [theme.breakpoints.up('sm')]: {
          fontSize:'1.3rem'
        },
        [theme.breakpoints.up('md')]: {
          fontSize:'1.5rem'
        },
      },
}))


export default function CartItems() {
const classes = useStyles();
const { user } = useAuth();

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);
const [showPickup, setShowPickup] = useState(true);
const [showHomeDelivery, setShowHomeDelivery] = useState(null);
const [showExpressDelivery, setShowExpressDelivery] = useState(null);
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

const [sum, setSum] = useState(null)
let sum1 = products.map((product) => 
    product.price * product.qty 
    
).reduce((a,b) => a + b, 0)

let sum2 = Math.ceil(sum1*1.1);
let sum3 = sum1*1.4;

const ShowPrice = () => {
    
    if (showPickup) {
        return sum1
    } else if (showHomeDelivery) {
        return sum2
    } else {
        return sum3
    }

}

const ShowDeliveryMethod = () => {
    
    if (showPickup) {
        return (
<Typography className={classes.total_price}>Delivery method: Store pick up</Typography>
        )
    } else if (showHomeDelivery) {
        return (
<Typography className={classes.total_price}>Delivery method: Home delivery</Typography>
        )
    } else {
        return (
<Typography className={classes.total_price}>Delivery method: Express delivery</Typography>
        )
    }

}


    return (
<div>


{/* start of grid */}
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="flex-start"
>
<Grid item xs={0} md={1} lg={3} xl={4}></Grid>
{/* grid item 1: left side of screen */}
<Grid item xs={6} md={5} lg={3} xl={2}>
    <Box style={{paddingLeft:'1rem'}} display="flex" flexDirection="column" alignItems="flex-start">
<Typography variant="h4">My Items</Typography>
{products.map((product) => (
    <div key={product.name}>
        <Typography className={classes.name} variant="h5">{product.name}</Typography>
        <Typography className={classes.price} variant="body1">Price: {product.price}</Typography>
        <Typography className={classes.quantity} variant="body1">quantity: {product.qty}</Typography>
        <button className="button1" onClick={async () => {

await setDoc(doc(db, "cart", (user.uid + product.name)), {
    qty: increment(1)
  }, {merge:true});

        }}>
            +
        </button>

        <button className="button2" onClick={async () => {

await setDoc(doc(db, "cart", (user.uid + product.name)), {
    qty: increment(-1)
  }, {merge:true});

        }}>
            -
        </button>



<div className={classes.delete_button_box}>
        <Button size="small" className={classes.delete_button} variant="outlined" onClick={async () => {

await deleteDoc(doc(db, "cart", (user.uid + product.name)));

        }}>Delete</Button>
</div>

</div>


))}
</Box>
</Grid>
{/* end of grid item 1 */}

{/* ----------------------------------- */}

{/* grid item 2: right side of screen */}
<Grid item xs={6} md={4}>
<Box style={{paddingRight:'0.5rem'}} display="flex" flexDirection="column" alignItems="flex-start">
<Typography variant="h5">Delivery methods</Typography>
<Box display="flex" flexDirection="row">
<button onClick={async () => {
    setShowPickup(true);
    setShowExpressDelivery(false);
    setShowHomeDelivery(false);
}}>Store pick up</button>

<button onClick={async () => {
    setShowPickup(false);
    setShowHomeDelivery(true);
    setShowExpressDelivery(false);
}}>Home delivery</button>

<button onClick={async () => {
    setShowPickup(false);
    setShowHomeDelivery(false);
    setShowExpressDelivery(true);
}}>Express delivery</button>
</Box>
<ShowDeliveryMethod />
<Typography className={classes.total_price}>Total price:<ShowPrice /></Typography>
</Box>
</Grid>
{/* end of grid item 2 */}


<Grid item xs={0} md={2}></Grid>


</Grid>
{/* end of grid */}




</div>
    )
}
