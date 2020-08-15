import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Login.scss';
import { login } from '../../store/auth/action';
import axios from 'axios';

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
        <h1 className="center">Please login</h1>
        <form>
            <div>
                <input value={email} onChange={e => set_email(e.target.value)} id="email" type="email" />
                <label htmlFor="email">email</label>
            </div>
            <div>
                <input value={password} onChange={e => set_password(e.target.value)} id="password" type="text" />
                <label htmlFor="password">password</label>
            </div>

            <button onClick={formSubmit} type="submit">Submit</button>
        </form>
    </div>
}