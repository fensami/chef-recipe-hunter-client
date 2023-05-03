import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Signup = () => {
    const {createUser} = useContext(AuthContext)

    const handleSignUp  = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email , password);

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>  console.log(error))

    }
    return (
        <Container className='container p-3 w-25 border mt-5 rounded'>
            <h2 className='text-center'>SignUp</h2>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Name</Form.Label>
                    <Form.Control type="name" id='name' placeholder="name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control type="email" id='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type="password" id='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Show Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Signup
                </Button>
            </Form>

            <Form.Text className="text-secondary">
                Already have an account?
                <Link to={'/login'}>Login</Link>

            </Form.Text>
        </Container>
    );
};

export default Signup;