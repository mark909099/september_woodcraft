import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import Menu from './Menu';
import Grid from '@material-ui/core/Grid';




export default function NavbarLogin() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          >
          <Grid item xs={1}>
            <Box display="flex" justifyContent="flex-start">
              <IconButton edge="start" color="inherit" aria-label="menu">
                <Menu />
              </IconButton>
              <Button href='/'>
                <CardMedia
                component="img"
                alt="September Woodcraft"
                height="40"
                image="/images/woodcraft_logo.png"
                />
              </Button>
            </Box>
          </Grid>

          <Grid item xs={10}></Grid>

          <Grid item xs={1}>
            <Box display="flex" justifyContent="flex-end">
              <Button style={{fontSize:'1.1rem'}} href='/login' color="inherit">Login</Button>
            </Box>
          </Grid>

          </Grid>
        </Toolbar>
      </AppBar>

    </div>
  );
}
