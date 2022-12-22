import React from 'react';

const About = () => {
    return (
        <div className='w-11/12 mx-auto my-14 text-center'>
            <h2 className='text-2xl md:text-4xl font-bold'>BOOKLY THE <span className='text-red-500'>ONLINE</span> BOOK STORE</h2>
            <p className='my-6 text-sm md:text-lg text-slate-400'>The Online Books Guide is the biggest big store and the biggest books library in the world that has alot of the popular and the most top category <br /> books presented here. Top Authors are here just subscribe your email address and get updated with us.</p>

            <div className='md:grid grid-cols-4 gap-6'>
                <div className='border border-slate-400 rounded-lg p-5 hover:bg-red-100 mb-5 h-full'>
                    <div className='w-1/2 mx-auto p-8 rounded-full mb-5 bg-slate-100'>
                        <img src="https://i.ibb.co/j8PcMZc/2759804.png" className='w-full' alt="" />
                    </div>
                    <h2 className='text-2xl font-semibold mb-4'>Free Gift Wrap</h2>
                    <p>Free gift wrapping on all <br /> purchases. Wrapping includes a <br /> blue box with your choice with <br /> Ribbon.</p>
                    <button className='border border-slate-400 hover:bg-white px-4 py-3 mt-5'>Read More</button>
                </div>
                <div className='border border-slate-400 rounded-lg p-5 hover:bg-red-100 mb-5 h-full'>
                    <div className='w-1/2 mx-auto p-8 rounded-full mb-5 bg-slate-100'>
                        <img src="https://i.ibb.co/k8wyzmP/4259.png" className='w-full' alt="" />
                    </div>
                    <h2 className='text-2xl font-semibold mb-4'>Buy Selling Used Books</h2>
                    <p>We provide you the best selling of <br /> the used books. You can sell<br /> them to us if you have read them<br /> once.</p>
                    <button className='border border-slate-400 hover:bg-white px-4 py-3 mt-5'>Read More</button>
                </div>
                <div className='border border-slate-400 rounded-lg p-5 hover:bg-red-100 mb-5 h-full'>
                    <div className='w-1/2 mx-auto p-8 rounded-full mb-5 bg-slate-100'>
                        <img src="https://i.ibb.co/MPb2pCH/614730-200.png" className='w-full' alt="" />
                    </div>
                    <h2 className='text-2xl font-semibold mb-4'>Free Shipping</h2>
                    <p>We provide free shipping over the <br /> $1000 purchase from one<br /> country to another with extra<br /> discount.</p>
                    <button className='border border-slate-400 hover:bg-white px-4 py-3 mt-5'>Read More</button>
                </div>
                <div className='border border-slate-400 rounded-lg p-5 hover:bg-red-100 h-full'>
                    <div className='w-1/2 mx-auto p-8 rounded-full mb-5 bg-slate-100'>
                        <img src="https://i.ibb.co/sbn206X/858183.png" className='w-full' alt="" />
                    </div>
                    <h2 className='text-2xl font-semibold mb-4'>Returns & Exchange</h2>
                    <p>Return and Exchange is possible <br /> in 5 days. In case of lost or<br /> damage Return & Exchange is<br /> not possible.</p>
                    <button className='border border-slate-400 hover:bg-white px-4 py-3 mt-5'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default About;