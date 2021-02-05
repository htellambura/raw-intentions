import React from 'react';
import {NavLink} from 'react-router-dom';
import './Footer.css'
import '../index.css'

function Footer() {
    return (
        <footer>
            <div className='links'>
                <ul>
                    <li><NavLink to='/home'>home</NavLink></li>
                    <li><NavLink to='/shop'>shop</NavLink></li>
                    <li><NavLink to='/customs'>customs</NavLink></li>
                    <li><NavLink to='/about-us'>about us</NavLink></li>
                    <li><NavLink to='/shipping'>shipping</NavLink></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;