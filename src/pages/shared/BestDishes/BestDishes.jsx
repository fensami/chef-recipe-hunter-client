import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BestDishes = () => {
    const data = useLoaderData()
    console.log(data);
    const {id, name} = data;
    return (
        <div>
            <p>{name}</p>
            <h2>this is dessseedss {id}</h2>
        </div>
    );
};

export default BestDishes;