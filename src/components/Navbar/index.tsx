import React from 'react';
import './Navbar.scss';

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
    return <div>
        <div className="top-bar">
            <div className="container">
                <div className="space-between">
                    <h2>Tastebook</h2>
                    <FontAwesomeIcon icon={faUser} size="2x" />
                </div>
            </div>

        </div>
        <div className="navigation-bar">
            <Link to="/">Home</Link>
            <Link to="/">Food-forum</Link>
            <Link to="/">Food-matcher</Link>
        </div>
    </div>
}