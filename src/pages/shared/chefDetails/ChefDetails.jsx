import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Chef from '../chef/Chef';

const ChefDetails = () => {
    // const id = useParams();

    // const chefdata = useLoaderData();
    // console.log(chefdata);
    // const [chefdata , setChefdata] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/chefdata`)
    //     .then(res => res.json())
    //     .then(data => setChefdata(data))

    // },[])
    const chefdata = useLoaderData()

    return (
        <div>
            <h2>Chef details comming soon.. :</h2>
            {
                chefdata.map(data => <Chef
                key={data.id}
                data={data}
                ></Chef>)
            }
        </div>
    );
};

export default ChefDetails;