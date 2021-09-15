import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import MenuLogged from './MenuLogged';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useAuth } from '../firebase/useAuth';

const useStyles = makeStyles((theme) => ({
  name: {
    [theme.breakpoints.up('xs')]: {
      fontSize:'0.7rem'
    }
  },
}));

export default function ButtonAppBar() {
const classes = useStyles();
const { user } = useAuth();

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.root}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          >

          <Grid item xs={1}>
            <Box display="flex" justifyContent="flex-start">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuLogged />
              </IconButton>
              <Button href='/'>
                <CardMedia className={classes.alt}
                component="img"
                alt="September Woodcraft"
                height="40"
                image="/images/woodcraft_logo.png"
                />
              </Button>
            </Box>
          </Grid>

          <Grid item xs={8}></Grid>

          <Grid item xs={3}>
            <Box display="flex" flexDirection="row" justifyContent="flex-end">
              <Button href='/cart' color="inherit"><ShoppingCartIcon /></Button>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Button href='/profile' color="inherit"><AccountCircleIcon /></Button>
                  <Typography className={classes.name} variant="body2">{user.displayName}</Typography>
                </Box>
            </Box>
          </Grid>
        
        </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
