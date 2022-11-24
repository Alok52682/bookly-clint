import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeler = () => {
    const { data: allSelers = [] } = useQuery({
        queryKey: ['slers'],
        queryFn: () => fetch('http://localhost:4000/slers', {
            headers: {
                authorization: `bearer ${localStorage.getItem('Access_Token')}`
            }
        })
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSelers && allSelers.map((seler, i) => {
                                return (
                                    <tr key={seler._id} className="hover">
                                        <th>{i + 1}</th>
                                        <td>{seler.name}</td>
                                        <td>{seler.email}</td>
                                        <td><button className='btn btn-xs btn-error'>delete</button></td>
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

export default AllSeler;