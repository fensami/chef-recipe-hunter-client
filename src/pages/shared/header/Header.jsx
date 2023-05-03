import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { Button } from 'react-bootstrap';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div className='px-5 bg-opacity-25 bg-secondary bg-gradient d-flex justify-content-between align-items-center '>
            <img src={logo} alt="" />
            {/* <h1>FOoDian</h1> */}
            <div>
                {user && <p></p>}
                {/* {
                    user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                } */}
                {user ?
                    <Button onClick={handleLogout} variant="secondary">LogOut</Button> :
                    <Link to={'/login'}><Button variant="secondary">Login</Button></Link>
                }
                <Link to='/signup' className='text-decoration-none fs-3 text-black mx-3 fw-bold'>SignUp</Link>
            </div>
        </div>
    );
};

export default Header;