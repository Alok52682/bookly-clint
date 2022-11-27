import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const { data: allBuyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: () => fetch('https://b612-used-products-resale-server-side-green.vercel.app/buyers', {
            headers: {
                authorization: `bearer ${localStorage.getItem('Access_Token')}`
            }
        })
            .then(res => res.json())
    });
    const handelDeleteBuyer = buyer => {
        const agree = window.confirm(`Are you sure you want to delete ${buyer.name}?`)
        if (agree) {
            fetch(`https://b612-used-products-resale-server-side-green.vercel.app/users/${buyer._id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('Access_Token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success(`${buyer.name} has been deleted.`);
                        refetch();
                    }
                })
        }
    }
    return (
        <div>
            <h3 className='text-3xl bg-gradient-to-r from-red-600 to-slate-900 text-white p-5 font-bold text-center w-1/2 mx-auto my-5'>All Buyers</h3>
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
                            allBuyers && allBuyers.map((buyers, i) => {
                                return (
                                    <tr key={buyers._id} className="hover">
                                        <th>{i + 1}</th>
                                        <td>{buyers.name}</td>
                                        <td>{buyers.email}</td>
                                        <td><button onClick={() => handelDeleteBuyer(buyers)} className='btn btn-xs btn-error'>delete</button></td>
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