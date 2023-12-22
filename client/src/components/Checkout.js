import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import "./Checkout.css";

const Checkout = ({ user, cartItems, setCartItems }) => {
  
  const [orders, setOrders] = useState([])
  const [newCart, setNewCart] = useState({
    customer_id: 0,
    food_id: 0,
    quantity: 0,
  });

  useEffect(() => {
    fetch('/orders')
    .then((resp) => resp.json())
    .then((data) => {
      setOrders(data)
    })
  }, [])

  const newOrder = (orderCart) => {
    console.log(orderCart)
    fetch('/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderCart)
    })
    .then((resp) => resp.json())
    .then((data) => {
      setOrders([...orders, data])
    })
  }
 
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
    console.log(user.id)
    const food = cartItems[0]
    setNewCart({...newCart, customer_id: user.id})
    setNewCart({...newCart, food_id: food.id})
    setNewCart({...newCart, quantity: cartItems.map((food) => food.quantity)})
    newOrder(newCart)
    console.log(newCart)
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
