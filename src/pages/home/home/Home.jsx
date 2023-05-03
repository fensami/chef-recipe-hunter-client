import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
// import Chef from '../../shared/chef/Chef';
import ChefDetails from '../../shared/chefDetails/ChefDetails';
import Slider from '../../shared/slider/Slider';

const Home = () => {
    const chef = useLoaderData()
    const [slider, setSlider] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/foodian')
        .then(res => res.json())
        .then(data => setSlider(data))
    },[])
   

    return (
        <div>
            <div className='w-75 mx-auto mt-2 h-50'>
                <Slider></Slider>
                {
                    // slider.map((dt, index) => <Slider
                    // key={index}
                    // dt= {dt}
                    // ></Slider>)
                }


            </div>
            <div className='w-50 mx-auto'>
            {
                chef.map((data,index) => <ChefDetails
                key={index}
                data= {data}
                ></ChefDetails>)

            }
            </div>
        </div>
    );
};

export default Home;