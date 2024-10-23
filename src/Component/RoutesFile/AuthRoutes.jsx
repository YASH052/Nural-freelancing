// AuthRoutes.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import ChangePassword from '../Pages/Authenticate/ChangePassword/ChangePassword';
import ForgotPassword from '../Pages/Authenticate/ForgotPassword/ForgotPassword';
import Login from '../Pages/Authenticate/LoginPage/Login';// Import ForgotPassword
import Access from '../Pages/Authenticate/LoginPage/Access';

const AuthRoutes = () => {
    const location = useLocation();

    if (location.pathname === '/') {
        return <Access />;
    }else if (location.pathname === '/login') {
        return <Login />;
    } else if (location.pathname === '/changePassword') {
        return <ChangePassword />;
    } else if (location.pathname === '/forgotPassword') {
        return <ForgotPassword />;
    }

    return null;
};

export default AuthRoutes;
