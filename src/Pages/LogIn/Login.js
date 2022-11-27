import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { authContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import UseToken from '../../Hooks/UseToken';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signInError, setSignInError] = useState('');
    const { userLogIn, signWithGoogle, handleForgetPass } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = UseToken(loginUserEmail);

    if (token) {
        navigate(from, { replace: true });
    }

    const handelLogin = data => {
        setSignInError('');
        userLogIn(data.email, data.password)
            .then((result) => {
                if (result.user) {
                    toast.success('LogIn Successfully');
                    setLoginUserEmail(data.email);
                }
            })
            .catch(error => {
                console.log(error.message)
                setSignInError(error.message);
            });
    }
    const handelGoogleLogin = () => {
        signWithGoogle()
            .then(result => {
                const username = result.user.displayName;
                const email = result.user.email;
                const role = "Buyer";
                saveUser(username, email, role);
            })
            .catch(err => alert(err.messege))
    }
    const saveUser = (name, email, role) => {
        const user = { name, email, role };
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
                setLoginUserEmail(email);
            });
    }
    return (
        <div>
            <div className='py-6'>
                <div className="flex overflow-hidden mx-auto max-w-sm lg:max-w-4xl gap-4 items-center justify-center p-10">
                    <div className="w-full p-8 lg:w-1/2 border shadow-xl rounded-xl">
                        <h2 className="text-2xl font-bold text-red-600 text-center">BookLy</h2>
                        <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                        <Link onClick={handelGoogleLogin} className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md bg-red-100">
                            <div className="md:px-4 py-3">
                                <img src={`https://cdn-icons-png.flaticon.com/512/2991/2991148.png`} alt='Google' className='w-5' />
                            </div>
                            <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                        </Link>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                            <span className="text-xs text-center text-gray-500 uppercase">or login with email</span>
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                        </div>
                        <form onSubmit={handleSubmit(handelLogin)}>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                                <input {...register("email", {
                                    required: "Email Address is required"
                                })} className="bg-red-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" placeholder='Enter Email Address' />
                                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                    <Link onClick={() => handleForgetPass(loginUserEmail)} className="text-xs text-gray-500">Forget Password?</Link>
                                </div>
                                <input {...register("password", {
                                    required: "Password is required"
                                })} className="bg-red-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" placeholder='********' />
                                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                            </div>
                            <div className="mt-8">
                                <button type='submit' className="btn bg-red-500 border-none hover:bg-slate-900 w-full rounded-xl">Log In</button>
                            </div>
                            {signInError && <p className='text-red-600'>{signInError}</p>}
                        </form>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <Link to="/register" className="text-xs text-gray-500 uppercase">or sign up</Link>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;