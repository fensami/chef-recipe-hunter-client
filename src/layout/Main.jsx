import React from 'react';
import { Outlet } from 'react-router-dom';
// import Home from '../pages/home/home/Home';
import Header from '../pages/shared/header/Header';
import Navigationbar from '../pages/shared/navigationbar/Navigationbar';
import Chef from '../pages/shared/chef/Chef';
import ChefDetails from '../pages/shared/chefDetails/ChefDetails';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navigationbar></Navigationbar>
            <Chef></Chef>
            {/* <ChefDetails></ChefDetails> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;