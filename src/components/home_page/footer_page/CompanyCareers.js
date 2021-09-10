import React, { useState } from 'react';
import {
    Grid,
    DialogContentText,
    DialogContent,
    DialogTitle,
    Dialog,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    btn: {
        color:'white',
        paddingBottom:'1.5rem',
        [theme.breakpoints.up('xs')]: {
            fontSize:'0.7rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'1rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'1.5rem'
        },
    }
}))

export default function CompanyCareers() {
const classes = useStyles();
const [open, setOpen] = useState(false);

const handleClickOpen = () => {
    setOpen(true);
}

const handleClose = () => {
    setOpen(false);
}

    return (
<div>
<Button disableRipple='true' className={classes.btn} onClick={handleClickOpen}>Careers</Button>            

<Dialog
open={open}
onClose={handleClose}
>
<DialogTitle id="alert-dialog-title">{"This website is a demo project, therefore it doesnt not include open jobs posting."}</DialogTitle>
<DialogContent>
          <DialogContentText id="alert-dialog-description">
            
          </DialogContentText>
        </DialogContent>
</Dialog>
</div>
    )
}
