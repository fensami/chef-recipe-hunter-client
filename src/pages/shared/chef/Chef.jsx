import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import BestDishes from '../BestDishes/BestDishes';

const Chef = () => {

    const chef = useLoaderData()

    const { chef_picture, bestDishes, name, likes, id, year_of_experience, numbers_of_recipes, description } = chef
    return (
        <div>
            <Container>

                <Card className="bg-dark text-white mt-3">
                    <Card.Img src={chef_picture} alt="Card image" />
                    <Card.ImgOverlay>
                        <div className='w-50'>
                            <h2>{name}</h2>
                            <h5><small>{description}</small></h5>
                            <h6><small>Likes : {likes}</small></h6>
                            <p className='fw-bold'>Years of experience : {year_of_experience} </p>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </Container>

            <Container className='mb-5'>
                <h2 className='text-center mt-5'>Chef Recipes</h2>

                {
                    bestDishes.map((dt, index) => <BestDishes
                        key={index}
                        dt={dt}
                    ></BestDishes>)
                }
            </Container>

        </div>
    );
};

export default Chef;