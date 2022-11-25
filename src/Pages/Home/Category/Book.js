import React from 'react';

const Book = ({ book, setBook }) => {
    const { condition, location, originalPrice, postDate, postTime, reselePrice, selerName, title, bookurl } = book;
    return (
        <div className="max-w-2xl mx-auto h-full w-full">
            <div className="bg-red-50 shadow-md rounded-lg max-w-sm h-full">
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
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-900">Reseleprice: ${reselePrice}</p>
                            <p className="text-xs text-gray-900">Originalprice: ${originalPrice}</p>
                        </div>
                        {/* <button
                            className="text-white bg-red-600 hover:bg-slate-900 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Book Now</button> */}
                        <label onClick={() => setBook(book)} htmlFor="bookModal" className="text-white bg-red-600 hover:bg-slate-900 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;