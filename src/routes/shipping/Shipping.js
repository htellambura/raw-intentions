import React from 'react';
import './Shipping.css';

const Shipping = () => {
    return (
        <div className='shipping'>
            <div className='shipping-content'>
                <div className='title'>
                   <h1 id='shipping-title'>shipping</h1>
               </div>
               <section>
                   <div className='shipping-text'>
                        <h2>for shipping information, please refer to the table below</h2>
                        <p>* All prices are in CAD</p>
                   </div>
                    <table id="shipping-table"> {/* Add props if costs will change */}
                        <tr>
                            <th>LOCATION</th>
                            <th colSpan="2">STANDARD COST</th>
                        </tr>
                        <tr>
                            <td>CANADA</td>
                            <td colSpan="2">$4</td>
                        </tr>
                        <tr>
                            <td>INTERNATIONAL</td>
                            <td colSpan="2">CONTACT US FOR INFO</td>
                        </tr>
                    </table>
               </section>
            </div>
        </div>
    )
}

export default Shipping;