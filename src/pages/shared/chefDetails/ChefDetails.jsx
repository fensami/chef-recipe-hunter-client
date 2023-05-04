import React from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefDetails = ({data}) => {
    const {chef_picture, name,likes,id,year_of_experience,numbers_of_recipes} = data;
    

    return (
        <Container className='mt-3'>

            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={chef_picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Title>Year of experience : {year_of_experience}</Card.Title>
                        <Card.Title>Numbers of recipes: {numbers_of_recipes}</Card.Title>
                        <Card.Title>Likes: {likes}</Card.Title>

                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary" className='w-25 mx-auto mb-2'><Link to= {`/chef/${id}`} className='text-decoration-none text-white fw-bold'>View Recipes</Link></Button>
                </Card>
                

            </CardGroup>
        </Container>
    );
};

export default ChefDetails;