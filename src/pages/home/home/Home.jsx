import React, { useEffect, useState } from 'react';
import Foodians from '../foodians/Foodians';

const Home = () => {
    const [foodians, setFoodians] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/foodian')
        .then(res => res.json())
        .then(data => setFoodians(data))
        .catch(error => {console.log(error)})
    },[])
    return (
        <div className='w-50 mx-auto'>
            {
                foodians.map(foodian => <Foodians
                key={foodian.id}
                foodian= {foodian}
                ></Foodians>)
            }
        </div>
    );
};

export default Home;