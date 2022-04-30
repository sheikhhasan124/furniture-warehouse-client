import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../../_firebase_init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    return (
        <div>
             <div className='login-container'>
           <div>
           <h3 className='text-center'>Registration</h3>
            <form>
             <div className="input-group">
             <input type="text" name="name" id="" placeholder='name'/>
             </div>
             <div className="input-group">
             <input type="email" name="email" id="" placeholder='email'/>
             </div>
             <div className="input-group">
             <input type="text" name="password" id="" placeholder='password'/>
             </div>
             <input className='w-50 mx-auto d-block' type="submit" value="Registration" />
            </form>
            <p>Already have an account? <span><Link className='text-danger text-decoration-none' to="/login">Plese Login</Link></span></p>
            
            <div className='hr-div'>
                <div className="hr"></div>
                <div>or</div>
                <div className="hr"></div>
            </div>
           </div>
        </div>
        </div>
    );
};

export default Registration;