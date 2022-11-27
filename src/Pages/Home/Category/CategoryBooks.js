import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import BookModal from './BookModal';
import Loading from '../../Shared/Loading/Loading';
import { authContext } from '../../../Context/AuthProvider';

const CategoryBooks = () => {
    const { user } = useContext(authContext);
    const books = useLoaderData();
    const navigation = useNavigation();
    const [book, setBook] = useState({});


    if (navigation.state === "loading" && !user?.email) {
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