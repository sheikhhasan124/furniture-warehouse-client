import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../Api/AxiosPrivate';
import auth from '../../_firebase_init';
import './MyItems.css'

const MyItems = () => {
    const [user]=useAuthState(auth)
    const [items,setItem]=useState([])
    const navigate = useNavigate()
    console.log(items)
     useEffect(()=>{
         const getOrder = async()=>{
             const email = user?.email;
              const url = `https://serene-meadow-46375.herokuapp.com/myProduct?email=${email}`
              try {
                  const {data} = await axiosPrivate.get(url)
                  setItem(data)
              } catch (error) {
                  console.log(error.message)
                  if(error.response.status===401 ||error.response.status===403){
                      signOut(auth)
                      navigate('/login')
                  }
              }
         }
         getOrder()  
           
     },[user])
     const deleteItem=(id)=>{
        const proceed = window.confirm('are u sure to delete')
        if(proceed){
            const url = `https://serene-meadow-46375.herokuapp.com/product/${id}`
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
        <p className='text-center mt-4 my-5'><span className='service-head-part1'>MY</span> <span className='service-head-part2'>ITEMS</span></p>
        
        {items.map(item=><div className='manage-product'>
             <span><img src={item.img} alt="" /></span><span><h5>{item.name}</h5></span>
             <button onClick={()=>deleteItem(item._id)}>delete</button>
        </div>)}
    </div>
    );
};

export default MyItems;