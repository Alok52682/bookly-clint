import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOut from './CheckOut';
const stripePromise = loadStripe(process.env.REACT_APP_pk_key);

const Pay = () => {
    const order = useLoaderData();

    return (
        <div className='lg:flex items-center justify-center gap-5 lg:mt-52 w-11/12 mx-auto'>
            <div className="card bg-base-900 border shadow-xl mb-5 lg:w-1/2 ">
                <div className="card-body">
                    <h2 className='text-xl mb-3'>Drop your card information and pay</h2>
                    <Elements stripe={stripePromise}>
                        <CheckOut order={order} />
                    </Elements>
                </div>
            </div>
            <div className="card border shadow-xl mb-5 bg-base-900 lg:w-1/2">
                <div className="card-body">
                    <div className='flex items-center justify-between border-b-2 border-red-300 p-3'>
                        <h2 className='text-lg font-bold'>{order.bookname}</h2>
                        <img src={order.bookImage} className='w-32 shadow-2xl border-4 border-red-400' alt="" />
                    </div>
                    <div className="font-bold text-red-600">
                        <p>Price : ${order.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pay;