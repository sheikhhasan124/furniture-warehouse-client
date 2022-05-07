import React from 'react';
import './Loading.css'
import Spinner from 'react-bootstrap/Spinner'

const Loding = () => {
    return (
        <div className='loading'>
             <Spinner className='spinner'  animation="border" variant="primary" />
        </div>
    );
};

export default Loding;