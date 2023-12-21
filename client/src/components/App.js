import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Admin from "./Admin";
import Order from "./Order";
import Checkout from "./Checkout";
import OrderFood from "./OrderFood";
import OrderHeader from "./OrderHeader"
import About from "./About";


function App() {
  const [customers, setCustomers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [cart, addToCart] = useState([]);
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('/customers')
    .then((resp) => resp.json())
    .then((data) => {
      setCustomers(data)
    })
  }, [])

//Keep user logged in
  useEffect(() => {
    fetch("/check_session")
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => setUser(data))
      }
    })
  }, []);

//Route user based on LoggedIn status
  const login = () => {
    setLoggedIn(true);
  }
  const logout = () => {
    setLoggedIn(false);
  }
  useEffect(() => {
    if (loggedIn) {
      routeChange;
    } 
  })

//Login for existing user
  const handleLogin = (loginFormData) => {
    console.log(loginFormData)
    fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginFormData)
    })
    .then(resp=> {
      if(resp.ok){
        resp.json().then(data => {
          setUser(data)
        })
      }
      else if(resp.status === 401){
        alert("Error: Invalid Username")
      }
    })
  }
//add a new customer from Signup page
const addCustomer = (formData) => {
  fetch('/customers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then((resp) => resp.json())
  .then((data) => setCustomers([...customers, data]))
  }
    const routes = [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login loggedIn={loggedIn} onLogin={handleLogin}/>,
      },
      {
        path: "/signup",
        element: <Signup addCustomer={addCustomer}/>,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/order",
        element: <>
        <Order />
        <OrderHeader />
        <OrderFood cartItems={cartItems} setCartItems={setCartItems}/>
        </>, 
      },
      {
        path: "/checkout",
        element: <>
        <Checkout cartItems={cartItems} setCartItems= {setCartItems} />
    
        </>
      },
      {
        path: "/about",
        element: <About/>
      }
    ]

const router = createBrowserRouter(
  routes
)
return (
  <div className='App'>
    <RouterProvider router={router}/>
  </div>
)
}

export default App;
