import React from 'react';
import {
    Grid,
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProvidersHeader from './ProvidersHeader';
import ProvidersMethods from './ProvidersMethods';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop:'2rem'
    }
}))

export default function ProvidersLogin() {
const classes = useStyles();
    return (
<div className={classes.root}>
<ProvidersHeader />
<ProvidersMethods />
</div>
    )
}
