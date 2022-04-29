import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices]=useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    })
    return (
        <div>
            <h3>services{services.length}</h3>
        </div>
    );
};

export default Services;