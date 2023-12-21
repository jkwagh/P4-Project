import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import "./Checkout.css";

const Checkout = ({cartItems, setCartItems, newOrder, newOrders, setNewOrders}) => {
  
  const totalPrice = cartItems.reduce((total, food) => total + food.price, 0);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    // Load cart from localStorage on component mount
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCartItems(savedCart);
    }
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
    alert('Cart cleared!');
  }

  return (
    <div>
      <NavBar />
      <h1>Checkout</h1>

      <div className="cart-cont">
        <div className="cart-list">
          <h1>Cart</h1>
          {cartItems.map((food, index) => (
            <div className="food-cart" key={index}
            style={{backgroundImage: `url(${food.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
            >
              
              <h3>{food.name}</h3>
              <p>{food.price}$</p>
              <button onClick={() => removeFromCart(index)}>Remove Item</button>
            </div>
          ))}
        </div>
        <div className="total">
          <h1>Total</h1>
          <p>{cartItems.reduce((a, b) => a + b.price, 0)}$</p>
          <button className="Checkout-btn"
          onClick={() => { console.log(cartItems)
            clearCart();
            setNewOrders(cartItems);
            alert(`Your Order is being processed and will arrive shortly`)
          }}
          >Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
