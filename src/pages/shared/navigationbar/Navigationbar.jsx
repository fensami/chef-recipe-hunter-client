import React from 'react';
import { Link } from 'react-router-dom';

const Navigationbar = () => {
    return (
        <div className='bg-danger fw-bold '>
            <Link>Home</Link>
            <Link>Blogs</Link>
            <Link>Chef</Link>
            {/* <h2>this is nagigation</h2> */}
            
        </div>
    );
};

export default Navigationbar;