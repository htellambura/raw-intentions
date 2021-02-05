import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import cart from '.././icons/Cart.png';
import instagram from '.././icons/Instagram.png';
import tiktok from '.././icons/TikTok.png';
import './Header.css'
import '../index.css'

function Header() {

    return (
        <header>
            <div className='links'>
                <div className = 'header-content'>
                <ul>
                    <li><NavLink to='/home'>home</NavLink></li>
                    <li><NavLink to='/shop'>shop</NavLink></li>
                </ul>
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