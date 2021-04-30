import React from 'react';
import {NavLink} from 'react-router-dom';
import './Components.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='links'>
                    <ul>
                        <li><NavLink to='/'>home</NavLink></li>
                        <li><NavLink to='/shop'>shop</NavLink></li>
                        <li><NavLink to='/customs'>customs</NavLink></li>
                        <li><NavLink to='/about-us'>about us</NavLink></li>
                        <li><NavLink to='/shipping'>shipping</NavLink></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;