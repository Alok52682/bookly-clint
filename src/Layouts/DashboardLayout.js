import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navber from '../Pages/Shared/Navber/Navber';

const DashboardLayout = () => {
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
                        <li><Link to='/dashboard/allselers'>All Sellers</Link></li>
                        <li><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
                        <li><Link>My orders</Link></li>
                        <li><Link>Add A product</Link></li>
                        <li><Link>My Products</Link></li>
                        <li><Link>Reported Items</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;