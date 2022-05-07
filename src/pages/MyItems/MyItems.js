import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../_firebase_init';
import './MyItems.css'

const MyItems = () => {
    const [user]=useAuthState(auth)
    const [items,setItem]=useState([])
    console.log(items)
     useEffect(()=>{
           const email = user?.email;
           fetch(`http://localhost:5000/myProduct?email=${email}`)
           .then(res=>res.json())
           .then(data=>setItem(data))
     },[user])
     const deleteItem=(id)=>{
        const proceed = window.confirm('are u sure to delete')
        if(proceed){
            const url = `http://localhost:5000/product/${id}`
            fetch(url,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
               const remain = items.filter(d=> d._id !==id)
               setItem(remain)
            })
        }
    }
    return (
        <div className='manage-section my-item-container'>
        <p className='text-center mt-4 my-5'><span className='service-head-part1'>MY</span> <span className='service-head-part2'>ITEMS</span>{items.length}</p>
        
        {items.map(item=><div className='manage-product'>
             <span><img src={item.img} alt="" /></span><span><h5>{item.name}</h5></span>
             <button onClick={()=>deleteItem(item._id)}>delete</button>
        </div>)}
    </div>
    );
};

export default MyItems;