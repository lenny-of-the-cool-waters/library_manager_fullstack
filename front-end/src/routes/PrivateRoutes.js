import { modalUnstyledClasses } from '@mui/material';
import Rect from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Context
import { useUserState } from '../context/UserContext';

const PrivateRoutes = () => {
    const { isAuthenticated } = useUserState();

    return isAuthenticated? <Outlet /> : <Navigate to="/login" /> ;
}

export default PrivateRoutes;