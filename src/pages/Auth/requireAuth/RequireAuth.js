import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../_firebase_init';
import Loding from '../../Shared/Loding/Loding';


const RequireAuth = ({children}) => {
    const [user, loading]= useAuthState(auth)
    const location = useLocation()
    if(loading){
        return <Loding></Loding>
    }
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;