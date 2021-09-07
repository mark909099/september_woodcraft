import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../firebase/useAuth';
import {
    collection,
    where,
    orderBy,
    limit,
    getFirestore,
    onSnapshot,
    query,
     } from "firebase/firestore";
import {
   CardMedia,
   Typography,
   Box,
   Grid,
   Button,
   CardActionArea,
   CircularProgress
   } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        paddingTop:'0.2rem',
        textAlign:'center',
    },
    desc: {
        textAlign:'center',
        paddingBottom:'0.2rem',
        [theme.breakpoints.up('xs')]: {
            fontSize:'0.8rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'1rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'1rem'
        },
    },
    image_box: {
        paddingBottom:'0.2rem'
    },
    price: {
        paddingBottom:'0.2rem'
    },
    product_image: {
        justifyContent:'center',
        [theme.breakpoints.up('xs')]: {
            height: '100px',
            width: '100px',
        },
        [theme.breakpoints.up('sm')]: {
            height: '150px',
            width: '150px',
        },
    },
    item: {
        border:'1px solid black',
        borderRadius:'5%',
    },
    grid_container: {
        padding:'1rem',
    },
    box_button: {
        paddingBottom:'0.2rem'
    },
    button: {
        border:'1px solid black',
        fontFamily:'Tahoma',
        [theme.breakpoints.up('xs')]: {
            width:'100px',   
        },
        [theme.breakpoints.up('sm')]: {
            width:'150px',   
        },
    },
    button_clicked: {
        border:'1px solid black',
        fontFamily:'Tahoma',
        color:'red',
        [theme.breakpoints.up('xs')]: {
            width:'100px',   
        },
        [theme.breakpoints.up('sm')]: {
            width:'150px',   
        },
    }
}))

export default function StoreChairs() {
const classes = useStyles();
const [storeProducts, setStoreProducts] = useState([]);
const [loading, setLoading] = useState(false);

const { user, app } = useAuth();
const db = getFirestore(app);

useEffect(() => {
    getAllStoreChairs()
}, []);

if (loading) {
    return (
       <div style={{display:'flex', justifyContent:'center', paddingTop:'10rem'}}>
           <CircularProgress />
       </div> 
    )
};

const getAllStoreChairs = async () => {
    setLoading(true);
    const q = query(collection(db, "store"), where("category", "==", "chair"));
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
{user?
<div>
<Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
{storeProducts.map((storeProduct) => (
    
      <Grid className={classes.grid_container} key={storeProduct.id} item xs={6} sm={6} md={4} lg={3}>
        <Box className={classes.item}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Typography variant="h6" className={classes.header}>{storeProduct.name}</Typography>
        <Typography className={classes.desc}>{storeProduct.desc}</Typography>
        <Box className={classes.image_box} display="flex" justifyContent="center">
        <CardActionArea onClick={() => {
                                            try {
                                                window.open(`${storeProduct.photo}`)
                                            } catch (err) {
                                                console.log(err)
                                        } 
        }}>
        <CardMedia className={classes.product_image}
          component="img"
          alt=""
          image={storeProduct.photo}
        />
        </CardActionArea>
        </Box>
        <Typography variant="body2" className={classes.price}>Price: {storeProduct.price}</Typography>
        <Box className={classes.box_button}>
        <Button onClick={async () => {console.log(`clicked as a user with email ${user.email}`)}} className={classes.button}>Add to cart</Button>
        </Box>
        </Box>
        </Box>
    </Grid>
))}      
</Grid>   
</div>
:
<div>
<Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
{storeProducts.map((storeProduct) => (
    
      <Grid className={classes.grid_container} key={storeProduct.id} item xs={6} sm={6} md={4} lg={3}>
        <Box className={classes.item}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Typography variant="h6" className={classes.header}>{storeProduct.name}</Typography>
        <Typography className={classes.desc}>{storeProduct.desc}</Typography>
        <Box className={classes.image_box} display="flex" justifyContent="center">
        <CardActionArea onClick={() => {
                                            try {
                                                window.open(`${storeProduct.photo}`)
                                            } catch (err) {
                                                console.log(err)
                                        } 
        }}>
        <CardMedia className={classes.product_image}
          component="img"
          alt=""
          image={storeProduct.photo}
        />
        </CardActionArea>
        </Box>
        <Typography variant="body2" className={classes.price}>Price: {storeProduct.price}</Typography>
        <Box className={classes.box_button}>
        <Button onClick={async () => {console.log("clicked as a guest")}} className={classes.button}>Add to cart</Button>
        </Box>
        </Box>
        </Box>
    </Grid>
))}      
</Grid>   
</div>
}            
</div>
    )
}
