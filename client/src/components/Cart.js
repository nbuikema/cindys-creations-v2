import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {readCart} from '../api';

import ProductCard from './ProductCard';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [cartSize, setCartSize] = useState(0);

    const changeCartSize = () => {
        setCartSize(readCart().length);
    };

    useEffect(() => {
        setCart(readCart());
        changeCartSize();
    }, [cartSize]);

    const showCart = () => cart.length > 0 ? (
        <div>
            <h2>{`You have ${cart.length} item(s) in your cart.`}<br /><Link to='/checkout'>Checkout</Link> or <Link to='/products'>Continue Shopping</Link></h2>
            {cart.map((product, i) => (
                <ProductCard key={i} product={product} changeCartSize={changeCartSize} cartSize={cartSize} showAddToCart={false} showCartQuantity={true} showRemoveFromCart={true} />
            ))}
        </div>
    ) : '';

    const emptyCart = () => cart.length === 0 ? (
        <h2>Your cart is empty. <Link to='/products'>Continue Shopping</Link></h2>
    ) : '';

    return (
        <div className='container'>
            {showCart()}
            {emptyCart()}
        </div>
    );
};

export default Cart;