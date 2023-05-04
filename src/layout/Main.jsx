import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/header/Header';
import Navigationbar from '../pages/shared/navigationbar/Navigationbar';
import Footer from '../pages/footer/Footer';



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