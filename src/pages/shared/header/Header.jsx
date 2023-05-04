import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { Button } from 'react-bootstrap';
import { FaBeer, FaUserCircle } from 'react-icons/fa';
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

            <div>
                <article className='d-flex align-items-center'>
                    <div>
                        {
                            user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                        }
                    </div>
                    <div>
                        {user ?
                            <Button className='ms-3 fw-bold text-white' onClick={handleLogout} variant="primary">LogOut</Button> :
                            <Link to={'/login'}><Button variant="primary">Login</Button></Link>
                        }
                    </div>
                    <Button className='ms-2'><Link to='/signup' className='text-decoration-none text-white mx-3 fw-bold'>SignUp</Link></Button>
                </article>

            </div>
        </div>
    );
};

export default Header;