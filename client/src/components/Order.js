import React, { useState, useEffect } from 'react'
import NavBar from './NavBar';
import "./Order.css";
import OrderHeader from './OrderHeader';
import OrderFood from './OrderFood';




const Order = () => {

    
    const [show, setShow] = useState(false);
    const [cart, addToCart] = useState([]);
    
    const getDta = (a) => {
            setShow(a);
        }
     return ( 
        <div>
            <NavBar />
            
            
            <OrderHeader showing={getDta} />
            <OrderFood toshow={show}/>
        </div>
        
    
)
        


    }

export default Order;