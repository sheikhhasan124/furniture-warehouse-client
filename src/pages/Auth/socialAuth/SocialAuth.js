import React from 'react';
import './SocialAuth.css'
import { AiFillGoogleCircle,AiOutlineGithub,AiFillFacebook } from "react-icons/ai";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../_firebase_init';

const SocialAuth = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className='social'>
            <button onClick={()=>signInWithGoogle()}><span className='icon'><AiFillGoogleCircle></AiFillGoogleCircle></span><span>Connect with google</span></button>
            <button><span className='icon'><AiFillFacebook/></span><span>Connect with facebook</span></button>
            <button><span className='icon'><AiOutlineGithub/></span><span>Connect with github</span></button>
        </div>
    );
};

export default SocialAuth;