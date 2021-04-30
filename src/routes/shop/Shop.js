import React from 'react';
import { NavLink } from 'react-router-dom';

import { data } from '../../assets/ProductData';

import './Shop.css'


class Shop extends React.Component {
    render() {
        return (
            <div className='shop'>
                <div className='title'>
                   <h1 id='shop-title'>shop</h1>
                </div>
                <nav className='links'>
                    <NavLink to='/'>new</NavLink>{/* implement filtered links here*/}
                    <NavLink to='/'>necklaces</NavLink>
                    <NavLink to='/'>rings</NavLink>
                    <NavLink to='/'>earrings</NavLink>
                </nav>
                <div className='shop-products'>
                    <ul>
                        {
                            data.products.map(product =>
                                 <li>
                                     <div className='shop-product'>
                                         <NavLink to={'/product/' + product.id}>
                                            <img className='shop-product-image' src={product.image} />
                                         </NavLink>
                                         <h2 className='shop-product-name'>{product.name}</h2>
                                         <h3 className='shop-product-price'>{product.price}$</h3>
                                     </div>
                                 </li>   
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Shop;