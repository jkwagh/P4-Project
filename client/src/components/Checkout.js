import React, { useState } from 'react';
import NavBar from './NavBar';









const Checkout = () => {
    const [cart, addToCart] = useState([]);
    

    

    return (
        <div>
            <NavBar />
            <h1>Checkout</h1>
            
            
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
                <button className = "Checkout-btn"
                  >
                    Check out
                    </button>
              </div>
            </div>
            
        </div>

)
    console.log(cart) 

            }


export default Checkout;