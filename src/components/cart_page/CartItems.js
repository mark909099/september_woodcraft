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
    runTransaction
     } from "firebase/firestore";
import {
   Grid, 
   Button,
   Typography,
   Box,
   CircularProgress
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './buttons.css';
import './item.css';
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
    image: {
      [theme.breakpoints.up('xs')]: {
        height:'50px',
        
      },
      [theme.breakpoints.up('sm')]: {
        height:'60px',
        
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
    header_delivery: {
      paddingBottom: '0.5rem',
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
    delivery_method: {
      paddingTop:'0.4rem',
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
    delivery_method_text: {
      [theme.breakpoints.up('xs')]: {
        fontSize:'0.7rem'
      },
      [theme.breakpoints.up('sm')]: {
        fontSize:'0.9rem'
      },
      [theme.breakpoints.up('md')]: {
        fontSize:'1.1rem'
      },
    },
    btn_delivery: {
      [theme.breakpoints.up('xs')]: {
        fontSize:'0.7rem'
      },
      [theme.breakpoints.up('sm')]: {
        fontSize:'0.9rem'
      },
      [theme.breakpoints.up('md')]: {
        fontSize:'1.1rem'
      },
    },
    total_price: {
      paddingTop:'0.4rem',
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
      purchase_btn: {
        border:'2px solid black',
        borderRadius:'5%',
        fontWeight:'700',
        marginTop:'1rem',
        width:'140px',
        height:'45px'
      }
}))


export default function CartItems() {
const classes = useStyles();
const { user, app } = useAuth();
const history = useHistory();
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);
const [showPickup, setShowPickup] = useState(true);
const [showHomeDelivery, setShowHomeDelivery] = useState(false);
const [showExpressDelivery, setShowExpressDelivery] = useState(false);
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
    Math.ceil(product.price * product.qty)
    
).reduce((a,b) => a + b, 0)

let sum2 = Math.ceil(sum1*1.1);
let sum3 = Math.ceil(sum1*1.4);

const ShowPrice = () => {
    
    if (showPickup) {
        return sum1
    } else if (showHomeDelivery) {
        return sum2
    } else {
        return sum3
    }

}

const ShowDeliveryMethodInfo = () => {
  if (showPickup) {
    return "Store pick up"
  } else if (showHomeDelivery) {
    return "Home delivery"
  } else {
    return "Express delivery"
  }
}

const ShowDeliveryMethod = () => {
    
    if (showPickup) {
        return (
<Box display="flex" flexDirection="column" justifyContent="flex-start">
<Typography className={classes.delivery_method}>Delivery method: Store pick up</Typography>
<Typography className={classes.delivery_method_text}>Available now at the store</Typography>
</Box>
        )
    } else if (showHomeDelivery) {
        return (
<Box display="flex" flexDirection="column" justifyContent="flex-start">
<Typography className={classes.delivery_method}>Delivery method: Home delivery</Typography>
<Typography className={classes.delivery_method_text}>Delivery time: 7-10 business days</Typography>
</Box>
        )
    } else {
        return (
<Box display="flex" flexDirection="column" justifyContent="flex-start">
<Typography className={classes.delivery_method}>Delivery method: Express delivery</Typography>
<Typography className={classes.delivery_method_text}>Delivery time: 1-3 business days</Typography>
</Box>
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
{/* grid visible item 1: left side of screen */}
<Grid item xs={6} md={5} lg={3} xl={2}>
    <Box style={{paddingLeft:'1rem'}} display="flex" flexDirection="column" alignItems="flex-start">
<Typography variant="h4">My Items</Typography>
{products.map((product) => (
    <div key={product.name}>
        <Typography className={classes.name} variant="h5">{product.name}</Typography>
        <img className='image' onClick={()=> window.open(product.photo)} src={`${product.photo}`} />
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
const sfDocRef = doc(db, "cart", (user.uid+product.name));
try {

    await runTransaction(db, async (transaction) => {
    const sfDoc = await transaction.get(sfDocRef);
    if (!sfDoc.exists()) {
      throw "Document doesnt exist";
    }

    const newNumber = sfDoc.data().qty - 1;
    if (newNumber > 0) {
      transaction.update(sfDocRef, {qty: newNumber});
      return newNumber
    } else {
      return Promise.reject("cant reduce quantity lower than 1")
    }
  });
} catch(e) {
  console.log(e)
}



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

{/* grid visible item 2: right side of screen */}
<Grid item xs={6} md={4}>
<Box style={{paddingRight:'0.5rem'}} display="flex" flexDirection="column" alignItems="flex-start">
<Typography className={classes.header_delivery} variant="h5">Delivery methods</Typography>
<Box display="flex" flexDirection="row">
<Button variant="outlined" className={classes.btn_delivery} onClick={async () => {
    setShowPickup(true);
    setShowExpressDelivery(false);
    setShowHomeDelivery(false);
}}>Store pick up</Button>

<Button variant="outlined" className={classes.btn_delivery} onClick={async () => {
    setShowPickup(false);
    setShowHomeDelivery(true);
    setShowExpressDelivery(false);
}}>Home delivery</Button>

<Button variant="outlined" className={classes.btn_delivery} onClick={async () => {
    setShowPickup(false);
    setShowHomeDelivery(false);
    setShowExpressDelivery(true);
}}>Express delivery</Button>
</Box>
<ShowDeliveryMethod />
<Typography className={classes.total_price}>Total price: <ShowPrice /></Typography>
{/* {products.map((product) => ( */}
<Button className={classes.purchase_btn} variant="outlined" onClick={async () => {
setLoading(true);
const d = new Date().toString();
try {
  const q = query(collection(db, "cart"), where("id_u", "==", user.uid));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc1) => {

    const postToMyOrders = async () => {
      await setDoc(doc(db, ("purchase"), (user.uid + doc1.data().name + d)), (doc1.data()));
    }


    const Ref1 = doc(db, "purchase", (user.uid + doc1.data().name + d))  
    const instertAdditionalData = async () => {
      await updateDoc(Ref1, {
        total_price: ShowPrice(),
        delivery_method: ShowDeliveryMethodInfo(),
        order_id: uuidv4(),
        time: d
      })
    }

  
    const deleteCurrentCart = async () => {
      await deleteDoc(doc(db, "cart", user.uid + doc1.data().name))
    }

    postToMyOrders();
    instertAdditionalData();
    deleteCurrentCart();
  })
} catch(err) {
  console.log(err)
}


}}>Purchase</Button>
{/* ))} */}
</Box>
</Grid>
{/* end of grid item 2 */}


<Grid item xs={0} md={2}></Grid>


</Grid>
{/* end of grid */}




</div>
    )
}
