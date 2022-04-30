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
            <p className="price">{price}</p>
            <p className="quantity">{quantity}</p>
            <p className="suplier">{suplier}</p>
            <p>
                <samll>{descreption}</samll>
            </p>
            <Link to={`/product/${_id}`}><button>Stock Update</button></Link>
        </div>
    );
};

export default Service;