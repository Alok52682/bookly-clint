import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';
import useAdmin from '../../Hooks/UseAdmin';
import Loading from '../../Pages/Shared/Loading/Loading';

const Admin = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading />
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>;
};

export default Admin;