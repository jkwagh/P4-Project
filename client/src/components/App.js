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
import Edit from "./Edit"

function App() {
  const [customers, setCustomers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [cart, addToCart] = useState([]);
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [userToEdit, setUserToEdit] = useState([]);

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
  // const login = () => {
  //   setLoggedIn(true);
  // }
  // const logout = () => {
  //   setLoggedIn(false);
  // }
  // useEffect(() => {
  //   if (loggedIn) {
  //     routeChange();
  //   } 
  // })

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
          console.log(data)
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

const editId = (customerId) => {
  console.log(customerId)
  fetch(`/customers/${customerId}`)
  .then((resp) => resp.json())
  .then((data) => setUserToEdit(data))
}

const handleDelete = (id) => {
  console.log(id.id)
  fetch(`customers/${id.id}`, {
    method: "DELETE"
  })
  .then((resp) => {
    if(resp.ok){
      alert("Customer Deleted")
    } else{
      alert("Error: Unable to delete customer")
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
        element: <Login handleLogin={handleLogin}/>,
      },
      {
        path: "/signup",
        element: <Signup addCustomer={addCustomer}/>,
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
      },
      {
        path: "/edit",
        element: <Edit userToEdit={userToEdit} handleDelete={handleDelete}/>
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
