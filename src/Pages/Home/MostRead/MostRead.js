import React from 'react';

const MostRead = () => {
    return (
        <div className='my-10 w-11/12 mx-auto p-5 border rounded-xl shadow-xl'>
            <h2 className='text-3xl text-slate-900 font-semibold'>Most Read</h2>
            <div className='grid grid-cols-2 gap-3 md:grid-cols-6 justify-around bg-white p-5 text-center'>
                <div className='flex flex-col items-center hover:text-red-600'>
                    <img src="https://i.ibb.co/SNTfjHJ/6497673.png" className='w-20 cursor-pointer' alt="" />
                    <h2 className='text-lg md:text-xl font-semibold'>Customer Reviews</h2>
                </div>
                <div className='flex flex-col items-center hover:text-red-600'>
                    <img src="https://i.ibb.co/X380Fc7/100-point-test-paper-1.png" className='w-20 cursor-pointer' alt="" />
                    <h2 className='text-lg md:text-xl font-semibold'>100 Must Reads</h2>
                </div>
                <div className='flex flex-col items-center hover:text-red-600'>
                    <img src="https://i.ibb.co/Mhd5vYz/writing.png" className='w-20 cursor-pointer' alt="" />
                    <h2 className='text-lg md:text-xl font-semibold'>Upcoming Releases</h2>
                </div>
                <div className='flex flex-col items-center hover:text-red-600'>
                    <img src="https://i.ibb.co/R2GwT7q/note-6315567.png" className='w-20 cursor-pointer' alt="" />
                    <h2 className='text-lg md:text-xl font-semibold'>Author Recomended</h2>
                </div>
                <div className='flex flex-col items-center hover:text-red-600'>
                    <img src="https://i.ibb.co/wBxcJH5/certificate-6576093.png" className='w-20 cursor-pointer' alt="" />
                    <h2 className='text-lg md:text-xl font-semibold'>Awerd Winners</h2>
                </div>
                <div className='flex flex-col items-center hover:text-red-600'>
                    <img src="https://i.ibb.co/GCDg2dc/books.png" className='w-20 cursor-pointer' alt="" />
                    <h2 className='text-lg md:text-xl font-semibold'>TextBooks</h2>
                </div>
            </div>
        </div>
    );
};

export default MostRead;