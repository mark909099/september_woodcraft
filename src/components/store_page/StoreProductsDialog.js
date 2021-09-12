import React, { useState } from 'react';
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
    DialogContent
    } from '@material-ui/core';


export default function StoreProductsDialog() {
const [open, setOpen] = useState(false);
const handleClickOpen = () => {
    setOpen(true);
}

const handleClose = () => {
    setOpen(false);
}
    return (
<div>
<Dialog
open={open}
onClose={handleClose}
>
<DialogTitle id="alert-dialog-title">{"This website is a demo project, it doesnt not include real partners."}</DialogTitle>
<DialogContent>
          <DialogContentText id="alert-dialog-description">
            But, keep browsing the website and enjoy!
          </DialogContentText>
        </DialogContent>
</Dialog>        
</div>
    )
}
