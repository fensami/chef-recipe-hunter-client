import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefDetails from '../../shared/chefDetails/ChefDetails';
import Slider from '../../shared/slider/Slider';
import RandomFoods from '../../shared/randomFoods/RandomFoods';
import SpecialFoods from '../../specialFoods/SpecialFoods';
import Banner from '../banner/Banner';
import { Container } from 'react-bootstrap';

const Home = () => {
    const chef = useLoaderData()
    const [randomfoods, setrandomfoods] = useState([])
    useEffect(() => {
        fetch('https://foodian-server-fensami.vercel.app/randomfoods')
            .then(res => res.json())
            .then(data => setrandomfoods(data))
    }, [])


    return (
        <div>
            <div className='w-75 mx-auto mt-2'>
                <Banner></Banner>
               


            </div>
            <div className='w-50 mx-auto'>
                <h3 className='text-primary mt-5 text-center'>FOodian Chefs</h3>
                {
                    chef.map((data, index) => <ChefDetails
                        key={index}
                        data={data}
                    ></ChefDetails>)

                }
            </div>
            <Container className='mt-3'>
            <Slider></Slider>
            </Container>

            <div className='border w-75 mx-auto mt-5 mb-4 rounded'>
                <h1 className='text-center mt-4 text-primary'>Random FOods</h1>
                {
                    randomfoods?.map((randomfood, index) => <RandomFoods
                        key={index}
                        randomfood={randomfood}
                    ></RandomFoods>)
                }
            </div>
            <div>
                <SpecialFoods></SpecialFoods>
            </div>

        </div>
    );
};

export default Home;