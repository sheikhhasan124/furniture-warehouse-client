import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    const {id}= useParams()
    const [product, setProduct]=useState({})
    const {name, price,quantity, img,descreption,suplier}=product;
  

    useEffect(()=>{
        fetch(`http://localhost:5000/product/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[product])
    // console.log(product)
   const handleFormQuantity=(event)=>{
       event.preventDefault()
      const quantity = event.target.quantity.value;
      const data = {quantity}
      const url = `http://localhost:5000/product/${id}`
      fetch(url,{
          method:'PUT',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data)
          alert('user update make succeessfully')
          event.target.reset();
      })
   }

   
     
    return (
        <div className='inventory'>
        <img src={img} alt="" />
        <p className="name">{name}</p>
        <p>{product._id}</p>
        <div className="item-flex">
        <p className="price">Price: ${price}</p>
        <p className="quantity">In-stock:{quantity}</p>
        </div>
        <p className="suplier">Suplier: {suplier}</p>
        <p className='desc mt-4'>
            <samll>{descreption}</samll>
        </p>
        <button>DELEVER</button>
        <div className="add-quantity">
            <form onSubmit={handleFormQuantity}>
                <input type="text" name='quantity' placeholder='add item quantity' />
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
       </div>
    );
};

export default Inventory;