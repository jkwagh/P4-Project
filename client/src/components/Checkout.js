import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import "./Checkout.css";

const Checkout = ({ user, cartItems, setCartItems, newCart, setNewCart, newOrder }) => {
  
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

  const placeOrder = () => {
    const food = cartItems[0];
    const foodQuantity = cartItems.length;
    setNewCart(prevCart => ({...prevCart, customer_id: user.id, food_id: food.id, quantity: foodQuantity}));
    newOrder(newCart);
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
          onClick={placeOrder}
          >Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
