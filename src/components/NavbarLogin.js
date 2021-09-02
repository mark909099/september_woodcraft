import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  empty_distance: {
    flexGrow:1,
  },
  alt: {
      fontSize:'0.7rem',
      color:'white'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            <Button href='/'>
          <CardMedia className={classes.alt}
          component="img"
          alt="September Woodcraft"
          height="40"
          image="/images/woodcraft_logo.png"
        />
            </Button>
          </Typography>
          <Typography className={classes.empty_distance}></Typography>
          <Button href='/login' color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
