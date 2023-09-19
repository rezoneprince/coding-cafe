import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])

    return (
        <div className='shop'>
           <div className='shop-container ml-36'>
           {
                products.map(product=><Products
                    product={product}
                    key={product.id}
                    ></Products> )
            }
           </div>


            <div className='purchase-product mx-28'>
                <h2>Book mark blogs</h2>
            </div>
        </div>
    );
};

export default Shop;