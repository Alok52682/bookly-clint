import React from 'react';
import About from '../About/About';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Info from '../Info/Info';
import MostRead from '../MostRead/MostRead';
import TopSellers from '../TopSellers/TopSellers';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <Advertise />
            <Info />
            <TopSellers />
            <MostRead />
            <About />
        </div>
    );
};

export default Home;