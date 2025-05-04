import React, { use } from 'react';
import { AuthContex } from '../contex/AuthContex';
import { Navigate } from 'react-router';
import Loading from '../Loading/Loading';

const PrivateRoutes = ({children}) => {
    const {user,loading}=use(AuthContex);
    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to="/login"></Navigate>
    }
    
    return children
};

export default PrivateRoutes;