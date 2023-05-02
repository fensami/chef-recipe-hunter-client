import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from '../../shared/chef/Chef';
import ChefDetails from '../../shared/chefDetails/ChefDetails';

const Home = () => {
    const chef = useLoaderData()
    const chefData = useLoaderData()
    console.log(chefData);

    return (
        <div className='w-50 mx-auto'>
            {
                chef.map((data,index) => <ChefDetails
                key={index}
                data= {data}
                ></ChefDetails>)

            }
        </div>
    );
};

export default Home;