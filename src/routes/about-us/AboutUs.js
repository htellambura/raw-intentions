import React from 'react';
import './AboutUs.css'
import {ABOUT_US_PARAGRAPHS as paragraphs} from '../../constants/constants';

const AboutUs = () => {
    return (
        <div className='about-us'>
           <div className='about-us-content'>
               <div className='title'>
                   <h1 id='about-us-title'>about us</h1>
               </div>
               <section>
                    <div className='about-us-pg' id='who-are-we'>
                        <h2>WHO ARE WE ?</h2>
                        <p>{paragraphs['who-are-we']}</p>
                    </div>
                    <br/>
                    <div className='about-us-pg' id='what-do-we'>
                        <h2>WHAT DO WE SELL ?</h2>
                        <p>{paragraphs['what-do-we']}</p>
                    </div>
                    <br/>
                    <div className='about-us-pg' id='where-are-we'>
                        <h2>WHERE ARE WE LOCATED ?</h2>
                        <p>{paragraphs['where-are-we']}</p>
                    </div>
               </section>
           </div>
        </div>
    )
}

export default AboutUs;