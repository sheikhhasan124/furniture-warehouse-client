import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../../Hook/useProduct';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
   const [services]=useProduct()
    return (
        <div className='services-container'>
            <h3><span>featured</span> <span>products</span>{services.length}</h3>
            <div className="services">
            {services.slice(0,6).map(service=><Service key={service._id} service={service}></Service>)}
            </div>
            <button><Link to="/manageStock">Manage Stock</Link></button>
        </div>
    );
};

export default Services;