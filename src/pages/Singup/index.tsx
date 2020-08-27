import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [email, set_email] = useState<string>('');
    const [password, set_password] = useState<string>('');
    const [username, set_username] = useState<string>('');
    const [bio, set_bio] = useState<string>('');

    function formSubmit(e) {
        e.preventDefault();
    }

    return <div>
        <h1 className="center">Sign up!</h1>
        <form className="center">
            <div className="margin-vert-sm">
                <TextField variant="outlined" label="email" value={email} onChange={e => set_email(e.target.value)} id="email" type="email" />
            </div>
            <div className="margin-vert-sm">
                <TextField variant="outlined" label="password" value={password} onChange={e => set_password(e.target.value)} id="password" type="password" />
            </div>
            <div className="margin-vert-sm">
                <TextField variant="outlined" label="username" value={username} onChange={e => set_username(e.target.value)} id="username" type="text" />
            </div>
            <div className="margin-vert-sm">
                <TextField variant="outlined" label="bio" value={bio} onChange={e => set_bio(e.target.value)} id="bio" type="text" />
            </div>

            <Button color="primary" variant="contained" onClick={formSubmit} type="submit">Submit</Button>
        </form>
        <Link to="/login">Or log in</Link>
    </div>
}