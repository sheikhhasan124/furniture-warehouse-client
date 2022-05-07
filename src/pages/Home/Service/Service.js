import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    // console.log(service)
    const {_id,name,price,img,descreption,quantity,suplier}=service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <p className="name">{name}</p>
            <div className="item-flex">
            <p className="price">Price: ${price}</p>
            <p className="quantity">In-stock:{parseInt(quantity)}</p>
            </div>
            <p className="suplier">Suplier: {suplier}</p>
            <p className='desc mt-4'>
                <samll>{descreption}</samll>
            </p>
            <Link to={`/product/${_id}`}><button className='mx-auto'>Stock Update</button></Link>
        </div>
    );
};

export default Service;