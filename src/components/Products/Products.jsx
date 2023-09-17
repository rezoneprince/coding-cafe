import React from 'react';
import './Products.css';

const Products = (props) => {
    const {picture} = props.product;
    return (
        <div className='product-container'>
            <img src={picture} alt="" />
        </div>
    );
};

export default Products;