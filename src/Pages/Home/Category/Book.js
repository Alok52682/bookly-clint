import React from 'react';
import useVerified from '../../../Hooks/UseVerified';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Book = ({ book, setBook }) => {
    const { condition, location, originalPrice, postDate, postTime, reselePrice, selerName, title, bookurl, phone, selerEmail } = book;
    const [isVerified] = useVerified(selerEmail);

    const handelReport = reportedBook => {
        const reportedBookInfo = {
            bookId: reportedBook._id,
            bookName: reportedBook.title,
            thumbnail: reportedBook.bookurl,
            deleted: false
        }
        fetch('https://b612-used-products-resale-server-side-green.vercel.app/reports', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reportedBookInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Book has been reported');
                }
            })
    }
    return (
        <div className="max-w-2xl mx-auto h-full w-full">
            <div className="bg-red-50 shadow-md rounded-lg h-full">
                <div className='h-1/2'>
                    <img className="rounded-t-lg px-8 py-3 h-full mx-auto" src={bookurl} alt='' />
                </div>
                <div className="px-3 pb-5 h-1/2">
                    <button onClick={() => handelReport(book)} title='Report Item'><FaExclamationCircle /> </button>
                    <div className='mb-3'>
                        <p className="badge badge-ghost badge-sm">Posted at {postTime} on {postDate}</p>
                        <h2 className='md:text-lg lg:text-xl font-semibold'>{title}</h2>
                        <p className='text-sm'>Condition : {condition}</p>
                        <div className='flex items-center gap-1'>
                            <p className='text-sm'>Seler: {selerName}</p>
                            {isVerified && <FaCheckCircle color='01AFFF' fontSize='12px' />}
                        </div>
                        <p className='text-sm'>Phone: {phone}</p>
                        <p className='text-sm'>E-mail: {selerEmail}</p>
                        <p className='text-sm'>Location : {location}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-900">Reseleprice: ${reselePrice}</p>
                            <p className="text-xs text-gray-900">Originalprice: ${originalPrice}</p>
                        </div><label onClick={() => setBook(book)} htmlFor="bookModal" className="text-white bg-red-600 hover:bg-slate-900 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;