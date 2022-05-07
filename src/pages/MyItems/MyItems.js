import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../_firebase_init';

const MyItems = () => {
    const [user]=useAuthState(auth)
    const [items,setItem]=useState([])
    console.log(items)
     useEffect(()=>{
           const email = user?.email;
           fetch(`http://localhost:5000/myProduct?email=${email}`)
           .then(res=>res.json())
           .then(data=>setItem(data))
     },[])
    return (
        <div>
            <h2>my items {items.length}</h2>
            {items.map(item=><div key={item._id}>
                <h4>{item.name}</h4>
            </div>)}
        </div>
    );
};

export default MyItems;