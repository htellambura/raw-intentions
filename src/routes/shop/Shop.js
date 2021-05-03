import React,  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Message from '../../components/Message';

import './Shop.css';
import { listProducts } from '../../actions/productActions';


function Shop() {
    // get product data from backend
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { error, products } = productList;
    
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    
    return (
        <div>
            {error ? (
                <Message>{error}</Message>
            ) : (
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
                            products.map(product =>
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
            )}
        </div> 
    )
}

export default Shop;