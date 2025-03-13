import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import FollowUs from './FollowUs';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Header></Header>
            <Hero></Hero>
            <Outlet></Outlet>
            <FollowUs></FollowUs>
            <Footer></Footer>
        </div>
    );
};

export default Layout;