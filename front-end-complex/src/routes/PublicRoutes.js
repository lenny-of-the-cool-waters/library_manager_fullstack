import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useUserState } from '../context/UserContext';

const PublicRoutes = () => {
    const { isAuthenticated } = useUserState;

    return isAuthenticated? <Navigate to="/dashboard" /> : <Outlet />;
}

export default PublicRoutes;