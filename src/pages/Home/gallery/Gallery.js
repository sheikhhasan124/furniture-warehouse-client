import React from 'react';
import './Gallary.css'

const Gallery = ({image}) => {
    return (
        <div className='gallary'>
            <img src={image.img} alt="" />
        </div>
    );
};

export default Gallery;