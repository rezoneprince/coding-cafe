import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Shop = () => {
    
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])

    return (
        <div>
            {
                products.map(product=><Products
                    product={product}
                    key={product.id}
                    ></Products> )
            }
        </div>
    );
};

export default Shop;