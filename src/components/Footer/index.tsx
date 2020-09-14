import React from 'react'
import './Footer.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
    return <div className="footer">
        <div className="container">
            <div className="footer-layout">
                <img src={require('../../images/logo-white.png')} className="logo" alt="logo" />
                <div>
                    <h3>Info</h3>
                    <ul>
                        <li><a target="_blank" href="https://github.com/Myrinw/tastebook-frontend">Front-end repo</a></li>
                        <li><a target="_blank" href="https://github.com/Myrinw/tastebook-backend">Back-end repo</a></li>
                        <li><a target="_blank" href="https://github.com/Myrinw">Github user</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Tel: 06 37 17 65 37</li>
                        <li>Email: custumerservice@tastook.com</li>
                        <li>Address: longstreet 6 moskow</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}