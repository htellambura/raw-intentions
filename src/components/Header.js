import React from 'react';
import {NavLink, Link} from 'react-router-dom';

import logo from '.././assets/icons/Logo.png';
import cart from '.././assets/icons/Cart.png';
import instagram from '.././assets/icons/Instagram.png';
import tiktok from '.././assets/icons/TikTok.png';

import './Components.css'

const Header = () => {

    return (
        <header className='header-container'>
            <div className = 'header-content'>
                <div className='links'>
                    <ul>
                        <li><NavLink to='/home'>home</NavLink></li>
                        <li><NavLink to='/shop'>shop</NavLink></li>
                    </ul>
                </div>
                <div id='logo'>
                    <NavLink to='/home'><img src={logo} alt='logo'/></NavLink>    
                </div>
                <div className='icons'>
                <ul>
                    <li>
                        <a href='https://www.instagram.com/rawintentions.co/'>
                            <img src={instagram} alt='instagram'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.tiktok.com/@rawintentions.co?'>
                            <img src={tiktok} alt='tiktok'/>
                        </a>
                    </li>
                    <li><NavLink to='/cart'><img src={cart} alt='cart'/></NavLink></li>
                </ul>
                </div>    
            </div>          
        </header>
    )
}

export default Header;