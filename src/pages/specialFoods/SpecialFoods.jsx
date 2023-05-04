import React from 'react';
import { Card, CardGroup,  Container } from 'react-bootstrap';
import special1 from '../../../public/images/special1.jpg'
import special2 from '../../../public/images/pasta.jpg'
import special3 from '../../../public/images/chicken.jpg'

const SpecialFoods = () => {
    return (
        <Container className='my-5'>
            <h3 className='text-primary text-center'>Special Food</h3>
            <CardGroup className='gap-4'>
        <Card>
          <Card.Img className='h-50' variant="top" src={special1} />
          <Card.Body>
            <Card.Title>Burger</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 2 days ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img className='h-50' variant="top" src={special2} />
          <Card.Body>
            <Card.Title>Pasta</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 4 day ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img className='h-50' variant="top" src={special3} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
        </Container>
    );
};

export default SpecialFoods;