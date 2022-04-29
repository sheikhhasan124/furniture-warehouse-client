import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='services-container'>
            <h3><span>featured</span> <span>products</span>{services.length}</h3>
            <div className="services">
            {services.map(service=><Service key={service.id} service={service}></Service>)}
            </div>
        </div>
    );
};

export default Services;