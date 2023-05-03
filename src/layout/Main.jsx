import React from 'react';
import { Outlet } from 'react-router-dom';
// import Home from '../pages/home/home/Home';
import Header from '../pages/shared/header/Header';
import Navigationbar from '../pages/shared/navigationbar/Navigationbar';
import Footer from '../pages/footer/Footer';
// import Chef from '../pages/shared/chef/Chef';
// import ChefDetails from '../pages/shared/chefDetails/ChefDetails';

const Main = () => {
    return (
        <div>
            <Header></Header>
            
            <Navigationbar></Navigationbar>
            <Outlet></Outlet>

            <Footer></Footer>

            
        </div>
    );
};

export default Main;