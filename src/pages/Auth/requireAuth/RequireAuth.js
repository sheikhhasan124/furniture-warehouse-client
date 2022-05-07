import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../_firebase_init';
import Loding from '../../Shared/Loding/Loding';


const RequireAuth = ({children}) => {
    const [user, loading]= useAuthState(auth)
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation()
    if(loading){
        return <Loding></Loding>
    }
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    // console.log(user)
    if(user.providerData[0]?.providerId ==='password' && !user.emailVerified){
        return <div>
            <h2>your email not virifiey</h2>
            <button
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
        Verify email
      </button>
       <ToastContainer/>
        </div>
    }
    return children;
};

export default RequireAuth;