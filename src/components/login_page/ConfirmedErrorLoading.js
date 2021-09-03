import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  LinearProgress,
  Fade,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function LinearIndeterminate() {
  const classes = useStyles(); 
  const [fade, setFade] = useState(true)

useEffect(() => {
  setTimeout(() => {
      setFade(false)
  }, 4000);
  return () => console.log('cleared2') 
}, [])
  
  return (
    <div className={classes.root}>
      <Fade in={fade} timeout={4000}>
      <LinearProgress />
      </Fade>
    </div>
  );
}