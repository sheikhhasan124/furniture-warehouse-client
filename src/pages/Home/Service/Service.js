import React from 'react';
import './Service.css'

const Service = ({service}) => {
    console.log(service)
    const {name,price,img,descreption,quantity,suplier}=service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <p className="name">{name}</p>
            <p className="price">{price}</p>
            <p className="quantity">{quantity}</p>
            <p className="suplier">{suplier}</p>
            <p>
                <samll>{descreption}</samll>
            </p>
        </div>
    );
};

export default Service;