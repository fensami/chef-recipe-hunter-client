import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import app from '../../../firebase/firebase.config';
// import app from '../../../firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    const [error, setError] = useState('')
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleSignInWithGOogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => { 'error', console.log(error.message); })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                navigate('/');
            } 
        })
    },[])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => { setError(error.message) })

    }

    return (
        <Container className='container p-3 w-25 border mt-5 rounded'>
            <h2 className='text-center'>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Show Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p className='text-danger'>{error}</p>
            </Form>
            <Button onClick={handleSignInWithGOogle}>SignIn With Google</Button>
            <Form.Text className="text-secondary">
                <span>Don't have an account? </span>
                <Link to={'/signup'}>SignUp</Link>

            </Form.Text>
        </Container>
    );
};

export default Login;