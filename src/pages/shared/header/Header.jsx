import React from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='px-5 bg-opacity-25 bg-secondary bg-gradient d-flex justify-content-between align-items-center '>
            <img src={logo} alt="" />
            {/* <h1>FOoDian</h1> */}
            <div>
                <Link to='/login' className='fs-3 text-black fw-bold text-decoration-none'>LogIn</Link>
                <Link className='text-decoration-none fs-3 text-black mx-3 fw-bold'>SignUp</Link>
            </div>
        </div>
    );
};

export default Header;