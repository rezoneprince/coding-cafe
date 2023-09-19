import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const {picture,name,userImg,redTime,date,title,hashTag} = props.product;
    return (
        <div className='product-container'>
            <img src={picture} alt="" />
            <div className='owner '>
                <div className='details-owner flex'>
                    <img src={userImg} alt="" />
                    <div>
                        <p>{name}</p>
                        <p>Sep {date} (2days ago)</p>
                    </div>
                </div>

                <div className='flex items-center mr-4'>
                    <p className='px-5'>{redTime}</p>
                    <button className='text-3xl'><FontAwesomeIcon icon={faBookmark} /></button>
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