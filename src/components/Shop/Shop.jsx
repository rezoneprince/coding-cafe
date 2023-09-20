import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';
import Bookmark from '../Bookmark/Bookmark';

const Shop = () => {
    
    const [products, setProducts] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
   

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])

    const handleAddToCart = (bookmark)=>{
        const addCart = [...bookmarks, bookmark]
        setBookmarks(addCart);
    }

   
    return (
        <div className='shop'>
           <div className='shop-container ml-36'>
           {
                products.map(product=><Products
                    product={product}
                    handleAddToCart={handleAddToCart}
                    key={product.id}
                    ></Products> )
            }
           </div>


            <div className='purchase-product mx-28'>
                {
                    <Bookmark bookmarks={bookmarks}></Bookmark>
                }
            </div>
           
        </div>
    );
};

export default Shop;