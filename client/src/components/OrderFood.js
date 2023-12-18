import React, { useEffect, useState } from "react";
import './Order.css'
import './OrderFood.css'


const OrderFood = ({toshow}) => {

    const [foods, setFoods] = useState([]);
    const [cart, addToCart] = useState([]);

    
    useEffect(() => {
        fetch("http://localhost:5555/foods")
        .then((res) => res.json())
        .then((data) => setFoods(data));
    }, []);
    const filteredFoods = foods.filter((foods) => 
        foods.type.toLowerCase()
        )
    
    
    return (
        <div>
            {toshow ? (
            <div className=" cart-cont">
              <div className="cart-list">
                <h1>Cart</h1>
                {/* cart items */}
                {cart && cart.map((foods, index) => {
                  return (
                    <div
                      style={{ backgroundImage: `url(${foods.img})` }}
                      className="cart"
                      key={index}
                    >
                      <h3>{foods.name}</h3>
                      <p>{foods.price}$</p>
                      <button onClick={(e)=>{
                        // remove item from cart
                        cart.splice(index, 1);
                        let x = cart;
                        addToCart([...x]);
                    }} >Remove Item</button>
                    </div>
                  );
                })}
              </div>
              <div className="total">
                <h1>Total</h1>
                <p>{cart.reduce((a, b) => a + b.price, 0)}$</p>
                <button>Check out</button>
              </div>
            </div>
          ) : null}

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
                console.log(cart);
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