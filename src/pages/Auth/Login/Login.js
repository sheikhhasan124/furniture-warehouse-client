import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../Hook/UseToken';
import auth from '../../../_firebase_init';
import SocialAuth from '../socialAuth/SocialAuth';
import './Login.css'

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const location = useLocation()
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [token]=useToken(user)
      const handleFormSubmit = event=>{
          event.preventDefault()
          const email = emailRef.current.value;
          const pass = passwordRef.current.value;
          signInWithEmailAndPassword(email, pass)
        }
        let from = location.state?.from?.pathname || "/";
      if(token){
        navigate(from, { replace: true });
      }
      let errorElement;
    if(error){
      errorElement = <p className="text-danger">Error:{error?.message}</p>
    }
    return (
        <div className='login-container'>
           <div>
           <h3 className='text-center'>Log In</h3>
            <form onSubmit={handleFormSubmit}>
             <div className="input-group">
             <input ref={emailRef} type="email" name="email" id="" placeholder='email'/>
             </div>
             <div className="input-group">
             <input ref={passwordRef} type="text" name="password" id="" placeholder='password'/>
             </div>
             <input className='w-50 mx-auto d-block' type="submit" value="Login" />
            </form>
            <p>{errorElement}</p>
            <p>Haven't you register? <span><Link className='text-danger text-decoration-none' to="/register">Plese register</Link></span></p>
            <p>Forget Password? <span className='text-danger'>Reset Password</span></p>
            <div className='hr-div'>
                <div className="hr"></div>
                <div>or</div>
                <div className="hr"></div>
            </div>
           <SocialAuth/>
           </div>
        </div>
    );
};

export default Login;