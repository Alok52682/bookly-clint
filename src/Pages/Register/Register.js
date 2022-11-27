import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { authContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import UseToken from '../../Hooks/UseToken';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(authContext);
    const [registerError, setRegisterError] = useState('');
    const [userEmailForToken, setUserEmailForToken] = useState('');
    const [token] = UseToken(userEmailForToken);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handelSignUp = data => {

        setRegisterError('');
        createUser(data.email, data.password)
            .then(() => {
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                    })
                    .catch(err => console.log(err));

            })
            .catch(error => {
                setRegisterError(error.message)
            });

    }
    const saveUser = (name, email, role) => {
        const user = { name, email, role, varify: false };
        fetch('https://b612-used-products-resale-server-side-green.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(() => {
                toast.success('User Created Successfully.');
                setUserEmailForToken(email);
            });
    }
    return (
        <div>
            <div className='py-6'>
                <div className="flex overflow-hidden mx-auto max-w-sm lg:max-w-4xl gap-4 items-center justify-center p-10">
                    <div className="w-full p-8 lg:w-1/2 border shadow-xl rounded-xl">
                        <h2 className="text-2xl font-bold text-red-600 text-center">BookLy</h2>
                        <p className="text-xl text-gray-600 text-center">Welcome!</p>
                        <form onSubmit={handleSubmit(handelSignUp)}>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                                <input {...register("name", {
                                    required: "Name is Required"
                                })} className="bg-red-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" placeholder='Username' />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                                <input {...register("email", {
                                    required: true
                                })} className="bg-red-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" placeholder='Enter Email Address' />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
                                <select {...register("role", { required: true })} className="select select-bordered w-full bg-red-50">
                                    <option value="Buyer">Buyer</option>
                                    <option value="Seler">Seler</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                </div>
                                <input {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 characters long" },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                })} className="bg-red-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" placeholder='********' />
                                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                            </div>
                            <div className="mt-8">
                                <button type='submit' className="btn bg-red-500 border-none hover:bg-slate-900 w-full rounded-xl">Register</button>
                            </div>
                            {registerError && <p className='text-red-600'>{registerError}</p>}
                        </form>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <Link to="/login" className="text-xs text-gray-500 uppercase">or sign in</Link>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;