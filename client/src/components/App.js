import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Admin from "./Admin";
import Order from "./Order";
import Checkout from "./Checkout";
import OrderFood from "./OrderFood";
import OrderHeader from "./OrderHeader"
import About from "./About";
import Edit from "./Edit";

function App() {
  const [customers, setCustomers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [cart, addToCart] = useState([]);
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [userToEdit, setUserToEdit] = useState([]);
  const [patchFormData, setPatchFormData] = useState([]);
  const [fetchResult, setFetchResult] = useState(false);
  const [postResult, setPostResult] = useState(false);
  const [patchResult, setPatchResult] = useState(false);
  const [orders, setOrders] = useState([])
  const [loginFormData, setLoginFormData] = useState({
    password: "",
    username: ""
    });
  const [newCart, setNewCart] = useState({
      customer_id: 0,
      food_id: 0,
      quantity: 0,
    });

  
  useEffect(() => {
    fetch('/customers')
    .then((resp) => resp.json())
    .then((data) => {
      setCustomers(data)
    })
  }, [])

// Keep user logged in
  useEffect(() => {
    fetch("/check_session")
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => setUser(data))
      }
    })
  }, []);

  useEffect(() => {
    fetch('/orders')
    .then((resp) => resp.json())
    .then((data) => {
      setOrders(data)
    })
  }, [])

  const newOrder = (newCart) => {
    fetch('/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCart)
    })
    .then((resp) => {
      if(resp.ok){
        resp.json()
    .then((data) => {
      setOrders([...orders, data])
    }).then(console.log(orders))
  }else{
    alert("Error: Could not save cart")
  }
  })
  }
  

//Login for existing user
  const handleLogin = (loginFormData) => {
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
          setFetchResult(true)
        })
      }
      else if(resp.status === 401){
        alert("Error: Invalid Username")
        setFetchResult(false)
      }
    })
  }
//add a new customer from Signup page
const addCustomer = (formData) => {
  console.log(formData)
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

const editId = (customerId) => {
  fetch(`/customers/${customerId}`)
  .then((resp) => resp.json())
  .then((data) => setUserToEdit(data))
}

const handleDelete = (editForm) => {
  console.log(editForm)
  fetch(`customers/${editForm.id}`, {
    method: "DELETE"
  })
  .then((resp) => {
    if(resp.ok){
      alert("Customer Deleted")
      setPatchResult(true)
    } else{
      alert("Error: Unable to delete customer")
      setPatchResult(false)
    }
  })
}

const updateCustomer = (editForm) => {
  fetch(`customers/${editForm.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editForm)
  })
  .then((resp) => {
    if(resp.ok) {
      resp.json().then((data) => setCustomers(customers.map(customer => {
        if (customer.id === data.id) {
          return data
        }
        else {
          return customer
        }
      })))
      setPatchResult(true)
    } else {
      setPatchResult(false)
      alert("Error: Unable to update customer")
      
    }
  })
}

const handleSearch = (searchQuery) => {
  const search = customers.filter((customer) => customer.username.toLowerCase().includes(searchQuery.toLowerCase()));
  setSearchResult(search);
}



    const routes = [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login handleLogin={handleLogin} fetchResult={fetchResult} setLoginFormData={setLoginFormData} loginFormData={loginFormData}/>,
      },
      {
        path: "/signup",
        element: <Signup addCustomer={addCustomer} fetchResult={postResult}/>,
      },
      {
        path: "/admin",
        element: <Admin handleSearch={handleSearch} searchResult={searchResult} editId={editId}/>,
      },
      {
        path: "/order",
        element: <>
        <Order />
        <OrderHeader />
        <OrderFood user={user} cartItems={cartItems} setCartItems={setCartItems}/>
        </>, 
      },
      {
        path: "/checkout",
        element: <>
        <Checkout cart={cart} user={user} cartItems={cartItems} setCartItems= {setCartItems} newCart={newCart} setNewCart={setNewCart} newOrder={newOrder}/>
        </>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/edit",
        element: <Edit userToEdit={userToEdit} handleDelete={handleDelete} updateCustomer={updateCustomer} fetchResult={patchResult}/>
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
