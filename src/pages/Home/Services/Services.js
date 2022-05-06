import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../../Hook/useProduct';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
   const [services]=useProduct()
    return (
        <div className='services-container'>
            <p className='text-center mt-4'><span className='service-head-part1'>FEATURED</span> <span className='service-head-part2'>PRODUCTS</span>{services.length}</p>
            <div className="services">
            {services.slice(0,6).map(service=><Service key={service._id} service={service}></Service>)}
            </div>
            <button><Link to="/manageStock">Manage Stock</Link></button>
        </div>
    );
};

export default Services;