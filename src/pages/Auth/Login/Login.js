import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='login-container'>
           <div>
           <h3 className='text-center'>Log In</h3>
            <form>
             <div className="input-group">
             <input type="email" name="email" id="" placeholder='email'/>
             </div>
             <div className="input-group">
             <input type="text" name="password" id="" placeholder='password'/>
             </div>
             <input className='w-50 mx-auto d-block' type="submit" value="Login" />
            </form>
            <p>Haven't you register? <span><Link className='text-danger text-decoration-none' to="/register">Plese register</Link></span></p>
            <p>Forget Password? <span className='text-danger'>Reset Password</span></p>
            <div className='hr-div'>
                <div className="hr"></div>
                <div>or</div>
                <div className="hr"></div>
            </div>
           </div>
        </div>
    );
};

export default Login;