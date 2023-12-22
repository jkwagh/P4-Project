import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Order.css'




const OrderFood = ({cartItems, setCartItems}) => {

    const [foods, setFoods] = useState([]);
    
    
  
    console.log(cartItems)


    
    useEffect(() => {
        fetch("http://localhost:5555/foods")
        .then((res) => res.json())
        .then((data) => setFoods(data));
    }, []);
    const filteredFoods = foods.filter((foods) => 
        foods.type
        )
    
    
    return (
        <div>
            
            <div className="food-container">
            {filteredFoods.map((foods) => (
                <div
            style={{backgroundImage: `url(${foods.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
            className='foods'
            >
                <h3>{foods.name}</h3>
                <p>{foods.price}</p>
                <p>{foods.restaurant_name}</p>
                <button className="bttn"
                onClick={() => {
                    alert(`${foods.name} added to cart!`);
                setCartItems([...cartItems, foods]);
            }}
            >
                Add to basket
            </button>
            
            </div>
            
            ))}
                
            </div>
            
        </div>
    )
}


export default OrderFood;