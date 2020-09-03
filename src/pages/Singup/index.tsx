import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './Signup.scss';
import { signUp } from '../../store/auth/action';
import { Paper } from '@material-ui/core';


export default function Signup() {
    const dispatch = useDispatch();
    const [email, set_email] = useState<string>('');
    const [password, set_password] = useState<string>('');
    const [username, set_username] = useState<string>('');
    const [bio, set_bio] = useState<string>('');
    const [picture, set_picture] = useState<string>('');
    const [diet, set_diet] = useState<string>('');
    const [cuisine, set_cuisine] = useState<string>('');
    const [alcohol, set_alcohol] = useState<string>('');
    const [meal, set_meal] = useState<string>('');
    function formSubmit(e) {
        e.preventDefault();
        dispatch(signUp(email, password, username, bio, picture, diet, cuisine, alcohol, meal));
    }

    return <div>
        <Paper className="signup-box">


            <h1 className="center">Sign up!</h1>
            <form className="center">
                <FormControl className="form-control">
                    <div className="margin-vert-sm">
                        <TextField variant="outlined" label="email" value={email} onChange={e => set_email(e.target.value)} id="email" type="email" />
                    </div>
                    <div className="margin-vert-sm">
                        <TextField variant="outlined" label="password" value={password} onChange={e => set_password(e.target.value)} id="password" type="password" />
                    </div>
                </FormControl>
                <FormControl className="form-control">
                    <div className="margin-vert-sm">
                        <TextField variant="outlined" label="username" value={username} onChange={e => set_username(e.target.value)} id="username" type="text" />
                    </div>
                    <div className="margin-vert-sm">
                        <TextField variant="outlined" label="profile picture url" value={picture} onChange={e => set_picture(e.target.value)} id="pf" type="text" />
                    </div>

                </FormControl>
                <div className="margin-vert-sm">
                    <TextField multiline rows="8" variant="outlined" label="bio" value={bio} onChange={e => set_bio(e.target.value)} id="bio" type="text" />
                </div>


                <div className="radio-position">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Diet:</FormLabel>
                        <RadioGroup aria-label="gender" value={diet} onChange={e => set_diet(e.target.value)}>
                            <FormControlLabel value="vegan" control={<Radio />} label="Vegan" />
                            <FormControlLabel value="vegeterian" control={<Radio />} label="Vegeterian" />
                            <FormControlLabel value="keto" control={<Radio />} label="Keto" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                            <FormControlLabel value="none" control={<Radio />} label="None" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Favourite cuisine:</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={cuisine} onChange={e => set_cuisine(e.target.value)}>
                            <FormControlLabel value="italian" control={<Radio />} label="Italian" />
                            <FormControlLabel value="japanese" control={<Radio />} label="japanese" />
                            <FormControlLabel value="mexican" control={<Radio />} label="mexican" />
                            <FormControlLabel value="indian" control={<Radio />} label="indian" />
                            <FormControlLabel value="chinese" control={<Radio />} label="chinese" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Do you drink alcohol:</FormLabel>
                        <RadioGroup aria-label="Alcohol" name="gender1" value={alcohol} onChange={e => set_alcohol(e.target.value)}>
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>

                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Favourite Meal of the day:</FormLabel>
                        <RadioGroup aria-label="Alcohol" name="gender1" value={meal} onChange={e => set_meal(e.target.value)}>
                            <FormControlLabel value="breakfast" control={<Radio />} label="Breakfast" />
                            <FormControlLabel value="lunch" control={<Radio />} label="Lunch" />
                            <FormControlLabel value="dinner" control={<Radio />} label="Dinner" />
                        </RadioGroup>
                    </FormControl>
                </div>



                <div>
                    <Button color="primary" variant="contained" onClick={formSubmit} type="submit">Submit</Button>

                </div>
            </form>
            <div className="center">
                <Link to="/login">Or log in</Link>

            </div>
        </Paper>
    </div>
}