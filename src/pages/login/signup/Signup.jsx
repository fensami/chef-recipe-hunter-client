import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
// import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';

const Signup = () => {
    const {createUser, googleAuth} = useContext(AuthContext)
    
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('')



    

    const handleSignUp  = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;

        const password = form.password.value;
        console.log(name, email , password,photo);
        if(password.length <6){
            setError('Your password must be 6 characters')
            return
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>  console.log(error))

    }
    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }
   
    return (
        <Container className='container p-3 w-25 border mt-5 rounded'>
            <h2 className='text-center'>SignUp</h2>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Name</Form.Label>
                    <Form.Control type="text" name='name'  placeholder="name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Photo Url</Form.Label>
                    <Form.Control type="text" name='photo'  placeholder="PhotoUrl" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control type="email" name='email'  placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type="password" name='password'  placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Show Password" />
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted}
                        type="checkbox"
                        name='accept'
                        label={<>Accept <Link to={'/tarms'}>Terms and condition</Link></>} />
                </Form.Group>
                <Button disabled={!accepted} variant="primary" type="submit">
                    Signup
                </Button>
                <p className='text-danger'>{error}</p>
               
                {/* <Button onClick={handleGoogleSignIn}>GOogle Login</Button> */}
               
               
            </Form>

            <Form.Text className="text-secondary">
                Already have an account?
                <Link to={'/login'}>Login</Link>

            </Form.Text>

        </Container>
    );
};

export default Signup;