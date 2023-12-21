import React from 'react';
import "./Order.css";
import "./OrderFood.css";
import "./OrderFood";
import { useNavigate } from 'react-router-dom';

const OrderHeader = () => {

    let navigate = useNavigate()
    const routeChange = () => {
        let path = '/checkout'
        navigate(path)
    }
    
    return (
        <div>
            <div className="d">
                <h1 className="header"> Welcome TO FlatIron Eats</h1>
                   <button className= "button"
                   onClick={routeChange}> 
                    Checkout
                    </button> 
                </div>
            </div>
        );
}
            


export default OrderHeader;