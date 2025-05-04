import React, { use } from 'react';
import { AuthContex } from '../contex/AuthContex';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user}=use(AuthContex);

    if(!user){
        return <Navigate to="/login"></Navigate>
    }
    
    return children
};

export default PrivateRoutes;