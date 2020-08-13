import React from 'react';
import './Navbar.scss';

import { Link } from 'react-router-dom'

export default function Navbar() {
    return <div>
        <div className="top-bar">
            <p>tastebook</p>
        </div>
        <div className="navigation-bar">
            <Link to="/">Home</Link>
            <Link to="/">Food-forum</Link>
            <Link to="/">Food-matcher</Link>
        </div>
    </div>
}