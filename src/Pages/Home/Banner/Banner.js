import React from 'react';
import { Link } from 'react-router-dom';
import back from '../../../Assets/Banner_img.webp';
import './banner.css';

const Banner = () => {
    return (
        <div className="relative w-full banner">
            <div className='back-img'>
                <img src={back} className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-32 md:top-1/2 left-1/2" alt='banner4' />
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-5 md:left-24 top-20 md:top-1/4">
                <h1 className='text-4xl md:text-6xl font-extrabold text-red-600'>Get 70% Off for All <br /> Kinds Of Books</h1>
            </div>
            <div className="absolute flex justify-start transform w-2/5 -translate-y-1/2 left-5 md:left-24 top-36 md:top-2/4">
                <p className='text-slate-900 text-xl md:text-4xl font-bold'>Year End Sell</p>
            </div>
            <div className="absolute flex justify-start transform w-2/5 -translate-y-1/2 left-5 md:left-24 top-48 md:top-3/4">
                <Link className="btn bg-red-600 border-none hover:bg-slate-900 mr-5">Shop Now</Link>
            </div>
        </div>
    );
};

export default Banner;