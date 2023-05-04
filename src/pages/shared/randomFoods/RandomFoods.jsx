import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const RandomFoods = ({randomfood}) => {
    console.log(randomfood);

    const {name,food_image,description} = randomfood;
    return (
        <div>
            {/* <h2>Comming soon random foods</h2> */}
            <Container>
            <Row md={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col className='my-4' key={idx}>
          <Card className='mt-4'>
            <Card.Img variant="top" src={food_image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
            </Container>
        </div>
    );
};

export default RandomFoods;