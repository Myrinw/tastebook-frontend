import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Button, TextField, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle } from '@material-ui/core';
import './Matching.scss';
import { Link } from 'react-router-dom';

import { me } from '../../store/auth/selector';
import { fetchUsers, sendMail } from '../../store/users/action';
import { allUsers } from '../../store/users/selector';

export default function Matching() {
    const dispatch = useDispatch();
    const allTheUsers = useSelector(allUsers);
    const user = useSelector(me);
    const [open, setOpen] = useState(false);
    const [match, set_match] = useState();
    const [message, set_message] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };



    function findMatch() {
        const myFoods = user.food;
        let restrictionMatches = [];
        let cuisineMatches = [];
        let alcoholMatches = [];
        let mealMatches = [];

        const myRestriction = user.food.restriction;
        const myCuisine = user.food.cuisine;
        const myAlchol = user.food.alcohol;
        const myMeal = user.food.meal;

        allTheUsers.forEach(function (person) {

            if (person.food && person.id !== user.id) {
                if (person.food.restriction === myRestriction) {
                    restrictionMatches.push(person);
                }
                if (person.food.cuisine === myCuisine) {
                    cuisineMatches.push(person);
                }
                if (person.food.alcohol === myAlchol) {
                    alcoholMatches.push(person);
                }
                if (person.food.meal === myMeal) {
                    mealMatches.push(person)
                }
            }

        });

        const matchCuising = cuisineMatches[Math.floor(Math.random() * cuisineMatches.length)];
        set_match(matchCuising);


    }

    function sendMessage() {
        dispatch(sendMail(message, match.email));
        setOpen(false);

    }




    useEffect(
        function () {
            dispatch(fetchUsers);
        }, []
    )

    return <div className="container">
        <Dialog open={open} aria-labelledby="form-dialog-title">
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
                    value={message}
                    onChange={e => set_message(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
          </Button>
                <Button onClick={sendMessage} color="primary">
                    Send!
          </Button>
            </DialogActions>
        </Dialog>
        <Paper className="match-box">
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
                    <h2 className="center">{match ? match.username : "someone"}</h2>
                    <div className="matcher">
                        <Link to={`/user/${match ? match.id : "/"}`}>
                            <img className="me-picture" src={match ? match.picture : require('../../images/placeholder.png')} alt="blabla" />
                        </Link>
                    </div>
                    <div className="match-btns">
                        <Button variant="outlined" className="center-margin" color="primary">follow +</Button>
                        <Button variant="contained" onClick={handleClickOpen} color="primary">Send message</Button>
                    </div>
                </div>


            </div>
        </Paper>
        <div className="center match-btn">
            <Button color="primary" className="center" variant="contained" onClick={findMatch}>Find Match!</Button>

        </div>


    </div >
}