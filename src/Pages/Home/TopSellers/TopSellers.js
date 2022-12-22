import React from 'react';

const TopSellers = () => {
    return (
        <div className='w-11/12 mx-auto my-14 text-center bg-slate-100 rounded-xl p-5'>
            <h2 className='text-2xl md:text-4xl font-bold'>BEST <span className='text-red-500'>TOP</span> SELLERS</h2>
            <p className='my-6 text-sm md:text-lg'>The Book Guide and the Book Library has one of the top sellers books with them. Those books which are sold with in few days and still available<br /> in our stock which you can get with us easily.</p>
            <div className='md:grid grid-cols-4 gap-6'>
                <div className='py-5 bg-white mb-5 rounded-lg'>
                    <img src="https://i.ibb.co/VH0sB35/book2.png" className='mx-auto' alt="" />
                    <h2 className='text-2xl font-semibold flex items-center justify-center pt-5'>Broken Vision</h2>
                </div>
                <div className='py-5 bg-white mb-5 rounded-lg'>
                    <img src="https://i.ibb.co/pvj4CFT/book6.png" className='mx-auto' alt="" />
                    <h2 className='text-2xl font-semibold flex items-center justify-center pt-5'>Bridget jones</h2>
                </div>
                <div className='py-5 bg-white mb-5 rounded-lg'>
                    <img src="https://i.ibb.co/HNbM6VB/book3.png" className='mx-auto' alt="" />
                    <h2 className='text-2xl font-semibold flex items-center justify-center pt-5'>Firies in my Fireplace</h2>
                </div>
                <div className='py-5 bg-white mb-5 rounded-lg'>
                    <img src="https://i.ibb.co/PmnJhxk/book8.png" className='mx-auto' alt="" />
                    <h2 className='text-2xl font-semibold flex items-center justify-center pt-5'>Chrysalis</h2>
                </div>
            </div>
        </div>
    );
};

export default TopSellers;