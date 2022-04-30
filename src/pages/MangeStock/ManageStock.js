import React from 'react';
import useProduct from '../../Hook/useProduct';
import './ManageStock.css'

const ManageStock = () => {
    const [services, setServices]=useProduct()

    const deleteItem=(id)=>{
        const proceed = window.confirm('are u sure to delete')
        if(proceed){
            const url = `http://localhost:5000/product/${id}`
            fetch(url,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
               const remain = services.filter(d=> d._id !==id)
               setServices(remain)
            })
        }
    }
    
    return (
        <div>
            <h2>manage stock{services.length}</h2>
            {services.map(service=><div className='manage-product'>
                 <h3>{service.name}</h3><span><img src={service.img} alt="" /></span>
                 <button onClick={()=>deleteItem(service._id)}>delete</button>
            </div>)}
        </div>
    );
};

export default ManageStock;