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
        .then(data=> parseInt(setProduct(data)) )
    },[product])

    let stock;
    if(quantity>0){
      stock = <p>{quantity}</p>
    }else{
      stock = <p>sold out</p>
    }
    // console.log(product)
   const handleDelever=()=>{
       const quantity = product.quantity - 1;
         if(quantity>=0){
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
            //   console.log(data)
              alert('user deliver make succeessfully')
           //    event.target.reset();
          })
         }
       
   }
     // update quantity
   const handleFormQuantity=(event)=>{
       event.preventDefault()
       const currentQuantity = parseInt(product.quantity);
       
       const addQuantity = parseInt(event.target.quantity.value);
       const quantity = currentQuantity + addQuantity
       if(quantity>0){
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
          //   console.log(data)
            alert('user update make succeessfully')
            event.target.reset();
        })
       }
      // console.log(typeof(quantity),quantity)
      
   }

   
     
    return (
        <div>
          <div className='inventory'>
          <div className="inventory-data">
             <div className="img-serction">
             <img src={img} alt="" />
             <button className='' onClick={handleDelever}>DELEVER</button>
             </div>
            <div className="desc-section">
            <p className="name">{name}</p>
            <p>{product._id}</p>
            <p className="price">Price: ${price}</p>
            
             <p className="quantit">In-stock:{stock}</p>
           
            <p className="suplier">Suplier: {suplier}</p>
            <p className='desc mt-4'>
                <samll>{descreption}</samll>
            </p>
            </div>
          </div>
        <div className="add-quantity">
            <form onSubmit={handleFormQuantity}>
                <input type="number" name='quantity' placeholder='add item quantity' />
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
       </div>
        <button className='manage-btn'><Link to="/manageStock">MANAGE STOCK</Link></button>
        </div>
    );
};

export default Inventory;