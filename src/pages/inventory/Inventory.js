import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    const {id}= useParams()
    const [product, setProduct]=useState({})
    const {name, price,quantity, img,descreption,suplier}=product;
     
    

    useEffect(()=>{
        fetch(`https://serene-meadow-46375.herokuapp.com/product/${id}`)
        .then(res=>res.json())
        .then(data=> setProduct(data))
    },[product])

    let stock;
    if(quantity>0){
      stock = <span>{quantity}</span>
    }else{
      stock = <span>sold out</span>
    }
    // console.log(product)
   const handleDelever=()=>{
       const quantity = product.quantity - 1;
         if(quantity>=0){
          const data = {quantity}
          const url = `https://serene-meadow-46375.herokuapp.com/product/${id}`
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
        const url = `https://serene-meadow-46375.herokuapp.com/product/${id}`
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
            <img src={img} alt="" />
            <div className="dec-section">
             <p className="name gold">{name}</p>
             <p className='mt-3'><span className='gold'>Id:</span> {product._id}</p>
             <p className="price"><span className='gold'>Price: </span> ${price}</p>
             <p className="quantit tomato"><span className='gold'>Quantity:</span> {stock}</p>
             <p className="suplier"><span className='gold'>Suplier: </span>{suplier}</p>
             <p className='desc mt-4'><span className='gold'>Detaile:</span> 
                 <samll>{descreption}</samll>
             </p>
               <div className="add-quantity">
                 <button className='' onClick={handleDelever}>DELEVER</button>
             <form onSubmit={handleFormQuantity}>
                 <input type="number" name='quantity' placeholder='add item quantity' />
                 <input type="submit" value="SUBMIT" />
             </form>
              </div>
            </div> 
          </div>
            <button className='manage-btn'><Link to="/manageStock">MANAGE STOCK</Link></button>
         </div>
    );
};

export default Inventory;