import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const Reports = () => {
    const navigation = useNavigation();
    const { data: reports = [], refetch } = useQuery({
        queryKey: ['reports'],
        queryFn: () => fetch('https://b612-used-products-resale-server-side-green.vercel.app/reports', {
            headers: {
                authorization: `bearer ${localStorage.getItem('Access_Token')}`
            }
        })
            .then(res => res.json())
    });
    const handelDeleteReport = reportedItem => {
        const agree = window.confirm(`Are you sure you want to delete ${reportedItem.bookName}?`)
        if (agree) {
            fetch(`https://b612-used-products-resale-server-side-green.vercel.app/reports`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem('Access_Token')}`
                },
                body: JSON.stringify(reportedItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        toast.success(`${reportedItem.bookName} has been deleted.`);
                        refetch();
                    }
                })
        }
    }
    if (navigation.state === "loading") {
        return <Loading />
    }
    return (
        <div>
            <h3 className='text-3xl bg-gradient-to-r from-red-600 to-slate-900 text-white p-5 font-bold text-center w-1/2 mx-auto my-5'>Reports</h3>
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
                            reports && reports.map((report, i) => {
                                return (
                                    <tr key={report._id} className="hover">
                                        <th>{i + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="w-16 mask mask-squircle p-1">
                                                    <img src={report.thumbnail} alt='' />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{report.bookName}</td>
                                        <td><button onClick={() => handelDeleteReport(report)} className='btn btn-xs btn-error'>delete</button></td>
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

export default Reports;