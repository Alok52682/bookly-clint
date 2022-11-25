import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';
import BookModal from './BookModal';
import Loading from '../../Shared/Loading/Loading';

const CategoryBooks = () => {
    const books = useLoaderData();
    const [book, setBook] = useState({});

    if (!books) {
        return <Loading />
    }

    return (
        <div className='w-11/12 mx-auto my-10'>

            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    books && books.map(book => <Book key={book._id} book={book} setBook={setBook} />)
                }
            </div>
            {
                book && <BookModal book={book} setBook={setBook} />
            }
        </div>
    );
};

export default CategoryBooks;