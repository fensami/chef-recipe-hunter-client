import React from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const BestDishes = ({dt}) => {
    // console.log(dt);
    // const dt = useLoaderData()
    // console.log(dt);
    const {id, name,food_image,bangladeshiRecipeName} = dt;
    return (
        <Container>
        <CardGroup className='w-75 mx-auto'>
      <Card className='mt-2'>
        <Card.Img className='w-75 mt-2 mx-auto' variant="top" src={food_image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{bangladeshiRecipeName}</small>
        </Card.Footer>
      </Card>
      
    </CardGroup>
        </Container>
    );
};

export default BestDishes;