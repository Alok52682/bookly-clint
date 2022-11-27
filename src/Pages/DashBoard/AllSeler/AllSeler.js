import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSeler = () => {
    const { data: allSelers = [], refetch } = useQuery({
        queryKey: ['slers'],
        queryFn: () => fetch('https://b612-used-products-resale-server-side-green.vercel.app/slers', {
            headers: {
                authorization: `bearer ${localStorage.getItem('Access_Token')}`
            }
        })
            .then(res => res.json())
    });
    const handelDeleteSeller = seller => {
        const agree = window.confirm(`Are you sure you want to delete ${seller.name}?`)
        if (agree) {
            fetch(`https://b612-used-products-resale-server-side-green.vercel.app/users/${seller._id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('Access_Token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success(`${seller.name} has been deleted.`);
                        refetch();
                    }
                })
        }
    }
    const handelVarified = slr => {
        const agree = window.confirm(`Are you sure you want to varify ${slr.name}?`);

        if (agree) {
            fetch(`https://b612-used-products-resale-server-side-green.vercel.app/users/${slr._id}`, {
                method: 'PUT',
                headers: {
                    authorization: `bearer ${localStorage.getItem('Access_Token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        toast.success('Varify successfully');
                        refetch();
                    }
                })
        }
    }
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
                            <th>Seler varify</th>
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
                                        <td>
                                            {
                                                seler.varify ? <p className='badge badge-ghost badge-sm'>varified</p>
                                                    :
                                                    <button onClick={() => handelVarified(seler)} className='btn btn-xs btn-success'>Verify</button>
                                            }
                                        </td>
                                        <td><button onClick={() => handelDeleteSeller(seler)} className='btn btn-xs btn-error'>delete</button></td>
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