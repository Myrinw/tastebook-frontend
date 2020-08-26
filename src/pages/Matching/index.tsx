import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Button, TextField, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle } from '@material-ui/core';
import './Matching.scss';

import { me } from '../../store/auth/selector';

export default function Matching() {
    const user = useSelector(me);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    console.log(user);
    console.log(user.picture);

    return <div className="container">
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Send message</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    This message gets send to the users email address
          </DialogContentText>
                <TextField
                    autoFocus
                    multiline
                    rows={8}
                    variant="outlined"
                    id="name"
                    label="message"
                    type="text"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
          </Button>
                <Button onClick={handleClose} color="primary">
                    Send!
          </Button>
            </DialogActions>
        </Dialog>
        <h1 className="center">Find a food-friend!</h1>

        <div className="match">
            <div className="me">
                <h2 className="center">{user ? user.username : ""}</h2>
                <div className="matcher">
                    <img className="me-picture" src={user.picture} alt="" />
                </div>
            </div>
            <div className="match-plus">
                <img className="plus" src={require('../../images/plus.png')} alt="" />
            </div>
            <div>
                <h2 className="center">Someone</h2>
                <div className="matcher"></div>
                <div className="match-btns">
                    <Button variant="outlined" className="center-margin" color="primary">follow +</Button>
                    <Button variant="contained" onClick={handleClickOpen} color="primary">Send message</Button>
                </div>
            </div>


        </div>
    </div >
}