import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(authContext);
    const { data: myorders = [] } = useQuery({
        queryKey: ['myorders'],
        queryFn: () => fetch(`https://b612-used-products-resale-server-side-green.vercel.app/myorders?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('Access_Token')}`
            }
        })
            .then(res => res.json())
    });
    return (
        <div>
            <h3 className='text-2xl lg:text-3xl bg-gradient-to-r from-red-600 to-slate-900 text-white p-5 font-bold text-center w-9/12 lg:w-1/2 mx-auto my-5'>My Orders : {myorders?.length}</h3>
            <div className="overflow-x-auto w-9/12 mx-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Thumbnail</th>
                            <th>Product Name</th>
                            <th>Pick Location</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myorders && myorders.map((order, i) => {
                                return (
                                    <tr key={order._id}>
                                        <td>{i + 1}</td>
                                        <th>
                                            <div className="avatar">
                                                <div className="w-16 mask mask-squircle p-1">
                                                    <img src={order.bookImage} alt='' />
                                                </div>
                                            </div>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <div className="font-bold">{order.bookname}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {order.meetLocation}
                                        </td>
                                        <td>
                                            ${order.price}
                                        </td>
                                        <th>
                                            {order?.paid ? <p className='badge badge-ghost badge-sm'>Paid</p>
                                                :
                                                <Link to={`/dashboard/pay/${order._id}`} className="btn btn-success btn-sm">Pay</Link>
                                            }
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

export default MyOrders;