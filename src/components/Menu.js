import React, { useState } from 'react';
import {
  List,
  ListItem,
  Button,
  Drawer,
   } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  list: {
    width: '150px',
  },
  paper: {
    backgroundColor:'#212121'
  },
  item: {
    color:'white',
    fontSize:'1.5rem',
    fontWeight:'700'
  }
});

export default function Menu() {
const classes = useStyles();
const [state, setState] = useState(false);
const toggleDrawer = (open) => () => {
  setState(open)
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
  <ListItem><Button className={classes.item}>Home</Button></ListItem>
  <ListItem><Button className={classes.item}>Products</Button></ListItem>
  <ListItem><Button className={classes.item}>Store</Button></ListItem>
</List>
</Drawer>
</div>
    )
}
