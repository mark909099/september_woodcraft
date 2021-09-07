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


export default function StoreProducts() {
    const classes = useStyles();
    const [storeProducts, setStoreProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showAllClosets, setShowAllClosets] = useState(true)
    const [showAllClosetsByLowToHighPrice, setShowAllClosetsByLowToHighPrice] = useState(false)
    const [showAllClosetsByHighToLowPrice, setShowAllClosetsByHighToLowPrice] = useState(false)
    const [showAllClosetsByName, setShowAllClosetsByName] = useState(false)

const { user, app } = useAuth();
const db = getFirestore(app);

useEffect(() => {
    getAllStoreClosets()
}, [showAllClosets, showAllClosetsByLowToHighPrice, showAllClosetsByHighToLowPrice, showAllClosetsByName]);

if (loading) {
    return (
       <div style={{display:'flex', justifyContent:'center', paddingTop:'10rem'}}>
           <CircularProgress />
       </div> 
    )
};


const getAllStoreClosets = async () => {
    if (showAllClosets) {
    setLoading(true);
    const q = query(collection(db, "store"), where("category", "==", "closet"));
    onSnapshot(q, (querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc2) => {
            items.push(doc2.data())
        })
        setStoreProducts(items);
        setLoading(false);
    })
}   else if (showAllClosetsByLowToHighPrice) {
    setLoading(true);
    const q = query(collection(db, "store"), where("category", "==", "closet"), orderBy("price"));
    onSnapshot(q, (querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc3) => {
            items.push(doc3.data())
        })
        setStoreProducts(items);
        setLoading(false);
    })
}   else if (showAllClosetsByHighToLowPrice) {
    setLoading(true);
    const q = query(collection(db, "store"), where("category", "==", "closet"), orderBy("price", "desc"));
    onSnapshot(q, (querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc3) => {
            items.push(doc3.data())
        })
        setStoreProducts(items);
        setLoading(false);
    })
}   else if(showAllClosetsByName) {
    setLoading(true);
    const q = query(collection(db, "store"), where("category", "==", "closet"), orderBy("name"));
    onSnapshot(q, (querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc3) => {
            items.push(doc3.data())
        })
        setStoreProducts(items);
        setLoading(false);
    })
}
}

    return (
<div>
{user?
<div>



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
<Button onClick={() => {
    setShowAllClosets(false);
    setShowAllClosetsByLowToHighPrice(false);
    setShowAllClosetsByName(false);
    setShowAllClosetsByLowToHighPrice(true);
    }} size="small" variant="outlined" className={classes.btn_menu}>Low to high price</Button>
<Button onClick={() => {
    setShowAllClosets(false);
    setShowAllClosetsByLowToHighPrice(false);
    setShowAllClosetsByName(false);
    setShowAllClosetsByHighToLowPrice(true)
}} size="small" variant="outlined" className={classes.btn_menu}>High to low price</Button> 
<Button onClick={() => {
    setShowAllClosets(false);
    setShowAllClosetsByLowToHighPrice(false);
    setShowAllClosetsByHighToLowPrice(false)
    setShowAllClosetsByName(true);
}} size="small" variant="outlined" className={classes.btn_menu}>Name</Button> 
</Box> 
</Grid>

</Grid>
</div>


{/* END OF MENU */}



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
<Button onClick={() => {
    setShowAllClosets(false);
    setShowAllClosetsByLowToHighPrice(false);
    setShowAllClosetsByName(false);
    setShowAllClosetsByLowToHighPrice(true);
    }} size="small" variant="outlined" className={classes.btn_menu}>Low to high price</Button>
<Button onClick={() => {
    setShowAllClosets(false);
    setShowAllClosetsByLowToHighPrice(false);
    setShowAllClosetsByName(false);
    setShowAllClosetsByHighToLowPrice(true)
}} size="small" variant="outlined" className={classes.btn_menu}>High to low price</Button> 
<Button onClick={() => {
    setShowAllClosets(false);
    setShowAllClosetsByLowToHighPrice(false);
    setShowAllClosetsByHighToLowPrice(false)
    setShowAllClosetsByName(true);
}} size="small" variant="outlined" className={classes.btn_menu}>Name</Button> 
</Box> 
</Grid>

</Grid>
</div>


{/* END OF MENU */}




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
