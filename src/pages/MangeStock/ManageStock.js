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
        <div className='manage-section'>
            <p className='text-center mt-4'><span className='service-head-part1'>MANAGE</span> <span className='service-head-part2'>STOCK</span>{services.length}</p>
            
            {services.map(service=><div className='manage-product'>
                 <span><img src={service.img} alt="" /></span><span><h5>{service.name}</h5></span>
                 <button onClick={()=>deleteItem(service._id)}>delete</button>
            </div>)}
        </div>
    );
};

export default ManageStock;