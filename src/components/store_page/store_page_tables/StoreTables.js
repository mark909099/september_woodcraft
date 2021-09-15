import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../firebase/useAuth';
import {
    collection,
    where,
    orderBy,
    setDoc,
    doc,
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
    CircularProgress,
    DialogContentText,
    Dialog,
    DialogTitle,
    DialogContent,
    Paper,
    Snackbar
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
    bg_dialog: {
        backgroundImage: 'url(/images/dialog_bg2.jpg)',
        backgroundSize:'cover',
    },
    box_snack: {
        borderRadius:'15%',
        backgroundColor:'#efebe9'
    },
    outline_snack: {
        paddingLeft:'1.2rem',
        paddingRight:'1.2rem',
        textAlign:'center',
        color:'black',
        fontFamily:'Arial'
},
}))


export default function StoreProducts() {
const classes = useStyles();
const [storeProducts, setStoreProducts] = useState([]);
const [loading, setLoading] = useState(false);
const [showAllTables, setShowAllTables] = useState(true)
const [showAllTablesByLowToHighPrice, setShowAllTablesByLowToHighPrice] = useState(false)
const [showAllTablesByHighToLowPrice, setShowAllTablesByHighToLowPrice] = useState(false)
const [showAllTablesByName, setShowAllTablesByName] = useState(false)
const [open, setOpen] = useState(false);
const [openSnack, setOpenSnack] = useState(false);
const [nameOfSnack, setNameOfSnack] = useState('');

const handleClickOpen = () => {
    setOpen(true);
}

const handleClose = () => {
    setOpen(false);
}

const handleCloseSnack = (reason) => {
    if (reason === 'clickaway') {
        return;
    }

    setOpenSnack(false);
}

const { user, app } = useAuth();
const db = getFirestore(app);

useEffect(() => {
    getAllStoreTables()
}, [showAllTables, showAllTablesByLowToHighPrice, showAllTablesByHighToLowPrice, showAllTablesByName]);

if (loading) {
    return (
       <div style={{display:'flex', justifyContent:'center', paddingTop:'10rem'}}>
           <CircularProgress />
       </div> 
    )
};


const getAllStoreTables = async () => {
    if (showAllTables) {
    setLoading(true);
    const q = query(collection(db, "store"), where("category", "==", "table"));
    onSnapshot(q, (querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc2) => {
            items.push(doc2.data())
        })
        setStoreProducts(items);
        setLoading(false);
    })
}   else if(showAllTablesByLowToHighPrice) {
    setLoading(true);
    const q = query(collection(db, "store"), where("category", "==", "table"), orderBy("price"));
    onSnapshot(q, (querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc3) => {
            items.push(doc3.data())
        })
        setStoreProducts(items);
        setLoading(false);
    })
}   else if (showAllTablesByHighToLowPrice) {
    setLoading(true);
    const q = query(collection(db, "store"), where("category", "==", "table"), orderBy("price", "desc"));
    onSnapshot(q, (querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc3) => {
            items.push(doc3.data())
        })
        setStoreProducts(items);
        setLoading(false);
    })
}   else if(showAllTablesByName) {
    setLoading(true);
    const q = query(collection(db, "store"), where("category", "==", "table"), orderBy("name"));
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
    setShowAllTables(false);
    setShowAllTablesByLowToHighPrice(false);
    setShowAllTablesByName(false);
    setShowAllTablesByLowToHighPrice(true);
    }} size="small" variant="outlined" className={classes.btn_menu}>Low to high price</Button>
<Button onClick={() => {
    setShowAllTables(false);
    setShowAllTablesByLowToHighPrice(false);
    setShowAllTablesByName(false);
    setShowAllTablesByHighToLowPrice(true)
}} size="small" variant="outlined" className={classes.btn_menu}>High to low price</Button> 
<Button onClick={() => {
    setShowAllTables(false);
    setShowAllTablesByLowToHighPrice(false);
    setShowAllTablesByHighToLowPrice(false)
    setShowAllTablesByName(true);
}} size="small" variant="outlined" className={classes.btn_menu}>Name</Button> 
</Box> 
</Grid>

</Grid>
</div>


<Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
{storeProducts.map((storeProduct) => (
    
      <Grid className={classes.grid_container} key={storeProduct.name} item xs={6} sm={6} md={4} lg={3}>
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
        <Button className={classes.button} onClick={async () => {

const data= {
    name: storeProduct.name,
    desc : storeProduct.desc,
    photo: storeProduct.photo,
    price: storeProduct.price,
    qty: storeProduct.qty,
    id_u : user.uid
}
await setDoc(doc(db, ("cart"), (user.uid + storeProduct.name)), data);
setOpenSnack(true);
setNameOfSnack(`${storeProduct.name}`)
        }}>Add to cart</Button>
        </Box>
        </Box>
        </Box>

        <div>
<Snackbar open={openSnack} autoHideDuration={3000} onClose={handleCloseSnack}>
    <Paper className={classes.box_snack}>
    <Typography className={classes.outline_snack} variant="h6">{nameOfSnack} added to cart</Typography>
    </Paper>
</Snackbar>
</div>


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
    setShowAllTables(false);
    setShowAllTablesByLowToHighPrice(false);
    setShowAllTablesByName(false);
    setShowAllTablesByLowToHighPrice(true);
    }} size="small" variant="outlined" className={classes.btn_menu}>Low to high price</Button>
<Button onClick={() => {
    setShowAllTables(false);
    setShowAllTablesByLowToHighPrice(false);
    setShowAllTablesByName(false);
    setShowAllTablesByHighToLowPrice(true)
}} size="small" variant="outlined" className={classes.btn_menu}>High to low price</Button> 
<Button onClick={() => {
    setShowAllTables(false);
    setShowAllTablesByLowToHighPrice(false);
    setShowAllTablesByHighToLowPrice(false)
    setShowAllTablesByName(true);
}} size="small" variant="outlined" className={classes.btn_menu}>Name</Button> 
</Box> 
</Grid>

</Grid>
</div>


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
        <Button onClick={handleClickOpen} className={classes.button}>Add to cart</Button>
        </Box>
        </Box>
        </Box>
<div>
<Paper>
<Dialog className={classes.bg_dialog}
open={open}
onClose={handleClose}
>
<DialogTitle id="alert-dialog-title">{"You must be logged in to complete this action"}</DialogTitle>
<DialogContent>
          <DialogContentText id="alert-dialog-description">
              <Box display="flex" justifyContent="center" alignItems="baseline">
            Go to <Button style={{marginLeft:'0.4rem'}} variant="outlined" href="/login">Login page</Button>
                </Box>
          </DialogContentText>
        </DialogContent>
</Dialog>  
</Paper>      
</div>

    </Grid>
))}      
</Grid>   
</div>
}


</div>

    )
}
