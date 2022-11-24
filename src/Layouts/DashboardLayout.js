import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { authContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/UseAdmin';
import useSeler from '../Hooks/UseSeler';
import Navber from '../Pages/Shared/Navber/Navber';

const DashboardLayout = () => {
    const { user } = useContext(authContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeler] = useSeler(user?.email);
    return (
        <div>
            <Navber />

            <div className="drawer drawer-mobile">
                <input id="dashboardOpener" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardOpener" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allselers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                <li><Link>Reported Items</Link></li>
                            </>
                        }
                        {
                            isSeler && <>
                                <li><Link to='/dashboard/addbook'>Add A Book</Link></li>
                                <li><Link to='/dashboard/mybooks'>My Books</Link></li>
                            </>
                        }
                        <li><Link>My orders</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;