import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Order.css'




const OrderFood = () => {

    const [foods, setFoods] = useState([]);
    const [cart, addToCart] = useState([]);
    
    console.log(cart);

    let navigate = useNavigate();
    // const routeChange = () => {
    //   let path = `/Checkout`;
    //   navigate(path);
    // }

    
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
            

                {/* {cart && cart.map((item, index) => {
                return (
                    <div
                    style={{ backgroundImage: `url(${item.image})` }}
                    className="cart"
                    key={index}
                    >
                    <h3>{item.name}</h3>
                    <p>{item.amount}$</p>
                    
                    </div>
                );
                })} */}
            <div className="food-container">
            {filteredFoods.map((foods) => (
                 <div
            style={{backgroundImage: `url(${foods.img})`}}
               className='foods'
            >
                <h3>{foods.name}</h3>
                <p>{foods.price}</p>
                <p>{foods.restaurant_name}</p>
                <button className="btn"
                onClick={() => {
                    alert(`${foods.name} added to cart!`);
                addToCart([...cart, foods]);
                
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