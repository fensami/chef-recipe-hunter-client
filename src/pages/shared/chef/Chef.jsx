import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({data}) => {
    const {id, name,description}= data;
    return (
        <div>
            <p>{name}</p>
            <p>{description}</p>
            <Link to={`/bestDishes/${id}`}>Details</Link>
        </div>
    );
};

export default Chef;