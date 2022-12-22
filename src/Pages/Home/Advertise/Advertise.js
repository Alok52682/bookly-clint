import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertise = () => {
    const { data: advertises = [] } = useQuery({
        queryKey: ['advertised'],
        queryFn: () => fetch('https://b612-used-products-resale-server-side-green.vercel.app/advertised')
            .then(res => res.json())
    });
    return (
        <div className={`my-10 w-11/12 mx-auto p-5 shadow-xl border rounded-xl ${advertises.length > 0 ? 'block' : 'hidden'}`}>
            <h2 className='text-center text-2xl md:text-5xl font-bold mb-3 text-red-600'>Advertisements</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 border-t-2 pt-3 gap-3'>
                {
                    advertises && advertises.map(advertise => {
                        return (
                            <div key={advertise._id} className="max-w-2xl mx-auto h-full">
                                <div className="bg-red-50 shadow-md rounded-lg max-w-sm h-full">
                                    <div className='h-4/5'>
                                        <img className="rounded-t-lg px-8 py-3 h-full mx-auto" src={advertise.bookurl} alt='' />
                                    </div>
                                    <div className="px-3 pb-5 h-1/5 text-center">
                                        <div className='mb-3'>
                                            <p className="badge badge-ghost badge-sm">Posted at {advertise.postTime} on {advertise.postDate}</p>
                                            <h2 className='md:text-lg lg:text-xl font-semibold'>{advertise.title}</h2>
                                            <div className='flex items-center gap-4 justify-center'>
                                                <p className='text-sm'>Condition : {advertise.condition}</p>
                                                <p className="text-xs text-red-600 font-bold">Price: ${advertise.reselePrice}</p>
                                            </div>
                                        </div>
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

export default Advertise;