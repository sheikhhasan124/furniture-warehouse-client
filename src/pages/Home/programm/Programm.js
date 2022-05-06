import React from 'react';
import './Programm.css'
import programm from '../../../images/progamm.jpg'
const Programm = () => {
    return (
        <div className='programm-service'>
            <p className='text-center mt-4'><span className='service-head-part1'>PROGRAMM</span> <span className='service-head-part2'> & SERVICE</span></p>
            <div className="programm-container">
                     {/* <img src={programm} alt="" /> */}
                <div className="programm-items">
                    <div className="programm-item">
                         <p>icon</p>
                         <h5>Visualizer App</h5>
                         <p>Easy-to-use tool let’s you see how the furniture pieces will fit.</p>
                         <button>Read More</button>
                    </div>
                    <div className="programm-item">
                         <p>icon</p>
                         <h5>Platinum Delivery Service</h5>
                         <p>Easy-to-use tool let’s you see how the furniture pieces will fit.</p>
                         <button>Read More</button>
                    </div>
                    <div className="programm-item">
                         <p>icon</p>
                         <h5>Furniture Financing</h5>
                         <p>Easy-to-use tool let’s you see how the furniture pieces will fit.</p>
                         <button>Read More</button>
                    </div>
                    <div className="programm-item">
                         <p>icon</p>
                         <h5>Visualizer App</h5>
                         <p>Easy-to-use tool let’s you see how the furniture pieces will fit.</p>
                         <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programm;