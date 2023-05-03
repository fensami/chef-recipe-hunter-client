import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tarms = () => {
    return (
        <div>
            <Container>
                <h2>Tarms and condition</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut harum necessitatibus dolorum optio sint eaque mollitia vitae consequatur tempora, sunt itaque temporibus aut placeat aliquid quod expedita architecto. Veniam, quisquam?</p>
                <p>Go back to <Link to={'/signup'}>SignUp</Link> </p>
            </Container>
        </div>
    );
};

export default Tarms;