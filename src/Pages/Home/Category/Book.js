import React from 'react';

const Book = ({ book }) => {
    console.log(book);
    const { condition, location, originalPrice, postDate, postTime, reselePrice, selerName, title, bookurl } = book;
    return (
        <div className="max-w-2xl mx-auto h-full w-full">
            <div className="bg-red-50 shadow-md rounded-lg max-w-sm dark:bg-gray-800 h-full dark:border-gray-700">
                <div className='h-3/5'>
                    <img className="rounded-t-lg px-8 py-3 h-full mx-auto" src={bookurl} alt='' />
                </div>
                <div className="px-3 pb-5 h-2/5">
                    <div className='mb-3'>
                        <p className="badge badge-ghost badge-sm">Posted at {postTime} on {postDate}</p>
                        <h2 className='md:text-lg lg:text-xl font-semibold'>{title}</h2>
                        <p className='text-sm'>Condition : {condition}</p>
                        <p className='text-sm'>Seler: {selerName}</p>
                        <p className='text-sm'>Location : {location}</p>
                    </div>
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-sm text-gray-900 dark:text-white">Reseleprice: ${reselePrice}</p>
                            <p className="text-sm text-gray-900 dark:text-white">Originalprice: ${originalPrice}</p>
                        </div>
                        <button
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;