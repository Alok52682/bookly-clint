import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { authContext } from '../../../Context/AuthProvider';

const AddBook = () => {
    const { user } = useContext(authContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const photoHosterKey = process.env.REACT_APP_Ibb_key;


    const { data: categories = [] } = useQuery({
        queryKey: ['catagories'],
        queryFn: () => fetch('http://localhost:4000/categories')
            .then(res => res.json())
    });

    const handelAddBook = data => {
        const current = new Date();
        const postTime = current.getHours() + ':' + current.getMinutes() + ":" + current.getSeconds();
        const postDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${photoHosterKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgdata => {
                if (imgdata.success) {
                    const bookurl = imgdata.data.url;
                    const book = {
                        bookurl,
                        postDate,
                        postTime,
                        selerName: data.selerName,
                        title: data.name,
                        originalPrice: data.originalPrice,
                        reselePrice: data.reselePrice,
                        location: data.location,
                        categoryId: data.categoryId,
                        condition: data.condition,
                        sold: false,
                    }
                    fetch('http://localhost:4000/books', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('Access_Token')}`
                        },
                        body: JSON.stringify(book)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Book added successfully');
                            }
                        })
                }
            })
    }
    return (
        <div className="flex overflow-hidden mx-auto max-w-sm lg:max-w-6xl gap-4 items-center justify-center p-10">
            <div className="w-full p-8 lg:w-1/2 border shadow-xl rounded-xl">
                <h2 className="text-2xl font-bold text-red-600 text-center">Add A Book</h2>
                <form onSubmit={handleSubmit(handelAddBook)}>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Bookname</label>
                        <input {...register("name", {
                            required: "Name is Required"
                        })} className="bg-red-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" placeholder='Name of the Book' />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Seler Name</label>
                        <input {...register("selerName")} readOnly className="bg-red-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" defaultValue={user?.displayName} />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input {...register("email")} readOnly className="bg-red-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" defaultValue={user?.email} />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
                        <input {...register("location", {
                            required: "Location is Required"
                        })} className="bg-red-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" placeholder='Sell Location' />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Resale Price</label>
                        <input {...register("reselePrice", {
                            required: "Resale Price is Required"
                        })} className="bg-red-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="number" placeholder='Enter Resele Price' />
                        {errors.reselePrice && <p className='text-red-500'>{errors.reselePrice.message}</p>}
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Original Price</label>
                        <input {...register("originalPrice", {
                            required: "Original Price is Required"
                        })} className="bg-red-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="number" placeholder='Enter Original Price' />
                        {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                        <select {...register("categoryId", { required: true })} className="select select-bordered w-full bg-red-50">
                            {
                                categories?.map(category => <option key={category._id} value={category._id}>{category.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Condition</label>
                        <select {...register("condition", { required: true })} className="select select-bordered w-full bg-red-50">
                            <option value="Good">Good</option>
                            <option value="Average">Average</option>
                            <option value="Not Bad">Not Bad</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Photo</label>
                        <input type="file" {...register("photo", {
                            required: "Photo is required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </div>
                    <div className="mt-8">
                        <button type='submit' className="btn bg-red-500 border-none hover:bg-slate-900 w-full rounded-xl">Add Book</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBook;