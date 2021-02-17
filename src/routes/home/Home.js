import React from 'react';
import {NavLink} from 'react-router-dom';
import Slideshow from '../../components/Slideshow';
import './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-content'>
                <div className='slideshow-container'>
                    <Slideshow/>
                    <NavLink to='shop'>shop now</NavLink>
                </div>
                <div className='home-links'>
                    <ul>
                        <li><NavLink to='/shop' id='earrings-link'>earrings</NavLink></li>
                        <li><NavLink to='/shop' id='necklaces-link'>necklaces</NavLink></li>
                        <li><NavLink to='/shop' id='rings-link'>rings</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;