import React from 'react';
import './Navbar.scss';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../store/auth/action';
import { isLoggedIn } from '../../store/auth/selector';

import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'



export default function Navbar() {
    const dispatch = useDispatch();
    const loggedIn = useSelector(isLoggedIn);

    function loggingOut() {
        dispatch(logOut);
    }

    return <div>
        <div className="top-bar">
            <div className="container">
                <div className="space-between">
                    <img className="logo" src={require('../../images/logo-white.png')} alt="logo" />
                    <div>
                        {loggedIn ? <Link to="#" onClick={loggingOut} > logout</Link> : <Link to="/login">login</Link>}
                        <Link to="/me"><FontAwesomeIcon icon={faUser} size="2x" /></Link>

                    </div>
                </div>
            </div>

        </div>
        <div className="navigation-bar">
            <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
            <NavLink activeClassName="active-link" to="/forum">Food-forum</NavLink>
            <NavLink activeClassName="active-link" to="/matching">Food-matcher</NavLink>

        </div>
    </div >
}