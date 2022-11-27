import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Pages/Shared/Navber/Navber';

const DashboardLayout = () => {
    return (
        <div>
            <Navber />
            <Outlet />
        </div>
    );
};

export default DashboardLayout;