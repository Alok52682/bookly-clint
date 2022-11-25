import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../../../Context/AuthProvider';

const Navber = () => {
    const { user, logOut } = useContext(authContext);

    const handelLogOut = () => {
        logOut()
            .then(() => { }).catch(err => { })
    }
    const navItems = <>

        <li className='font-semibold mr-3'><NavLink
            className={({ isActive }) =>
                isActive ? 'text-slate-900' : ' text-white'
            } to='/home'>Home</NavLink></li>

        <li className='font-semibold mr-3'><NavLink
            className={({ isActive }) =>
                isActive ? ' text-slate-900' : ' text-white'
            } to='/blogs'>Blogs</NavLink></li>
        <li className='font-semibold mr-3'><NavLink
            className={({ isActive }) =>
                isActive ? 'text-slate-900' : ' text-white'
            } to='/dashboard'>Dashboard</NavLink></li>
        {!user?.uid ?
            <li className='font-semibold mr-3'><NavLink to='/login'
                className={({ isActive }) =>
                    isActive ? ' text-slate-900' : ' text-white'
                }>Log In</NavLink></li>
            :
            <li className='font-semibold mr-3'><Link onClick={handelLogOut} className='text-white'>Log Out</Link></li>
        }

    </>
    return (
        <div className="navbar h-20 bg-red-600">
            <div className="navbar-start">
                <label htmlFor="dashboardOpener" tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <Link to='/' className="btn btn-ghost normal-case text-xl w-32 h-2">
                    <h2 className='text-white'>BookLy</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid && <p className='btn btn-ghost text-xs lg:text-sm  text-white'>
                        {user?.displayName}
                    </p>
                }
                <div className="dropdown dropdown-end">
                    <label tabIndex={1} className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={2} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-red-600 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;