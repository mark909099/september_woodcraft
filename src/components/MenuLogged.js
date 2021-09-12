import React, { useState } from 'react';
import {
  List,
  ListItem,
  Button,
  Drawer,
   } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '../firebase/useAuth';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: '175px',
  },
  paper: {
    backgroundColor:'#212121'
  },
  item: {
    color:'white',
    fontSize:'1.5rem',
    fontWeight:'700'
  },
  list_low: {
    color:'white',
    fontSize:'1.5rem',
    fontWeight:'700',
    paddingTop:'3rem'
  }
});

export default function Menu() {
const classes = useStyles();
const {logout} = useAuth();
const history = useHistory();
const [state, setState] = useState(false);
const toggleDrawer = (open) => () => {
  setState(open)
  }

const logout1 = async () => {
    try {
        await logout()
        history.push('/')
    } catch(err) {
        console.log(err)
    }
}
    
    return (
<div>
<Button style={{color:'white'}} onClick={toggleDrawer(true)}><MenuIcon fontSize="large" /></Button>       
<Drawer
anchor={'left'}
open={state}
onClose={toggleDrawer(false)}
transitionDuration={800}
classes={{ paper: classes.paper }}
>
<List className={classes.list}>
  <ListItem><Button href="/" className={classes.item}>Home</Button></ListItem>
  <ListItem><Button href="/store" className={classes.item}>Store</Button></ListItem>
  <ListItem><Button href="/about" className={classes.item}>About</Button></ListItem>
  <ListItem><Button href="/contact" className={classes.item}>Contact</Button></ListItem>
  <ListItem className={classes.list_low}><Button href="/cart" className={classes.item}>My Cart</Button></ListItem>
  <ListItem className={classes.item}><Button href="/my_orders" className={classes.item}>My Orders</Button></ListItem>
  <ListItem className={classes.list_low}><Button onClick={logout1} className={classes.item}>Logout</Button></ListItem>
</List>
</Drawer>
</div>
    )
}
