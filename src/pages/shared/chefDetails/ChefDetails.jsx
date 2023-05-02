import React from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';

const ChefDetails = ({data}) => {
    const {chef_picture, name,id} = data;
    

    return (
        <Container>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={chef_picture} />
                    <Card.Body>
                        <Card.Title>{name}{id}</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer> */}
                    <p><Link to= {`/bestDishes/${id}`}>show all data</Link></p>
                </Card>
                

            </CardGroup>
        </Container>
    );
};

export default ChefDetails;