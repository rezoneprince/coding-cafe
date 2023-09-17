import React from 'react';
import HeaderImg from '../../images/giphy.gif';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
             <div className="navbar px-28">
                  <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                  </div>
                <div className="flex-none gap-2">
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                        <img src={HeaderImg}/>
                      </div>
                    </label>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;