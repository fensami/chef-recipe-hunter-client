import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/home/home/Home';
import Header from '../pages/shared/header/Header';
import Navigationbar from '../pages/shared/navigationbar/Navigationbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navigationbar></Navigationbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;