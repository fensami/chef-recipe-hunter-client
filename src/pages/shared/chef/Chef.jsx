import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import BestDishes from '../BestDishes/BestDishes';

const Chef = () => {
    // const chef = useLoaderData()
    // console.log(chef);
    const chef = useLoaderData()
    // console.log(chef);
    const { id, bestDishes,chef_picture , name} = chef
    return (
        <div>
            <Container>
            <Card className="bg-dark text-white mt-3">
                <Card.Img src={chef_picture} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title><p>{name}</p></Card.Title>
                    {/* <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text> */}
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Container>

        <Container>

            {
                bestDishes.map((dt, index) => <BestDishes
                key={index}
                dt= {dt}
                ></BestDishes>)
            }
        </Container>

        </div>
    );
};

export default Chef;