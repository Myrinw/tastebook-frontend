import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Login.scss';
import { login } from '../../store/auth/action';
import axios from 'axios';

import { TextField, Button } from '@material-ui/core';

export default function Login() {
    const dispatch = useDispatch();
    const [email, set_email] = useState<string>('');
    const [password, set_password] = useState<string>('');

    interface ServerData {
        foo: string
        bar: number
    }

    function formSubmit(e: any) {
        e.preventDefault();
        console.log("testest");
        dispatch(login(email, password));

        // dispatch(login(email, password))
    }

    return <div className="container">
        <div className=" margin-vert">
            <h1 className="center">Please login</h1>
            <form className="center">
                <div className="margin-vert-sm">
                    <TextField variant="outlined" label="email" value={email} onChange={e => set_email(e.target.value)} id="email" type="email" />
                </div>
                <div className="margin-vert-sm">
                    <TextField variant="outlined" label="password" value={password} onChange={e => set_password(e.target.value)} id="password" type="password" />
                </div>

                <Button color="primary" variant="contained" onClick={formSubmit} type="submit">Submit</Button>
            </form>
        </div>

    </div>
}