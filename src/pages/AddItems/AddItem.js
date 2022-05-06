import React from 'react';
import './AddItems.css'

const AddItem = () => {
    const handleForm =(event)=>{
        event.preventDefault()
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const descreption = event.target.descreption.value;
        const suplier = event.target.suplier.value;
        const img = event.target.img.value;
        const data = {name,price,quantity,descreption,suplier,img}
          
        const url = `https://serene-meadow-46375.herokuapp.com/product`
        fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
         
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        
    }
    return (
        <div className='additem'>
           add item 

           <form onSubmit={handleForm}>
               <input type="text" name='name' placeholder='name'/>
               <input type="text" name="price" placeholder='price' id="" />
               <input type="text" name="quantity" id="" placeholder='quantity'/>
               <input type="text" name="descreption" id="" placeholder='decs' />
               <input type="text" name="suplier" id="" placeholder='suplier'/>
               <input type="text" name="img" id="" placeholder='img' />
               <input type="submit" value="submit" />
           </form>
        </div>
    );
};

export default AddItem;