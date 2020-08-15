import React from 'react';
import './Navbar.scss';

import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
    return <div>
        <div className="top-bar">
            <div className="container">
                <div className="space-between">
                    <h2>Tastebook</h2>
                    <Link to="/me"><FontAwesomeIcon icon={faUser} size="2x" /></Link>
                </div>
            </div>

        </div>
        <div className="navigation-bar">
            <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
            <NavLink activeClassName="active-link" to="/forum">Food-forum</NavLink>
            <NavLink activeClassName="active-link" to="/matching">Food-matcher</NavLink>
        </div>
    </div>
}