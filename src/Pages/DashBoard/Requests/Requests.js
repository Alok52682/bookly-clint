import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const Requests = () => {

    const navigation = useNavigation();
    const { data: allVarifyReq = [], refetch } = useQuery({
        queryKey: ['verifyselerreq'],
        queryFn: () => fetch('https://b612-used-products-resale-server-side-green.vercel.app/verifyselerreq', {
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('Access_Token')}`
            },
        })
            .then(res => res.json())
    });

    const handelVarified = requestedUsr => {
        const agree = window.confirm(`Are you sure you want to varify ${requestedUsr.name}?`);

        if (agree) {
            fetch(`https://b612-used-products-resale-server-side-green.vercel.app/verifyselerreq?email=${requestedUsr.email}`, {
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
    if (navigation.state === "loading") {
        return <Loading />
    }
    return (
        <div className='lg:w-9/12 mx-auto'>
            <h2 className='text-center text-xl lg:text-2xl my-4'>Seller Varification Requests</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>E-mail</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allVarifyReq && allVarifyReq.map((VarifyReq, i) => {
                                return (
                                    <tr key={VarifyReq._id}>
                                        <th>{i + 1}</th>
                                        <td>{VarifyReq.name}</td>
                                        <td>{VarifyReq.email}</td>
                                        <th>
                                            <button onClick={() => handelVarified(VarifyReq)} className="btn btn-error btn-sm">verify</button>
                                        </th>
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

export default Requests;