import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query'

const Category = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['catagories'],
        queryFn: () => fetch('http://localhost:4000/categories')
            .then(res => res.json())
    });

    return (
        <div className='my-10 w-11/12 mx-auto p-5 border rounded-xl shadow-xl'>
            <h2 className='text-3xl text-slate-900 font-semibold'>Categories</h2>
            <div className='grid grid-cols-2 gap-3 md:grid-cols-6 items-center justify-around bg-white p-5'>
                {
                    categories && categories.map(category => {
                        return (
                            <div key={category._id} className='md:p-5 cursor-pointer h-full'>
                                <div className='flex flex-col border rounded-lg w-full h-full'>
                                    <div className='m-4 flex justify-center items-center h-4/5'>
                                        <img src={category.image} className='w-full' alt="" />
                                    </div>
                                    <div className='border-t p-2 flex justify-center items-center gap-1 bg-red-600 text-white hover:text-red-600 hover:bg-slate-900 rounded-b-lg h-1/5'>
                                        <h2 className='text-xl font-semibold'>{category.name}</h2> <FaArrowRight />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Category;