import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import MostRead from '../MostRead/MostRead';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <Advertise />
            <MostRead />
        </div>
    );
};

export default Home;