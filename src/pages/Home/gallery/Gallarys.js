import React, { useEffect, useState } from 'react';
import Gallery from './Gallery';
import './Gallary.css'

const Gallarys = () => {
    const [img, setImg]=useState([])
    useEffect(()=>{
     fetch('https://serene-meadow-46375.herokuapp.com/gallary')
     .then(res=>res.json())
     .then(data=>setImg(data))
    },[])
    return (
        <div className='my-5'>
             <p className='text-center mt-4'><span className='service-head-part1'>STORE</span> <span className='service-head-part2'>GALLARY</span></p>
             <div className="gallary-container">
             {img.map(image=><Gallery key={image._id} image={image}></Gallery>)}
             </div>
        </div>
    );
};

export default Gallarys;