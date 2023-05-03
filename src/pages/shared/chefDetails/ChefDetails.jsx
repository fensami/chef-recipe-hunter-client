import React from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';

const ChefDetails = ({data}) => {
    const {chef_picture, name,id,year_of_experience,numbers_of_recipes} = data;
    

    return (
        <Container className='mt-3'>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={chef_picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Title>Year of experience : {year_of_experience}</Card.Title>
                        <Card.Title>Numbers of recipes: {numbers_of_recipes}</Card.Title>

                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer> */}
                    <Button variant="info" className='w-25 mx-auto mb-2'><Link to= {`/chef/${id}`} className='text-decoration-none text-black fw-bold'>View Recipes</Link></Button>
                </Card>
                

            </CardGroup>
        </Container>
    );
};

export default ChefDetails;