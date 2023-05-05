import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { Button, Container, Navbar } from 'react-bootstrap';
import { FaBeer, FaUserCircle } from 'react-icons/fa';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div >
            <div className='px-5 bg-opacity-25 bg-secondary bg-gradient d-lg-flex justify-content-between align-items-center '>


                <img src={logo} alt="" />

                <div>
                    <article className='d-flex align-items-center'>
                        <div>
                            {
                                user && <FaUserCircle className='text-primary' style={{ fontSize: '2rem' }}></FaUserCircle>
                            }
                        </div>
                        <div>
                            {user ?
                                <Button className='ms-3 fw-bold text-white' onClick={handleLogout} variant="primary fw-bold">LogOut</Button> :
                                <Link to={'/login'}><Button variant="primary fw-bold">Login</Button></Link>
                            }
                        </div>
                        <Button className='ms-2'><Link to='/signup' className='text-decoration-none text-white mx-3 fw-bold'>SignUp</Link></Button>
                    </article>

                </div>
            </div>
        </div>
    );
};

export default Header;