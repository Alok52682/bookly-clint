import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const { data: allBuyers = [] } = useQuery({
        queryKey: ['buyers'],
        queryFn: () => fetch('http://localhost:4000/buyers')
            .then(res => res.json())
    });
    return (
        <div>
            <h3 className='text-3xl bg-gradient-to-r from-red-600 to-slate-900 text-white p-5 font-bold text-center w-1/2 mx-auto my-5'>All Selers</h3>
            <div className="overflow-x-auto">
                <table className="table w-9/12 mx-auto">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Seler Name</th>
                            <th>Seler email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBuyers && allBuyers.map((buyers, i) => {
                                return (
                                    <tr key={buyers._id} className="hover">
                                        <th>{i + 1}</th>
                                        <td>{buyers.name}</td>
                                        <td>{buyers.email}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;