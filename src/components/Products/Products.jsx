import React from 'react';
import './Products.css';

const Products = (props) => {
    const {picture,name,userImg,redTime,date,title,hashTag} = props.product;
    return (
        <div className='product-container'>
            <img src={picture} alt="" />
            <div className='owner pr-40'>
                <div className='details-owner flex'>
                    <img src={userImg} alt="" />
                    <div>
                        <p>{name}</p>
                        <p>Sep {date} (2days ago)</p>
                    </div>
                </div>
                <div>
                    <p>{redTime}</p>
                </div>
            </div>
            <div>
                <p className='text-xl'>{title}</p>
                <p>{hashTag}</p>
            </div>
            {/* <button>Mark As Read</button> */}
            <a href="">Mark As Read</a>
            
        </div>
    );
};

export default Products;