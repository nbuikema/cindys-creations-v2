import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {addProductToCart} from '../api';
const API = process.env.REACT_APP_API_URL;

const ProductCard = ({product, showViewProduct = true, showAddToCart = true}) => {
    const [addedToCart, setAddedToCart] = useState(false);

    const showViewProductBtn = (showViewProduct) => showViewProduct && ( 
        <Link className='btn btn-primary' to={`/product/${product._id}`}>
            View Product
        </Link>
    );

    const showAddToCartBtn = (showAddToCart) => showAddToCart && ( 
        <button onClick={addToCart} className='btn btn-info'>
            Add to Cart
        </button>
    );

    const addToCart = () => {
        addProductToCart(product, () => {
            setAddedToCart(true);
        });
    };

    const redirectCart = () => {
        if(addedToCart) {
            return <Redirect to='/cart' />;
        }
    };

    return (
        <div className='card'>
            {redirectCart()}
            {product._id !== undefined ? (
                <img src={`${API}/product/image/${product._id}`} alt={product.name} />
            ) : ''}
            <div className='card-body'>
                <h5 className='card-title'>{product.name}</h5>
                <p className='card-text'>{product.description}</p>
            </div>
            <div className='btn-group'>
                {showViewProductBtn(showViewProduct)}
                {showAddToCartBtn(showAddToCart)}
            </div>
        </div>
    );
};

export default ProductCard;