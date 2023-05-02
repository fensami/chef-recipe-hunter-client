import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Foodians = ({foodian}) => {
    const {id, imageUrl,title,description} = foodian
    return (
        <Container className='mt-3'>
            <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </Container>
    );
};

export default Foodians;