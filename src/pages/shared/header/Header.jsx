import React from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='px-5 bg-success d-flex justify-content-between align-items-center '>
            <img src={logo} alt="" />
            {/* <h1>FOoDian</h1> */}
            <div>
                <Link className='fs-3 text-black fw-bold'>Login</Link>
            </div>
        </div>
    );
};

export default Header;