import React, { useEffect, useState } from 'react';
// import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefDetails from '../chefDetails/ChefDetails';
// import ChefDetails from '../chefDetails/ChefDetails';


const Chef = () => {
    const chefData = useLoaderData()
    // const [chef , setChef] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/chefdata')
    //     .then(res => res.json())
    //     .then(data => setChef(data))
    // },[])


    console.log(chefData);
    // const {id, name} = chefData;
    return (
        <div className='border text-center'>
            {/* {
                chef.map(data => <ChefDetails
                key={data.id}
                data= {data}
                ></ChefDetails>)

            } */}

        </div>
    );
};

export default Chef;