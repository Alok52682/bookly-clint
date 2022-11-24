import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const CategoryBooks = () => {
    const books = useLoaderData();
    return (
        <div className='w-10/12 mx-auto my-10'>

            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    books && books.map(book => <Book key={book._id} book={book} />)
                }
            </div>
        </div>
    );
};

export default CategoryBooks;