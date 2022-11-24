import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Category = () => {
    return (
        <div className='my-10 w-11/12 mx-auto p-5 border rounded-xl shadow-xl'>
            <h2 className='text-3xl text-slate-900 font-semibold'>Categories</h2>
            <div className='grid grid-cols-2 gap-3 md:grid-cols-6 items-center justify-around bg-white p-5'>
                <div className='md:p-5 cursor-pointer h-full'>
                    <div className='flex flex-col border rounded-lg w-full h-full'>
                        <div className='m-4 flex justify-center items-center h-4/5'>
                            <img src="https://i.ibb.co/k041QfY/rok-icon-school.png" className='w-full' alt="" />
                        </div>
                        <div className='border-t p-2 flex justify-center items-center gap-1 bg-red-600 text-white hover:text-red-600 hover:bg-slate-900 rounded-b-lg h-1/5'>
                            <h2 className='text-xl font-semibold'>School</h2> <FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className='md:p-5 cursor-pointer h-full'>
                    <div className='flex flex-col border rounded-lg w-full h-full'>
                        <div className='m-4 flex justify-center items-center h-4/5'>
                            <img src="https://i.ibb.co/5M6x6Ch/rok-icon-college.png" className='w-full' alt="" />
                        </div>
                        <div className='border-t p-2 flex justify-center items-center gap-1 bg-red-600 text-white hover:text-red-600 hover:bg-slate-900 rounded-b-lg h-1/5'>
                            <h2 className='text-xl font-semibold'>College</h2> <FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className='md:p-5 cursor-pointer h-full'>
                    <div className='flex flex-col border rounded-lg w-full h-full'>
                        <div className='m-4 flex justify-center items-center h-4/5'>
                            <img src="https://i.ibb.co/Nyvm6mv/rok-icon-university.png" className='w-full' alt="" />
                        </div>
                        <div className='border-t p-2 flex justify-center items-center gap-1 bg-red-600 text-white hover:text-red-600 hover:bg-slate-900 rounded-b-lg h-1/5'>
                            <h2 className='text-xl font-semibold'>University</h2> <FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className='md:p-5 cursor-pointer h-full'>
                    <div className='flex flex-col border rounded-lg w-full h-full'>
                        <div className='m-4 flex justify-center items-center h-4/5'>
                            <img src="https://i.ibb.co/LxWXsxS/rok-icon-engg.png" className='w-full' alt="" />
                        </div>
                        <div className='border-t p-2 flex justify-center items-center gap-1 bg-red-600 text-white hover:text-red-600 hover:bg-slate-900 rounded-b-lg h-1/5'>
                            <h2 className='text-xl font-semibold'>Engineering</h2> <FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className='md:p-5 cursor-pointer h-full'>
                    <div className='flex flex-col border rounded-lg w-full h-full'>
                        <div className='m-4 flex justify-center items-center h-4/5'>
                            <img src="https://i.ibb.co/s5jpMsc/rok-icon-nursing.png" className='w-full' alt="" />
                        </div>
                        <div className='border-t p-2 flex justify-center items-center gap-1 bg-red-600 text-white hover:text-red-600 hover:bg-slate-900 rounded-b-lg h-1/5'>
                            <h2 className='text-xl font-semibold'>Nursing</h2> <FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className='md:p-5 cursor-pointer h-full'>
                    <div className='flex flex-col border rounded-lg w-full h-full'>
                        <div className='m-4 flex justify-center items-center h-4/5'>
                            <img src="https://i.ibb.co/cQ9vXL9/rok-icon-medical.png" className='w-full' alt="" />
                        </div>
                        <div className='border-t p-2 flex justify-center items-center gap-1 bg-red-600 text-white hover:text-red-600 hover:bg-slate-900 rounded-b-lg h-1/5'>
                            <h2 className='text-xl font-semibold'>Medical</h2> <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;