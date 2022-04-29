import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound'>
            <p className='four'>404</p>
            <p className='p'>This route is no longer here</p>
            <button><Link to="/">Go Home</Link></button>
        </div>
    );
};

export default NotFound;