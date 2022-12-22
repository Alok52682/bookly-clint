import React from 'react';
import About from '../About/About';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import MostRead from '../MostRead/MostRead';
import TopSellers from '../TopSellers/TopSellers';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <Advertise />
            <TopSellers />
            <MostRead />
            <About />
        </div>
    );
};

export default Home;