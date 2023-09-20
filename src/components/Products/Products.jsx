import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const {picture,name,userImg,redTime,date,title,hashTag} = props.product;
    return (
        <div className='product-container py-5'>
            <img src={picture} alt="" />
            <div className='owner '>
                <div className='details-owner flex items-center'>
                    <img src={userImg} alt="" />
                    <div>
                        <p>{name}</p>
                        <p className='text-xs text-gray-500'>Sep {date} (2days ago)</p>
                    </div>
                </div>

                <div className='flex items-center mr-4'>
                    <p className='px-5 text-sm text-slate-600'>{redTime} min read</p>
                    <button className='text-3xl'><FontAwesomeIcon icon={faBookmark} /></button>
                </div>

            </div>
            <div className='ml-3 py-3'>
                <p className='text-xl font-bold'>{title}</p>
                <p className='text-xs text-gray-500'>{hashTag}</p>
            </div>
            <button className='ml-3 border-b-2'>Mark As Read</button>
            
        </div>
    );
};

export default Products;