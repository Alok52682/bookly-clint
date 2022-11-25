import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../../Context/AuthProvider';

const MyBooks = () => {
    const { user } = useContext(authContext)
    const { data: books = [], refetch } = useQuery({
        queryKey: ['catagories'],
        queryFn: () => fetch(`http://localhost:4000/mybooks?email=${user.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('Access_Token')}`
            }
        })
            .then(res => res.json())
    });

    const handelDelete = book => {
        const agree = window.confirm(`Are you sure you want to delete ${book.title}?`)
        if (agree) {
            fetch(`http://localhost:4000/mybooks/${book._id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('Access_Token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success(`${book.title} has been deleted.`);
                        refetch();
                    }
                })
        }
    }
    return (
        <div>
            <h3 className='text-3xl bg-gradient-to-r from-red-600 to-slate-900 text-white p-5 font-bold text-center w-1/2 mx-auto my-5'>My Books</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                Thumbnail
                            </th>
                            <th>Product Name</th>
                            <th>Status</th>
                            <th>Add Advertisement</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books && books.map(book => {
                                return (
                                    <tr key={book._id}>
                                        <th>
                                            <div className="avatar">
                                                <div className="w-16 mask mask-squircle p-1">
                                                    <img src={book.bookurl} alt='' />
                                                </div>
                                            </div>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <div className="font-bold">{book.title}</div>
                                                    <div className="text-sm opacity-50">{`${book.postDate}`}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {book.sold ? 'Sold' : 'Available'}
                                        </td>
                                        <td><button className="btn btn-sm btn-success border-2">Advertise</button></td>
                                        <th>
                                            <button onClick={() => handelDelete(book)} className="btn btn-error btn-sm">Delete</button>
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

export default MyBooks;