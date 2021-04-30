import React from 'react';
import './Product.css'

import { data } from '../../assets/ProductData';

class Product extends React.Component {
    render() {
        const product = data.products.find(x => x.id == this.props.match.params.id);
        if (!product) { // remove or reformat
            return <h1>Product Not Found</h1>
        }
        return (
            <div className='product'>
                <div className='product-image'>
                    <img src={product.image} alt='Rose Ring' />
                    <div className='block'></div> {/* REMOVE */}
                </div>
                <div className='product-title'>
                    <h1>{product.name}</h1>
                    <h2>{product.type}</h2>
                    <h3>${product.price}</h3>
                </div>
                <div className='product-size'>
                    <select className='ring-size'>
                        <option value='SIZE'>SIZE</option> {/* FILL IN OPTIONS DYNAMICALLY */}
                    </select>
                </div>
                <div className='product-description'>
                    <h1>description</h1>
                    <hr/>
                    <p>{product.description}</p>
                    <p className='disclaimer'>
                        * Any details to consider go here.
                    </p>
                </div>
                <form className='product-add'>
                    <div className='product-quantity'>
                        <label for='product-quantity'>quantity</label>
                        <input type='number' name='product-quantity' min='1' placeholder='QTY' required/>
                    </div>
                    <input className='add-to-cart' type='submit' value='ADD TO CART'/>
                </form>
            </div>
        )
    }
}

export default Product;