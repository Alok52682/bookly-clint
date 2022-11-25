import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Context/AuthProvider';

const BookModal = ({ book, setBook }) => {
    const { user } = useContext(authContext);
    const handelBooking = event => {
        event.preventDefault();
        const form = event.target;
        const bookname = book.title;
        const username = form.username.value;
        const email = form.email.value;
        const price = form.price.value;
        const meetLocation = form.meetlocation.value;
        const phone = form.phone.value;

        const booking = { bookname, username, email, meetLocation, price, phone };
        fetch(`http://localhost:4000/bookings?bookId=${book._id}`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('Access_Token')}`
            },
            body: JSON.stringify(booking)
        }).then(res => res.json()).then(data => {
            if (data.acknowledged) {
                setBook(null);
                toast.success(`${bookname} booking successful`);
            }
            else {
                toast.error(data.message);
                setBook(null);
            }
        })
    }
    return (
        <>
            <input type="checkbox" id="bookModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {user?.email ?
                        <form onSubmit={handelBooking}>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Bookname</label>
                                <input neme='bookname' className="bg-red-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" defaultValue={book.title} readOnly />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                                <input name="username" className="bg-red-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" defaultValue={user?.displayName} readOnly />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input name="email" className="bg-red-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" defaultValue={user?.email} readOnly />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                                <input name="price" className="bg-red-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="number" value={book.reselePrice} readOnly />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Meet Location</label>
                                <input name="meetlocation" className="bg-red-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" placeholder='Enter Meet Location' required />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                                <input name="phone" className="bg-red-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" placeholder='Enter Contract Number' required />
                            </div>
                            <div className="mt-8">
                                <button type='submit' className="btn bg-red-500 border-none hover:bg-slate-900 w-full rounded-xl">Book Now</button>
                            </div>
                        </form>
                        :
                        <>
                            <p className='text-error'> You must have login for booking</p>
                            <Link to='/login' className='btn btn-outline btn-error mt-5'>Go For LogIn</Link>
                        </>
                    }
                    <div className="modal-action">
                        <label htmlFor="bookModal" className="btn btn-outline">Close</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookModal;