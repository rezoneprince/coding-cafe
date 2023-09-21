import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';
import Bookmark from '../Bookmark/Bookmark';

const Shop = () => {
    
    const [products, setProducts] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [addTimes,setAddTimes] = useState(0);


    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])

    const handleAddToCart = (bookmark)=>{
        const addCart = [...bookmarks, bookmark]
        setBookmarks(addCart);
    }

    const handleAddToTime = (newTime) =>{
        const addAllTime = addTimes + newTime;
        setAddTimes(addAllTime)
    }
   
    return (
        <div className='shop'>
           <div className='shop-container ml-36'>
           {
                products.map(product=><Products
                    product={product}
                    handleAddToCart={handleAddToCart}
                    handleAddToTime={handleAddToTime}
                    key={product.id}
                    ></Products> )
            }
           </div>


            <div className='purchase-product mx-28'>
                {
                    <Bookmark bookmarks={bookmarks} addTimes={addTimes}></Bookmark>
                }
            </div>
           
        </div>
    );
};

export default Shop;