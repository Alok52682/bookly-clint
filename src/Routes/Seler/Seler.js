import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';
import useSeler from '../../Hooks/UseSeler';
import Loading from '../../Pages/Shared/Loading/Loading';

const Seler = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const [isSeler, loadingSeler] = useSeler(user?.email);
    const location = useLocation();

    if (loading || loadingSeler) {
        return <Loading />
    }

    if (user && isSeler) {
        return children;
    }

    return <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>;
};

export default Seler;