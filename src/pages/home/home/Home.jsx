import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
// import Chef from '../../shared/chef/Chef';
import ChefDetails from '../../shared/chefDetails/ChefDetails';
import Slider from '../../shared/slider/Slider';
import RandomFoods from '../../shared/randomFoods/RandomFoods';

const Home = () => {
    const chef = useLoaderData()
    const [randomfoods, setrandomfoods] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/randomfoods')
        .then(res => res.json())
        .then(data => setrandomfoods(data))
    },[])
   

    return (
        <div>
            <div className='w-75 mx-auto mt-2 h-50'>
                <Slider></Slider>


            </div>
            <div className='w-50 mx-auto'>
            {
                chef.map((data,index) => <ChefDetails
                key={index}
                data= {data}
                ></ChefDetails>)

            }
            </div>

             <div className='border w-75 mx-auto mt-5 mb-4 rounded'>
                <h1 className='text-center mt-4'>Random FOods</h1>
             {
                    randomfoods?.map((randomfood , index) => <RandomFoods
                    key={index}
                    randomfood={randomfood}
                    ></RandomFoods>)
                }
             </div>
            
        </div>
    );
};

export default Home;