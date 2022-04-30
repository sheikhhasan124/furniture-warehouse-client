import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {id}= useParams()
    const [product, setProduct]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/product/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    })
    const {name, price, img}=product;
    return (
        <div>
            <h2>inventory{id}</h2>
            <p>{name}</p>
        </div>
    );
};

export default Inventory;